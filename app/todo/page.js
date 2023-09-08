"use client";
import TodoForm from "./form";
import TodoList from "./todolist";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import Advice from "../api/advice";

export default function TodoPage() {
  const [items, setItems] = useState([]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Link className="absolute top-4 left-3 p-4" href="/">
        <div className="group relative">
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 transition-opacity opacity-0 group-hover:opacity-100 duration-400 rounded-full"></div>
            <ArrowLeftIcon className="w-6 h-6 text-gray-500 absolute inset-0 m-auto" />
          </div>
        </div>
      </Link>
      <Advice />
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
        <TodoList items={items} setItems={setItems} />
        <TodoForm items={items} setItems={setItems} />
      </div>
    </div>
  );
}
