---
id: version-2.0.0-bachrecompose-rendernothing
title: renderNothing
original_id: bachrecompose-rendernothing
---

Short circuits the render chain and renders nothing.

## Helper Signature

This enhancer has no parameters

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {renderNothing} from '@truefit/bach-recompose';

const Content = () => <div>Something</div>;

export default compose(renderNothing())(Content);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {renderNothing} from '@truefit/bach-recompose';

const Content = () => <div>Something</div>;

export default compose(renderNothing())(Content);
```
