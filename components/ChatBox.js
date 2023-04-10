import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import Reply from "./Reply";

const ChatBox = ({ character, celebData }) => {
  const messagesRef = useRef();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  console.log(messages);
  console.log(celebData.prompt, "celebData.prompt");
  // send message to API /api/chat endpoint
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;

    setLoading(true);

    const newMessages = [...messages, { role: "user", content: message }];

    setMessage("");

    setMessages(newMessages);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: newMessages.slice(-10),
        prompt: celebData.prompt,
      }),
    });

    console.log(response, "response from the sendMessage function");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    if (!response.body) return;

    const reader = response.body.getReader();
    console.log(reader, "reader from the sendMessage function");
    const decoder = new TextDecoder();
    console.log(decoder, "decoder from the sendMessage function");
    let done = false;

    let lastMessage = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      lastMessage = lastMessage + chunkValue;

      setMessages([
        ...newMessages,
        { role: "assistant", content: lastMessage },
      ]);

      messagesRef.current?.scrollIntoView({ block: "end" });

      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-[80vh] sm:w-96 p-4 rounded-2xl bg-white/20 backdrop-filter backdrop-blur-lg backdrop-saturate-150">
      <div className="h-full flex flex-col shadow-sm border-2 p-4 rounded-2xl">
        {/* <!--  Message header section starts    --> */}
        <div className="msg-header flex gap-8 items-center">
          <div className="h-12 w-12 justify-center items-center rounded-full bg-[#DDD6FF] border-2 border-[#B2A4FF]">
            <img className="scale-75" src="/images/cat-face.png" />
          </div>
          <div className="">
            <h3 className="text-[#8870FF] text-lg font-bold">{character}</h3>
            <p className="-mt-1 text-[#22BF90] text-base">Active now</p>
          </div>
        </div>
        {/* {/* <!-- Message header section ends --> */}
        <div className="mt-2 bg-[#A899FF] w-72 h-[1.75px]"></div>
        {/* <!-- Chat inbox section starts --> */}
        <div className="grow md:h-[52vh] overflow-auto">
          <div className="h-full">
            <div className="h-full overflow-auto scrollbar" id="style-1">
              <div className="mt-6 transition-all">
                {/* <!-- Contains the incoming and outgoing messages --> */}
                <div ref={messagesRef} className="">
                  <motion.div
                    animate={{
                      opacity: [0, 1],
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2,
                    }}
                    className="scale-95 mr-16"
                  >
                    <p className="bg-[#DCD6FF] rounded-3xl p-3 text-base">Hi</p>
                  </motion.div>

                  {messages.map((message, index) => (
                    <Reply
                      key={index}
                      message={message.content}
                      role={message.role}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* <!--  Message bottom section starts --> */}
          </div>
        </div>
        <div className="msg-bottom mt-2">
          <div className="msg-input flex gap-2 items-center">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage(e);
                }
              }}
              className="bg-[#DCD6FF] border-2 border-[#A899FF] placeholder:text-black/30 rounded-3xl p-3 w-full text-base focus:outline-none"
              placeholder="Type a message"
            />
            <button
              onClick={(e) => sendMessage(e)}
              className="bg-[#B2A4FF] text-base text-white rounded-full p-3 focus:outline-none"
            >
              <FiSend className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
