---
id: bachmaterialui-withtheme
title: withTheme
---

Provides access to current theme.

## Helper Signature

| Parameter | Type              | Description                                                                     |
| --------- | ----------------- | ------------------------------------------------------------------------------- |
| themeName | string (optional) | the name of the theme passed to the component in the props, defaults to "theme" |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withTheme} from '@truefit/bach-material-ui';
import {Theme} from '@material-ui/core';

type Props = {
  theme: Theme;
};

const Example = ({theme}: Props) => (
  <div style={{fontSize: theme.typography.fontSize}}>Hello World</div>
);

export default compose(
  withTheme()
)(Example);

```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withTheme} from '@truefit/bach-material-ui';

const WithStyles = ({theme}) => (
  <div style={{fontSize: theme.typography.fontSize}}>
    Hello World
  </div>
);

export default compose(
  withTheme(),
)(WithStyles);
```

## Material UI Hook

[useTheme](https://material-ui.com/styles/api/#usetheme-theme)
