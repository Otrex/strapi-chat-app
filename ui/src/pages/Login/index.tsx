import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './login.module.css';
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
      <div className="h-vh-full w-full bg-login abs-center-content">
        <div className="bg-white login view-port">
          <input type="text" />
        </div>
      </div>
    );
}

export default Login;