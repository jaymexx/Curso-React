import React, { Component } from 'react';
import { Header } from './Header';
import List from '../containers/List';
import { connect } from "react-redux";
import { createNewList } from "../state/lists/action-creators";

import '../styles/App.css';

class App extends Component {
  render() {
    return(
      <>
        <Header>Go For It!</Header>
        <button onClick={()=>this.props.createNewList()} className="tdl-add_list_button">Create new list</button>
        <section className="tdl-main-section">
          {this.props.lists.map((list, idx, lists) => (
            <List
              newListName={() => this.newListName(idx)}
              key={idx}
              submitName={this.submitName}
              changeListName={() => this.changeListName(idx)}
            >
              {list}
            </List>
          ))}
        </section>
      </>
  )};

  // No se usa porque lo coge del stateInitial de list
  constructor(props) {
    super(props)
    this.state = {
      lists: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    }

    this.changeListName = this.changeListName.bind(this);
  }

  changeListName(index, event) {
    let newArr = this.state.lists.slice(0);
    newArr[index] = "";

    this.setState({
      lists: newArr
    });
  }

  newListName(index, event) {
    let newArr = this.state.lists.slice(0);
    newArr[index] = event.target.value;

    this.setState({
      lists: newArr
    });
  }

  submitName = (event) => {
    if(event.keyCode === 13){ event.target.blur() }
  }
}

// Conecto el componente al Store y mapeo lo que necesito a props 

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

function mapDispatchToProps(dispatch) {
  return { createNewList: () => dispatch(createNewList()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


