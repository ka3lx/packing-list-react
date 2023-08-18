function TodoSection({ todos, onComplete, onDelete }) {
  return (
    <div className='pt-10 flex w-full justify-center'>
      <div className='sm:w-3/4  lg:w-1/2 flex flex-wrap  justify-start'>
        {todos.map(({ id, title, quantity, isComplete = false }) => (
          <div
            key={id}
            className={`text-orange-200 flex flex-row items-center h-fit gap-3 mx-10 my-3 ${
              isComplete ? "line-through" : ""
            }`}
          >
            <input
              type='checkbox'
              id={id}
              value={`${quantity} ${title}`}
              onClick={() => onComplete(id)}
            />
            <label className='' htmlFor={id}>
              {quantity} {title}
            </label>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6 text-red-600 hover:cursor-pointer'
              onClick={() => onDelete(id)}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

TodoSection.propTypes = {
  todos: [],
  onComplete: Function,
  onDelete: Function,
};

export default TodoSection;
