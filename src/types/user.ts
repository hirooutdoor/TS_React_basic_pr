export type User = {
  name: string;
  hobby?: Array<string>;
  //↑配列なのは趣味が複数ある場合を想定して
};
