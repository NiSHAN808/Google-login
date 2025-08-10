export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <img src={user?.picture} alt="User" />
    </div>
  );
}
