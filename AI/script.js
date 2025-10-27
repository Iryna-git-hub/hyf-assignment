function getRandomColor() {
      // pastel random color
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 70%, 85%)`;
    }
    document.getElementById('color-btn').onclick = function() {
      document.body.style.background = getRandomColor();
    };