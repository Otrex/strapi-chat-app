import { IMessage } from "../../types/models";

const MessageSender: React.FC<{ action: (msg: string) => any }> = ({
  action,
}) => {
  return (
    <div className="msg-sender:container">
      <div className="flex flex-row msg-sender">
        <input type="text" className="send-field" />
        <input type={"button"} value="Send" />
      </div>
    </div>
  );
};

export default MessageSender;
