import ChatBox from "@/components/ChatBox";
import { useRouter } from "next/router";
import React from "react";
import celebsData from "../../utils/celebs.json";

const Chat = () => {
  const router = useRouter();
  const celebId = router.query.id;
  const celeb = celebsData.find((c) => c.name.replace(/\s/g, "") === celebId);

  if (!celebId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <ChatBox character={celebId} celebData={celeb} />
    </div>
  );
};

export default Chat;
