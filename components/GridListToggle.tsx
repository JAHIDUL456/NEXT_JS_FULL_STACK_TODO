// 'use client';

// import { FaThLarge, FaList } from 'react-icons/fa';
// import { MdCheck } from 'react-icons/md';
// import { motion, AnimatePresence } from 'framer-motion';

// type Props = {
//   isGridView: boolean;
//   toggleView: () => void;
// };

// export default function GridListToggle({ isGridView, toggleView }: Props) {
//   return (
//     <div className="flex w-fit overflow-hidden rounded-3xl  border border-black">
//       {/* Grid View Button */}
//       <button
//         onClick={() => !isGridView && toggleView()}
//         className={`flex items-center gap-1 p-2.5  text-sm transition-all duration-300 w-full h-full  ${
//           isGridView ? 'bg-sky-500 text-white' : 'bg-white text-black'
//         }`}
//       >
//         <FaThLarge />
//         {/* Reserve space for check icon to avoid size jump */}
//         <span className="ml-1 w-4 h-4 flex items-center justify-center">
//           <AnimatePresence>
//             {isGridView && (    
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.25 }}
//               >
//                 <MdCheck className="text-white text-sm" />
//               </motion.span>
//             )}
//           </AnimatePresence>
//         </span>
//       </button>

//       {/* Full Height Divider */}
//       <div className="w-[1px] bg-black" />

//       {/* List View Button */}
//       <button
//         onClick={() => isGridView && toggleView()}
//         className={`flex items-center gap-1 p-2.5 text-sm transition-all duration-300 w-full h-full  ${
//           !isGridView ? 'bg-sky-500 text-white' : 'bg-white text-black'
//         }`}
//       >
//         <FaList />
//         <span className="ml-1 w-4 h-4 flex items-center justify-center">
//           <AnimatePresence>
//             {!isGridView && (
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.25 }}
//               >
//                 <MdCheck className="text-white text-sm" />
//               </motion.span>
//             )}
//           </AnimatePresence>
//         </span>
//       </button>
//     </div>
//   );
// }



'use client';

import { FaThLarge, FaList } from 'react-icons/fa';
import { MdCheck } from 'react-icons/md';
import { useState } from 'react';

type Props = {
  isGridView: boolean;
  toggleView: () => void;
};

export default function GridListToggle({ isGridView, toggleView }: Props) {
  return (
    <div className="flex w-fit overflow-hidden rounded-3xl border border-black">
      {/* Grid Button */}
      <button
        onClick={() => !isGridView && toggleView()}
        className={`flex items-center w-[60px] h-[35px] transition-all duration-300 ${
          isGridView
            ? 'bg-sky-500 text-white justify-between px-3'
            : 'bg-white text-black justify-center'
        }`}
      >
        {isGridView && <MdCheck className="text-white text-base animate-fade-in" />}
        <FaThLarge className="text-base" />
      </button>

      {/* Divider */}
      <div className="w-[1px] h-full bg-black" />

      {/* List Button */}
      <button
        onClick={() => isGridView && toggleView()}
        className={`flex items-center w-[60px] h-[35px] transition-all duration-300 ${
          !isGridView
            ? 'bg-sky-500 text-white justify-between px-3'
            : 'bg-white text-black justify-center'
        }`}
      >
        {!isGridView && <MdCheck className="text-white text-base animate-fade-in" />}
        <FaList className="text-base" />
      </button>

      {/* Smooth tick icon animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
