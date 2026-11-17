import React, { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  z: number;
  connections: number[];
}

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = 0;

    // Track visibility to save CPU when scrolled past
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(canvas);

    // Initial 3D nodes representing technical architecture
    const nodes: Node[] = [
      { id: 'fe-vue', label: 'Vue.js 3', x: -80, y: -60, z: 20, connections: [1, 2, 4] },
      { id: 'fe-react', label: 'React 19', x: 80, y: -70, z: -10, connections: [0, 2, 3] },
      { id: 'fe-ts', label: 'TypeScript', x: 0, y: -20, z: 50, connections: [0, 1, 3, 5] },
      { id: 'ai-qwen', label: 'LLM Qwen2.5', x: -90, y: 50, z: -30, connections: [1, 2, 6] },
      { id: 'ai-yolo', label: 'YOLO CBCT', x: 90, y: 40, z: 40, connections: [0, 2, 5] },
      { id: 'be-api', label: 'FastAPI Micro', x: 30, y: 90, z: -20, connections: [2, 4, 6] },
      { id: 'sys-core', label: 'Kernel / DOM', x: -40, y: 80, z: 10, connections: [3, 5] },
    ];

    let rotX = 0.2;
    let rotY = 0.3;
    let targetRotX = 0.2;
    let targetRotY = 0.3;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMousePos({ x: Math.round(e.clientX - rect.left), y: Math.round(e.clientY - rect.top) });
      targetRotY = x * 0.75;
      targetRotX = -y * 0.75;
    };

    const handlePointerLeave = () => {
      targetRotX = 0.15;
      targetRotY = 0.25;
      setActiveNode(null);
    };

    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('mouseleave', handlePointerLeave);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const delta = time - lastTime;
      lastTime = time;
      frameCount++;
      fpsTimer += delta;
      if (fpsTimer >= 1000) {
        setFps(Math.round((frameCount * 1000) / fpsTimer));
        frameCount = 0;
        fpsTimer = 0;
      }

      // Smooth damping interpolation
      if (!shouldReduceMotion) {
        rotX += (targetRotX - rotX) * 0.06;
        rotY += (targetRotY - rotY) * 0.06;
      }

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Draw technical grid plane
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Calculate projected 2D coordinates with 3D rotation matrix
      const projected = nodes.map((node) => {
        // Y rotation
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;

        // X rotation
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        // Perspective division
        const fov = 320;
        const scale = fov / (fov + z2 + 100);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;

        return { ...node, px, py, scale, zDepth: z2 };
      });

      // Draw connection lines
      ctx.lineWidth = 1.2;
      nodes.forEach((node, i) => {
        const p1 = projected[i];
        node.connections.forEach((connIdx) => {
          if (connIdx > i) {
            const p2 = projected[connIdx];
            const isHighlighted = activeNode === node.label || activeNode === nodes[connIdx].label;
            
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            
            if (isHighlighted) {
              ctx.strokeStyle = 'rgba(0, 212, 255, 0.7)';
              ctx.lineWidth = 1.8;
            } else {
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
              ctx.lineWidth = 1;
            }
            ctx.stroke();

            // Pulsing data packet along the wire
            const pulseT = ((time * 0.001 + i * 0.3) % 1);
            const pulseX = p1.px + (p2.px - p1.px) * pulseT;
            const pulseY = p1.py + (p2.py - p1.py) * pulseT;
            ctx.fillStyle = isHighlighted ? '#00e5ff' : 'rgba(56, 189, 248, 0.6)';
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      // Draw node points and typography labels
      projected.sort((a, b) => b.zDepth - a.zDepth);
      projected.forEach((p) => {
        const radius = Math.max(3, 5 * p.scale);
        const isHovered = activeNode === p.label;

        // Outer glow on hover
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 212, 255, 0.2)';
          ctx.fill();
        }

        // Main node circle
        ctx.beginPath();
        ctx.arc(p.px, p.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#38bdf8' : '#ffffff';
        ctx.fill();
        ctx.strokeStyle = '#0a0d14';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Monospace technical label
        ctx.font = '500 11px "JetBrains Mono", monospace';
        ctx.fillStyle = isHovered ? '#38bdf8' : 'rgba(255, 255, 255, 0.75)';
        ctx.fillText(p.label, p.px + radius + 6, p.py + 4);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [shouldReduceMotion, activeNode]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl bg-[#0d1017]/90 border border-neutral-800/80 overflow-hidden shadow-2xl flex flex-col justify-between"
    >
      {/* Corner crosshairs */}
      <span className="absolute top-2.5 left-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none">+</span>
      <span className="absolute top-2.5 right-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none">+</span>
      <span className="absolute bottom-2.5 left-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none">+</span>
      <span className="absolute bottom-2.5 right-2.5 text-neutral-600 font-mono text-xs select-none pointer-events-none">+</span>

      {/* Top HUD Telemetry Bar */}
      <div className="relative z-10 px-4 py-2.5 border-b border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400 bg-neutral-950/40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-neutral-300 font-semibold">CRAFT_ENGINE.SYS</span>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="text-cyan-400/90 hidden sm:inline">INTERACTIVE 3D TOPOLOGY</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="tabular-nums text-neutral-400">{fps} FPS</span>
          <span className="text-neutral-600">•</span>
          <span className="text-xs text-neutral-500 font-mono">UTC+7</span>
        </div>
      </div>

      {/* Interactive 3D Canvas */}
      <div className="relative flex-1 w-full h-full">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-crosshair block"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Bottom HUD Coordinate Status */}
      <div className="relative z-10 px-4 py-2 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-500 bg-neutral-950/40 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span>PTR: [{mousePos.x}, {mousePos.y}]</span>
          <span>ITS: 7.2797° S, 112.7975° E</span>
        </div>
        <span className="text-neutral-400">POINTER DAMPED SPRING PHYSICS</span>
      </div>
    </div>
  );
};
