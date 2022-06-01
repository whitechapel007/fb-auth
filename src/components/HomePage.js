import React from "react";


import main from "../assets/main.svg";

const HomePage = () => {
  return (
    <section className="">
     

      <main className="mt-32 md:flex md:justify-center md:items-center p-5">
        <aside>
          <h1 className=" text-xl font-mono font-extrabold md:text-3xl p-3 text-black text-center md:text-left">
            Learn on Your class schedule
          </h1>
          <p className="font-thin font-mono text-gray-400 text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            vel!
          </p>
        </aside>

        <aside>
          <img src={main} alt="" />
        </aside>
      </main>
    </section>
  );
};

export default HomePage;
