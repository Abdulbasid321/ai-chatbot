// "use client"
// import { useState } from "react";
// import MessageBubble from "./MessageBubble";
// import QuestionNodeComponent from "./QuestionNode";
// import { questions as initialQuestions } from "../data/question";

// const ChatWindow = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hi! What would you like to know about the school?", isBot: true },
//   ]);

//   const handleAnswer = (answer: string) => {
//     setMessages((prev) => [
//       ...prev,
//       { text: answer, isBot: true },
//     ]);
//   };

//   return (
//     <div className="max-w-2xl mx-auto h-screen flex flex-col">
//      <div className="bg-green-600 text-white px-4 py-3 shadow-md flex items-center space-x-3">
//   <img
//     src="/chatbot-icon.png"
//     alt="Chatbot"
//     className="w-10 h-10 rounded-full bg-white p-1"
//   />
//   <div>
//     <h1 className="text-lg font-bold leading-tight">Federal College of Forestry</h1>
//     <p className="text-sm text-white/90">Official Chat Assistant</p>
//   </div>
// </div>


//       <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
//         {messages.map((msg, idx) => (
//           <MessageBubble key={idx} text={msg.text} isBot={msg.isBot} />
//         ))}

//         <div className="mt-4">
//           {initialQuestions.map((node) => (
//             <QuestionNodeComponent
//               key={node.id}
//               node={node}
//               onAnswer={handleAnswer}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;

            // "use client";
            // import { useState, useEffect, useRef } from "react";
            // import MessageBubble from "./MessageBubble";
            // import Image from 'next/image'; // ✅ always lowercase "image"

            // const ChatWindow = () => {
            //   const [messages, setMessages] = useState([
            //     { text: "👋 Hi! What would you like to know about the school?", isBot: true },
            //   ]);
            //   const [userInput, setUserInput] = useState("");
            //   const [loading, setLoading] = useState(false);
            //   const messagesEndRef = useRef<HTMLDivElement>(null);

            //   const scrollToBottom = () => {
            //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
            //   };

            //   useEffect(() => {
            //     scrollToBottom();
            //   }, [messages, loading]);

            //   const sendMessage = async () => {
            //     if (!userInput.trim()) return;
            //     const question = userInput.trim();
            //     setMessages((prev) => [...prev, { text: question, isBot: false }]);
            //     setUserInput("");
            //     setLoading(true);

            //     try {
            //       const res = await fetch("/api/chat", {
            //         method: "POST",
            //         headers: { "Content-Type": "application/json" },
            //         body: JSON.stringify({ message: question }),
            //       });
            //       const data = await res.json();
            //       setMessages((prev) => [...prev, { text: data.reply, isBot: true }]);
            //     } catch (error) {
            //       console.error("Error:", error);
            //       setMessages((prev) => [
            //         ...prev,
            //         { text: "❗ Sorry, something went wrong. Try again later.", isBot: true },
            //       ]);
            //     } finally {
            //       setLoading(false);
            //     }
            //   };

            //   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            //     if (e.key === "Enter") sendMessage();
            //   };

            //   return (
            //     <div className="max-w-2xl mx-auto h-screen flex flex-col bg-gradient-to-br from-green-50 to-white border shadow-lg rounded-lg overflow-hidden">
            //       {/* Header */}
            //       <div className="bg-green-700 text-white px-5 py-4 flex items-center gap-4 shadow-md backdrop-blur-sm">
            //         <img
            //           src="/forestry01"
            //           alt="Chatbot"
            //           className="w-12 h-12 rounded-full bg-white p-1 shadow-md"
            //         />
            //         <div>
            //           <h1 className="text-xl font-bold">Federal College of Forestry</h1>
            //           <p className="text-sm opacity-90">🎓 Official Chat Assistant</p>
            //         </div>
            //       </div>

            //       {/* Messages */}
            //       <div className="flex-1 bg-gradient-to-b from-white to-green-50 p-4 overflow-y-auto">
            //         {messages.map((msg, idx) => (
            //           <MessageBubble key={idx} text={msg.text} isBot={msg.isBot} />
            //         ))}

            //         {loading && (
            //           <div className="animate-pulse text-green-500 text-sm mt-2">
            //             AI is typing<span className="animate-bounce">...</span>
            //           </div>
            //         )}
            //         <div ref={messagesEndRef}></div>
            //       </div>

            //       {/* Input */}
            //       <div className="p-4 bg-white border-t flex items-center gap-3">
            //         <input
            //           type="text"
            //           value={userInput}
            //           onChange={(e) => setUserInput(e.target.value)}
            //           onKeyDown={handleKeyDown}
            //           placeholder="Ask a question about the school..."
            //           className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            //         />
            //         <button
            //           onClick={sendMessage}
            //           className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-all"
            //         >
            //           Send 🚀
            //         </button>
            //       </div>
            //     </div>
            //   );
            // };

            // export default ChatWindow;
  "use client";
import { useState, useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import Image from "next/image";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "👋 Hi! What would you like to know about the school?", isBot: true },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    const question = userInput.trim();
    setMessages((prev) => [...prev, { text: question, isBot: false }]);
    setUserInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { text: data.reply, isBot: true }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "❗ Sorry, something went wrong. Try again later.", isBot: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="max-w-2xl mx-auto h-screen flex flex-col bg-gradient-to-br from-green-50 to-white border shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-green-700 text-white px-5 py-4 flex items-center gap-4 shadow-md backdrop-blur-sm">
        <Image
          src="/images/forestry01.jpg"
          alt="Chatbot"
          width={48}
          height={48}
          className="rounded-full bg-white p-1 shadow-md"
        />
        <div>
          <h1 className="text-xl font-bold">Federal College of Forestry, JOS</h1>
          <p className="text-sm opacity-90">🎓 Official Chat Assistant</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 bg-gradient-to-b from-white to-green-50 p-4 overflow-y-auto">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} text={msg.text} isBot={msg.isBot} />
        ))}

        {loading && (
          <div className="flex justify-start mb-2">
            <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-2xl shadow text-gray-600 text-sm">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:100ms]" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:200ms]" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t flex items-center gap-3">
        {/* <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about the school..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        /> */}

        <input
  type="text"
  value={userInput}
  onChange={(e) => setUserInput(e.target.value)}
  onKeyDown={handleKeyDown}
  placeholder="Ask a question about the school..."
  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition 
             text-black placeholder-gray-500 bg-white text-base sm:text-sm"
/>

        <button
          onClick={sendMessage}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-all"
        >
          Send 🚀
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;



// "use client";
// import { useState } from "react";
// import MessageBubble from "./MessageBubble";

// const ChatWindow = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hi! What would you like to know about the school?", isBot: true },
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!userInput.trim()) return;

//     const question = userInput.trim();
//     setMessages((prev) => [...prev, { text: question, isBot: false }]);
//     setUserInput("");
//     setLoading(true);
    

//     try {
//       const res = await fetch("/api/chat", {

//       // const res = await fetch("http://localhost:5000/api/chat", {
//       // const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: question }),
//       });

//       const data = await res.json();
//       setMessages((prev) => [...prev, { text: data.reply, isBot: true }]);
//     } catch (error) {
//       console.error("Error:", error);
//       setMessages((prev) => [
//         ...prev,
//         { text: "Sorry, something went wrong. Please try again later.", isBot: true },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") sendMessage();
//   };

//   return (
//     <div className="max-w-2xl mx-auto h-screen flex flex-col">
//       {/* Header */}
//       <div className="bg-green-600 text-white px-4 py-3 shadow-md flex items-center space-x-3">
//         <img
//           src="/chatbot-icon.png"
//           alt="Chatbot"
//           className="w-10 h-10 rounded-full bg-white p-1"
//         />
//         <div>
//           <h1 className="text-lg font-bold leading-tight">Federal College of Forestry</h1>
//           <p className="text-sm text-white/90">Official Chat Assistant</p>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
//         {messages.map((msg, idx) => (
//           <MessageBubble key={idx} text={msg.text} isBot={msg.isBot} />
//         ))}

//         {loading && (
//           <div className="text-sm text-gray-500 mt-2">Thinking...</div>
//         )}
//       </div>

//       {/* Input */}
//       <div className="p-4 bg-white border-t flex items-center gap-2">
//         <input
//           type="text"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Type your question..."
//           className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;
