from flask import Flask, request, jsonify
from flask_cors import CORS
from groq_client import generate_prompt

app = Flask(__name__)
CORS(app)

@app.route('/api/generate', methods=['POST'])
def generate():
    data = request.json
    target_model = data.get("target_model", "ChatGPT")
    prompt_type = data.get("prompt_type", "regular")
    base_prompt = data.get("base_prompt", "")
    additional_info = data.get("additional_info", "")
    iterations = int(data.get("iterations", 0))

    try:
        result = generate_prompt(target_model, prompt_type, base_prompt, additional_info, iterations)
        return jsonify({"prompt": result})
    except Exception as e:
        print("❌ Error generating prompt:", e)
        return jsonify({"error": str(e)}), 500
