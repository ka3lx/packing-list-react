React Concepts

1. What is useState?
   useState is a React Hook that lets you add a state variable to your component.

   For example:
   const [name, setName] = useState('Taylor');
   const [todos, setTodos] = useState(() => createTodos()); -> The callback should be pure and accept no arguments.

2. What are the caveats of useState?
   a. useState cannot be called inside loops or conditionals. It can only be called at the top-level of a component.
   b. In Strict Mode, React will call your initializer function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your initializer function is pure (as it should be), this should not affect the behavior.

3. What is the special behavior for the set function returned by useState?
   If you pass a function as nextState, it will be treated as an updater function. It must be pure, should take the pending state as its only argument, and should return the next state. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state.

   In Strict Mode, React will call your updater function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your updater function is pure (as it should be), this should not affect the behavior. The result from one of the calls will be ignored.

4. Are state updates batched?
   Yes, React batches state updates. It updates the screen after all the event handlers have run and have called their set functions. This prevents multiple re-renders during a single event. In the rare case that you need to force React to update the screen earlier, for example to access the DOM, you can use flushSync.

5. Why should we use updaters?
   If we do multiple updates within the same event, updaters can be helpful. They’re also helpful if accessing the state variable itself is inconvenient.

6. What is a benefit of using keys in components?
   You can reset a component’s state by passing a different key to a component. When the key changes, React re-creates the component (and all of its children) from scratch, so its state gets reset.

7. Which events are not propagated up the DOM tree?
   All events except the onScroll event are propagated up the tree. Propagation can be stopped by calling e.stopPropagation() on the event handler for the JSX element.
