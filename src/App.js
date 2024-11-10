import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import { Suspense, lazy } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Homepage = lazy(() => import("../pages/Homepage"));
const AskJuris = lazy(() => import("../pages/AskJuris"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="ask-juris" element={<AskJuris />}></Route>

          <Route path="app" element={<AppLayout />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
