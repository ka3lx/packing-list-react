import Header from "./components/Header";
import { useReducer } from "react";
import { types, initialState, reducer } from "./state/reducer";
import TodoSection from "./components/TodoSection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAdd(title, quantity) {
    dispatch({ type: types.ADD_TODO, payload: { title, quantity } });
  }

  function handleComplete(id) {
    dispatch({ type: types.COMPLETE_TODO, payload: { id } });
  }

  function handleDelete(id) {
    dispatch({ type: types.DELETE_TODO, payload: { id } });
  }

  return (
    <div className='app bg-orange-900 '>
      <Header onAdd={handleAdd} />
      <TodoSection
        todos={state}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
      <Footer todos={state} />
    </div>
  );
}

export default App;
