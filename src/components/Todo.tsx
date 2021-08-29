import React from 'react';
import { ITodo } from '../processor';

interface Props {
  todo: ITodo;
}

// TODO: move to constans
const HIGH = 2;

// TODO: convert a small component
const priority = (priority: number | undefined) => {
  if (priority && priority > 0) {
    const color: string = priority === HIGH ? 'red' : 'blue';
    const bgColor: string = `bg-${color}-50 text-${color}-400`
    return (
      <div className="ml-8 mt-2">
        <span
          className={`px-2 py-1 ${bgColor} font-medium capitalize rounded-lg`}
        >
          {priority === HIGH ? 'high' : 'low'}
        </span>
      </div>
    );
  }
};

const Todo = ({ todo }: Props) => {
  const onChangeCheckbox = (event: React.ChangeEvent) => {
    todo.completed = !todo.completed;
  };
  return (
    <div className="my-5 shadow bg-white rounded-lg space-y-0 ">
      <div className="px-5 py-5">
        <div className="flex">
          <div className="w-3">
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={onChangeCheckbox}
              className="shadow apparence-none rounded-md border  leading-tight text-gray-700"
            />
          </div>
          <div className=" ml-5 font-sans font-medium ">{todo.name}</div>
        </div>
        <div className="font-extralight uppercase text-sm mt-0 pt-0 text-gray-400 ml-8 font-mono">
          default
        </div>
        {priority(todo.priority)}
        <div className="ml-8 text-right text-sm text-gray-400 font-extralight">
          { todo.deadline.toLocaleDateString('en') }
        </div>
      </div>
    </div>
  );
};

export default Todo;
