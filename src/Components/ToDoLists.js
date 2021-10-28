import React from 'react';

function ToDoLists(props) {
  console.log(props.lists);
  return (
    <div>
      {props.lists.map((list) => (
        <div class="row mx-1 px-5 pb-3 w-80">
          <div class="col mx-auto">
            <div class="row px-3 align-items-center todo-item rounded">
              <div class="col px-1 m-1 d-flex align-items-center">
                <input
                  type="text"
                  class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                  readonly=""
                  value={list.title}
                  title={list.title}
                />
              </div>
              <div class="col-auto m-1 p-0 px-3 d-none"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoLists;
