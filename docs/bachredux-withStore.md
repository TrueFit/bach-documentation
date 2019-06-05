---
id: bachredux-withstore
title: withStore
---

Returns a reference to the same Redux store that was passed in to the Provider component. This enhancer should probably not be used frequently. Prefer withSelector() as your primary choice.

## Helper Signature

There are no parameters for this enhancer.

## Example

```
import React from 'react';
import {compose} from '@truefit/bach';
import {withStore} from '@truefit/bach-redux';

const WithStore = ({store}) => (
  <div>
    <h1>withStore</h1>
    <ul>
      {store.getState().features.bachRedux.todo.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  </div>
);

export default compose(
  withStore(),
)(WithStore);
```

## React-Redux Hook

[useStore](https://react-redux.js.org/next/api/hooks#usestore)
