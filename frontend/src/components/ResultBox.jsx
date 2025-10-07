import React, { useEffect, useRef } from "react";

export default function ResultBox({ refProp, prompt, isLoading, onCopy, onDownload }) {
  const internalRef = useRef(null);
  const boxRef = refProp?.current ? refProp : internalRef;

  // Auto-scroll to top when prompt updates
  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = 0;
  }, [prompt]);

  return (
    <div className="relative h-full flex flex-col bg-gray-50 border border-gray-200 rounded-xl p-4">
      {/* Copy/Download Buttons */}
      <div className="flex justify-end gap-2 mb-2">
        <button
          onClick={onCopy}
          className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition"
        >
          Copy
        </button>
        <button
          onClick={onDownload}
          className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition"
        >
          Download
        </button>
      </div>

      {/* Scrollable Prompt Display */}
      <div
        ref={boxRef}
        className="overflow-y-auto flex-grow font-mono text-sm text-gray-800 leading-relaxed whitespace-pre-wrap"
        style={{ maxHeight: "420px" }}
      >
        {isLoading ? (
          <div className="text-gray-500 animate-pulse">⏳ Generating prompt...</div>
        ) : prompt ? (
          prompt
        ) : (
          <div className="text-gray-400">
            No prompt generated yet. Enter your inputs and click “Generate Prompt”.
          </div>
        )}
      </div>
    </div>
  );
}
