'use client'
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function Home() {

const [todo , settodo] = useState("");
const [todos , settodos] = useState<string[]>([]);



useEffect(()=>{
 const stored = localStorage.getItem("todos");
 if(stored)
  settodos(JSON.parse(stored));

}, []);

const handleSubmit = () => {
  if(!todo.trim()) return;

  const newTodos = [...todos , todo];
  settodos(newTodos);
  settodo("");
  localStorage.setItem("todos" , JSON.stringify(newTodos));

};

const handleDeleteAll = () =>{
  settodos([]);
  localStorage.removeItem("todos");
}


const deleteTodo = (index: number) => {
  const newTodos = todos.filter((_, i) => i !== index);  // همه آیتم ها به غیر از آیتم اندکس که میخواهیم پاک شود نگهداشته شود
  settodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos)); // داده ها بعد از رفرش صفحه باقی میماند
};

const editTodo = (index: number) => {
  const newText = prompt("Edit todo:", todos[index]);
  if (newText && newText.trim()) {
    const newTodos = [...todos];
    newTodos[index] = newText;
    settodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
};


  
  return (
   <div className="min-h-screen bg-green-200 flex flex-col">
    <Image className="absolute w-full object-cover h-60 opacity-60" src={"/todotopimage.png"} alt={"image"} width={1900} height={1900} />
    <div className="flex items-center p-15 justify-end">
      <h1 className="text-gray-600 absolute mr-25 top-20 font-extrabold text-5xl">Todo App</h1>

    </div>
    <Navbar />
    <div className="flex flex-row items-center justify-center gap-2 mt-20 mb-8 "> 
      <input 
       value={todo}
       onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSubmit();
        }
      }}
       onChange={(e) => settodo(e.target.value) }
      className="w-250 h-8 bg-white border border-gray-500  rounded-md pl-2"
      type="text"  
      placeholder="Write Something.." />

    <button
     onClick={handleSubmit}
    className="rounded-md p-2 text-sm bg-green-700 text-white hover:bg-green-800 transition">Add New</button>
       <button
    onClick={handleDeleteAll}
    className="rounded-md p-2 text-sm bg-red-500 text-white hover:bg-red-700 transition">Delete All</button>
   
    
</div>

<div className="mt-6 w-full items-center">
{todos.map((t , i) =>(
 <div key={i} className="flex justify-between  p-3 hover:bg-gray-200 mb-2 border border-gray-400 rounded-xl ml-10 mr-10 bg-green-100">
   <span>{t}</span>

   <div className="flex gap-2">
   <button onClick={() => editTodo(i)} className="bg-blue-600 p-1 rounded-md transition text-white hover:bg-blue-500">Edit</button>
   <button onClick={() => deleteTodo(i)} className="bg-red-600 p-1 rounded-md transition text-white hover:bg-red-500">Delete</button>
    </div> 


   
    
    </div>


)) }
</div>
   </div>
  );
}

