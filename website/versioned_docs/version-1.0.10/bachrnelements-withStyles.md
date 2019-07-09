---
id: version-1.0.10-bachrnelements-withstyles
title: withStyles
original_id: bachrnelements-withstyles
---

Allows you to specify component specific styles as well as access the global style.

_Helper Signature_

| Parameter       | Type                 | Description                                                                                                                                            |
| --------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| componentStyles | js object or js func | component specific styles or a function that returns the component specific styles. if a function is specified, it is provided with the current props. |
| conditions      | array (optional)     | like other enhances such as withState, this controls how often the componentStyles value is re-evaluted                                                |
| stylesName      | string (optional)    | the property name at which the styles object is provided to the component, defaults to styles                                                          |
| themeName       | string (optional)    | the property name at which the theme object is provided to the component, defaults to theme                                                            |

_Example_

```
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