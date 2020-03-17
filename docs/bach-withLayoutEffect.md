---
id: bach-withlayouteffect
title: withLayoutEffect
---

Like withEffect, but used for the times when invocation cannot be deferred, thus it fires synchronously after all DOM mutations.

## Helper Signature

| Parameter  | Type             | Description                                                                                     |
| ---------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| fn         | js function      | the function to invoke when the values of properties change on the wrapped component            |
| conditions | array of strings | names of the properties on the props object react should restrict the firing of the function to |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose, withLayoutEffect} from '@truefit/bach';

const Component = () => (
  <div>
    <h1>With Effect</h1>
  </div>
);

export default compose(
  withLayoutEffect(() => {
    console.log('Effect Fired');
  }),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose, withLayoutEffect} from '@truefit/bach';

const Component = () => (
  <div>
    <h1>With Effect</h1>
  </div>
);

export default compose(
  withLayoutEffect((props) => {
    console.log('Effect Fired');
  }),
)(Component);
```

## React Hook

[useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
