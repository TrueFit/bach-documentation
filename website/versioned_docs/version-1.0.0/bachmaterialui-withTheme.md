---
id: version-1.0.0-bachmaterialui-withtheme
title: withTheme
original_id: bachmaterialui-withtheme
---

Provides access to current theme.

## Helper Signature

| Parameter | Type              | Description                                                                     |
| --------- | ----------------- | ------------------------------------------------------------------------------- |
| themeName | string (optional) | the name of the theme passed to the component in the props, defaults to "theme" |

## Example

```
import React from 'react';
import {compose} from '@truefit/bach';
import {withTheme} from '@truefit/bach-material-ui';

const WithStyles = ({theme}) => (
  <div style={{fontSize: theme.fontSize}}>
    Hello World
  </div>
);

export default compose(
  useTheme(),
)(WithStyles);
```

## Material UI Hook

[useTheme](https://material-ui.com/styles/api/#usetheme-theme)