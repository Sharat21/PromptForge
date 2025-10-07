import React from "react";

export default function PromptTypeSelector({ value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="input">
      <option value="regular">Regular</option>
      <option value="system">System</option>
      <option value="json">JSON</option>
    </select>
  );
}
