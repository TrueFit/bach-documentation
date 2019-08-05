---
id: version-1.0.18-bachrecompose-renameprops
title: renameProps
original_id: bachrecompose-renameprops
---

Allows you to rename multiple properties from one set of keys to another.

## Helper Signature

| Parameter       | Type      | Description                             |
| --------------- | --------- | --------------------------------------- |
| propertyNameMap | js object | a map of the old keys to their new keys |

## Example

```
import React from 'react';
import {compose} from '@truefit/bach';
import {renameProps} from '@truefit/bach-recompose';

const ChildContent = ({message}) => (
  <div>
    <h1>mapProps</h1>
    <h2>Message: {message}</h2>
  </div>
);

const Child = compose(
  renameProps({note: 'message'}),
)(ChildContent);

export default () => <Child note="Hello World" />;
```
