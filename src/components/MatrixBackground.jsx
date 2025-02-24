import React, { useEffect } from 'react';
import '../styles/MatrixBackground.css';

const MatrixBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';
    const columns = Math.floor(canvas.width / 20); // Divide canvas into columns
    const drops = Array(columns).fill(1); // Track the position of each drop

    // Draw function
    const draw = () => {
      // Semi-transparent background to create the trailing effect
      ctx.fillStyle = 'rgba(2, 51, 54, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.fillStyle = '#4DA674'; // Green color for the text
      ctx.font = '15px monospace';

      // Draw each character
      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset drop if it reaches the bottom
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move the drop down
        drops[i]++;
      }
    };

    // Start the animation
    const interval = setInterval(draw, 50);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrix-canvas" className="matrix-canvas"></canvas>;
};

export default MatrixBackground;