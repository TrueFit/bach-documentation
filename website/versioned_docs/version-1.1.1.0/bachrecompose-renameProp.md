---
id: version-1.1.1.0-bachrecompose-renameprops
title: renameProps
original_id: bachrecompose-renameprops
---

Allows you to rename a property from one key to another.

## Helper Signature

| Parameter | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| oldName   | string | the name of the property to rename |
| newName   | string | the new name of the property       |

## Example

```
import React from 'react';
import {compose} from '@truefit/bach';
import {renameProp} from '@truefit/bach-recompose';

const ChildContent = ({message}) => (
  <div>
    <h1>renameProp</h1>
    <h2>Message: {message}</h2>
  </div>
);

const Child = compose(
  renameProp('note', 'message'),
)(ChildContent);

export default () => <Child note="Hello World" />;
```
