import _ from "lodash";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];

    case "TOGGLE_TODO":
      return _.map(
        state,
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "REMOVE_TODO":
      return _.filter(state, todo => todo.id !== action.id);

    case "EDIT_TODO":
      return _.map(
        state,
        todo =>
          todo.id === action.id ? { ...todo, isEditing: !todo.isEditing } : todo
      );

    case "SAVE_TODO":
      return _.map(
        state,
        todo =>
          todo.id === action.id ? {
            ...todo,
            text: action.text
          } : todo );
          
    default:
      return state;
  }
};

export default todos;
