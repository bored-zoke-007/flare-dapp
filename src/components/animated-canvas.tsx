"use client";

import { memo, useEffect, useRef, useCallback } from "react";

// Types
interface MousePosition {
  x: number | null;
  y: number | null;
}

interface ColorScheme {
  readonly vector: readonly string[];
  getRandom: () => string;
}

interface CircleConfig {
  minRadius: number;
  maxRadius: number;
  mouseInteractionRadius: number;
  growthRate: number;
  shrinkRate: number;
  speedRange: {
    min: number;
    max: number;
  };
}

// Constants
const DEFAULT_COLOR_SCHEME: ColorScheme = {
  vector: ["#c6a0cf", "#feb1d5", "#ff9767", "#99c4f1", "#feb1d5", "#99c4f1"],
  getRandom: function () {
    return this.vector[Math.floor(Math.random() * this.vector.length)];
  },
};

const DEFAULT_CIRCLE_CONFIG: CircleConfig = {
  minRadius: 20,
  maxRadius: 100, // Default value
  mouseInteractionRadius: 50,
  growthRate: 3,
  shrinkRate: 1,
  speedRange: {
    min: -4,
    max: 2,
  },
};

// Utility functions
const randomNumber = (max = 1, min = 0, forbidden: number[] = []): number => {
  if (max < min) [max, min] = [min, max];
  let res;
  do {
    res = Math.floor(min + Math.random() * (max - min));
  } while (forbidden.includes(res));
  return res;
};

const getWindowDimensions = () => ({
  width: typeof window !== "undefined" ? window.innerWidth : 0,
  height: typeof window !== "undefined" ? window.innerHeight : 0,
});

class Circle {
  private r: number;
  private readonly config: CircleConfig;
  private x: number;
  private y: number;
  private dx: number;
  private dy: number;
  private readonly color: string;
  private ctx: CanvasRenderingContext2D;

  constructor(
    ctx: CanvasRenderingContext2D,
    customConfig: Partial<CircleConfig> = {},
    colorScheme: ColorScheme = DEFAULT_COLOR_SCHEME
  ) {
    this.ctx = ctx;
    const windowDimensions = getWindowDimensions();

    this.config = {
      ...DEFAULT_CIRCLE_CONFIG,
      maxRadius: windowDimensions.width / 6, // Ensure it's properly set
      ...customConfig,
    };

    this.r = this.r_min;
    this.x = randomNumber(windowDimensions.width, this.r_min);
    this.y = randomNumber(windowDimensions.height, this.r_min);
    this.dx = randomNumber(
      this.config.speedRange.max,
      this.config.speedRange.min,
      [0]
    );
    this.dy = randomNumber(
      this.config.speedRange.max,
      this.config.speedRange.min,
      [0]
    );
    this.color = colorScheme.getRandom();

    this.draw();
  }

  private get r_min(): number {
    return randomNumber(this.config.maxRadius * 0.9, this.config.minRadius);
  }

  private get side() {
    return {
      right: this.x + this.r,
      left: this.x - this.r,
      bottom: this.y + this.r,
      top: this.y - this.r,
    };
  }

  private draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  public run(mouseX: number | null, mouseY: number | null): void {
    const canvas = this.ctx.canvas;
    if (!canvas) return;

    // Handle boundary collisions
    if (this.side.right > canvas.width || this.side.left < 0) this.dx *= -1;
    if (this.side.bottom > canvas.height || this.side.top < 0) this.dy *= -1;

    // Handle mouse interaction
    if (
      mouseX !== null &&
      mouseY !== null &&
      Math.abs(this.x - mouseX) < this.config.mouseInteractionRadius &&
      Math.abs(this.y - mouseY) < this.config.mouseInteractionRadius &&
      this.r < this.config.maxRadius
    ) {
      this.r += this.config.growthRate;
    } else if (this.r > this.r_min) {
      this.r -= this.config.shrinkRate;
    }

    // Update position
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

const AnimatedCanvas: React.FC = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const circlesRef = useRef<Circle[]>([]);
  const mouseRef = useRef<MousePosition>({ x: null, y: null });
  const animationFrameRef = useRef<number | undefined>(undefined);

  const resetCanvas = useCallback((ctx: CanvasRenderingContext2D) => {
    const { width, height } = getWindowDimensions();
    ctx.canvas.width = width;
    ctx.canvas.height = height;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas 2D context not available");
      return;
    }

    const init = () => {
      resetCanvas(ctx);
      circlesRef.current = Array.from(
        { length: Math.floor(getWindowDimensions().width / 10) }, // Dynamic count
        () => new Circle(ctx)
      );
      animate();
    };

    const animate = () => {
      if (!ctx) return; // Ensure context still exists

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circlesRef.current.forEach((circle) =>
        circle.run(mouseRef.current.x, mouseRef.current.y)
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resetCanvas(ctx);
      // Reinitialize circles on resize to keep things smooth
      circlesRef.current = Array.from(
        { length: Math.floor(getWindowDimensions().width / 10) },
        () => new Circle(ctx)
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    init();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [resetCanvas]);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="canvas fixed w-full h-full top-0 left-0 -z-[1] pointer-events-auto select-none"
      aria-label="Animated background with floating circles"
    />
  );
});

AnimatedCanvas.displayName = "AnimatedCanvas";

export default AnimatedCanvas;
