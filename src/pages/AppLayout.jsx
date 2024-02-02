import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div>
      <TopHeader />
      <Header />
      <main className="mx-auto w-5/6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
