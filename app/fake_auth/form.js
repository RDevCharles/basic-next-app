"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import "aos/dist/aos.css";
import AOS from 'aos'; 



export default function AuthForm(props) {
    useEffect(() => {
        AOS.init(); 
      }, []);
    
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div data-aos="fade-up" className="w-96 h-25 mx-auto mt-8 p-12 bg-gray-100 rounded shadow-lg mt-40">
      <h1 className="text-2xl font-semibold text-center mb-4">Todo App</h1>
      <form className="space-y-4">
        <div className="flex flex-col">
          <input
            onChange={handleUpdate}
            placeholder="username"
            type="text"
            name="username"
            value={form.username}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex flex-col">
          <input
            onChange={handleUpdate}
            placeholder="password"
            type="password"
            name="password"
            value={form.password}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <Link href="/todo">
          <button style={{ marginTop: "1rem" }}>
            <p>Login</p>
          </button>
        </Link>
      </form>
    </div>
  );
}
