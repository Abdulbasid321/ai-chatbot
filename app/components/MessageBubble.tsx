// import React from "react";

// type Props = {
//   text: string;
//   isBot?: boolean;
// };

// const MessageBubble = ({ text, isBot }: Props) => (
//   <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
//     <div
//       className={`m-2 p-3 rounded-lg max-w-[70%] text-sm ${
//         isBot
//           ? "bg-gray-200 text-gray-800"
//           : "bg-green-500 text-white"
//       }`}
//     >
//       {text}
//     </div>
//   </div>
// );

// export default MessageBubble;


"use client";
import React from "react";

interface MessageProps {
  text: string;
  isBot: boolean;
}

const MessageBubble: React.FC<MessageProps> = ({ text, isBot }) => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-3`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl shadow-md relative text-sm whitespace-pre-line ${
          isBot
            ? "bg-white text-gray-800 border border-green-100"
            : "bg-green-600 text-white"
        }`}
      >
        {text}
        <span
          className={`text-[10px] mt-1 absolute -bottom-4 right-2 ${
            isBot ? "text-gray-400" : "text-white/70"
          }`}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
