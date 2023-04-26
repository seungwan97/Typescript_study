import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
//제네릭타입은 함수로 정의해주어야 한다.
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  //어떤 타입인지 제네릭으로 명시해주어야 한다.
  //useRef를 사용할 때는 시작값으로 null을 설정해주어야 한다.
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  //React.FormEvent : form 제출 이벤트를 수신하면 자동적으로 받게되는 타입
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //input이 가질 수 있는 모든 프로퍼티 조회 가능
    //?가 붙은 이유는 ref에 아직 값이 붙지 않았을수도 있기 때문
    //!로 바꿔주면 해당 ref는 절대 null이 아니라는 뜻

    const enteredText = todoTextInputRef.current!.value;
    //ref가 없는 에러 걸러주는 구문
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
