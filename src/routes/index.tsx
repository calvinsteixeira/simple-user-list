import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages//home";
import Dashboard from "@/pages/dashboard";

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
