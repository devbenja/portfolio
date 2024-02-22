import { NavBar } from "@/components/navbar";
import { Presentation } from "@/components/presentation";
import { ToggleTheme } from "@/components/toggle-theme";

export default function Home() {
  return (
    <main className="pb-40">
      <NavBar/>
      <ToggleTheme/>
      <Presentation/>
    </main>
  );
}
 