import { TodoType } from "./types/todo";

export const Todo = (
  props: Pick<TodoType, "userId" | "title" | "completed">
) => {
  const { title, userId, completed = false } = props;
  const completeMMark = completed ? "D" : "ND";
  return <p>{`${completeMMark} ${title}(User ID:${userId})`}</p>;
};
