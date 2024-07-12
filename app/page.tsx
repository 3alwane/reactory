import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import CategoryIcon from "@mui/icons-material/Category";
import LandslideIcon from "@mui/icons-material/Landslide";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Home() {
  return (
    <div className="flex poppins">
      <SideBar />
      <ContentArea />
    </div>
  );
}

function SideBar() {
  return (
    <div className="h-screen w-[296px] p-6 pt-9">
      <Logo />
      <Links />
      <LogOutButton />
    </div>
  );
  function Logo() {
    return (
      <div className="flex gap-2 items-center">
        <div className={`bg-sky-500 p-[6px] rounded-md`}>
          <LandslideIcon sx={{ fontSize: 27, color: "white" }} />
        </div>
        <div className="flex gap-1 text-[21px] ">
          <span className={`font-bold text-sky-500`}>React</span>
          <span className="text-slate-600">Shelf</span>
        </div>
      </div>
    );
  }

  function Links() {
    return (
      <div className="mt-44 ml-3 flex flex-col gap-2 text-[15px]">
        {/* Home Link */}
        <div className="p-[7px] rounded-lg flex items-center gap-2 w-[80%] bg-sky-500 text-white">
          <HomeIcon />
          <span className="mt-0.5">Home</span>
        </div>

        {/* Categories Link */}
        <div className="p-[7px] rounded-lg flex items-center gap-2 w-[80%]  text-slate-400">
          <CategoryIcon />
          <span className="mt-0.5">Categories</span>
        </div>

        {/* Favorite Link */}
        <div className="p-[7px] rounded-lg flex items-center gap-2 w-[80%] text-slate-400">
          <FavoriteIcon />
          <span className="mt-0.5">Favorites</span>
        </div>
      </div>
    );
  }

  function LogOutButton() {
    return (
      <div className="p-[7px] ml-3 mt-14 text-[15px] rounded-lg flex items-center gap-2 w-[80%] text-slate-400">
        <LogoutIcon />
        <span className="mt-0.5">Log Out</span>
      </div>
    );
  }
}

function ContentArea() {
  return (
    <div className=" w-full bg-slate-100  p-3 pt-5 px-4">
      <TopBar />
      <StatsBar />
      <AllCategories />
      <FavoriteComponents />
    </div>
  );

  function TopBar() {
    return (
      <div className="bg-white w-full p-[11px] rounded-lg px-6 flex justify-between items-center">
        <DashboardText />
        <SearchBar />
        <div className="flex gap-4 items-center">
          <DarkMode />
          <ProfileAccount />
        </div>
      </div>
    );

    function DashboardText() {
      return (
        <div className="  ">
          <div className="flex flex-col ">
            <span className="font-semibold">Welcome Back, Ali</span>
            <span className="text-slate-400 text-[11px] font-light">
              This is a sbub message
            </span>
          </div>
        </div>
      );
    }

    function SearchBar() {
      return (
        <div className="bg-slate-100 w-1/3   p-[8px] flex gap-1 justify-center   items-center rounded-md">
          <SearchIcon fontSize="small" className="text-slate-500" />
          <span className="text-slate-500 text-sm">Search</span>
        </div>
      );
    }

    function DarkMode() {
      return (
        <div>
          <LightModeIcon className="text-orange-600" fontSize="small" />
        </div>
      );
    }

    function ProfileAccount() {
      return (
        <div className=" flex gap-3 items-center  ">
          <div className="w-[36px] h-[37px] bg-slate-100 rounded-full"></div>
        </div>
      );
    }
  }

  function StatsBar() {
    return (
      <div className="mt-4">
        <span className="text-lg font-bold">Overview</span>
        <div className="grid grid-cols-3 gap-4 rounded-lg mt-2">
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
      </div>
    );

    function CategoriesCard() {
      return (
        <div className="flex gap-4 items-center p-3    bg-white rounded-lg">
          <div className="w-[45px] h-[45px] bg-sky-100 rounded-full flex items-center justify-center">
            <CategoryIcon className="text-sky-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">12</span>
            <span className="  text-sm font-light text-slate-400 ">
              Categories
            </span>
          </div>
        </div>
      );
    }
  }

  function AllCategories() {
    return (
      <div className=" bg-white  w-full p-8 rounded-lg mt-4">
        <span className="text-lg flex gap-2 justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="font-bold text-lg">All Categories</span>
            <span className="text-[14px] text-sky-600 cursor-pointer">
              More
            </span>
          </div>
          <button className="bg-sky-500 text-white text-[12px] px-2 py-[2px] rounded-md">
            + New Category
          </button>
        </span>
        <div className="flex flex-wrap gap-4 mt-7">
          <SingleCategory />
          <SingleCategory />
          <SingleCategory />
          <SingleCategory />
          <SingleCategory />
          <SingleCategory />
        </div>
      </div>
    );

    function SingleCategory() {
      return (
        <div className="w-[200px] border rounded-md p-5 flex gap-2 justify-center flex-col items-center    ">
          <div className="w-[70px] h-[70px] bg-sky-100 rounded-full flex items-center justify-center">
            <LandslideIcon className="text-[30px] text-sky-400" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold text-lg">Buttons</span>
            <span className="text-[12px] text-slate-400 text-center">
              10 Components
            </span>
          </div>
        </div>
      );
    }
  }

  function FavoriteComponents() {
    return (
      <div className="bg-white  w-full p-8 rounded-lg mt-4 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">Favorite Components</span>
          <button className="bg-sky-500 text-white text-[12px] p-2 px-3 rounded-md">
            View All
          </button>
        </div>

        {/* Headers */}
        <div className="grid grid-cols-4 mt-6 mb-4 text-sm items-center text-slate-400 px-4">
          <span className="">Component Name</span>
          <span className="">Created At</span>
          <span className="">Category</span>
          <span className="">Actions</span>
        </div>

        {/* Components */}
        <div className="px-4 flex flex-col gap-1 mt-1">
          <div className="grid grid-cols-4 gap-4 text-sm items-center    rounded-lg p-2">
            <span className="hover:text-sky-500 cursor-pointer">
              UI Form Form
            </span>
            <span>10 July 2024</span>
            <span className="justify-self-start">
              <span className="inline-block rounded-2xl bg-sky-500 text-white text-[12px]  px-4 py-1 whitespace-nowrap">
                Buttons
              </span>
            </span>
            <div className="flex gap-2 ">
              {/* Modify Button */}
              <div className="bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center">
                <EditIcon fontSize="small" className="text-white text-[16px]" />
              </div>

              <div className="bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center">
                <DeleteIcon
                  fontSize="small"
                  className="text-white text-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
