import { UserShortDetailProps } from "../../types";

const UserShortDetail: React.FC<UserShortDetailProps> = ({
  img,
  user,
  lastMsg,
  msgCount,
  setReciepient,
}) => (
  <div
    className="flex p:10 user-list"
    onClick={() => setReciepient && setReciepient(user)}
  >
    <div className="img-container v:center">
      <div className="content rounded">
        <img src={img} alt="profile image" />
      </div>
    </div>
    <div className="user-name v:center flex flex-col pl:10">
      <span className="h4.bold">{user.name}</span>
      <span>{lastMsg ? lastMsg.message : user.phoneNumber}</span>
    </div>
    <div className="time-msg-stamp v:center h:right flex flex-col">
      <div className="timestamp">{lastMsg?.createdAt.toLocaleString()}</div>
      {msgCount ? (
        <div className="msg-count abs-center-content">{msgCount}</div>
      ) : (
        <></>
      )}
    </div>
  </div>
);

UserShortDetail.defaultProps = {
  img: "https://picsum.photos/200",
  user: { name: "John", phoneNumber: "099876545678" },
  msgCount: 0,
};

export default UserShortDetail;
