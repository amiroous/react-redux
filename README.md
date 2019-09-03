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

## Props
> A System to pass data from a parent to a child component, to make a child component configurable by parent

## State
> A JavaScript Object that contains relevant data to a component
> - updating `state` on a component causes the component to almost instantly rerender.
> - `state` must be initialized when a component si created (_the only time we do `this.state` as direct assignment_).
> - `state` can only be updated using the `setState` function.

## Component Lifecycle
> 1. `constructor` do one time setups
> 2. `render` avoid doing anything besides returning JSX
>   * then content is visible ...
> 3. `componentDidMount` do fetch/api calls and initial data loading (one time)
>   * then waiting for any updates ...
> 4. `componentDidUpdate` more data loading every single time and when state/props change
>   * then waiting for component is being no longer visible ...
> 5. `componentWillUnmount` do cleanup

> Also `shouldComponentUpdate`, `getDerivedStateFromProps`, `getSnapshotBeforeUpdate`


### Handle Contexts of `this`
> Uncaught TypeError: Cannot read property 'state' of undefined

##### 1. Use `bind` and `constructor`:
```
class Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    
    onChangeHandler(e) {
       // Code ...   
    }
    
    render() {
        <input onChange={this.onChangeHandler} />
    }
}
```

##### 2. Use "ES6 Arrow Function" to Define the Class Method
> __REMINDER on ARROW FUNCTIONS:__
> - "Arrow Function", use "Lexical Scope" (Lexical Environment of the running execution context).
> - An ArrowFunction does not define local bindings for arguments, super, this, or new.target. 
> - Any reference to arguments, super, this, or new.target within an ArrowFunction must resolve to a binding in a lexically enclosing environment. Typically this will be the Function Environment of an immediately enclosing function. 
```
class Component {
    onChangeHandler = (e) => {
        // Code ...   
    }
    
    render() {
        <input onChange={this.onChangeHandler} />
    }
}
```

##### 3. Use "ES6 Arrow Function" to Call the Class Method (**Recommended)
```
class Component {
    
    onChangeHandler(e) {
       // Code ...   
    }
    
    render() {
        <input onChange={(e) => this.onChangeHandler(e)} />
    }
}
```
