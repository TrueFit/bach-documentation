---
id: version-1.0.18-bach-withcontext
title: withContext
original_id: bach-withcontext
---

Accepts a context object and returns the current context value for that context.

## Helper Signature

| Parameter       | Type                | Description                                                                                              |
| --------------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| contextProperty | array of strings    | the names of the props in the context that are mapped to the props passed to the wrapped component       |
| contextSource   | js object or string | either the context object or the name of the prop in the HOC that points to the context to use as source |

## Example

```
import React from 'react';
import {compose, withContext} from '@truefit/bach';

const Context = React.createContext({
  greeting: 'Hello',
  target: 'World',
});

const Component = ({greeting, target}) => {
  return (
    <div>
      <h1>With Context</h1>
      <div>
        <h2>
          {greeting} {target}
        </h2>
      </div>
    </div>
  );
};

const Child = compose(
  withContext(['greeting'], Context),
  withContext(['target'], 'context'),
)(Component, {debug: {breakpoint: true}});

const Parent = () => {
  return <Child context={Context} />;
};

export default Parent;
```

## React Hook

[useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)