const Banner = () => {
  return (
    <div
      className="hero h-[33vh]"
      style={{
        backgroundImage: "url('Library-Banner.jpg')",
      }}
    >
      <div className="hero hero-overlay bg-primary1 opacity-80"></div>
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
