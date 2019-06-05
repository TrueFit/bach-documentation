---
id: bachrecompose-rendernothing
title: renderNothing
---

Short circuits the render chain and renders nothing.

## Helper Signature

This enhancer has no parameters

## Example

```
import React from 'react';
import {compose} from '@truefit/bach';
import {renderNothing} from '@truefit/bach-recompose';

const Content = () => <div>Something</div>;

export default compose(renderNothing())(Content);
```
