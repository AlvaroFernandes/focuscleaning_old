import { HeaderArea, Breadcrumbs, AboutInfo, Partners } from "../components";

const About = () => {
  return (
    <>
      <HeaderArea />
      <Breadcrumbs />
      <AboutInfo />
      <Partners type={false} />
    </>
  );
};

export default About;
