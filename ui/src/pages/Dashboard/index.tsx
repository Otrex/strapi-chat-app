import ChatPanel from "../../components/sections/ChatPanel";
import ProfilePanel from "../../components/sections/ProfilePanel";
import UserList from "../../components/sections/UserList";

const index = () => (
  <>
    <div className="flex flex-row">
      <UserList />
      <ChatPanel />
      <ProfilePanel />
    </div>
  </>
);

export default index;
