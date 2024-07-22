import NavBar from "../Components/NavBar";
import Content from "../Components/Content";
import { useState } from "react";
import { useTheme } from "../context/themeContext";

const HomeLayout = () => {
  // const [styles, setStyles] = useState(true);
  // function changeTheme() {
  //   setStyles((prevState) => !prevState);
  //   // console.log(styles);
  // }
  const { darkMode } = useTheme();
  return (
    <div
      className={`flex flex-col flex-wrap min-h-screen w-auto bg-background text-foreground ${
        darkMode ? "dark" : ""
      }`}
    >
      <NavBar />
      <Content />
    </div>
  );
};

export default HomeLayout;
