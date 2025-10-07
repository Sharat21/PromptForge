export default function typeWriter(text, setOutput, speed = 20) {
    let i = 0;
    setOutput("");
    const interval = setInterval(() => {
      setOutput(prev => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
  }
  