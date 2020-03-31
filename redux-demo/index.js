const redux = require('redux');
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_ICECREAM = 'BUY_ICECREAM';
const BUY_CAKE = 'BUY_CAKE';
//action
function buyCake(){
  return{
    type: BUY_CAKE,
    info: 'first redux action'
  }
}
function buyIceCream(){
  return{
    type: BUY_ICECREAM,
    info: 'second redux action'
  }
}

//state
// const initialState={
//   numOfCakes:10,
//   numOfIceCreams:20
// }

const initialIceCreamState = {
  numOfIceCreams: 20
}
const initialCakeState = {
  numOfCakes: 10
}

//reducer
// const reducer = (state=initialState,action)=>{
//   switch(action.type){
//     case BUY_CAKE:return{
//       ...state,
//       numOfCakes:state.numOfCakes-1
//     }

//     case BUY_ICECREAM:return{
//       ...state,
//       numOfIceCreams:state.numOfIceCreams-1
//     }

//     default: return state
//   }
// }



const cakeReducer = (state=initialCakeState,action)=>{
  switch(action.type){
    case BUY_CAKE:return{
      ...state,
      numOfCakes:state.numOfCakes-1
    }
    default: return state
  }
}

const IceCreamReducer = (state=initialIceCreamState,action)=>{
  switch(action.type){
    case BUY_ICECREAM:return{
      ...state,
      numOfIceCreams:state.numOfIceCreams-1
    }

    default: return state
  }
}

const rootReducer = combineReducers({
  cake:cakeReducer,
  iceCream:IceCreamReducer
});

const store = redux.createStore(rootReducer,applyMiddleware(logger));
console.log('Initial State',store.getState())
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake());
store.dispatch(buyCake())
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe(); 