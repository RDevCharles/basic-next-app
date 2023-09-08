"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Advice() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  }, []);

  return (
    <div className="bg-white rounded p-4 shadow mb-8">
      <h2 className="text-xl font-semibold mb-2">Advice of the Day</h2>
      <p className="text-gray-700">{advice}</p>
    </div>
  );
}
