import { useEffect, useRef } from "react";

export function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle/Crystal class
    class Crystal {
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      rotationSpeed: number;
      rotation: number;
      color: string;
      type: "octahedron" | "diamond" | "hexagon";

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 40 + 20;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.speedZ = Math.random() * 0.5 + 0.1;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.rotation = Math.random() * Math.PI * 2;
        
        const colors = ["#e879f9", "#818cf8", "#22d3ee", "#fb923c", "#fbbf24", "#a78bfa"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        const types: ("octahedron" | "diamond" | "hexagon")[] = ["octahedron", "diamond", "hexagon"];
        this.type = types[Math.floor(Math.random() * types.length)];
      }

      update(scrollY: number) {
        // Update position
        this.y += this.speedY + scrollY * 0.05;
        this.x += this.speedX;
        this.z -= this.speedZ;
        this.rotation += this.rotationSpeed;

        // Reset if out of bounds
        if (this.z < 1) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
        
        if (this.y > canvas.height + 100) {
          this.y = -100;
          this.x = Math.random() * canvas.width;
        } else if (this.y < -100) {
          this.y = canvas.height + 100;
          this.x = Math.random() * canvas.width;
        }

        if (this.x > canvas.width + 100) {
          this.x = -100;
        } else if (this.x < -100) {
          this.x = canvas.width + 100;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = 1000 / (1000 + this.z);
        const x = this.x * scale + canvas.width / 2 * (1 - scale);
        const y = this.y * scale + canvas.height / 2 * (1 - scale);
        const size = this.size * scale;
        const opacity = Math.max(0.2, 1 - this.z / 1000);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = opacity;

        // Draw different crystal shapes
        if (this.type === "octahedron") {
          this.drawOctahedron(ctx, size);
        } else if (this.type === "diamond") {
          this.drawDiamond(ctx, size);
        } else {
          this.drawHexagon(ctx, size);
        }

        ctx.restore();
      }

      drawOctahedron(ctx: CanvasRenderingContext2D, size: number) {
        // Draw octahedron as diamond shape with gradient
        const gradient = ctx.createLinearGradient(-size / 2, -size / 2, size / 2, size / 2);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, this.lightenColor(this.color, 40));

        ctx.fillStyle = gradient;
        ctx.strokeStyle = this.lightenColor(this.color, 60);
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(size / 3, 0);
        ctx.lineTo(0, size / 2);
        ctx.lineTo(-size / 3, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      drawDiamond(ctx: CanvasRenderingContext2D, size: number) {
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
        gradient.addColorStop(0, this.lightenColor(this.color, 60));
        gradient.addColorStop(1, this.color);

        ctx.fillStyle = gradient;
        ctx.strokeStyle = this.lightenColor(this.color, 80);
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(size / 4, -size / 6);
        ctx.lineTo(size / 3, size / 2);
        ctx.lineTo(0, size / 3);
        ctx.lineTo(-size / 3, size / 2);
        ctx.lineTo(-size / 4, -size / 6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      drawHexagon(ctx: CanvasRenderingContext2D, size: number) {
        const gradient = ctx.createLinearGradient(-size / 2, 0, size / 2, 0);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.lightenColor(this.color, 50));
        gradient.addColorStop(1, this.color);

        ctx.fillStyle = gradient;
        ctx.strokeStyle = this.lightenColor(this.color, 70);
        ctx.lineWidth = 2;

        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const x = (size / 2) * Math.cos(angle);
          const y = (size / 2) * Math.sin(angle);
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      lightenColor(color: string, percent: number): string {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, (num >> 16) + amt);
        const G = Math.min(255, ((num >> 8) & 0x00ff) + amt);
        const B = Math.min(255, (num & 0x0000ff) + amt);
        return `#${((R << 16) | (G << 8) | B).toString(16).padStart(6, "0")}`;
      }
    }

    // Create crystals
    const crystals: Crystal[] = [];
    for (let i = 0; i < 30; i++) {
      crystals.push(new Crystal());
    }

    let lastScrollY = 0;
    let scrollDelta = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDelta = (currentScrollY - lastScrollY) * 0.1;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw crystals
      crystals.forEach((crystal) => {
        crystal.update(scrollDelta);
        crystal.draw(ctx);
      });

      // Gradually reduce scroll delta
      scrollDelta *= 0.95;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
