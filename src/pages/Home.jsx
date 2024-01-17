import { HeaderTop, HeaderArea, HeroArea, Cards } from "../components";

const Home = () => {
  return (
    <>
      <HeaderTop />
      <HeaderArea />
      <HeroArea type={true} />
      <Cards />
    </>
  );
};

export default Home;
