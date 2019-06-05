---
id: bach-withmemo
title: withMemo
---

Creates a memoized value.

## Helper Signature

| Parameter  | Type             | Description                                                                                     |
| ---------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| memoName   | string           | the name of the memoized value in the props passed to the wrapped component                     |
| fn         | js function      | the function to invoke to produce the memoized value                                            |
| conditions | array of strings | names of the properties on the props object react should restrict the firing of the function to |

## Example

```
import React from 'react';
import {compose, withMemo} from '@truefit/bach';

const Component = ({message}) => (
  <div>
    <h1>With Memo</h1>
    <div>
      <h2>Message: {message}</h2>
    </div>
  </div>
);

export default compose(
  withMemo('message', () => {
    return 'Hello World';
  }),
)(Component);
```

## React Hook

[useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)