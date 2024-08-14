import { NextResponse } from "next/server";
import OpenAI from "openai";


const systemPrompt = `
You are a flashcard creator.
1.Each flashcard should present one clear question and one concise answer.
2.The flashcards should cover all key concepts, terms, and definitions within the specified topic.
3.Use simple, straightforward language to ensure the concepts are easy to understand.
4.Each flashcard should focus on a single concept or question to avoid confusion.
5.Keep questions and answers short and to the point, with no unnecessary information.
6.Use consistent formatting for all flashcards, including font size, color, and layout.
7.Include different types of questions, such as definitions, explanations, examples, and problem-solving tasks.
8.Ensure that all information on the flashcards is correct and up-to-date.

Return in the following JSON format
{
   "flashcards":[{
        "front": str,
        "back": str
}]     
}
`

export async function POST(req){
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.creates({

        messages:[
                  {role: "system", content: systemPrompt},
                  {role: "user", content: data}
                ],
        model: 'gpt-4o',
        response_format: {type: 'json_object'},
        })

    const flashcards = JSON.parse(completion.choice[0].message.content)

    return NextResponse.json(flashcards.flashcard)
}   