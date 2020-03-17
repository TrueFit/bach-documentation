---
id: bachreactrouter-withroutematch
title: withRouteMatch
---

Attempts to match the current URL in the same way that a <Route> would

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withRouteMatch} from '@truefit/bach-react-router';
import {match} from 'react-router';

type Props = {
  match: match;
}

const Component = ({match}: Props) => (
  <div>
    {match.path}
  </div>
);

export default compose(
  withRouteMatch('/blog/:slug')
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withRouteMatch} from '@truefit/bach-react-router';

const Component = ({match}) => (
  <div>
    {match.path}
  </div>
);

export default compose(
  withRouteMatch('/blog/:slug')
)(Component);
```
