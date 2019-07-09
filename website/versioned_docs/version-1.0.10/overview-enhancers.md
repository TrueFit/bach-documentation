---
id: version-1.0.10-enhancers
title: Enhancers
original_id: enhancers
---

Enhancers are the central mechanism for composing components with @truefit/bach. In general, you will declare a series of enhancers for each component that together compose all of the supporting logic that component needs to render. For example, you commonly have a couple of state enhancers combined with callbacks and effects.

Underneath the covers, @truefit/bach does things a little differently than its predecessors. Rather than have a a huge tree of HOCs wrapping your component, the compose function combines all of your enhancers into a single HOC generated at runtime. This allows your code to follow all of the hook rules while still being composed functionally.

_Order matters:_ we keep the definition of the generated code in the same order you put your enhancers in the compose call, thus code only has access to the properties defined before it.

## Index

### @truefit/bach

- [withCallback](/docs/bach-withcallback)
- [withContext](/docs/bach-withcontext)
- [withEffect](/docs/bach-witheffect)
- [withLayoutEffect](/docs/bach-withlayouteffect)
- [withMemo](/docs/bach-withmemo)
- [withReducer](/docs/bach-withreducer)
- [withRef](/docs/bach-withref)
- [withState](/docs/bach-withstate)
- [withHook](/docs/bach-withhook)

### @truefit/bach-redux

- [withAction](/docs/bachredux-withaction)
- [withActions](/docs/bachredux-withactions)
- [withDispatch](/docs/bachredux-withdispatch)
- [withSelector](/docs/bachredux-withselector)
- [withStore](/docs/bachredux-withstore)

### @truefit/bach-recompose

- [mapProps](/docs/bachrecompose-mapprops)
- [renameProp](/docs/bachrecompose-renameprop)
- [renameProps](/docs/bachrecompose-renameprops)
- [renderIf](/docs/bachrecompose-renderif)
- [renderNothing](/docs/bachrecompose-rendernothing)
- [withProps](/docs/bachrecompose-withprops)
- [withHandlers](/docs/bachrecompose-withhandlers)
- [withLifecycle](/docs/bachrecompose-withlifecycle)

### @truefit/bach-material-ui

- [withStyles](/docs/bachmaterialui-withstyles)
- [withTheme](/docs/bachmaterialui-withtheme)

### @truefit/bach-formik

- [withFormik](/docs/bachformik-withformik)

### @truefit/bach-rn-elements

- [withStyles](/docs/bachrnelements-withstyles)
- [withBadges](/docs/bachrnelements-withbadges)