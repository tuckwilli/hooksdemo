[Hooks launch article](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)

# Hooks
- smaller change than appears
  - "Perhaps you’re wondering where React keeps the state for Hooks. The answer is it’s kept in the exact same place where React keeps state for classes. React has an internal update queue which is the source of truth for any state, no matter how you define your components."

## Context
- single interface to remember
  - "If the React community embraces the Hooks proposal, it will reduce the number of concepts you need to juggle when writing React applications."
- reduced boilerplate
- all hooks are functions that return things (safer assumptions)

## Custom Hooks
- "Custom Hooks are, in our opinion, the most appealing part of the Hooks proposal. But in order for custom Hooks to work, React needs to provide functions with a way to declare state and side effects."
- code organization (smaller pieces)
- component functionality abstraction
	- "...we often can’t break complex components down any further because the logic is stateful and can’t be extracted to a function or another component"
- simplified lifecycle

## Caveats
- Managing multiple versions of react in one app
- Rules of hooks (lint plugin exists for these)
	- Only call hooks at the top level (no conditional hooks)
	- Only call hooks from react functions (components and custom hooks)
- Stale values with `useEffect` (beware the second arg)
