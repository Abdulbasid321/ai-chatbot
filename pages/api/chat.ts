// // pages/api/chat.ts (for Pages Router)
// import type { NextApiRequest, NextApiResponse } from "next";
// import { OpenAI } from "openai";

// const openai = new OpenAI({
//   apiKey:process.env.OPENAI_API_KEY,
//    baseURL: 'https://openrouter.ai/api/v1',
// });


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { message } = req.body;

//   if (!message) {
//     return res.status(400).json({ error: "No message provided" });
//   }

//   try {
//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are a helpful assistant for Federal College of Forestry. Answer questions about admission, school fees, accommodation, courses, and other relevant topics.",
//         },
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//     });

//     const reply = completion.choices[0].message.content;
//     res.status(200).json({ reply });
//   } catch (err) {
//     console.error("OpenAI error:", err);
//     res.status(500).json({ error: "Failed to generate response" });
//   }
// }


// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "No message provided" });
  }

  try {
    // const completion = await openai.chat.completions.create({
    //   model: "mistralai/mistral-7b-instruct",  // ✅ fixed here
    //   messages: [
    //     {
    //       role: "system",
    //       content:
    //         "You are a helpful assistant for Federal College of Forestry. Answer questions about admission, school fees, accommodation, courses, and other relevant topics.",
    //     },
    //     {
    //       role: "user",
    //       content: message,
    //     },
    //   ],
    // });
const completion = await openai.chat.completions.create({
  model: "mistralai/mistral-7b-instruct", // or your correct model path
  messages: [
    {
      role: "system",
      content: `
You are a helpful and knowledgeable assistant for **Federal College of Forestry, Jos, Plateau State**. 
Only provide information relevant to this school, including:

- Admission process
- JAMB cut-off marks
- School fees
- Available courses
- Hostel/accommodation
- Document requirements
- Academic calendar
- Campus life
- Scholarships and grants
- Contact/support details

If the question is not related to this college, politely say you can only answer questions about Federal College of Forestry, Jos.
      `.trim(),
    },
    {
      role: "user",
      content: message,
    },
  ],
});

    const reply = completion.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI error:", err);
    res.status(500).json({ error: "Failed to generate response" });
  }
}
