const Hero = () => {
  return (
    <div class="hero min-h-screen">
      <div class="flex-col hero-content lg:flex-row-reverse">
        <img
          src="https://helascript.com/wp-content/uploads/2021/08/hela-sript-new-01-1.png"
          class="max-w-sm"
        ></img>
        <div>
          <h1 class="mb-5 text-5xl font-bold text-neutral-focus">
            Sri Lankan Brand of Web Designing #HelaScript
          </h1>
          <p class="mb-5 text-neutral">
            We have developed web applications for leading brands to small and
            medium sized businesses across many industries in the Sri Lanka and
            worldwide.
          </p>
          <button class="btn rounded-full">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
