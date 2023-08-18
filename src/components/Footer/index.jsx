function Footer({ todos }) {
  const complete = todos.filter((todo) => todo.isComplete).length;

  return (
    <div className='fixed h-20 bottom-0 w-full bg-emerald-400 flex justify-center items-center italic font-bold text-amber-900 text-center'>
      You have {todos.length} items on your list
      {todos.length > 0
        ? ` and you have already packed ${complete} (${
            Math.floor(complete / todos.length) * 100
          }%)`
        : ""}
    </div>
  );
}

Footer.propTypes = {
  todos: Array,
};

export default Footer;
