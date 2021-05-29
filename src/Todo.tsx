type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  const completeMMark = completed ? "D" : "ND";
  return <p>{`${completeMMark} ${title}(User ID:${userId})`}</p>;
};
