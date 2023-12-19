import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

function Layout() {

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export { Layout };
