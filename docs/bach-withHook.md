---
id: bach-withhook
title: withHook
---

Allows you to map any hook into an enhancer to use into the compose chain.

_Helper Signature_

| Parameter       | Type                       | Description                                                                                                                                                                                                                                                                                         |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hook            | js function                | the hook you want to use                                                                                                                                                                                                                                                                            |
| parameterValues | any or array               | the values that should be passed to they hook as parameters in the order they are to be passed. If you only have one parameter you may just pass the parameter. You may also pass a function to be lazily evaluated and passed props to produce the value                                           |
| props           | string or array of strings | the names of the props returned by the hook. Should be a string if the hook returns an object or value (for example - useMemo), an array of strings if the hook returns an array of values (for example - useState), or it may be omitted if the hook has no return value (for example - useEffect) |

_Example_

#### Typescript

```Typescript
import React, {useState, useMemo, useEffect} from 'react';
import {compose, withHook} from '@truefit/bach';

type Props = {
  count: number;
  setCount: (c: number) => void;

  oneMore: number;
};

const Component = ({count, setCount, oneMore}: Props) => (
  <div>
    <h1>With Hook</h1>
    <h2>Count: {count}</h2>
    <h2>One More: {oneMore}</h2>
    <div>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        + 1
      </button>
    </div>
  </div>
);

export default compose(
  withHook<Props>(useState, 0, ['count', 'setCount']),
  withHook<Props>(useMemo, ({count}: Props) => () => count + 1, 'oneMore'),

  withHook<Props>(useEffect, ({count}: Props) => () => {
    console.log(`Count ${count}`); // eslint-disable-line
  }),
)(Component);
```

#### Javascript

```Javascript
import React, {useState, useMemo, useEffect} from 'react';
import {compose, withHook} from '@truefit/bach';

const Component = ({count, setCount, oneMore}) => (
  <div>
    <h1>With Hook</h1>
    <h2>Count: {count}</h2>
    <h2>One More: {oneMore}</h2>
    <div>
      <button onClick={() => { setCount(count + 1); }}>+ 1</button>
    </div>
  </div>
);

export default compose(
  withHook(useState, 0, ['count', 'setCount']),
  withHook(useMemo, ({count}) => () => count + 1, 'oneMore'),

  withHook(useEffect, ({count}) => () => {
    console.log(`Count ${count}`); // eslint-disable-line
  }),
)(Component);
```
