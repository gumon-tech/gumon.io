import Profile from "./profile";
export default function Home() {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <Profile />
    </div>
  );
}
