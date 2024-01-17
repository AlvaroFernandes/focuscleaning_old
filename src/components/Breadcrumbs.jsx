import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const generateBreadcrumbs = (routePath) => {
  const route = routePath.split("/");
  const currPath = route[1];
  const idSlug = route[2];
  if (currPath === "about") {
    return "About us";
  }
  console.log(currPath);

  const pathName = currPath.charAt(0).toUpperCase() + currPath.slice(1);

  return idSlug ? pathName + " Details" : pathName;
};

const Breadcrumbs = () => {
  const location = useLocation();
  const routePath = location.pathname;
  const pageTitle = generateBreadcrumbs(routePath);

  return (
    <div className="breadcrumb-area dark-bg">
      <div className="breadcrumb-inner">
        <h2 className="text-white">{pageTitle}</h2>
        <h6 className="text-white">
          <Link to="/">Home</Link> / {pageTitle}
        </h6>
      </div>
    </div>
  );
};

export default Breadcrumbs;
