---
id: bachrecompose-withhandlers
title: withHandlers
---

Allows you to quickly define multiple withCallback instances in one definition.

## Helper Signature

| Parameter | Type      | Description                                                                                              |
| --------- | --------- | -------------------------------------------------------------------------------------------------------- |
| map       | js object | a js object that contains a map of keys and functions. Each key will be passed to the wrapped component. |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withHandlers} from '@truefit/bach-recompose';

type Props = {
  sayHello: () => void;
  sayGoodbye: () => void;
};

const Component = ({sayHello, sayGoodbye}: Props) => (
  <div>
    <h1>With Handlers</h1>
    <div>
      <button type="button" onClick={sayHello}>
        Say Hello
      </button>
    </div>
    <div>
      <button type="button" onClick={sayGoodbye}>
        Say Goodbye
      </button>
    </div>
  </div>
);

export default compose(
  withHandlers<Props>({
    sayHello: () => () => {
      console.log('Hello');
    },
    sayGoodbye: () => () => {
      console.log('Goodbye');
    },
  }),
)(Component);
```

#### Javascript

```Javascript
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
