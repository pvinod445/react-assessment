import React, { Component } from 'react';

import CheckBox from '../../components/CheckBox/CheckBox';
import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          totalListArray: [],
          checked: 0,
          counter: 0
        }
    }    

    newTodo = () => {
      let currentTotalLists = this.state.totalListArray;
      let uniqueKey = parseInt(this.state.counter);

      let tmp = (<li key={uniqueKey} id={uniqueKey} >
                  <CheckBox value={uniqueKey} 
                            id={'check'+uniqueKey} 
                            changeHandler={this.checkBoxChangeHandler.bind(this, uniqueKey)} /> 
                  <TextField />
                  <Button value='Delete' 
                          id={'Date'+uniqueKey} 
                          clicked={this.clickHandler.bind(this, uniqueKey)} />
                </li>);
      
      currentTotalLists.push({totalElement: tmp, key: uniqueKey, isChecked: false});
      uniqueKey++;
      this.setState({totalListArray: currentTotalLists, counter: uniqueKey});
    }

    clickHandler(id){
      let checkedQty = this.state.checked;
      let Current = [];
      this.state.totalListArray.filter(function(item) {
        if(item.key !== id) {
          Current.push(item);
        }
      });
      let resultedArray = this.state.totalListArray.filter(function(item) {
        if(item.key == id && item.isChecked) {
          checkedQty = checkedQty - 1;
        }  
        return (item.key !== id)
      })

      this.setState({totalListArray: resultedArray, checked: checkedQty});
    }

    checkBoxChangeHandler(id) {
      let checkedQty = parseInt(this.state.checked);
      let Current = []
      this.state.totalListArray.filter(function(item) { 
        if(item.key!==id) {
          Current.push(item);
        }
        if(item.key == id && item.isChecked === false) {
          item.isChecked = true;
          checkedQty = checkedQty + 1;
          Current.push(item);
        }  
        else if(item.key == id && item.isChecked) {
          item.isChecked = false;
          checkedQty = checkedQty - 1;
          Current.push(item);
        }  
      })
      
      this.setState({totalElement: Current,checked: checkedQty});      
    }

    render() {      
        return (
          <div className="container center">
              <h1 className="center title">My TODO App</h1>
              <div className="flow-right controls">
              <span>Item count: <span id="item-count">{this.state.totalListArray.length}</span></span>
              <span>Unchecked count: <span id="unchecked-count">{parseInt(this.state.totalListArray.length) - parseInt(this.state.checked)}</span></span>
              </div>
              <button className="button center" onClick={this.newTodo}>New TODO</button>
              <ul id="todo-list" className="todo-list">
              {this.state.totalListArray.map(Element => Element["totalElement"])}
              </ul>
          </div>
        );
    }
}

export default Todo;