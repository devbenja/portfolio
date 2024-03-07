import { NavBar } from "@/components/navbar";
import { Presentation } from "@/components/presentation";
import { About } from "@/components/about_me";

import { ToggleTheme } from "@/components/toggle-theme";

export default function Home() {
  return (
    <main className="pb-40">
      <NavBar/>
      <ToggleTheme/>
      <Presentation/>
      <About/>
    </main>
  );
}
 