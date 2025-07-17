
import React from 'react';
import GridCell from './GridCell';
import { LetterPattern } from '../types';

interface CharacterGridProps {
  gridData: LetterPattern;
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ gridData }) => {
  if (!gridData || gridData.length === 0) {
    return null;
  }

  return (
    <div className="bg-black p-3 md:p-4 rounded-lg shadow-2xl inline-block border-2 border-gray-700 transform hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col gap-1.5">
        {gridData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row gap-1.5">
            {row.map((isFilled, colIndex) => (
              <GridCell key={`${rowIndex}-${colIndex}`} isFilled={isFilled} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
