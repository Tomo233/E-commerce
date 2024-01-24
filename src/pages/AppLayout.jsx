import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
function AppLayout() {
  return (
    <div>
      <TopHeader />
      <Header />
      <main className="mx-auto w-5/6">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
