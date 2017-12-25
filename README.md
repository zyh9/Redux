## Redux

### 安装redux react-redux

		npm install redux --save
		npm install react-redux --save
		
		简写：
		
		npm i redux react-redux -S

### redux是一个针对JavaScript应用的可预测的状态管理器。

		应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。
		
		惟一改变 state 的办法是触发 action，一个描述发生什么的对象。
		
		为了描述 action 如何改变 state 树，这时你就需要编写 reducers。

#### store

		dispatch：发起action
		
		subscribe：注册监听器（只要发起action， 注册监听器就会执行）
		
		getState：拿到整个应用的数据

#### action

    	一个 plan javascript Object
    
    	必须有一个type字段，唯一的
    
    	其它的字段可以任意添加

#### action creator

		本意是返回一个对象，也就是action
		
		当有了中间件的参与， 它就可以返回更多的数据类型
		
		这个时候，你可以把有副作用的代码写在这里， 把一下逻辑处理放在这里，把你的请求放在这里， 甚至可以是路由的跳转
		
		绑定好的 action creator
		
		当你运行这个函数之后， 直接发起一次action， 不用再写 dispatch

#### reducer

		纯函数
		
		接收state action ，返回新的state
		
		计算出新的state
		
		state的本质是从reduce


### 中间件

		拦截发起的action的请求，然后做一些事情

### applyMiddleware

		激活中间件

### combineReducers

		合并reducer

### bindActionCreators 接收两个参数

    	第一个参数
    
        	一个对象， 对象的内容 就是你的 action creator
        
    	第二个参数
    
        	dispatch
        
        	返回一个对象， 对象的内容就是你的 绑定好的 action creator

## react-redux

### Provider

    	接收一个store的prop
    
    	你应用的组件放他它的children里

### connect

		只要有一个组件想拿到应用的某些数据(也可以全部)， 交个这个组件的props
		
		第一个参数
		
		    mapSatateToProps 函数
		    
		    	接收一个state，这个state是整个应用的state
		    	
		    	返回一个 js对象， 对象的属性会合并到组件的props里面
	    	
		第二个参数
			
		    mapDispatchToProps 函数
		    
		    	接收一个dispatch， 这个dispatch就是store.dispatch
		    	
		    	返回一个 js对象， 对象的属性会合并到组件的props里面
