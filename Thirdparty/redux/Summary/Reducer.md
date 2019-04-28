# Reducer

Store收到Action以后, 必须给出一个新的State, 这样View才会发生变化. 这种State的计算过程就叫做Reducer. Reducer是一个函数,它接受 Action 和当前State作为参数, 返回一个新的State. 而且Reducer必须为一个纯函数.

## Reducer的拆分

Reducer函数负责生成State. 由于整个应用只有一个State对象, 包含所有数据, 对于大型应用来说, 这个State必然十分庞大, 导致Reducer函数也十分庞大.因此需将不同业务进行拆分,不同业务对应不同的reducer, 然后通过Redux中的combineReducer api将多个reducer合成一个大的reducer.



