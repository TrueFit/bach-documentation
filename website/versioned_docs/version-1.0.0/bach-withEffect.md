---
id: version-1.0.0-bach-witheffect
title: withEffect
original_id: bach-witheffect
---

Accepts a function that contains imperative, possibly effect creating code.

## Helper Signature

| Parameter  | Type             | Description                                                                                     |
| ---------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| fn         | js function      | the function to invoke when the values of properties change on the wrapped component            |
| conditions | array of strings | names of the properties on the props object react should restrict the firing of the function to |

## Example

```
import React from 'react';
import {compose, withEffect} from '@truefit/bach';

const Component = () => (
  <div>
    <h1>With Effect</h1>
  </div>
);

export default compose(
  withEffect((props) => {
    console.log('Effect Fired');
  }),
)(Component);
```

## React Hook

[useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)