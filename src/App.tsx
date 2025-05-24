import { HashRouter, Route, Routes } from "react-router";
import Navbar from "./layouts/Navbar";
import Home from "./pages/home";
import Footer from "./layouts/Footer";
import Projects from "./pages/projects";
import CallToAction from "./layouts/CallToAction";
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="projects/:projectId"
          element={
            <>
              <Projects />
              <CallToAction />
            </>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
