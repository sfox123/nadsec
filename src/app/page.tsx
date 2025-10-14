import Navbar from "@/Components/Navbar";
import Carousal from "@/Components/Carousal";
import CardDisplay from "./Card";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousal />
      <CardDisplay/>
    </div>
  );
}
