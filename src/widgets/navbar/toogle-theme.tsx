import { useTheme } from "next-themes";
import { Button } from "@/ui/button";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Button
      onClick={handleThemeToggle}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
    >
      {theme === "light" ? (
        <div className="flex gap-2">
          <Moon className="size-5" />
          <span className="block lg:hidden">White Theme</span>
        </div>
      ) : (
        <div className="flex gap-2">
          <Sun className="size-5" />
          <span className="block lg:hidden">Black Theme</span>
        </div>
      )}

      <span className="sr-only">Trocar de tema</span>
    </Button>
  );
};
