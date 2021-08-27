const Team = () => {
  return (
    <section className="py-6 text-neutral-focus">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
          Our team with Sithum
        </h1>
        <p className="max-w-2xl text-center dark:text-coolGray-400">
          We're on a Mission to Change Your Business to a Brand!
        </p>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src="https://helascript.com/wp-content/uploads/elementor/thumbs/Dulara-pbn1a9b5cguyq22benzts3plpvxz93g6a0cjeuhahm.jpeg"
            ></img>
            <p className="text-xl font-semibold leading-tight">Dulara Pramod</p>
            <p className="dark:text-coolGray-400">CEO @ HelaScript</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src="https://helascript.com/wp-content/uploads/elementor/thumbs/Anoj-Dinuranga-pbn1a4lyeaoj409563yoxmwaqyl56lxild340go9cq.jpeg"
            ></img>
            <p className="text-xl font-semibold leading-tight">
              Anoj Dinuranga
            </p>
            <p className="dark:text-coolGray-400">COO @ HelaScript</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src="https://helascript.com/wp-content/uploads/elementor/thumbs/Kavindu-Nimesh-pbn1aey6hh2onpu4hqfl72ada766ja2kas9gai8xga.jpeg"
            ></img>
            <p className="text-xl font-semibold leading-tight">
              Kavindu Nimesh
            </p>
            <p className="dark:text-coolGray-400">Co-Founder @ HelaScript</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src="https://helascript.com/wp-content/uploads/elementor/thumbs/Hasinthaka-pbn1a6hmryr3r86ev4ry2mf7xqbvm04z9me2z0lh0a.jpeg"
            ></img>
            <p className="text-xl font-semibold leading-tight">
              Hasinthaka Piyumal
            </p>
            <p className="dark:text-coolGray-400">Co-Founder @ HelaScriptr</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
