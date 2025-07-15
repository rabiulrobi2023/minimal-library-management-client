const Banner = () => {
  return (
    <div
      className="hero h-[40vh] p-0"
      style={{
        backgroundImage: "url(https://i.ibb.co/vL5KM5r/Banner2.jpg)",
      }}
    >
      <div className="hero hero-overlay bg-primary1 opacity-50 p-0"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-primary2">Welcome</h1>
          <p className="mb-5 ">
            From timeless classics to today's bestsellers — find your next
            favorite book in our curated collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
