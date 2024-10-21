import React from "react";
// import clsx from "clsx";
import classNames from "classnames";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 bg-zinc-900/90 h-72 rounded-[40px] text-white py-10 px-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="mt-5 leading-tight font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".8em" colo="#fff" />}
          </span>
        </div>
        {data.tag.isopen && (
          <div
            className={`tag w-full py-4 flex items-center justify-center ${
              data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
