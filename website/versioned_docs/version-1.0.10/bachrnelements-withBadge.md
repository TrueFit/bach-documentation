---
id: version-1.0.10-bachrnelements-withbadge
title: withBadge
original_id: bachrnelements-withbadge
---

Allows you to apply a badge to almost any react native component

_Helper Signature_

| Parameter | Type                            | Description                                                                                                                                                                                      |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| value     | js object or js func            | the value displayed in the badge or a function the produces the value to be displayed. If a function, it is invoked with the current props.                                                      |
| options   | js object or js func (optional) | the options to configure the badge per the [react-native-elements documentation](https://react-native-training.github.io/react-native-elements/docs/badge.html#withbadge-higher-order-component) |

_Example_

```
import React from 'react';
import {compose} from '@truefit/bach';
import {withBadge} from '@truefit/bach-rn-elements';

import {Avatar} from 'react-native-elements';

const BadgedAvatar = compose(
  withBadge({
    value: ({user}) => user.messages,
    options: ({user}) => ({status: user.status}),
  }),
)(Avatar);
```
