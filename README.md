# REACT + REDUX
- React [?](https://reactjs.org/)
- Redux [?](https://redux.js.org/)



## React Components
> A component is a "__Function__" or "__Class__" that "__Renders HTML__" (_by JSX_) to be displayed to user and "__Handles__" (_by Event Handlers_) user interaction.

### Setup
1. Import the React and ReactDOM libraries
```js
import React from 'react';
import ReactDOM from 'react-dom';
```

2. Create a react component
```js
const MyComponent = () => {
    return (
        <div>My Component</div>
    );
};
```

3. Display the react component on the screen
```js
ReactDOM.render(<App/>, document.getElementById('root'));
```

### 3 Concept
1. Component Nesting: _A component can be shown inside another one_
2. Component Reusability: _A component can be easily reused through out the application_
3. Component Configuration: _A component can be configured when is created_

