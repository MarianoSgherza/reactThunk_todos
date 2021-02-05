
let initialState = {

    todos: [],
    error: "",
    todosForm: {
        userId: "",
        id: "",
        title: "",
        completed: false
    }

}

let todosReducer = (prevState = initialState, action) => {

    switch (action.type) {

        case 'GET_CURRENT_TODOS_SUCCESS':
            return({
                ...prevState,
                todos: [
                    ...prevState.todos,
                    ...action.todos]
            })
            
        case 'GET_CURRENT_TODOS_FAILURE':
            return({
                ...prevState,

                error: action.err 
            })
            
        case 'HANDLE_CHANGE':
            return({
                ...prevState,

                todosForm: {
                    ...prevState.todosForm,
                    [action.name] : action.value
                } 
            })
            
        
    
        default:
            return prevState
            
    }
}

export default todosReducer