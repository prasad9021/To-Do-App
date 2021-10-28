import React, { useState } from 'react';
import './style.css';
import './bootstrap.min.css';
import Title from './Components/Title';
import Input from './Components/Input';
import ToDoLists from './Components/ToDoLists';

export default function App() {
  const arrobjToDoLists = [
    {
      title: 'first to do',
    },
    {
      title: 'second to do',
    },
  ];

  // const [ arrobjStateLists, updateList ] = useState();
  const [arrobjStateLists, updateStateData] = useState(arrobjToDoLists);

  function addNewTodo(strToDoName) {
    console.log('1st');
    const arrstrNewToDo = [...arrobjStateLists];
    arrstrNewToDo.push({
      title: strToDoName,
    });

    // updating state data
    updateStateData(arrstrNewToDo);
  }

  function addNewTodo(strToDoName) {
    console.log('2nd');
    const arrstrNewToDo = [...arrobjStateLists];
    arrstrNewToDo.push({
      title: strToDoName,
    });

    // updating state data
    updateStateData(arrstrNewToDo);
  }

  return (
    <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
      <Title />
      <Input onButtonClick={addNewTodo} />
      <ToDoLists lists={arrobjStateLists} />
    </div>
  );
}
