import Navbar from "@/Components/Navbar";
import Carousal from "@/Components/Carousal";
import CardDisplay from "./Card";
import About from "@/Components/About";
import Board from "@/Components/Board";
import Contact from "@/Components/Contact";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousal />
      <About />
      <CardDisplay />
      <Board />
      <Contact />
    </div>
  );
}
