---
id: bachredux-withdispatch
title: withDispatch
---

Returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.

## Helper Signature

There are no parameters for this enhancer.

## Example

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withDispatch} from '@truefit/bach-redux';
import {Dispatch} from 'redux';

const ADD_TODO = 'ADD_TODO';

type Props = {
  dispatch: Dispatch;
};

const WithDispatch = ({dispatch}: Props) => (
  <div>
    <h1>withDispatch</h1>
    <button
      type="button"
      onClick={() => {
        dispatch({
          type: ADD_TODO,
          payload: 'New ToDo from withDispatch',
        });
      }}
    >
      Click Me
    </button>
  </div>
);

export default compose(withDispatch())(WithDispatch);
```

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withDispatch} from '@truefit/bach-redux';

const ADD_TODO = 'ADD_TODO';

const WithDispatch = ({dispatch}) => (
  <div>
    <h1>withDispatch</h1>
    <button
      onClick={() => {
        dispatch({
          type: ADD_TODO,
          payload: 'New ToDo from withDispatch',
        });
      }}
    >
      Click Me
    </button>
  </div>
);

export default compose(withDispatch())(WithDispatch);
```

## React-Redux Hook

[useDispatch](https://react-redux.js.org/next/api/hooks#usedispatch)
