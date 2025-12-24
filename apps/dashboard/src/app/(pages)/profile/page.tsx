import { NavBar } from "@/components/NavBar";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SideNav } from "@/components/SideNav";
import { Main } from "@/components/utility/Main";

export default function Profile() {
  return (
    <>
      <SideNav />
      <Main className="bg-gray-50">
        <NavBar />
        <ProfileHeader />
      </Main>
    </>
  );
}
