---
id: version-2.0.0-bachreactrouter-withparams
title: withParams
original_id: bachreactrouter-withparams
---

Returns an object of key/value pairs of URL parameters

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withParams} from '@truefit/bach-react-router';

type Props = {
  slug: string;
}

const Component = ({slug}: Props) => (
  <div>
    {slug}
  </div>
);

export default compose(
  withParams(['slug'])
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withParams} from '@truefit/bach-react-router';

const Component = ({slug}) => (
  <div>
    {slug}
  </div>
);

export default compose(
  withParams(['slug'])
)(Component);
```
