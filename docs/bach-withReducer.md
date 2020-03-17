---
id: bach-withreducer
title: withReducer
---

An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.

@truefit/bach will create a dispatchProperty in props with the format `${reducerName}Dispatch`.

## Helper Signature

| Parameter    | Type        | Description                                                                                                                                |
| ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| reducerName  | string      | the name of the reducer value in the props passed to the wrapped component                                                                 |
| reducer      | js function | the reducer function that conforms to the signature (state, action) => newState                                                            |
| initialValue | any         | the initial value of the reducer                                                                                                           |
| init         | js function | a function that returns the initial value of the reducer the 1st time the reducer is invoked. Used for lazy initialization of the reducer. |

## Example

#### Typescript

```Typescript
import React, {Dispatch} from 'react';
import {compose, withReducer} from '@truefit/bach';

enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

type Action = {type: ActionType};

type Props = {
  count: number;
  countDispatch: Dispatch<Action>;
};

const Component = ({count, countDispatch}: Props) => (
  <div>
    <h1>With Reducer</h1>
    <div>
      <h2>Count: {count}</h2>
      <button type="button" onClick={() => countDispatch({type: ActionType.INCREMENT})}>
        Increment
      </button>
      <button type="button" onClick={() => countDispatch({type: ActionType.DECREMENT})}>
        Decrement
      </button>
    </div>
  </div>
);

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + 1;

    case ActionType.DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default compose(
  withReducer<Props, number, Action>('count', reducer, 0)
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose, withReducer} from '@truefit/bach';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const Component = ({count, countDispatch}) => (
  <div>
    <h1>With Reducer</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => countDispatch({type: INCREMENT})}>
        Increment
      </button>
      <button onClick={() => countDispatch({type: DECREMENT})}>
        Decrement
      </button>
    </div>
  </div>
);

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default compose(
  withReducer('count', reducer, 0),
)(Component);
```

## React Hook

[useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
