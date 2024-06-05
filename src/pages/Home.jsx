import NavBar from "../Components/NavBar";
import Content from "../Components/Content";
import { useState } from "react";

const HomeLayout = () => {
  const [styles, setStyles] = useState(true);
  function changeTheme() {
    setStyles((prevState) => !prevState);
    // console.log(styles);
  }
  return (
    <div
      className={`flex flex-col h-screen bg-background text-foreground ${
        styles ? "dark" : ""
      }`}
    >
      <NavBar theme={changeTheme} mode={styles} />
      <Content />
    </div>
  );
};

export default HomeLayout;
