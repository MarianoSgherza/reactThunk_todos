import axios from "axios";

//const GET_CURRENT_TODOS = 'GET_CURRENT_TODOS';
const GET_CURRENT_TODOS_SUCCESS = 'GET_CURRENT_TODOS_SUCCESS';
const GET_CURRENT_TODOS_FAILURE = 'GET_CURRENT_TODOS_FAILURE';
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'
const ADD_TODO_STARTED = 'ADD_TODO_STARTED'

const getTodos = () => {
  return (dispatch) => {     //nameless functions
    // Initial action dispatched
    //dispatch({ type: GET_CURRENT_TODOS});
    // Return promise with success and failure actions
    return axios.get('https://jsonplaceholder.typicode.com/todos').then(  
      todos => { console.log(todos.data);return(dispatch({ type: GET_CURRENT_TODOS_SUCCESS, todos: todos.data } ))},
      err => dispatch({ type: GET_CURRENT_TODOS_FAILURE, err })
    );
  };
};

export const addTodos = (form, e) => dispatch =>{

    dispatch(addTodoStarted())

    axios.post('https://jsonplaceholder.typicode.com/posts',
        {
        userId: form.userId,
        id: form.id,
        title: form.title,
        completed: form.completed
        }
    )
        .then((res) => dispatch(addTodoSuccess(res.data)))
        .catch(err=>dispatch(addTodoFailure(err.message)))

}

const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
  });
const addTodoSuccess = (todo) => ({
    type: ADD_TODO_SUCCESS,
    todo
  });
const addTodoFailure = (error) => ({
    type: ADD_TODO_FAILURE,
    error
  });

export const handleChange = (e) => ({
    type: 'HANDLE_CHANGE',
    name: e.target.name,
    value : e.target.value
} ) 
  
export default getTodos