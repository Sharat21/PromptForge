from backend.agents.evaluator_agent import evaluate_prompt
from backend.groq_client import groq_generate

def refine_prompt(prompt, iterations=1):
    current_prompt = prompt

    for i in range(iterations):
        eval_1 = evaluate_prompt(current_prompt, "Evaluator A")
        eval_2 = evaluate_prompt(current_prompt, "Evaluator B")

        merged_feedback = f"Evaluator A Feedback:\n{eval_1}\n\nEvaluator B Feedback:\n{eval_2}\n\n"
        refinement_instruction = f"""
        Refine the original prompt based on the merged feedback below:
        {merged_feedback}
        """

        current_prompt = groq_generate(refinement_instruction)

    return current_prompt
