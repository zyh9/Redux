# Redux

## 介绍

### redux是一个针对JavaScript应用的可预测的状态管理器。
> 应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。
> 惟一改变 state 的办法是触发 action，一个描述发生什么的对象。
> 为了描述 action 如何改变 state 树，这时你就需要编写 reducers。

### 小例子

```
import { createStore } from 'redux';

/*
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
  console.log(store.getState())
);

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
```
### 三大原则

#### 单一数据源
> 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

#### State 是只读的
> 惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

#### 使用纯函数来执行修改
> 为了描述 action 如何改变 state tree ，这时你就需要编写 reducers。
> Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。

