
import React from 'react';

interface GridCellProps {
  isFilled: boolean;
}

const GridCell: React.FC<GridCellProps> = ({ isFilled }) => {
  const cellColor = isFilled ? 'bg-yellow-400 shadow-[0_0_8px_theme(colors.yellow.400)]' : 'bg-gray-800';
  
  // Use a pseudo-element for a scanline effect
  const scanlineEffect = 'relative overflow-hidden before:absolute before:content-[\'\'] before:top-0 before:left-0 before:w-full before:h-1/2 before:bg-white/10';

  return (
    <div
      className={`w-3 h-3 md:w-4 md:h-4 rounded-sm transition-colors duration-200 ${cellColor} ${scanlineEffect}`}
    />
  );
};

export default GridCell;
