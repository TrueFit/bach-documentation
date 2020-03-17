---
id: version-2.0.0-bachrecompose-withlifecycle
title: withLifecycle
original_id: bachrecompose-withlifecycle
---

Allows for an easier transition from class based components. We use the traditional function names componentDidMount, componentDidUpdate, and componentWillUnmount.

## Helper Signature

| Parameter | Type      | Description                                                                                                                                  |
| --------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| map       | js object | a js object that contains a map of keys and functions. The allowed keys are componentDidMount, componentDidUpdate, and componentWillUnmount. |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withLifecycle} from '@truefit/bach-recompose';

const Component = () => (
  <div>
    <h1>With Lifecycle</h1>
  </div>
);

export default compose(
  withLifecycle<any>({
    componentDidMount: props => {
      console.log('Component Did Mount: ', props);
    },

    componentDidUpdate: (props, prevProps) => {
      console.log('Component Did Update', props, prevProps);
    },

    componentWillUnmount: props => {
      console.log('Component Will Unmount', props);
    },
  }),
)(Component);

```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withLifecycle} from '@truefit/bach-recompose';

const Component = () => (
  <div>
    <h1>With Lifecycle</h1>
  </div>
);

export default compose(
  withLifecycle({
    componentDidMount: (props) => {
      console.log('Component Did Mount: ', props);
    },

    componentDidUpdate: (props, prevProps) => {
      console.log('Component Did Update', props, prevProps);
    },

    componentWillUnmount: (props) => {
      console.log('Component Will Unmount', props);
    },
  }),
)(Component);
```

## Underlying React Hooks

[useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
[useRef](https://reactjs.org/docs/hooks-reference.html#useref)
