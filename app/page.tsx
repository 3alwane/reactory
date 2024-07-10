import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import CategoryIcon from "@mui/icons-material/Category";
import LandslideIcon from "@mui/icons-material/Landslide";

export default function Home() {
  return (
    <div className="flex poppins">
      <SideBar />
      <ContentArea />
    </div>
  );
}

function SideBar() {
  return <div className="h-screen w-[260px]">This is a sidebar</div>;
}

function ContentArea() {
  return (
    <div className="h-screen w-full bg-slate-100 border p-3">
      <TopBar />
      <StatsBar />
      <AllCategories />
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
      <div className="grid grid-cols-3 gap-4   mt-4   rounded-lg">
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </div>
    );

    function CategoriesCard() {
      return (
        <div className="flex gap-4 items-center p-3    bg-white rounded-lg">
          <div className="w-[45px] h-[45px] bg-pink-100 rounded-full flex items-center justify-center">
            <CategoryIcon className="text-pink-400" />
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
          <div className="">
            <span className="font-bold">All Categories</span>
          </div>
          <button className="bg-pink-500 text-white text-[12px] px-2 py-[2px] rounded-md">
            + New Category
          </button>
        </span>
        <div className="flex flex-wrap gap-4 mt-7 ">
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
        <div className="w-[200px] border border-pink-100 rounded-md p-5 flex gap-2 justify-center flex-col items-center    ">
          <div className="w-[70px] h-[70px] bg-pink-100 rounded-full flex items-center justify-center">
            <LandslideIcon className="text-[30px] text-pink-400" />
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
}
