import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let lines = [];
    const trails = 20;
    const size = 50;
    const friction = 0.5;
    const dampening = 0.25;
    const tension = 0.98;

    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
      }
    }

    class Line {
      constructor(spring) {
        this.spring = spring + 0.1 * Math.random() - 0.02;
        this.friction = friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];
        for (let i = 0; i < size; i++) {
          this.nodes.push(new Node(pos.x, pos.y));
        }
      }

      update() {
        let e = this.spring;
        let t = this.nodes[0];

        t.vx += (pos.x - t.x) * e;
        t.vy += (pos.y - t.y) * e;

        for (let i = 0; i < this.nodes.length; i++) {
          t = this.nodes[i];
          if (i > 0) {
            const n = this.nodes[i - 1];
            t.vx += (n.x - t.x) * e;
            t.vy += (n.y - t.y) * e;
            t.vx += n.vx * dampening;
            t.vy += n.vy * dampening;
          }
          t.vx *= this.friction;
          t.vy *= this.friction;
          t.x += t.vx;
          t.y += t.vy;
          e *= tension;
        }
      }

      draw(ctx) {
        let e = this.nodes[0];
        ctx.beginPath();
        ctx.moveTo(e.x, e.y);
        for (let i = 1; i < this.nodes.length - 1; i++) {
          const n1 = this.nodes[i];
          const n2 = this.nodes[i + 1];
          const cx = (n1.x + n2.x) / 2;
          const cy = (n1.y + n2.y) / 2;
          ctx.quadraticCurveTo(n1.x, n1.y, cx, cy);
        }
        const last = this.nodes[this.nodes.length - 1];
        const secondLast = this.nodes[this.nodes.length - 2];
        ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
        ctx.stroke();
        ctx.closePath();
      }
    }

    function createLines() {
      lines = [];
      for (let i = 0; i < trails; i++) {
        lines.push(new Line(0.4 + (i / trails) * 0.025));
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function updatePosition(e) {
      pos.x = e.clientX || (e.touches && e.touches[0].pageX);
      pos.y = e.clientY || (e.touches && e.touches[0].pageY);
    }

    function render() {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      // Color based on sine wave for dynamic hue
      const hue = (Date.now() / 20) % 360;
      ctx.strokeStyle = `hsla(${hue}, 70%, 50%, 0.2)`;
      ctx.lineWidth = 1;

      lines.forEach((line) => {
        line.update();
        line.draw(ctx);
      });

      requestAnimationFrame(render);
    }

    createLines();
    render();
    resizeCanvas();

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("touchmove", updatePosition);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("touchmove", updatePosition);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
