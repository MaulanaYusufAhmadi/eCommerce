import Navbar from "../components/Fragments/Navbar";
import Home from "../components/Fragments/Home";

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      
      <section id="products">
        <div className="bg-secondary_5 flex min-h-screen">
          <h1 className="text-5xl font-bold text-primary_1 mx-auto my-10 font-title">
            Explore By Categories
          </h1>
        </div>
      </section>

      <section id="categories">
        <div className="bg-secondary_4 flex items-center justify-center min-h-screen"></div>
      </section>
    </div>
  );
};

export default HomePage;
