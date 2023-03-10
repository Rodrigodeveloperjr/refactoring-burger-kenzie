import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { AllRoutes };
