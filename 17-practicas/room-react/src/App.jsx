import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Header />
        <Main />
      </div>
    </>
  );
};

export default App;
