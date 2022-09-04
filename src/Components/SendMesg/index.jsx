import React from "react";
import "./index.css";
import { RiSendPlane2Fill } from "react-icons/ri";
const SendMsg = () => {
  return (
    <div className="fixed max-w-screen-sm mx-auto box-border bottom-0 left-0 right-0 w-full bg-white py-2 border-t border-t-gray-100 z-50">
      <div id="tabs" className="flex justify-between px-4 items-end">
        <span
          role="textbox"
          className="textarea top-0 bottom-0 outline-none box-inherit py-2 px-4 bg-transparent w-full rounded-2xl border border-gray-300"
          placeholder="send your message.."
          contentEditable="true"
        ></span>

        <div className="mx-2 w-[37px] h-[37px] bg-indigo-500 flex justify-center items-center rounded-full p-2">
          <RiSendPlane2Fill className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default SendMsg;
