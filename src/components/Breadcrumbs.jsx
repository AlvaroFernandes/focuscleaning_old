import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const generateBreadcrumbs = (routePath) => {
  const route = routePath.split("/");
  const currPath = route[1];
  const idSlug = route[2];
  let path;

  if (currPath === "about") {
    return (path = {
      title: "About us",
      bread: "About us"
    });
  }

  if (currPath === "contact") {
    return (path = {
      title: "Contact us",
      bread: "Contact us"
    });
  }

  if (currPath === "services" && idSlug === undefined) {
    return (path = {
      title: "Services",
      bread: "Services"
    });
  } else if (currPath === "services" && idSlug === "basic") {
    return (path = {
      title: "Basic Cleaning",
      bread: (
        <>
          <Link to="/services">Services</Link> / Basic Cleaning
        </>
      )
    });
  } else if (currPath === "services" && idSlug === "commercial") {
    return (path = {
      title: "Commercial Cleaning",
      bread: (
        <>
          <Link to="/services">Services</Link> / Commercial Cleaning
        </>
      )
    });
  } else if (currPath === "services" && idSlug === "construction") {
    return (path = {
      title: "Construction Cleaning",
      bread: (
        <>
          <Link to="/services">Services</Link> / Construction Cleaning
        </>
      )
    });
  } else if (currPath === "services" && idSlug === "premiun") {
    return (path = {
      title: "Premiun Cleaning",
      bread: (
        <>
          <Link to="/services">Services</Link> / Premiun Cleaning
        </>
      )
    });
  } else if (currPath === "services" && idSlug === "endoflease") {
    return (path = {
      title: "End of Lease Cleaning",
      bread: (
        <>
          <Link to="/services">Services</Link> / End of Leasing Cleaning
        </>
      )
    });
  } else if (currPath === "services" && idSlug === "spring") {
    return (path = {
      title: "Spring Cleaning",
      bread: (
        <>
          <Link to="/services">Services</Link> / Spring Cleaning
        </>
      )
    });
  }
};

const Breadcrumbs = () => {
  const location = useLocation();
  const routePath = location.pathname;

  const path = generateBreadcrumbs(routePath);

  return (
    <div className="breadcrumb-area dark-bg">
      <div className="breadcrumb-inner">
        <h2 className="text-white">{path.title}</h2>
        <h6 className="text-white">
          <Link to="/">Home</Link> / {path.bread}
        </h6>
      </div>
    </div>
  );
};

export default Breadcrumbs;
