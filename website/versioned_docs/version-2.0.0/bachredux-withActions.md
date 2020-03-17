---
id: version-2.0.0-bachredux-withactions
title: withActions
original_id: bachredux-withactions
---

Allows you to specify a map of action creators to be connected to the store.

## Side Note

This functionality was removed from the react-redux standard hooks (https://react-redux.js.org/next/api/hooks#removed-useactions). That said, we don't agree with the reasoning. Although using dispatch directly in your components does match standard hooks more closely, that doesn't mean that it is better code. In our opinion, it leads to less readable code - thus we have included these enhancers in this library.

## Helper Signature

| Parameter  | Type             | Description                                                                                                                        |
| ---------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| actions    | js object        | a js object that contains a map of keys and action creator functions. Each key will be a property passed to the wrapped component. |
| conditions | array of strings | names of the properties on the props object react should restrict the creation of the functions to                                 |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withActions} from '@truefit/bach-redux';
import {PayloadAction} from '@reduxjs/toolkit';

const ADD_TODO = 'ADD_TODO';

const addToDo1 = (note: string): PayloadAction<string> => ({
  type: ADD_TODO,
  payload: note,
});

const addToDo2 = (note: string): PayloadAction<string> => ({
  type: ADD_TODO,
  payload: `Too: ${note}`,
});

type Props = {
  addToDo1: (note: string) => void;
  addToDo2: (note: string) => void;
};

const WithActions = ({addToDo1, addToDo2}: Props) => (
  <div>
    <h1>withActions</h1>
    <button
      type="button"
      onClick={() => {
        addToDo1('New ToDo 1 from withActions');
      }}
    >
      Click Me
    </button>
    <button
      type="button"
      onClick={() => {
        addToDo2('New ToDo 2 from withActions');
      }}
    >
      Click Me
    </button>
  </div>
);

export default compose(
  withActions<Props>({addToDo1, addToDo2}),
)(WithActions);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withActions} from '@truefit/bach-redux';

const ADD_TODO = 'ADD_TODO';

const addToDo1 = note => ({
  type: ADD_TODO,
  payload: note,
});

const addToDo2 = note => ({
  type: ADD_TODO,
  payload: `Too: ${note}`,
});

const WithActions = ({addToDo1, addToDo2}) => (
  <div>
    <h1>withActions</h1>
    <button
      onClick={() => {
        addToDo1('New ToDo 1 from withActions');
      }}
    >
      Click Me
    </button>
    <button
      onClick={() => {
        addToDo2('New ToDo 2 from withActions');
      }}
    >
      Click Me
    </button>
  </div>
);

export default compose(withActions({addToDo1, addToDo2}))(WithActions);
```
