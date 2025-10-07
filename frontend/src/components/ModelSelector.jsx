import React from "react";

export default function ModelSelector({ value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="input">
      <option>ChatGPT</option>
      <option>Gemini 1.5 Pro</option>
      <option>Claude</option>
      <option>Cursor</option>
    </select>
  );
}
