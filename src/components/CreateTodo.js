import React, { Component } from 'react'

export class CreateTodo extends Component {
    constructor(){
        super();
        this.state = {
          name: ''
        };
      }
      render(){
        const { name } = this.state;
        return (
          <form>
            <input value={ name } onChange={ ev => this.setState({ name: ev.target.value})}/>
            <button onClick={()=> this.props.create(this.state.name)}>Create</button>
          </form>
        );
      }
}

const mapDispatchToProps = (dispatch)=> {
    return {
      create: async(name)=> {
        const todo = (await axios.post('/api/todos', { name })).data;
        dispatch({ type: 'CREATE', todo });
      }
    };
  }
  
export default connect(null, mapDispatchToProps)(CreateTodo);
  
