import { useEffect, useRef } from "react";
import { IMessage, IUser } from "../../types/models";

type MessageBoxProps = { chats: IMessage[]; user: IUser };
const MessageBox: React.FC<MessageBoxProps> = ({ chats, user }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref) {
      ref &&
        ref.current?.scrollTo({
          behavior: "smooth",
          top: ref.current.scrollHeight,
        });
    }
  }, [ref, chats]);
  return (
    <div className="msg-box:container">
      <div className="msg-box:scroll-container" ref={ref}>
        {!chats.length ? (
          <div className="text-center"> No Messages </div>
        ) : (
          chats.map((chat, key) => (
            <div
              key={key}
              className={
                user.name === chat.sender!.name
                  ? "flex msg:me"
                  : "flex msg:other"
              }
            >
              <div className="msg">{chat.message}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MessageBox;
