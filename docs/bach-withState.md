---
id: bach-withstate
title: withState
---

Creates a stateful value, and a function to update it.

## Helper Signature

| Parameter        | Type            | Description                                                                                                   |
| ---------------- | --------------- | ------------------------------------------------------------------------------------------------------------- |
| stateName        | string          | the name of the state value in the props passed to the wrapped component                                      |
| stateUpdaterName | string          | the name of the function in the props passed to the wrapped component that will update state when invoked     |
| initialValue     | any OR function | the initial value of the state OR a function that receives `props` and returns the initial value of the state |

## Example 1

#### Typescript

```Typescript
import React from 'react';
import {compose, withState} from '@truefit/bach';

type Props = {
  count: number;
  setCount: (value: number) => void;
}

const Component = ({count, setCount}: Props) => (
  <div>
    <h1>With State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  </div>
);

export default compose(
  withState<Props, number>('count', 'setCount', 0)
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose, withState} from '@truefit/bach';

const Component = ({count, setCount}) => (
  <div>
    <h1>With State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  </div>
);

export default compose(
  withState('count', 'setCount', 0)
)(Component);
```

## Example 2 (with initialValue function)

#### Typescript

```Typescript
import React from 'react';
import PropTypes from 'prop-types';
import {compose, withState} from '@truefit/bach';

type Props = {
  count: number;
  setCount: (value: number) => void;
}

const Component = ({count, setCount}: Props) => (
  <div>
    <h1>With State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  </div>
);

export default compose(
  withState<Props>('count', 'setCount', () => 0)
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import PropTypes from 'prop-types';
import {compose, withState} from '@truefit/bach';

const Component = ({count, setCount}) => (
  <div>
    <h1>With State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  </div>
);

export default compose(
  withState('count', 'setCount', () => 0)
)(Component);
```

## React Hook

[useState](https://reactjs.org/docs/hooks-reference.html#usestate)
