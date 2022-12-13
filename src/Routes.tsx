import { DHLayout } from "@daohaus/connect";
import { Routes as Router, Route, useLocation } from "react-router-dom";
import { Propose } from "./pages/Propose";
import { Home } from "./pages/Home";
import { Proposals } from "./pages/Proposals";

export const Routes = () => {
  const { pathname } = useLocation();
  return (
    <DHLayout
      pathname={pathname}
      navLinks={[
        { label: "Home", href: "/" },
        { label: "Submit Your App", href: "/submit" },
        { label: "Submissions", href: "/submissions" },
      ]}
    >
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Propose />} />
        <Route path="/submissions" element={<Proposals />} />
      </Router>
    </DHLayout>
  );
};
