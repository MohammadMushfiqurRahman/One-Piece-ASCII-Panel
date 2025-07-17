# ONE PIECE ASCII Panel

This is a web application that displays the words "ONE PIECE" on a 7x52 digital panel, recreating a classic dot-matrix display aesthetic with a modern, glowing look.

## Features

- **Digital Dot-Matrix Display**: Displays the text "ONE PIECE" on a 7x52 grid.
- **Glowing Aesthetic**: Lit cells have a yellow glow effect, mimicking real LED panels.
- **Responsive Design**: The panel scales gracefully on different screen sizes.
- **Modern Tech Stack**: Built with React, TypeScript, and styled with Tailwind CSS for a clean and maintainable codebase.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## File Structure

The project is organized into several key files and directories:

```
.
├── index.html                # The main HTML entry point
├── index.tsx                 # React application root
├── App.tsx                   # Main application component, orchestrates the UI
├── metadata.json             # Project metadata
├── README.md                 # This file
├── components/
│   ├── CharacterGrid.tsx     # Renders the full 7x52 grid
│   └── GridCell.tsx          # Renders a single "dot" or cell in the grid
├── constants.ts              # Defines the grid dimensions and letter patterns
└── types.ts                  # Contains TypeScript type definitions
```

This application serves as a visual tribute to the legendary series "ONE PIECE," rendered in a nostalgic yet modern digital format.
