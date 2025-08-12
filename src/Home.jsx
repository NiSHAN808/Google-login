import { Navigate } from "react-router-dom";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  function handelLogout() {
    localStorage.removeItem("user");

    <Navigate to="/g" />;
  }
  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <img src={user?.picture} alt="User" />
      <button onClick={handelLogout}>logout</button>
    </div>
  );
}
