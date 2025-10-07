import React from "react";

export default function PromptInput({ label, value, onChange, rows = 4 }) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <textarea value={value} onChange={onChange} className="input h-auto" rows={rows} />
    </div>
  );
}
