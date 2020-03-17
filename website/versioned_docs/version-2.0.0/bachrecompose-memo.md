---
id: version-2.0.0-bachrecompose-memo
title: memo
original_id: bachrecompose-memo
---

Allows you to specify a comparison function to optimize the re-rendering of the component.

## Helper Signature

| Parameter | Type    | Description                                                                                                                                                                        |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| areEqual  | js func | a function that accepts two parameters - prevProps, nextProps and returns a boolean as to if they should be considered equal. If true is returned, the component will not rerender |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';
import {memo} from '@truefit/bach-recompose';

type MemoProps = {
  count: number;
};

const Memo = compose<MemoProps>(
  memo<MemoProps>((prevProps, nextProps) => {
    return nextProps.count % 2 === 0;
  }),
)(({count}: MemoProps) => (
  <>
    <h1>Memo</h1>
    <h2>{count}</h2>
  </>
));

type WrapperProps = {
  count: number;
  setCount: (n: number) => void;

  increment: () => void;
};

export default compose(
  withState<WrapperProps, number>('count', 'setCount', 0),
  withCallback<WrapperProps>('increment', ({count, setCount}) => () => {
    setCount(count + 1);
  }),
)(({count, increment}: WrapperProps) => (
  <div>
    <Memo count={count} />
    <button type="button" onClick={increment}>
      Increment
    </button>
  </div>
));
```

#### Javascript

```Javascript
import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';
import {memo} from '@truefit/bach-recompose';

const Memo = compose(
  memo((prevProps, nextProps) => {
    return nextProps.count % 2 === 0;
  }),
)(({count}) => (
  <>
    <h1>Memo</h1>
    <h2>{count}</h2>
  </>
));

export default compose(
  withState('count', 'setCount', 0),
  withCallback('increment', ({count, setCount}) => () => {
    setCount(count + 1);
  }),
)(({count, increment}) => (
  <div>
    <Memo count={count} />
    <button onClick={increment}>Increment</button>
  </div>
));
```

## React HOC

[memo](https://reactjs.org/docs/react-api.html#reactmemo)
