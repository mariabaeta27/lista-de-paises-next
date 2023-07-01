import Image from "next/image";

const NavBar = () => (
  <nav className="bg-white h-16 flex items-center justify-center">
    <section className="container  flex items-center content-center">
      <Image
        src={"logo.svg"}
        alt={"Logo Word"}
        width={48}
        height={48}
        className="mr-2"
      />
      <h1 className="text-2xl">Países do mundo</h1>
    </section>
  </nav>
);

export default NavBar;
