import Navbar from "@/Components/Navbar";
import Carousal from "@/Components/Carousal";
import CardDisplay from "./Card";
import About from "@/Components/About";
import Board from "@/Components/Board";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Carousal />
        <About />
        <CardDisplay />
        <Board />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
