import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import Processor from './processor';

function App() {
  const [todos, setTodos] = useState([]);
  const processor = new Processor(todos, setTodos);
  const history = useHistory()

  return (
    <div className="w-5/6 mx-auto mt-20 my-10 px-5  bg-gray-50 relative rounded-lg" >
        <Switch>
          <Route exact path="/">
            <TodoList processor={processor}></TodoList>
          </Route>
          <Route path="/add">
            <TodoForm processor={processor} history={history}></TodoForm>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
