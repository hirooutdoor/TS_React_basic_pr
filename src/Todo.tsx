import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMMark = completed ? "D" : "ND";
  return <p>{`${completeMMark} ${title}(User ID:${userId})`}</p>;
};
