import { Route, BrowserRouter, Routes } from "react-router-dom";
import CardViewPage from "./pages/CardView/CardViewPage";
import { CollectionsListPage } from './pages/CollectionsList';

export const App = () => {
  return (
    <main className="container pt-3">
      <BrowserRouter>
        <Routes>
          <Route path="/card-view" element={<CardViewPage />} />
          <Route path="/" element={<CollectionsListPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
