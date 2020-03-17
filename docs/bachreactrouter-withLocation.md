---
id: bachreactrouter-withlocation
title: withLocation
---

Returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withLocation} from '@truefit/bach-react-router';
import {Location} from 'history';

type Props = {
  location: Location;
}

const Component = ({location}: Props) => (
  <div>
    {location.pathname}
  </div>
);

export default compose(
  withLocation()
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withLocation} from '@truefit/bach-react-router';

const Component = ({location}) => (
  <div>
    {location.pathname}
  </div>
);

export default compose(
  withLocation()
)(Component);
```
