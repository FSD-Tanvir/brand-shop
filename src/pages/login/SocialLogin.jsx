import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const socialLogin = (media) => {
    media()
      .then(() => {
        toast.success("User logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="divider font-medium">continue with</div>
      <div className=" flex justify-around">
        <button
          onClick={() => socialLogin(googleLogin)}
          className="btn btn-error btn-outline  btn-sm font-medium"
        >
          Google
        </button>
        <button
          onClick={() => socialLogin(githubLogin)}
          className="btn btn-error btn-outline btn-sm font-medium"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
