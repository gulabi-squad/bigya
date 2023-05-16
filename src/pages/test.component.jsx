import React, { useEffect, useState } from 'react';

function App() {
  const lines = [
    "Hire any experts you need",
    "Post your queries in forums",
    "Enroll in training"
  ];
  const [currentLine, setCurrentLine] = useState(0);
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    const typeText = () => {
      if (animatedText === lines[currentLine]) {
        setTimeout(() => {
          deleteText();
        }, 2000); // Delay before deleting text
        return;
      }

      const nextChar = lines[currentLine][animatedText.length];
      setAnimatedText(prevText => prevText + nextChar);

      setTimeout(typeText, 100); // Typing speed
    };

    const deleteText = () => {
      if (animatedText === '') {
        setCurrentLine(prevLine => (prevLine + 1) % lines.length);
        setTimeout(() => {
          typeText();
        }, 1000); // Delay before typing next line
        return;
      }

      setAnimatedText(prevText => prevText.slice(0, -1));

      setTimeout(deleteText, 50); // Deletion speed
    };

    typeText();
  }, [currentLine, animatedText]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to our Website!</h1>
      </header>

      <div className="flex justify-center items-center min-h-screen">
        <div className="text-container">
          <h1 className="animated-text text-4xl font-bold mb-8">{animatedText}</h1>
          {currentLine === 0 && <p className="animated-text text-xl mb-4">{lines[0]}</p>}
          {currentLine === 1 && <p className="animated-text text-xl mb-4">{lines[1]}</p>}
          {currentLine === 2 && <p className="animated-text text-xl mb-4">{lines[2]}</p>}
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
