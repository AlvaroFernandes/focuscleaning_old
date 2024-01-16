import data from "@/data/menu.json";
import Menu from "./Menu";

const MobileMenu = ({ showNav, setShowNav }) => {
  const menuData = data;

  return (
    <div className={`mobile-nav ${showNav ? "active" : ""}`}>
      <ul className="navbar-nav m-auto">
        {menuData.length > 0 &&
          menuData.map((m) => (
            <Menu key={m.id} menu={m} setShowNav={setShowNav} />
          ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
