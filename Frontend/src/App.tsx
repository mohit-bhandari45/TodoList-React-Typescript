import React from "react";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  todo: string;
  isCompleted: boolean;
}

const App = () => {
  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);
  const [showFinished, setshowFinished] = useState<boolean>(true);
  const [bool, setbool] = useState<boolean>(true);
  const [op, setop] = useState<number>(1);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    let a = await fetch("http://localhost:3000/fetchtodos");
    let b = await a.json();
    settodos(b);
  }

  const saveToDB = async () => {
    let del = await fetch("http://localhost:3000/deletetodos", { method: "DELETE" });
    let res = await del.json();
    console.log(res);
    let a = await fetch("http://localhost:3000/savetodos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todos)
    });
    console.log(await a.json());
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  }

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    saveToDB();
  }

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    let t = todos.filter(i => i.id === id);

    settodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    settodos(newTodos);
    saveToDB();
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    settodos(newTodos);
    saveToDB();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settodo(e.target.value);
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
    saveToDB();
  }

  const handleClick = () => {
    setbool(!bool);
    setop(bool ? 1 : 0);
  }

  return (
    <>
      <Navbar />
      <div className="md:container mx-3 md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-center text-2xl">iTask-Manage your todos at one place</h1>
        <div className="addtodo my-5">
          <h1 className="text-xl font-bold my-2">Add a Todo</h1>
          <input onChange={handleChange} value={todo} type="text" className="w-[90%] rounded-full px-5 py-1" />
          <button onClick={handleAdd} disabled={todo.length <= 3} className="bg-violet-800 disabled:bg-violet-600 hover:bg-violet-950 text-white text-sm font-bold rounded-md p-3 py-1 mx-2">Save</button>
        </div>
        <input className="my-4" onChange={toggleFinished} type="checkbox" checked={showFinished} />Show Finished
        <h1 className="text-xl font-bold">Your Todos</h1>

        <div style={{ opacity: op }} className="todos">
          {todos.length === 0 && <div className="m-5">No Todos To Display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between md:w-[95%] my-3">
              <div className="flex gap-5">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" id="" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className="bg-violet-800 hover:bg-violet-950 text-white text-sm font-bold rounded-md p-3 py-1 mx-1">Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-violet-800 hover:bg-violet-950 text-white text-sm font-bold rounded-md p-3 py-1 mx-1">Delete</button>
              </div>
            </div>
          })}
        </div>
        <button onClick={handleClick} className="optbtn font-bold bg-[#6e5ac7] rounded-full px-5 py-2 text-white">Make Todos appear and disappear</button>
      </div>
    </>
  )
}

export default App;
