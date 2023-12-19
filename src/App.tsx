import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layouts/Layout";
import { Champions } from "./pages/champion/Champions";
import { Champion } from "./pages/champion/Champion";
import { Items } from "./pages/Items";
import { Runes } from "./pages/Runes";
import { Summoners } from "./pages/Summoners";
import { Test } from "./pages/Test";

import { NotFound } from "./pages/NotFound";
import { useVersion } from "./hooks/useVersion";

function App() {
  const { version, language } = useVersion();

  return (
    <>
      {version !== "" && language !== "" && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Champions />} />
            <Route path="champions" element={<Champions />} />
            <Route path="champions/:id" element={<Champion />} />
            <Route path="items" element={<Items />} />
            <Route path="runes" element={<Runes />} />
            <Route path="summoners" element={<Summoners />} />
            <Route path="test" element={<Test />} />
            <Route path="notfound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
