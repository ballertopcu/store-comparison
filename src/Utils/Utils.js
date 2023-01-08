import {
  HiOutlineViewGrid,
  HiOutlineCog,
  HiOutlinePresentationChartLine,
  HiOutlineMail,
  HiUpload,
  HiDownload,
  HiOutlinePlusCircle,
  HiOutlineLibrary,
  HiOutlineShare,
  HiOutlineDeviceTablet,
  HiOutlineCalendar,
  HiOutlineAdjustments,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineTrendingUp,
  HiOutlineTrendingDown,
  HiOutlineMenu,
  HiX
} from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BiBarChartAlt2, BiPackage } from "react-icons/bi";
import { MdStorefront } from "react-icons/md";
import { InteractionAnalysis } from "../components/InteractionAnalysis";

const Utils = {
  getIcon: (name, size = 25) => {
    if (name === "grid") return <HiOutlineViewGrid size={size}/>;
    else if (name === "chart")return <HiOutlinePresentationChartLine size={size}/>;
    else if (name === "cog") return <HiOutlineCog size={size}/>;
    else if (name === "import") return <HiDownload size={size}/>;
    else if (name === "export") return <HiUpload size={size}/>;
    else if (name === "mail") return <HiOutlineMail size={size}/>;
    else if (name === "plus") return <HiOutlinePlusCircle size={size}/>;
    else if (name === "library") return <HiOutlineLibrary size={size}/>;
    else if (name === "search") return <FiSearch size={size}/>;
    else if (name === "chart-bar") return <BiBarChartAlt2 size={size}/>;
    else if (name === "store") return <MdStorefront size={size}/>;
    else if (name === "package") return <BiPackage size={size}/>;
    else if (name === "device") return <HiOutlineDeviceTablet size={size}/>;
    else if (name === "share") return <HiOutlineShare size={size}/>;
    else if (name === "calendar") return <HiOutlineCalendar size={size}/>;
    else if (name === "adjustments")return <HiOutlineAdjustments size={size}/>;
    else if (name === "left-arrow")return <HiOutlineChevronLeft size={size}/>;
    else if (name === "right-arrow")return <HiOutlineChevronRight size={size}/>;
    else if (name === "increase")return <HiOutlineTrendingUp size={size}/>;
    else if (name === "decrease")return <HiOutlineTrendingDown size={size}/>;
    else if (name === "menu")return <HiOutlineMenu size={size}/>;
    else if (name === "x")return <HiX size={size}/>;
  },
  getPage: (key) => {
    if (key === 2) return <InteractionAnalysis/>;
    else return <></>;
  }
};

export default Utils;
