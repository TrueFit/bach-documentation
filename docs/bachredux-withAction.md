---
id: bachredux-withaction
title: withAction
---

Allows you to specify a single action creator to be connected to the store. _See withActions for more discussion_

## Helper Signature

| Parameter  | Type             | Description                                                                                       |
| ---------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| actionName | string           | the name for the action creator in the props passed to the wrapped component                      |
| fn         | js function      | the function that is executed when the action creator is invoked                                  |
| conditions | array of strings | names of the properties on the props object react should restrict the creation of the function to |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withAction} from '@truefit/bach-redux';
import {PayloadAction} from '@reduxjs/toolkit';

const ADD_TODO = 'ADD_TODO';
const addToDo = (note: string): PayloadAction<string> => ({
  type: ADD_TODO,
  payload: note,
});

type Props = {
  addToDo: (note: string) => void;
};

const WithAction = ({addToDo}: Props) => (
  <div>
    <h1>withAction</h1>
    <button
      type="button"
      onClick={() => {
        addToDo('New ToDo from withAction');
      }}
    >
      Click Me
    </button>
  </div>
);

export default compose(withAction<Props>('addToDo', addToDo))(WithAction);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withAction} from '@truefit/bach-redux';

const ADD_TODO = 'ADD_TODO';
const addToDo = note => ({
  type: ADD_TODO,
  payload: note,
});

const WithAction = ({addToDo}) => (
  <div>
    <h1>withAction</h1>
    <button
      onClick={() => {
        addToDo('New ToDo from withAction');
      }}
    >
      Click Me
    </button>
  </div>
);

export default compose(
  withAction('addToDo', addToDo)
)(WithAction);
```
