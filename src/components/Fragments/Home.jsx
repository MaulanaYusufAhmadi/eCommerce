import Button from "../Elements/Button";

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat min-h-screen rounded-b-3xl"
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="absolute inset-y-1/3 start-14 text-wrap w-1/3">
        <h1 className="text-5xl font-bold text-primary_1 font-title">
          Exclusive Deals of Furniture Collection
        </h1>
        <h5 className="text-xl font-thin text-primary_2 font-body my-8">
          Best quality furniture for your home.
        </h5>
        <Button variant="btn">Shop Now</Button>
      </div>
    </section>
  );
};

export default Home;
