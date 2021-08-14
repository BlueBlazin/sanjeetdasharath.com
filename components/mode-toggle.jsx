import { useTheme } from "next-themes";
import { BsMoon } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";

export default function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer text-xl w-8 flex justify-center"
    >
      {resolvedTheme === "light" ? <RiSunFill /> : <BsMoon />}
    </div>
  );
}
