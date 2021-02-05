import { Checkbox, TextField } from '@material-ui/core';
import React, {Component} from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux';
import getTodos, { addTodos, handleChange } from "../redux/actions";
import TodoItem from './TodoItem';


class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            
             userId : "",
             id : "",
             title : "",
             completed : false  

        }

    }
    /*handleChange = (evt) => {
        
        this.setState(
            {[evt.target.name] : evt.target.value}
        )

    }*/

    componentDidMount(){
        this.props.getTodos()
    }

    handleSubmit = (e) => {
        e.preventDefault()
    this.props.addTodos(this.props.form)}

    render() {

        return (

            <section>
                <form onSubmit = {this.handleSubmit}>
                   {/* <label htmlFor="userinput">User Id:</label>
                    // <input onChange = {this.props.handleChange} type="text" name="userId" id="userinput" value={this.props.form.userId}/>*/}
                    <TextField label="User Id" onChange = {this.props.handleChange} type="text" name="userId" id="userinput" value={this.props.form.userId}/> 
                    <TextField onChange = {this.props.handleChange} label="Id" type="text" name="id" id="idi" value={this.props.form.id}/>
                    <TextField onChange = {this.props.handleChange} type="text" label = "titulo" name="title" id="title" value={this.props.form.title}/>
                    <Checkbox onChange = {this.props.handleChange} type="checkbox" name="completed" id="completed" value={this.props.form.completed} color="Primary"/>
                    <button>Crear tarea</button>
                </form>
                <h2>Mis tareas</h2>
                <div className="tareas">
                    {this.props.todosList.map(
                        (item, key) => 
                            <TodoItem key={key} {...item}/>
                        
                    )}
                </div>
            </section>

        )

    }

}

const mapDispatchToProps = /*(dispatch) => */{
//    return {

        getTodos,
        handleChange,
        addTodos

    }
///}

const mapStateToProps = (state) => {
    console.log(state.todos);
    return{
        todosList : state.todos,
        form: state.todosForm
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Todos)