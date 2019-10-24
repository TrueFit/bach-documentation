---
id: custom-enhancers
title: Custom Enhancers
---

We would love to see members of the community add their own enhancers. If you come up with one that is applicable to the larger community (for example, wrapping a different React-CSS framework), please contact us so that we can add it to the list above.

To create your own enhancers, you need to pass a function to the compose method that returns a js object with the required properties. This is typically done as the result of a curried function, you can check the source code of existing enhancers for reference.

## Function Signature

The function will be invoked with a js object. This object contains the following properties that we found to be helpful or required across multiple enhancers. You are not required to use anything from this object - not everything applies to every instance.

| Property            | Type     | Description                                                                                                                                                                                                                       |
| ------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| generateNewVariable | function | a utility function that will generate a random 16 character string that can be used as a variable name in your initialize code. These strings are guaranteed to be unique inside the scope of the single HOC component generated. |

## Return Object

| Property     | Type                | Description                                                                                                                                                                        |
| ------------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dependencies | js object           | a map of the dependencies for your enhancer. These will be available to your initialize code by the keys specified. The compose method reduces all keys to a single unique key set |
| initialize   | string              | the code that will be added in line in order to the generated HOC                                                                                                                  |
| props        | any                 | the properties that the code creates that need to be added to the overall property object that will be passed to the wrapped component                                             |
| render       | string (optional)   | overrides the render statement (we leave the default render at the bottom in case this doesnt return)                                                                              |
| post         | function (optional) | a function that is passed the resultant HOC, the function is expected to return an HOC to use                                                                                      |

## Initialize

As mentioned above, we wanted to keep the levels of HOC to a max of one. To accomplish this goal, rather than have a series of functions, we need each enhancer to actually expose the code it requires to work. The compose method combines all of these string of code into a single HOC at runtime. Under the covers, compose uses [`new Function()`](https://remarkablemark.org/blog/2018/05/15/javascript-eval-vs-function/) to accomplish this transformation.

Thus there are a couple of important ideas to keep in mind when writing your initialize implementation code:

- Your code will be running in its own scope, not the scope of the calling function. This means that what you have access to are your dependencies. This leads to code like React.useState rather than just useState.
- Since the code is evaluated at runtime, you don't have access to babel or other similar utilities. You should write your javascript for the widest use.
- You should not do anything that takes up too much processing time to initialize.
- You should expect your enhancer to be called multiple times for a single compose
- Your composer should not have any dependencies not explicitly listed
