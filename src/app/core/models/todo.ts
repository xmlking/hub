export enum TodoStatus {
  TODO,
  IN_PROGRESS,
  IN_REVIEW,
  BUG,
  DONE
}
export interface Todo {
  name: string,
  status: TodoStatus
}
