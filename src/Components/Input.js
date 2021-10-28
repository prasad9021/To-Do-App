import React, { useState } from 'react';
import Button from './Button';

function Input(props) {
  let strNewToDoName = '';

  const [boolIsValid, setIsValid] = useState(true);

  function getInputValue(objInput) {
    console.log(objInput.target.value);
    strNewToDoName = objInput.target.value;
  }

  function createToDo() {
    if (strNewToDoName.length == 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onButtonClick(strNewToDoName);
  }

  return (
    <div>
      <div
        className={`alert alert-danger ${true === boolIsValid ? 'hide' : ''}`}
      >
        Please enter to do name
      </div>
      <div class="row m-1 p-3">
        <div class="col col-11 mx-auto">
          <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div class="col">
              <input
                class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                placeholder="Add new .."
                onChange={getInputValue}
              />
            </div>
            <button
              onClick={createToDo}
              type="button"
              className="btn btn-success"
            >
              Add
            </button>
            <div class="col-auto px-0 mx-0 mr-2"></div>
          </div>
        </div>
      </div>
      <div class="p-2 mx-4 border-black-25 border-bottom"></div>
    </div>
  );
}
export default Input;
