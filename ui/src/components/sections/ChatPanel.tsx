import { useLayoutEffect } from "react";
import useStore from "../../hooks/useStore";
import UserShortDetail from "../sub/UserShortDetail";
import MessageBox from "./MessageBox";
import MessageSender from "./MessageSender";

const ChatPanel = () => {
  const { auth, dashboard } = useStore();
  useLayoutEffect(() => {
    dashboard.getChats();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex flex-col border:line-ash">
      <UserShortDetail user={auth.user!} lastMsg={undefined} />
      <MessageBox chats={dashboard.chats} user={auth.user!} />
      <MessageSender action={dashboard.sendMessage} />
    </div>
  );
};

export default ChatPanel;
