---
id: version-1.0.0-bach-withstate
title: withState
original_id: bach-withstate
---

Creates a stateful value, and a function to update it.

## Helper Signature

| Parameter        | Type            | Description                                                                                                   |
| ---------------- | --------------- | ------------------------------------------------------------------------------------------------------------- |
| stateName        | string          | the name of the state value in the props passed to the wrapped component                                      |
| stateUpdaterName | string          | the name of the function in the props passed to the wrapped component that will update state when invoked     |
| initialValue     | any OR function | the initial value of the state OR a function that receives `props` and returns the initial value of the state |

## Example

```
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

export default compose(withState('count', 'setCount', 0))(Component);
```

## Example (with initialValue function)

```
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

Component.propTypes = {
  initialCount: PropTypes.number,
};

export default compose(withState('count', 'setCount', ({initialCount}) => initialCount))(Component);
```

## React Hook

[useState](https://reactjs.org/docs/hooks-reference.html#usestate)