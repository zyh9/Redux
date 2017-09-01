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

## 基础

### Action

> Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 store.dispatch( ) 将 action 传到 store。

> Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。

### Reducer

> 在 Redux 应用中，所有的 state 都被保存在一个单一对象中。当确定了 state 对象的结构，就可以开始开发 reducer。reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。

> reducer 一定要保持纯净。只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。

### Store
> 使用 action 来描述“发生了什么”，使用 reducers 来根据 action 更新 state 的用法。而 Store 就是把它们联系到一起的对象。store 有以下职责：

> 维持应用的 state；

> 提供 getState() 方法获取 state；

> 提供 dispatch(action) 方法更新 state；

> 通过 subscribe(listener) 注册监听器;

> 通过 subscribe(listener) 返回的函数注销监听器。

### 数据流
> 严格的单向数据流是 Redux 架构的设计核心。

> Redux 应用中数据的生命周期遵循下面 4 个步骤：

> 1.调用 store.dispatch(action)。

> 2.Redux store 调用传入的 reducer 函数。

> 3.根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。

> 4.Redux store 保存了根 reducer 返回的完整 state 树。

### redux

#### store
```
    dispatch：发起action
    
    subscribe：注册监听器（只要发起action， 注册监听器就会执行）
    
    getState：拿到整个应用的数据
```

#### action
```
    一个 plan javascript Object
    
    必须有一个type字段，唯一的
    
    其它的字段可以任意添加
```
    	
#### action creator
```
    本意是返回一个对象，也就是action
    
    当有了中间件的参与， 它就可以返回更多的数据类型
    
    这个时候，你可以把有副作用的代码写在这里， 把一下逻辑处理放在这里，把你的请求放在这里， 甚至可以是路由的跳转
    
    绑定好的 action creator
    
    当你运行这个函数之后， 直接发起一次action， 不用再写 dispatch
```

#### reducer
```
    纯函数
    
    接收state action , 返回新的state
    
    计算出新的state
    
    state的本质是从reduce
```

#### 中间件
> 拦截发起的action的请求，然后做一些事情
    	
#### applyMiddleware
> 激活中间件
    	
#### combineReducers
> 合并reducer
    
#### bindActionCreators 接收两个参数
```
    第一个参数
        一个对象， 对象的内容 就是你的 action creator
    第二个参数
        dispatch
        返回一个对象， 对象的内容就是你的 绑定好的 action creator
```
        	
### react-redux

#### Provider
```
    接收一个store的prop
    你应用的组件放他它的children里
```

#### connect
> 只要有一个组件想拿到应用的某些数据(也可以全部)， 交个这个组件的props
```
	第一个参数
    mapSatateToProps 函数
    	接收一个state，这个state是整个应用的state
    	返回一个 js对象， 对象的属性会合并到组件的props里面
   	 第二个参数
    mapDispatchToProps 函数
    	接收一个dispatch， 这个dispatch就是store.dispatch
    	返回一个 js对象， 对象的属性会合并到组件的props里面
```
