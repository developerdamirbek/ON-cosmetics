import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { nanoid } from "nanoid";
import { Inner } from "./pages/inner";
import { main_pages } from "./router/main-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {main_pages.map((route) => (
            <Route
              index={route.path ? false : true}
              key={nanoid()}
              path={route.path}
              element={route.component}
            />
          ))}
        <Route path={`products`} element={<Inner />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
