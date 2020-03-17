---
id: version-2.0.0-bachreactnavigation-withnavigationstate
title: withNavigationState
original_id: bachreactnavigation-withnavigationstate
---

Gives access to the navigation state of the navigator which contains the screen.

## Example

#### Typescript

```Typescript
import React from 'react';
import {compose} from '@truefit/bach';
import {withNavigationState} from '@truefit/bach-react-navigation';

import {View, Text} from 'react-native';

type Props = {
  routeNames: string;
}

const Component = ({routeNames}: Props) => (
  <View>
    <Text>{routeNames}</Text>
  </View>
);

export default compose<Props>(
  withNavigationState('routeNames', state => state.routeNames.join(',')),
)(Component);
```

#### Javascript

```Javascript
import React from 'react';
import {compose} from '@truefit/bach';
import {withNavigationState} from '@truefit/bach-react-navigation';

import {View, Text} from 'react-native';

const Component = ({routeNames}) => (
  <View>
    <Text>{routeNames}</Text>
  </View>
);

export default compose(
  withNavigationState('routeNames', state => state.routeNames.join(',')),
)(Component);
```

## React Navigation Hook

[useNavigationState](https://reactnavigation.org/docs/use-navigation-state)
