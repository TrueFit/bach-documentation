---
id: bachrecompose-withprops
title: withProps
---

Allows you to supply multiple properties to add the props passed to the wrapped component.

## Helper Signature

| Parameter   | Type      | Description                                              |
| ----------- | --------- | -------------------------------------------------------- |
| propertyMap | js object | a map of the keys to their values (objects or functions) |

## Example

```
import React from 'react';
import {compose} from '@truefit/bach';
import {withProps} from '@truefit/bach-recompose';

const WithProps = ({title, description}) => (
  <div>
    <h1>withProps</h1>
    <h2>Title: {title}</h2>
    <h2>Description: {description}</h2>
  </div>
);

export default compose(
  withProps({
    title: 'Hello',
    description: (props) => 'World'
  }),
)(WithProps);
```

## Underlying React Hooks

[useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
