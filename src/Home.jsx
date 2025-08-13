import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  function handelLogout() {
    localStorage.removeItem("user");

    navigate("/");
  }
  return (
    <div>
      <h1>Welcome {user?.name} to your profile</h1>
      <img src={user?.picture} alt="User" />
      <button onClick={handelLogout}>logout</button>
    </div>
  );
}
