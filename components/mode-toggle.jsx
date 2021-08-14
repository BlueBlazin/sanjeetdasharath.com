import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return <div onClick={toggleTheme}>{resolvedTheme}</div>;
}
