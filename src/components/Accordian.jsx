import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden transition-all"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {open ? (
          <FaChevronUp className="text-[#E67817]" />
        ) : (
          <FaChevronDown className="text-[#E67817]" />
        )}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="m-4  text-gray-700 text-sm border-t pt-4 border-gray-300 mx-6">{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default Accordion;
