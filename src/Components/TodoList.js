import React, { useState, useMemo, useContext } from 'react'; /* react에 Export되어 있는 기능이기 때문에  */
import TodoItem from './TodoItem';
import { TodoStateContext } from '../App'; 
/* 기능은 객체구조분해 형식으로 가져오기 때문에 {}로 가져온다. App안에 함수로 있는 기능이다. */
/* app에서 value값이 있기 때문에 todocontext를 사용하면 value값을 가져와 사용할 수 있다. */




const TodoList = () => {
  const todo = useContext(TodoStateContext);
  

  const [search, setSearch] = useState('');
  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  };
  const getSearchResult = () => {
    return search === '' ? 
    todo : todo.filter(list => 
      list.content.toLowerCase().includes(search.toLowerCase()))
  };
  const analyzeTodo = useMemo(() => {
    console.log('analyzeTodp 함수 호출!!!!');
    const totalCount = todo.length;
    const doneCount = todo.filter(list => list.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {totalCount, doneCount, notDoneCount}
  },[todo]);

  const {totalCount, doneCount, notDoneCount} = analyzeTodo;

  return (
    <div className='TodoList'>
      <h4>Todo List 📄</h4>
      
      <div className='listCount'>
        <p>총 개수 : {totalCount}</p>
        <p>완료된 할 일 : {doneCount}</p>
        <p>아직 완료 하지 못한 할 일 : {notDoneCount}</p>
      </div>

      <input 
      value={search}
      onChange={onChangeSearch}
      className='searchber' 
      placeholder='검색어를 입력하세요.'></input>
      <div className='list_wrapper'>
        {
          getSearchResult().map(list => {
            return <TodoItem 
              key={list.id} {...list}
            />
          })
        }
      </div>
    </div>
  )
}



export default TodoList;