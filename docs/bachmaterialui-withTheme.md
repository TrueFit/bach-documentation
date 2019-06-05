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

```
import React from 'react';
import {compose} from '@truefit/bach';
import {withTheme} from '@truefit/bach-react-material';

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