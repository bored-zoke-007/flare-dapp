"use client";

import { memo, useEffect, useRef } from "react";

interface MousePosition {
  x: number | null;
  y: number | null;
}

const AnimatedCanvas: React.FC = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse: MousePosition = { x: null, y: null };
  const circles: Circle[] = [];

  const windowInnerWidth = window ? window.innerWidth : 0;

  const maxRadius = windowInnerWidth / 3;
  const circleCount = Math.floor(windowInnerWidth / 6);

  const Color = {
    vector: ["#c6a0cf", "#feb1d5", "#ff9767", "#99c4f1", "#feb1d5", "#99c4f1"],
    getRandom: () =>
      Color.vector[Math.floor(Math.random() * Color.vector.length)],
  };

  class Circle {
    r: number;

    constructor(
      public ctx: CanvasRenderingContext2D,
      public r_min = randomNumber(maxRadius * 0.9, 20),
      public x = randomNumber(window.innerWidth, r_min),
      public y = randomNumber(window.innerHeight, r_min),
      public dx = randomNumber(2, -4, [0]),
      public dy = randomNumber(2, -2, [0]),
      public color = Color.getRandom()
    ) {
      this.ctx = ctx;
      this.r_min = r_min;
      this.r = r_min;
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.color = color;
      this.draw();
    }

    side() {
      return {
        right: this.x + this.r,
        left: this.x - this.r,
        bottom: this.y + this.r,
        top: this.y - this.r,
      };
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }

    run() {
      const canvas = this.ctx.canvas;

      if (this.side().right > canvas.width || this.side().left < 0)
        this.dx *= -1;
      if (this.side().bottom > canvas.height || this.side().top < 0)
        this.dy *= -1;

      if (
        mouse.x !== null &&
        mouse.y !== null &&
        Math.abs(this.x - mouse.x) < 50 &&
        Math.abs(this.y - mouse.y) < 50 &&
        this.r < maxRadius
      ) {
        this.r += 3;
      } else if (this.r > this.r_min) {
        this.r -= 1;
      }

      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }
  }

  const resetCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  };

  const randomNumber = (max = 1, min = 0, forbidden: number[] = []): number => {
    let res;
    do {
      res = Math.floor(min + Math.random() * (max - min));
    } while (forbidden.includes(res));
    return res;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const init = () => {
      resetCanvas(ctx);
      for (let i = 0; i < circleCount; i++) {
        circles.push(new Circle(ctx));
      }
      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.forEach((circle) => circle.run());
      requestAnimationFrame(animate);
    };

    const handleResize = () => resetCanvas(ctx);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    init();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="canvas fixed w-full h-full top-0 left-0 -z-[1]"
    />
  );
});

export default AnimatedCanvas;
