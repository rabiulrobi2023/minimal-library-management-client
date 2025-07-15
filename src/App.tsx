import { matchPath, Outlet, useLocation } from "react-router";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";

function App() {
  const location = useLocation();

  const notFooterPage = ["/borrow", "/create-book","/borrow-summary","/books"];
  const hideFooterNormalRoute = notFooterPage.includes(location.pathname);
  const hideFooterParamsRoute = matchPath("/borrow/:bookId", location.pathname);
  return (
    <div className="max-w-[1080px] mx-auto text-[14px] flex flex-col min-h-screen   text-gray-600">
      <Navbar></Navbar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      {!(hideFooterNormalRoute || hideFooterParamsRoute) && <Footer></Footer>}
    </div>
  );
}

export default App;
