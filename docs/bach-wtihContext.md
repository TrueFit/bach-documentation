---
id: bach-withcontext
title: withContext
---

Accepts a context object and returns the current context value for that context.

## Helper Signature

| Parameter       | Type             | Description                                                                                        |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------- |
| contextProperty | array of strings | the names of the props in the context that are mapped to the props passed to the wrapped component |
| contextName     | string           | the name of the prop in the HOC that points to the context to use as source                        |

## Example

```
import React from 'react';
import {compose, withContext} from '@truefit/bach';

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

const Child = compose(withContext(['message'], 'context'))(Component);

const Parent = () => {
  const context = React.createContext({message: 'Hello Child'});

  return <Child context={context} />;
};

export default Parent;
```

## React Hook

[useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)