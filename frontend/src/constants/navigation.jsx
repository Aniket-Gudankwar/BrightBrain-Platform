import {
  FiHome,
  FiUser,
  FiLayers,
  FiFolder,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

export const NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
    icon: <FiHome />,
  },
  {
    id: "services",
    label: "Services",
    icon: <FiLayers />,
  },
  {
    id: "about",
    label: "About",
    icon: <FiUser />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <FiFolder />,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: <FiBriefcase />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FiMail />,
  },
];