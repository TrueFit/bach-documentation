---
id: version-1.0.0-bach-withref
title: withRef
original_id: bach-withref
---

Creates a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

## Helper Signature

| Parameter    | Type   | Description                                                              |
| ------------ | ------ | ------------------------------------------------------------------------ |
| refName      | string | the name of the ref pointer in the props passed to the wrapped component |
| initialValue | any    | the initial value of the ref.current                                     |

## Example

```
import React from 'react';
import {compose, withRef, withCallback} from '@truefit/bach';

const Component = ({textBox1, textBox2, focus1, focus2}) => (
  <div>
    <h1>With Ref</h1>
    <div>
      <input ref={textBox1} />
      <button onClick={focus1}>Focus Me</button>
    </div>
    <div>
      <input ref={textBox2} />
      <button onClick={focus2}>Focus Me</button>
    </div>
  </div>
);

export default compose(
  withRef('textBox1', null),
  withRef('textBox2', null),

  withCallback('focus1', ({textBox1}) => () => {
    textBox1.current.focus();
  }),
  withCallback('focus2', ({textBox2}) => () => {
    textBox2.current.focus();
  }),
)(Component);
```

## React Hook

[useRef](https://reactjs.org/docs/hooks-reference.html#useref)