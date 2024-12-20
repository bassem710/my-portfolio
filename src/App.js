import { Route, Routes } from "react-router-dom";

import { Nav, Footer } from "./components/index";
import PagesContainer from "./pages/PagesContainer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<PagesContainer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
