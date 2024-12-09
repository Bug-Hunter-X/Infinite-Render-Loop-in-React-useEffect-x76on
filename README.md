# React useEffect Infinite Render Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug causes an infinite render loop due to a missing dependency array in the `useEffect` call.  This leads to excessive API calls and can crash the browser.

## Bug Description

The `UserDisplay` component fetches user data using `fetch` within a `useEffect` hook.  However, the dependency array is omitted, causing the effect to run after every render, triggering repeated API calls.  This creates an infinite loop because updating `userData` triggers a re-render, which in turn triggers the effect again.

## Solution

The solution involves adding an empty dependency array `[]` to the `useEffect` hook.  This ensures the effect only runs once after the initial render.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`. 
4. Observe the excessive API calls in your browser's developer tools (Network tab).

## License

MIT