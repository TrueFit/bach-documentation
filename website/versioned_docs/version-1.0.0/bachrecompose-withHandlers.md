---
id: version-1.0.0-bachrecompose-withhandlers
title: withHandlers
original_id: bachrecompose-withhandlers
---

Allows you to quickly define multiple withCallback instances in one definition.

## Helper Signature

| Parameter | Type      | Description                                                                                              |
| --------- | --------- | -------------------------------------------------------------------------------------------------------- |
| map       | js object | a js object that contains a map of keys and functions. Each key will be passed to the wrapped component. |

## Example

```
import React from 'react';
import {compose} from '@truefit/bach';
import {withHandlers} from '@truefit/bach-recompose';

const Component = ({sayHello, sayGoodbye}) => (
  <div>
    <h1>With Handlers</h1>
    <div>
      <button onClick={sayHello}>Say Hello</button>
    </div>
    <div>
      <button onClick={sayGoodbye}>Say Goodbye</button>
    </div>
  </div>
);

export default compose(
  withHandlers({
    sayHello: (props) => () => {
      console.log('Hello');
    },
    sayGoodbye: (props) => () => {
      console.log('Goodbye');
    },
  }),
)(Component);
```

## Underlying React Hook

[useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
