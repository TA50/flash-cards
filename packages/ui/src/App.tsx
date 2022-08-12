import { Route, BrowserRouter, Routes } from "react-router-dom";
import CardViewPage from "./pages/CardView/CardViewPage";

export const App = () => {
  return (
    <main className="container pt-3">
      <BrowserRouter>
        <Routes>
          <Route path="/card-view" element={<CardViewPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
