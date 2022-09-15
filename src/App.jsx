import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from './redux/config/modules/todo';

const StContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const InputBox = styled.input`
  margin: 0px 30px 0px 30px;

`

const BtnStyle = styled.button`
  box-shadow: 0px 1px 0px 0px #1c1b18;
  background:linear-gradient(to bottom, #eae0c2 5%, #ccc2a6 100%);
  background-color:#eae0c2;
  border-radius:15px;
  border:2px solid #333029;
  display:inline-block;
  cursor:pointer;
  color:#505739;
  font-family:Arial;
  font-size:14px;
  font-weight:bold;
  padding:12px 16px;
  text-decoration:none;
  text-shadow:0px 1px 0px #ffffff;
  background:linear-gradient(to bottom, #ccc2a6 5%, #eae0c2 100%);
  background-color:#ccc2a6;
  position:relative;
  top:1px;
`

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;

function Todo() {
  const { todos } = useSelector((state) => state.todos);
  return (
    <StTodos>
      {todos.map((todo) => (
        <StTodo key={todo.id}>{todo.title}</StTodo>
      ))}
    </StTodos>
  )
}


function AddForm() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const Handler = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(
      addTodo({
        id: todos.length + 1,
        title,
      })
    );
  };

  return (
    <StFormContainer>
      <form onSubmit={Handler}>
        <label>TodosList 만들기</label>
        <InputBox
          type="text"
          value={title}
          placeholder='여기에 입력해주세요'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <BtnStyle>추가하기</BtnStyle>
      </form>
    </StFormContainer>
  );
};

const App = () => {
  return (
    <StContainer>
      <AddForm />
      <Todo />
    </StContainer>
  );
}

export default App;