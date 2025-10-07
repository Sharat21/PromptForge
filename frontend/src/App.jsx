import React, { useState, useRef } from "react";
import ModelSelector from "./components/ModelSelector";
import PromptTypeSelector from "./components/PromptTypeSelector";
import PromptInput from "./components/PromptInput";
import AdvancedSettings from "./components/AdvancedSettings";
import ResultBox from "./components/ResultBox";
import typeWriter from "./animations/typingEffect";

export default function App() {
  const [targetModel, setTargetModel] = useState("ChatGPT");
  const [promptType, setPromptType] = useState("regular");
  const [basePrompt, setBasePrompt] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [iterations, setIterations] = useState(0);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resultBoxRef = useRef(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedPrompt("");
    try {
      const res = await fetch("http://127.0.0.1:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          target_model: targetModel,
          prompt_type: promptType,
          base_prompt: basePrompt,
          additional_info: additionalInfo,
          iterations
        })
      });
      const data = await res.json();
      if (data.prompt) {
        typeWriter(data.prompt, setGeneratedPrompt, resultBoxRef, 18);
      } else {
        setGeneratedPrompt("Error: " + (data.error || "Unknown"));
      }
    } catch (err) {
      setGeneratedPrompt("Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => navigator.clipboard.writeText(generatedPrompt);
  const handleDownload = () => {
    const blob = new Blob([generatedPrompt], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "prompt.txt";
    link.click();
  };

  return (
    <div className="max-h-screen bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto px-6 pt-24">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">PromptForge ⚙️</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-medium mb-1 block">Target Model</label>
              <ModelSelector value={targetModel} onChange={e => setTargetModel(e.target.value)} />
            </div>
            <div>
              <label className="font-medium mb-1 block">Prompt Type</label>
              <PromptTypeSelector value={promptType} onChange={e => setPromptType(e.target.value)} />
            </div>
          </div>

          <div className="mb-4">
            <PromptInput label="Base Prompt" value={basePrompt} onChange={e => setBasePrompt(e.target.value)} rows={4} />
          </div>

          <div className="mb-4">
            <PromptInput label="Additional Info" value={additionalInfo} onChange={e => setAdditionalInfo(e.target.value)} rows={2} />
          </div>

          <div className="mb-4">
            <AdvancedSettings iterations={iterations} setIterations={setIterations} />
          </div>

          <div className="mb-6">
            <button
              onClick={handleGenerate}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              {isLoading ? "⏳ Generating..." : "Generate Prompt"}
            </button>
          </div>

          <div className="mt-2">
            <h2 className="text-lg font-semibold mb-3">Generated Prompt</h2>
            <ResultBox
              refProp={resultBoxRef}
              prompt={generatedPrompt}
              isLoading={isLoading}
              onCopy={handleCopy}
              onDownload={handleDownload}
            />
          </div>
        </div>

        <div className="h-28" />
      </div>
    </div>
  );
}
