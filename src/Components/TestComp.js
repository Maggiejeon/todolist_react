import React, { useReducer, useState } from 'react';



// const reducer = (state, action) => {
//   // console.log('state',state); /* 초기값 */
//   // console.log('action',action); /* reducer가 객체로 */
//   switch(action.type){
//     case 'INCREASE' : return state + action.data;
//     case 'DECREASE' : return state - action.data;
//     case 'LIMITED' : return (alert(action.data), (state +action.data)*2);
//     default : return state;
//   }
// }

const TestComp = () => {
  const [count, setCount] = useState(0);
  // const [count, dispatch] = useReducer(reducer,0);
    // -> [state변수, 상태변화를 일으키는 촉발함수] = useReducer(생성자 상태변화 함수, 초기값)
  
  
    const onIncrease = () =>{
    setCount(count+1);
  }
  const onDecrease = () =>{
    setCount(count-1);
  }
    const onLimited = () => {
      setCount(count*2);
      alert('Limited');
    }



  
  return (
    <div>
      <h4>테스트 컴포넌트!!!!!</h4>
      <div>
        <strong style={{fontSize:'30px'}}>{count}</strong>
      </div>
      <div>
        {/* <button onClick={()=> dispatch({type:'INCREASE', data:1})}>+1</button>
        <button onClick={()=> dispatch({type:'DECREASE', data:1})}>-1</button>
        <button onClick={()=> dispatch({type:'LIMITED', data:1})}>LIMITED</button> */}
        
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onLimited}>LIMITED</button>
      </div>
    </div>
  )
}

export default TestComp;