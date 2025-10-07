import json

def format_json_prompt(base_prompt, additional_data):
    return json.dumps({
        "prompt": base_prompt,
        "details": additional_data
    }, indent=2)

def merge_feedback(eval_1, eval_2):
    return f"Evaluator A Feedback:\n{eval_1}\n\nEvaluator B Feedback:\n{eval_2}\n"

def combine_prompt(base_prompt, additional_info):
    full_input = base_prompt
    if additional_info:
        full_input += f"\nAdditional Info: {additional_info}"
    return full_input