import { NextResponse   } from "next/server";  
import OpenAi, { OpenAI } from 'openai' 

const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines.

1. Keep your answers concise and to the point.
2. Use simple language that is easy to understand.
3. Provide accurate and informative answers for the back of the flashcard.
4. Ensure that each flashcard focuses on a single concept or piece of information.
5. Include a variety of question, types such as definitions, examples, comparisons, and applications
6. Avoid overly complex or abiguous phrasing in both questions and answers
Return in the following JSON format
{
    "flashcards": [
    {
        "front": str,
        "back": str 
        }
    ]
}

`

export async function POST(req){
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({   
        messages: [
            {
                role: "system", content: systemPrompt},

            {
                role: "user", content: data
            }
            
        ],
        model: "gpt-4o",
        response_format: {type: 'json_object'},
    })

    const flashcards = JSON.parse(completion.choices(0).message.content)

    return NextResponse.json(flashcards.flashcard)
}