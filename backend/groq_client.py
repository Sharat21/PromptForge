import os
import requests
from dotenv import load_dotenv
from utils.constants import SYSTEM_PROMPT_TEMPLATE, REFINE_AGENT_PROMPT

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
BASE_URL = "https://api.groq.com/openai/v1/chat/completions"

DEFAULT_MODEL = "openai/gpt-oss-120b"

def call_groq(messages, backend_model=DEFAULT_MODEL):
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": backend_model,
        "messages": messages,
        "temperature": 0.7
    }
    response = requests.post(BASE_URL, headers=headers, json=payload, timeout=30)
    response.raise_for_status()
    return response.json()["choices"][0]["message"]["content"].strip()

def generate_prompt(target_model, prompt_type, base_prompt, additional_info="", iterations=0, backend_model=DEFAULT_MODEL):
    from utils.helpers import combine_prompt

    full_input = combine_prompt(base_prompt, additional_info)

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT_TEMPLATE},
        {"role": "user", "content": f"Generate a prompt suitable for {target_model}.\nType: {prompt_type}\nUser Input: {full_input}"}
    ]
    print("🛠️ Generating initial prompt...")
    print("Messages:", messages)

    prompt = call_groq(messages, backend_model)

    for i in range(iterations):
        eval1 = call_groq([
            {"role": "system", "content": REFINE_AGENT_PROMPT},
            {"role": "user", "content": prompt}
        ], backend_model)
        eval2 = call_groq([
            {"role": "system", "content": REFINE_AGENT_PROMPT},
            {"role": "user", "content": prompt}
        ], backend_model)
        combined_feedback = f"Feedback A: {eval1}\nFeedback B: {eval2}\nImprove the prompt accordingly."
        prompt = call_groq([
            {"role": "system", "content": "You are PromptForge Refinement Engine."},
            {"role": "user", "content": combined_feedback}
        ], backend_model)

    return prompt
