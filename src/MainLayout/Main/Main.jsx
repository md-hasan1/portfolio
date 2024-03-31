import { Outlet } from "react-router-dom";
import Header from "../../Sheared/Header/Header";
import Footer from "../../Sheared/Footer";
const Main = () => {
  return (
    <div className="h-full bg-[#000000] relative">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
