---
id: bach-withcontext
title: withContext
---

Accepts a context object and returns the current context value for that context.

## Helper Signature

| Parameter       | Type                | Description                                                                                              |
| --------------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| contextProperty | array of strings    | the names of the props in the context that are mapped to the props passed to the wrapped component       |
| contextSource   | js object or string | either the context object or the name of the prop in the HOC that points to the context to use as source |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose, withContext} from '@truefit/bach';

type Props = {
  message: string;
};

type Context = {
  message: string;
};

const context = React.createContext<Context>({message: 'Hello There'});

const Component = ({message}: Props) => {
  return (
    <div>
      <h1>With Context</h1>
      <div>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default compose(
  withContext<Context>(['message'], context)
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose, withContext} from '@truefit/bach';

const context = React.createContext({message: 'Hello Child'});

const Component = ({message}) => {
  return (
    <div>
      <h1>With Context</h1>
      <div>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default compose(
  withContext(['message'], context)
)(Component);
```

## React Hook

[useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
