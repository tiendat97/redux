import axios from 'axios';  

let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id
});

export const editTodo = id => ({
  type: "EDIT_TODO",
  id
});

export const saveTodo = (id, text) => ({
  type: "SAVE_TODO",
  id,
  text
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export function getData(){
    return(dispatch)=>{
        return axios.get("http://localhost:8086/notes").then((response)=>{
            dispatch(getDataApi("#"+response.data.task_todo))
        })
        .catch((error) => {
          console.log(error);
        })
    }
}

export function getDataApi(task){
  return{
      type:"GET_DATA",
      task: task
  }
}