---
id: bach-withcallback
title: withCallback
---

Creates a memoized callback passed to component with the name specified.

## Helper Signature

| Parameter    | Type             | Description                                                                                           |
| ------------ | ---------------- | ----------------------------------------------------------------------------------------------------- |
| callbackName | string           | the name of the callback in the props passed to the wrapped component                                 |
| fn           | js function      | the function to invoke when the callback is invoked by the component                                  |
| conditions   | array of strings | names of the properties on the props object react should restrict the revaluation of this callback to |

## Example 1

#### Typescript

```Typescript
import React from 'react';
import {compose, withCallback} from '@truefit/bach';

type Props = {
  handeClick: () => void;
}

const Component = ({handleClick}: Props) => (
  <div>
    <button onClick={handleClick}>
      Click Me
    </button>
  </div>
);

export default compose<Props>(
  withCallback<Props>('handleClick', () => () => {
    alert('Hello There');
  }),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose, withCallback} from '@truefit/bach';

const Component = ({handleClick}) => (
  <div>
    <button onClick={handleClick}>
      Click Me
    </button>
  </div>
);

export default compose(
  withCallback('handleClick', (props) => () => {
    alert('Hello There');
  }),
)(Component);
```

## Example 2

#### Typescript

```Typescript
import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';

type Props = {
  count: number;
  setCount: (n: number) => void;

  alterCount: (n: number) => () => void;
}

const Component = ({count, alterCount}) => (
  <div>
    <h1>With Callback And State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={alterCount(1)}>Increment</button>
      <button onClick={alterCount(-1)}>Decrement</button>
    </div>
  </div>
);

export default compose(
  withState<Props, number>('count', 'setCount', 0),

  withCallback<Props>('alterCount', ({count, setCount}: Props) => (delta: number) => () => {
    setCount(count + delta);
  }),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';

const Component = ({count, alterCount}) => (
  <div>
    <h1>With Callback And State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={alterCount(1)}>Increment</button>
      <button onClick={alterCount(-1)}>Decrement</button>
    </div>
  </div>
);

export default compose(
  withState('count', 'setCount', 0),

  withCallback('alterCount', ({count, setCount}) => delta => () => {
    setCount(count + delta);
  }),
)(Component);
```

## React Hook

[useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
