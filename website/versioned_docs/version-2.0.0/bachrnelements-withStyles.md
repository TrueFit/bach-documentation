---
id: version-2.0.0-bachrnelements-withstyles
title: withStyles
original_id: bachrnelements-withstyles
---

Allows you to specify component specific styles as well as access the shared style defined in configureStyle.

## Helper Signature

| Parameter       | Type                 | Description                                                                                                                                            |
| --------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| componentStyles | js object or js func | component specific styles or a function that returns the component specific styles. if a function is specified, it is provided with the current props. |
| conditions      | array (optional)     | like other enhances such as withState, this controls how often the componentStyles value is re-evaluted                                                |

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {compose, withState, withCallback, StringKeyMap} from '@truefit/bach';
import {withStyles, WithTheme} from '@truefit/bach-rn-elements';

import {View, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {Text} from 'react-native-elements';

type Props = {
  styles: {
    container: StyleProp<ViewStyle>;
    title: StyleProp<TextStyle>;
  };
} & WithTheme;

const Landing = ({styles}: Props) => {
  return (
    <View style={styles.centerContent}>
      <Text h1 style={styles.title}>
        Welcome to the React Native Playground
      </Text>
    </View>
  );
};

const styles = ({theme}: Props): NamedStyles => ({
  title: {
    textAlign: 'center',
    color: theme.colors.primary,
  },
});

export default compose(
  withStyles(styles),
)(Landing);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-rn-elements';
import {Text} from 'react-native-elements';

import Layout from './layout';

const Landing = ({styles}) => {
  return (
    <Layout style={styles.centerContent} full>
      <Text h1 style={styles.title}>
        Welcome to the React Native Playground
      </Text>
    </Layout>
  );
};

export default compose(
  withStyles(({theme}) => {
    return {
      title: {
        textAlign: 'center',
        color: theme.colors.primary,
      },
    };
  }),
)(Landing);
```
