import { Routes, Route } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
