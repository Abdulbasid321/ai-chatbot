// import { useState } from "react";
// import { QuestionNode } from "../data/question";

// type Props = {
//   node: QuestionNode;
//   onAnswer: (text: string) => void;
// };

// const QuestionNodeComponent = ({ node, onAnswer }: Props) => {
//   const [expanded, setExpanded] = useState(false);

//   const handleClick = () => {
//     if (node.answer) {
//       onAnswer(node.answer);
//     } else {
//       setExpanded(!expanded);
//     }
//   };

//   return (
//     <div className="ml-4 mb-2">
//       <button
//         className="text-left w-full text-blue-600 hover:underline"
//         onClick={handleClick}
//       >
//         • {node.question}
//       </button>
//       {expanded && node.children && (
//         <div className="ml-4 border-l-2 border-gray-300 pl-2 mt-1">
//           {node.children.map((child) => (
//             <QuestionNodeComponent
//               key={child.id}
//               node={child}
//               onAnswer={onAnswer}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuestionNodeComponent;


import { useState } from "react";
import { QuestionNode } from "../data/question";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

type Props = {
  node: QuestionNode;
  onAnswer: (text: string) => void;
};

const QuestionNodeComponent = ({ node, onAnswer }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (node.answer) {
      onAnswer(node.answer);
    } else {
      setExpanded(!expanded);
    }
  };

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="ml-2 mb-3">
      <button
        className={`flex items-center gap-2 w-full px-4 py-2 rounded-md shadow-sm ${
          hasChildren
            ? "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            : "text-blue-600 hover:underline"
        }`}
        onClick={handleClick}
      >
        {hasChildren &&
          (expanded ? (
            <FiChevronDown className="text-lg" />
          ) : (
            <FiChevronRight className="text-lg" />
          ))}
        <span>{node.question}</span>
      </button>

      {expanded && node.children && (
        <div className="ml-4 mt-2 border-l pl-3 border-gray-300">
          {node.children.map((child) => (
            <QuestionNodeComponent
              key={child.id}
              node={child}
              onAnswer={onAnswer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionNodeComponent;
