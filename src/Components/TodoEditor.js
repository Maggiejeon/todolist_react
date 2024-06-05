import React, { useContext, useRef, useState } from 'react';
import { TodoDispatchContext } from '../App';




/* { onCreate } */

const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onSubmit = () => {
    if(!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onKeyDown = (event) => {
    if(event.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기 📌</h4>
      <div className='editor_wrapper'>
        <input 
        ref={inputRef} 
        value={content} 
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder='새로운 Todo...' 
        ></input>
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

export default TodoEditor;