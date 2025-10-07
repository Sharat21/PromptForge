import React from "react";

export default function AdvancedSettings({ iterations, setIterations }) {
  return (
    <div className="flex flex-col gap-1">
      <label>Refinement Iterations (Advanced)</label>
      <input type="number" min={0} value={iterations} onChange={e => setIterations(parseInt(e.target.value))} className="input" />
    </div>
  );
}
