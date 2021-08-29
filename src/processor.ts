import uuid from 'react-uuid';

export interface ITag {
  name: string;
}

export interface ITodo {
  id: string;
  name: string;
  completed: boolean
  priority: number
  tags?: ITag[]
  deadline: Date
}

class ProcessorRef { // Processor using useRef
  private todos;
  private setTodos;

  constructor(todos: ITodo[], setTodos: any) {
    // TODO: change any to the Correct
    this.todos = todos;
    this.setTodos = setTodos;
  }

  getTodos() {
    return [...this.todos];
  }
  setTodo(todos: ITodo[]) {
    this.setTodos(todos);
  }
}
export default class Processor extends ProcessorRef {
  list(): ITodo[] {
    return this.getTodos();
  }
  add(todoName: string): ITodo {
    let todos = this.getTodos();
    let newTodo = {
      id: uuid(),
      name: todoName,
      completed: false,
      priority: 1,
      deadline: new Date()
    };
    todos.push(newTodo);
    this.setTodo(todos);
    return newTodo;
  }
}
