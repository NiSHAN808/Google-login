import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Google user info:", decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
    navigate("/");
  };
  const handle2nd = (credentialResponse) => {
    console.log("Google user info:", decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
    navigate("/");
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }
      ).then((res) => res.json());

      console.log("Google user info:", userInfo);
      localStorage.setItem("user", JSON.stringify(userInfo));
      navigate("/");
    },
    ux_mode: "redirect",
    redirect_uri: "http://localhost:5173",
    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login with Google</h2>
      {/* <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} /> */}
      <button
        onClick={() => login()}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
          style={{
            height: "18px",
            marginRight: "8px",
            verticalAlign: "middle",
          }}
        />
        Sign in with Google
      </button>
    </div>
  );
}
