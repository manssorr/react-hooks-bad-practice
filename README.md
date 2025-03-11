# React Hook Optimization Demo

This project demonstrates the impact of poorly implemented custom hooks on React render performance, comparing inefficient implementations with optimized ones.

## Motivation

React performance optimization is a critical skill for building responsive and efficient applications. This demo was created to visually demonstrate how different hook implementation strategies affect component render behavior.

The project showcases two parallel implementations:

1. **Bad Implementation**: Components that use hooks with anti-patterns causing unnecessary re-renders
2. **Good Implementation**: Components that use optimized hooks to minimize re-renders

## Key Concepts Demonstrated

- Selective state subscription with Zustand
- Memoization of derived values and callback functions
- Component render optimization
- State management best practices
- Hook composition and separation of concerns

## Features

- Real-time render counting for each component
- React Scan integration for detailed render analysis
- Interactive UI to trigger state changes
- Side-by-side comparison of optimized vs unoptimized implementations

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
# Clone the repository (if applicable)
# git clone <repository-url>

# Navigate to the project directory
cd "react-hooks-bad-practice"

# Install dependencies
npm install
# or
yarn install
```

### Running the Application

```bash
# Start the development server
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

## How to Use the Demo

1. **Log in** using the login form (default values are provided)
2. **Interact** with the components by clicking the buttons
3. **Observe** the render counters to see which components re-render unnecessarily
4. **Compare** the behavior between the "Bad" and "Good" implementations
5. **Use React Scan** (in browser devtools) for more detailed render analysis

## Project Structure

```
src/
├── components/         # UI components
│   ├── LoginForm.tsx   # User login form
│   ├── UserProfile.tsx # User profile display (good & bad versions)
│   └── UserType.tsx    # User type display (good & bad versions)
├── hooks/              # Custom React hooks
│   ├── useBadUserManager.ts   # Inefficient implementation
│   ├── useGoodUserManager.ts  # Optimized implementation
│   ├── useRenderCounter.ts    # Hook for counting renders
│   └── useUserType.ts         # User type hooks (good & bad versions)
├── lib/                # Utilities and store
│   └── store.ts        # Zustand store implementation
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## Implementation Details

### Bad Implementation Patterns

- Subscribing to the entire store instead of specific slices
- Creating new function references on every render
- Performing expensive computations without memoization
- Using random keys that force unnecessary re-renders

### Good Implementation Patterns

- Selective state subscription
- Memoizing derived values with `useMemo`
- Memoizing callback functions with `useCallback`
- Proper dependency arrays in hooks

## Technologies Used

- React
- TypeScript
- Zustand (for state management)
- React Scan (for render monitoring)
- Vite (for build tooling)

## Learning Resources

- [React Official Documentation](https://reactjs.org/docs/hooks-intro.html)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Performance Optimization](https://reactjs.org/docs/optimizing-performance.html)

## License

This project is available for educational purposes.
