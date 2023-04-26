import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

//함수형 컴포넌트로 동작한다는 것을 명확하게함 (React.FC)
//제네릭 타입으로 기존 props에 내장되어 있는 children 이외에 items라는 프로퍼티를 추가해줌
//리액트와 타입스크립트로 함수형 컴포넌트를 만들려면 React.FC 타입을 함수형 컴포넌트의 상수 옆에 사용한다.
//그리고 컴포넌트에 직접만든 props가 필요하다면 홑화살가로를 만든다음 그 괄호사이에 필요한 형태의 props(프로퍼티 객체의 타입)를 정의하는 것이다.
//그리고 컴포넌트 안에서 직접 만든 props를 사용한다.

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  //단지 React.FC를 추가함으로서 이 함수가 받는 값이 props객체임을 이해한 것임
  //props객체에는 항상 children이 있음
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          //bind()는 자바스크립트 메서드로 실행할 함수를 미리 설정할 수 있음
          //첫번째 인자로는 무엇을 가르키는지 정함 =>여기서는 중요치 않으니 null로 설정
          //두번째 인자는 우리가 메서드에 넣을 매개변수값을 넣는다.
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
