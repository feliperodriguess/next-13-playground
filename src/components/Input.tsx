"use client";

import { InputHTMLAttributes, useState } from "react";

export function Input({ ...props }: InputProps) {
  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="flex items-center gap-6 mx-auto">
      <label className="text-lg text-white">Input (Client Component):</label>
      <input
        className="bg-gray-800 border border-quaternary rounded-lg text-white px-4 py-2"
        onChange={handleChange}
        value={value}
        {...props}
      />
    </div>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
