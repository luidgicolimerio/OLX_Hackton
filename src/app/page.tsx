import Header from "./components/Header";
import ChatButton from "./components/ChatButton";
import Nav from "./components/Nav";
import Popup from "./components/Popup";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <>
      <Header />
      <Popup />
      <Feed />
      <Nav />
      <ChatButton />
    </>
  );
}
