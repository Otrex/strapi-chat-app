import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { LocationState } from "../../types";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = (location.state as LocationState)?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }
    return (
      <div className="h-vh-full w-full bg-auth abs-center-content">
        <div className="bg-white auth view-port">
          <h1>Sign-In</h1>
          <div className="input">
            <label> Email </label>
            <input type="text" />
          </div>
          <div className="input">
            <label> Password </label>
            <input type="password" />
          </div>
          <div className="input">
            <input type="checkbox"/> By checking this, you have accepted our Terms & conditions
          </div>
          <button className="submit"> Sign-In </button>
          <p className="text-center">Powered By Rex</p>
        </div>
        <p className="text-center"><a href="/register">Click to Register</a></p>

      </div>
    );
}

export default Login;