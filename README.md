### Website: https://admirable-platypus-5e40a0.netlify.app/

1. What is JSX, and why is it used?

Ans: JSX means JavaScript XML. This feature gives us the way to write javascript in XML format. JSX, or JavaScript XML, is a syntax extension for JavaScript that allows developers to write HTML-like markup directly within JavaScript code. It combines markup with logic which enhance readability of the code. We can embed JavaScript expressions within JSX using curly braces, giving us the full programmatic power of the language.

2. What is the difference between State and Props?

Ans: Props are read-only inputs passed from parent to child components to configure them. State is local, mutable data managed internally within a component that changes over time, usually in response to user actions, triggering re-renders. Props are immutable (cannot be changed by the child), while state is mutable and can be change in user interaction.

3. What is the useState hook, and how does it work?

Ans: useState is a React Hook that allows us to add state (dynamic data) inside a functional component. It works as a memory which remember some values and can be changed by a functional component mostly by users. The change can be shown beyond components.

4. How can you share state between components in React?

Ans: We can share state between components in reacts by passing it from parent components to child components. As we know in react we can only pass value one way (parent to child) that's how we share state between components. The process it calls props drilling. 

5. How is event handling done in React?

Ans: Event handling in React is done using camelCase event names and passing functions as event handlers inside JSX. Instead of writing event logic as strings like in HTML, React uses JavaScript functions to handle user interactions such as clicks, form submissions, and input changes. When an event occurs, React executes the handler function and updates the component state if needed, which automatically re-renders the UI to reflect the changes.