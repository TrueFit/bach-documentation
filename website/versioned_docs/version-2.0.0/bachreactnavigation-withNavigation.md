---
id: version-2.0.0-bachreactnavigation-withnavigation
title: withNavigation
original_id: bachreactnavigation-withnavigation
---

Gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withNavigation} from '@truefit/bach-react-navigation';
import {NavigationProp} from '<your navigation prop>';

import {View, Button} from 'react-native';

type Props = {
  navigation: NavigationProp;
  handeClick: () => void;
}

const Component = ({handlePress}: Props) => (
  <View>
    <Button title="Click Me" onPress={handlePress} />
  </View>
);

export default compose<Props>(
  withNavigation(),

  withCallback<Props>('handlePress', ({navigation}) => () => {
    navigation.goBack();
  }),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withNavigation} from '@truefit/bach-react-navigation';

import {View, Button} from 'react-native';

const Component = ({handlePress}) => (
  <View>
    <Button title="Click Me" onPress={handlePress} />
  </View>
);

export default compose<Props>(
  withNavigation(),

  withCallback<Props>('handlePress', ({navigation}) => () => {
    navigation.goBack();
  }),
)(Component);
```

## React Navigation Hook

[useNavigation](https://reactnavigation.org/docs/use-navigation)
