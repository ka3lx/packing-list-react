import { useState } from "react";
import styles from "./styles.module.css";

function Header({ onAdd }) {
  const [todo, setTodo] = useState({ quantity: 1, title: "" });

  function handleChange(e) {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }

  return (
    <>
      <nav
        className={`h-1/6 w-full flex items-center justify-center text-6xl text-slate-800 p-4 bg-yellow-600 ${styles.brand}`}
      >
        FAR AWAY
      </nav>
      <header className='h-20 flex justify-center gap-4 bg-orange-500 items-center'>
        <h1 className={`text-xl text-slate-800 font-bold ${styles.heading}`}>
          What do you need for your trip?{" "}
        </h1>
        <div className='flex gap-3'>
          <select
            className='outline-none px-4 rounded-xl bg-orange-100'
            name='quantity'
            value={todo.quantity}
            defaultValue={1}
            onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          <input
            className='outline-none pl-4 rounded-xl placeholder:text-slate-600 bg-orange-100'
            name='title'
            type='text'
            placeholder='Item...'
            onChange={handleChange}
          />
          <button
            className='bg-emerald-400 px-6 py-1 rounded-xl text-amber-900 font-bold'
            onClick={() => onAdd(todo.title, todo.quantity)}
          >
            ADD
          </button>
        </div>
      </header>
    </>
  );
}

Header.propTypes = {
  onAdd: Function,
};

export default Header;
