import "./App.css";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Author from "./Author";
import TodoSqlApp from "./Todosql";

const App = () => {
  return (
    <div className='App'>
      <h1>Welcome to React</h1>
      <BrowserRouter>
        <div className='links'>
          <button className='btn1'>
            <Link to='/todosql'>Todo App</Link>
          </button>
          <button className='btn1'>
            <Link to='/authors'>Author App</Link>
          </button>
        </div>
        <Routes>
          <Route path='todosql' element={<TodoSqlApp />} />
          <Route path='/authors' element={<Author />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
