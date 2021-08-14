import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoon } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  function toggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer text-xl w-8 flex justify-center"
    >
      {mounted && (resolvedTheme === "light" ? <BsMoon /> : <RiSunFill />)}
    </div>
  );
}
