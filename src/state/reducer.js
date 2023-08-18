const initialState = [];

const types = {
  ADD_TODO: "ADD_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  DELETE_TODO: "DELETE_TODO",
};

function reducer(state, action) {
  switch (action.type) {
    case types.ADD_TODO: {
      return [...state, { ...action.payload, id: state.length + 1 }];
    }

    case types.COMPLETE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isComplete = true;
        }

        return todo;
      });
    }

    case types.DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
  }
}

export { types, reducer, initialState };
