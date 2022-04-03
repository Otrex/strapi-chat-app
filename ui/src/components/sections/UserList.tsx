import useStore from "../../hooks/useStore";
import { IUser } from "../../types/models";
import UserShortDetail from "../sub/UserShortDetail";

const UserList: React.FC = () => {
  const { dashboard } = useStore();

  return (
    <>
      <div className="w-30% h-vh-full border:line-ash">
        <div className="logout">
          <a href="/login"> Logout </a>
        </div>
        <div>
          {dashboard.reciepients.map((user, key) => (
            <UserShortDetail
              key={key}
              user={user as IUser}
              lastMsg={{ message: "Hello Word", createdAt: new Date() }}
              setReciepient={dashboard.setReciepient}
              msgCount={Math.floor(Math.random() * 20)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
