
import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";

import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="add-contact" element={<AddContact />} />

        <Route path=":id/edit" element={<EditContact />} />
      </Route>
    </Routes>
  );
}
