---
id: version-2.0.0-bachmaterialui-withstyles
title: withStyles
original_id: bachmaterialui-withstyles
---

Allows you to specify a set of styles with Material UI for the wrapped component.

## Helper Signature

| Parameter    | Type                  | Description                                                                                                               |
| ------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| createStyles | js object or function | a js object containing the style definition or a function that accepts the current theme and returns the style definition |
| options      | js object (optional)  | js object specifying Material UI options (see Material UI docs for details)                                               |
| classesName  | string (optional)     | the name of the styles passed to the component in the props, defaults to "classes"                                        |

You can also specify a function as the value of an individual property and be passed the props object to then return the value (see fontSize in the example below).

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';
import {Theme} from '@material-ui/core';

type Props = {
  classes: {
    container: string;
    h1: string;
    h2: string;
    button: string;
  };

  fontSize: number;

  setFontSize: (n: number) => void;
  increase: () => void;
};

const WithStyles = ({classes, fontSize, increase}: Props) => (
  <div className={classes.container}>
    <h1 className={classes.h1}>withStyles</h1>
    <h2 className={classes.h2}>Font Size: {fontSize}</h2>
    <button type="button" className={classes.button} onClick={increase}>
      ^ Increase ^
    </button>
  </div>
);

export default compose(
  withState('fontSize', 'setFontSize', 12),
  withCallback<Props>('increase', ({fontSize, setFontSize}) => () => {
    setFontSize(fontSize + 1);
  }),
  withStyles((theme: Theme) => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexDirection: 'column',
    },
    h1: {
      color: theme.palette.primary.main,
    },
    h2: {
      color: theme.palette.secondary.main,
      fontSize: ({fontSize}: Props) => fontSize,
    },
    button: {
      height: 50,
      width: 100,
      borderRadius: 8,
    },
  })),
)(WithStyles);
```

#### Javascript

```Javascript
import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

const WithStyles = ({classes, fontSize, increase}) => (
  <div className={classes.container}>
    <h1 className={classes.h1}>withStyles</h1>
    <h2 className={classes.h2}>Font Size: {fontSize}</h2>
    <button className={classes.button} onClick={increase}>
      ^ Increase ^
    </button>
  </div>
);

export default compose(
  withState('fontSize', 'setFontSize', 12),
  withCallback('increase', ({fontSize, setFontSize}) => () => {
    setFontSize(fontSize + 1);
  }),
  withStyles((theme) => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexDirection: 'column',
    },
    h1: {
      color: theme.palette.primary.main,
    },
    h2: {
      color: theme.palette.secondary.main,
      fontSize: ({fontSize}) => fontSize,
    },
    button: {
      height: 50,
      width: 100,
      borderRadius: 8,
    },
  })),
)(WithStyles);
```

## Material UI Hook

[makeStyles](https://material-ui.com/styles/api/#makestyles-styles-options-hook)
