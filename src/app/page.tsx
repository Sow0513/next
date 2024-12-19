import { NavBar } from "@/components/portfolio/Navbar";

export default function Home() {
  return (
    <div>
      <div
        className="bg-stone-200 h-[1200px]  "
        style={{ borderRadius: "80px 80px 0px 0px" }}
      >
        <div
          className="bg-stone-100 h-[650px] py-1"
          style={{ borderRadius: "80px 80px 100px 100px" }}
        >
          <div
            className="bg-stone-200 h-[500px]  border border-gray-200 "
            style={{ borderRadius: "80px 80px 100px 100px" }}
          >
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
}
