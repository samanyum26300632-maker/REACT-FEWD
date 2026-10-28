// 1. What is State in React?
// State in React is a built-in mechanism used to store and manage data that can change over
//  time. When the state changes, React updates the component's output to reflect the 
// new value.

// For example, imagine you have a counter on a webpage. Initially, the counter displays 0.
//  When you click the Increase button, it changes to 1, then 2, and so on.

// React uses state to store the current counter value and update the screen when that
//  value changes.

// Other examples of state include:
// - A user's name entered in an input box.
// - The number of items in a shopping cart.
// - Whether a menu is open or closed.
// - Whether a user has selected dark mode.


// 2. Important Rules of State


// 1. Import useState before using it in your component.
// 2. Never directly modify state. Use its setter function instead.
// 3. State updates trigger re-renders when React processes an update.
// 4. State is local to a component unless you share or lift it to another component.
// 5. Hooks must be called at the top level of a React component or custom Hook, not inside 
// loops or conditions.