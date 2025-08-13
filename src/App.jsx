import { Link } from "react-router";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <div className="">
      website home page
      <div>
        <h3>{user?.name}</h3>
        <Link to="/g">
          {" "}
          <img src={user?.picture} alt="login" />
        </Link>
      </div>
    </div>
  );
}

export default App;
