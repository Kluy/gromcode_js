import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class TasksList extends Component {

  render(){
    return (
        <ul className="list">
          {this.props.tasks.map(elem => <Task onChange={this.props.onChange} onDelete={this.props.onDelete} key={elem.id} {...elem} />)}
        </ul>
    );
  }
}

TasksList.propTypes = {
  tasks:PropTypes.arrayOf(PropTypes.object),
  onChange:PropTypes.func.isRequired,
  onDelete:PropTypes.func.isRequired,
}

TasksList.defaultProps = {
  done:false,
  tasks:[],
}

export default TasksList;
