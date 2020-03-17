---
id: version-2.0.0-bachreactrouter-withhistory
title: withHistory
original_id: bachreactrouter-withhistory
---

Gives you access to the history instance that you may use to navigate.

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withHistory} from '@truefit/bach-react-router';
import {History} from 'history';

type Props = {
  history: History;
  handeClick: () => void;
}

const Component = ({handleClick}: Props) => (
  <div>
    <button onClick={handleClick}>
      Click Me
    </button>
  </div>
);

export default compose<Props>(
  withHistory(),

  withCallback<Props>('handleClick', ({history}) => () => {
    history.push('/home');
  }),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withHistory} from '@truefit/bach-react-router';

const Component = ({handleClick}) => (
  <div>
    <button onClick={handleClick}>
      Click Me
    </button>
  </div>
);

export default compose(
  withHistory(),

  withCallback('handleClick', ({history}) => () => {
    history.push('/home');
  }),
)(Component);
```
