import { TodoType } from "./types/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completeMMark = completed ? "D" : "ND";
  return <p>{`${completeMMark} ${title}(User ID:${userId})`}</p>;
};
