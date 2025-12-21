import { NavBar } from "@/components/NavBar";
import { SideNav } from "@/components/SideNav";
import { DataTable } from "@/components/DataTable";

export default function Tables() {
  return (
    <>
      <SideNav />
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <NavBar />
        <div className="w-full px-6 py-6 mx-auto">
          <DataTable />
        </div>
      </main>
    </>
  );
}
