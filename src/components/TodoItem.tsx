import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  //단지 React.FC를 추가함으로서 이 함수가 받는 값이 props객체임을 이해한 것임
  //props객체에는 항상 children이 있음
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};
export default TodoItem;
