
import React, { useMemo, useState } from 'react';
import CharacterGrid from './components/CharacterGrid';
import { GRID_ROWS, GRID_COLS, LETTER_MAP } from './constants';
import { LetterPattern } from './types';

const generateGridData = (text: string): LetterPattern => {
  const grid: LetterPattern = Array(GRID_ROWS).fill(null).map(() => Array(GRID_COLS).fill(false));
  let currentColumn = 1; // Start with 1-column padding for centering

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toUpperCase();

    if (char === ' ') {
      currentColumn += 2; // Create a wider gap between words
      continue;
    }

    const pattern = LETTER_MAP[char];
    if (!pattern) continue;

    const pRows = pattern.length;
    const pCols = pattern[0].length;

    // Copy the character pattern onto the main grid
    for (let r = 0; r < pRows; r++) {
      for (let c = 0; c < pCols; c++) {
        if (grid[r] && grid[r][currentColumn + c] !== undefined) {
          grid[r][currentColumn + c] = pattern[r][c];
        }
      }
    }

    currentColumn += pCols;

    // Add 1-column spacing after the letter, but not at the end of the text
    if (i < text.length - 1) {
      currentColumn += 1;
    }
  }

  return grid;
};


const App: React.FC = () => {
  const [text, setText] = useState('ONE PIECE');
  const onePieceGrid = useMemo(() => generateGridData(text), [text]);

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
       <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-yellow-400 tracking-wider">ONE PIECE</h1>
        <p className="text-gray-400 mt-2">Digital Panel Display - 7x52</p>
      </div>
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-gray-800 text-white border-2 border-gray-700 rounded-lg p-2 mb-8 w-80 text-center"
        placeholder="Enter text to display"
      />

      <CharacterGrid gridData={onePieceGrid} />
      
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Crafted with React & Tailwind CSS.</p>
        <p>Recreating the legendary name in a digital format.</p>
      </footer>
    </div>
  );
};

export default App;
