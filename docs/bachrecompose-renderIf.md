---
id: bachrecompose-renderif
title: renderIf
---

Allows you to specify a conditional function. If the condition is true, compose will render the specified component

## Helper Signature

| Parameter   | Type            | Description                                      |
| ----------- | --------------- | ------------------------------------------------ |
| conditional | js function     | a function that returns a boolean value          |
| component   | react component | the component to render if the condition is true |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose, withEffect, withState} from '@truefit/bach';
import {renderIf} from '@truefit/bach-recompose';

type Props = {
  loading: boolean;
  setLoading: (b: boolean) => void;
};

const Loading = () => <div>Loading</div>;

const Content = () => <div>Content</div>;

export default compose(
  withState('loading', 'setLoading', true),
  withEffect<Props>(({setLoading}) => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []),
  renderIf<Props>(({loading}) => loading, Loading),
)(Content);
```

#### Javascript

```Javascript
import React from 'react';
import {compose, withEffect, withState} from '@truefit/bach';
import {renderIf} from '@truefit/bach-recompose';

const Loading = () => <div>Loading</div>;

const Content = () => <div>Content</div>;

export default compose(
  withState('loading', 'setLoading', true),
  withEffect(({setLoading}) => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []),
  renderIf(({loading}) => loading, Loading),
)(Content);
```

## Underlying React Hooks

[useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
