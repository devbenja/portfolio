import { NavBar } from "@/components/navbar";
import { ToggleTheme } from "@/components/toggle-theme";

export default function Home() {
  return (
    <main className="pb-40">
      <NavBar/>
      <ToggleTheme/>
    </main>
  );
}
 