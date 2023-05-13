import React, { useRef, useEffect } from "react";
import p5 from "p5";

const P5Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let p5Instance; // Declare the p5 instance variable

    // Create the p5 sketch inside the canvas element
    p5Instance = new p5(sketch, canvasRef.current);

    // Clean up the p5 instance when the component is unmounted
    return () => {
      p5Instance.remove();
    };
  }, []);

  const sketch = (p) => {
    let particles = [];
    const num = 500;

    const noiseScale = 0.01 / 2;

    p.setup = () => {
      // Set up the canvas
      p.createCanvas(window.innerWidth, window.innerHeight);

      for (let i = 0; i < num; i++) {
        particles.push(p.createVector(p.random(p.width), p.random(p.height)));
      }

      p.stroke(13, 174, 126);
      p.clear();
    };

    p.draw = () => {
      p.background(0, 10);
      for (let i = 0; i < num; i++) {
        let particle = particles[i];
        p.point(particle.x, particle.y);
        let n = p.noise(
          particle.x * noiseScale,
          particle.y * noiseScale,
          p.frameCount * noiseScale * noiseScale
        );
        let a = p.TWO_PI * n;
        particle.x += p.cos(a);
        particle.y += p.sin(a);
        if (!onScreen(particle)) {
          particle.x = p.random(p.width);
          particle.y = p.random(p.height);
        }
      }
    };

    p.mouseReleased = () => {
      p.noiseSeed(p.millis());
    };

    const onScreen = (v) => {
      return v.x >= 0 && v.x <= p.width && v.y >= 0 && v.y <= p.height;
    };
  };

  return <div className="particle" ref={canvasRef}></div>;
};

export default P5Background;
