# PromptForge  
### *Bridging the Gap in Prompt Engineering with AI-Powered Precision*

PromptForge is a full-stack application designed to **simplify and elevate prompt engineering** — enabling users to craft high-quality, structured, and model-specific prompts effortlessly.  
The system empowers anyone — from beginners to advanced AI developers — to generate refined prompts for **models like ChatGPT, Claude, Gemini, and Groq** with just a few clicks.

---

## 🌍 Project Overview

The core goal of **PromptForge** is to **reduce the gap in prompt engineering** by making it easier for users to create **advanced, structured prompts** for complex AI tasks — including:

- 🎬 **JSON prompts for video generation models** (with details like camera angles, duration, lighting, etc.)  
- 🧩 **System prompts** for defining model behaviors and context  
- 💬 **Regular creative or analytical prompts** for general LLM interactions  

This project leverages the **Groq API** for **fast and efficient LLM inference**, delivering results with minimal latency while maintaining exceptional prompt quality.

---

## ⚡ Key Features

✅ **Model-Aware Prompt Generation**  
Crafts prompts tailored for specific LLMs (ChatGPT, Claude, Gemini, etc.) with the correct structure, tone, and style.  

✅ **JSON-Based Prompt Support**  
Generates deeply detailed structured outputs — perfect for video, scene, and multimedia generation models.  

✅ **AI-Refined Prompt Evaluation (Advanced Mode)**  
Chains two evaluator agents to analyze and refine generated prompts through multiple iterations for clarity, alignment, and completeness.  

✅ **Dynamic Frontend with Typing Animation**  
Beautiful, modern React interface that simulates prompt “typing” as it generates responses.  

✅ **Fast Groq-Powered Backend**  
Built on Flask and integrated with Groq LLM API for near-real-time generation and refinement.  

---

## 🏗️ Tech Stack

**Frontend:**  
- React (Vite)  
- TailwindCSS  
- Framer Motion (for animations)

**Backend:**  
- Python (Flask)  
- Groq API  
- dotenv (for environment variables)

**Utilities:**  
- Custom refinement & evaluation agents  
- Structured constants and templates for system prompts  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/PromptForge.git
cd PromptForge
cd backend
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
pip install -r requirements.txt
```

Create a .env file with
```bash
GROQ_API_KEY=your_groq_api_key_here
```

Run the backend
```bash
python app.py
```

Run the frontend
```bash
cd frontend
npm install
npm run dev
```

## 🧩 System Prompt Design Philosophy

# The backend uses an advanced system prompt architecture that ensures:

- Contextually aware, structured prompt formatting.

- Auto-detection of key elements (e.g., duration, lighting, perspective).

- Adaptability for different model types and content generation tasks.

# These system prompts are capable of handling:

- Video generation models

- Audio synthesis prompts

- Story generation with scene breakdowns

- JSON schema-based outputs for agents

##🧪 Future Improvements

 - Integration with OpenAI and Anthropic APIs

 - Dark mode toggle in frontend

 - RAG-based context retrieval for data-grounded prompt generation

 - Export prompts as .json, .txt, or .yaml

 - Prompt history and version comparison
