import { useState } from "react";
import { IMessage } from "../../types/models";

const MessageSender: React.FC<{ action: (msg: string) => any }> = ({
  action,
}) => {
  const [msg, setMsg] = useState("");
  return (
    <div className="msg-sender:container">
      <div className="flex flex-row msg-sender">
        <input
          type="text"
          className="send-field"
          onChange={(e) => setMsg(() => e.target.value)}
        />
        <input
          type={"button"}
          value="Send"
          onClick={() => {
            action(msg);
          }}
        />
      </div>
    </div>
  );
};

export default MessageSender;
