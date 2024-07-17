"use client";

import { useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LandslideIcon from "@mui/icons-material/Landslide";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { IceSkatingOutlined } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import PreviewIcon from "@mui/icons-material/Preview";
import CodeIcon from "@mui/icons-material/Code";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppsIcon from "@mui/icons-material/Apps";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import AceEditor from "react-ace";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import { IAceEditor } from "react-ace/lib/types";
import { useRef } from "react";
import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";
// Import Ace editor themes and modes
// Import necessary modes and themes
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
export default function Home() {
  return (
    <div className="flex poppins">
      <SideBar />
      {/* <CategoryArea /> */}
      <ContentArea />
    </div>
  );
}

function CategoryArea() {
  return (
    <div className="w-full h-screen p-3 px-4 pt-5 bg-slate-100">
      {/* <ComponentWindow /> */}
      <TopBar />
      <AllComponents />
    </div>
  );

  function ComponentWindow() {
    const [code, setCode] = useState(`

      <div>
   <>
      <h1>Direct SVG Icon Example</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="gold">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" />
      </svg>
    </>

      
      </div>
      
    `);

    const aceEditorRef = useRef<AceEditor | null>(null);
    const formatCode = async () => {
      if (aceEditorRef.current) {
        try {
          const formatted = await prettier.format(code, {
            parser: "babel",
            plugins: [babelPlugin, estreePlugin], // Include both plugins
            singleQuote: true,
            trailingComma: "all",
          });
          setCode(formatted);
          aceEditorRef.current.editor.setValue(formatted, 1);
        } catch (error) {
          console.error("Formatting failed:", error);
        }
      }
    };

    const handleChange = (newValue: string) => {
      setCode(newValue);
    };

    return (
      <div className="w-[90%] h-[725px]  border-slate-100  flex overflow-hidden bg-white absolute left-1/2 top-4 rounded-2xl shadow-md -translate-x-1/2 z-50">
        {/* Left Part */}
        <div className="w-1/2  h-full">
          {/* Header */}
          <div className="flex justify-between items-center  pt-7 px-8">
            <div className="flex items-center gap-2">
              {/* Category Icon */}
              <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
                <AppsIcon className="text-sky-400 text-[17px]" />
              </div>
              {/* Category Header */}
              <span className="font-semibold">New Component</span>
            </div>
            <CloseIcon className="text-slate-400 text-[18px] cursor-pointer" />
          </div>

          {/* Input Name */}
          <div className=" flex flex-col gap-2 pt-14 px-8 ">
            {/* Input Label */}
            <span className="flex gap-1 items-center text-[13px] ">
              <TextFieldsIcon className="text-[15px]" />
              <span>Component Name</span>
            </span>

            {/* Input */}
            <div className="flex gap-3">
              <input
                placeholder="Enter Component Name..."
                className="p-[10px] text-[12px] w-full rounded-md border outline-none"
              />
            </div>
          </div>

          {/* Input Code */}
          <div className=" flex flex-col gap-2 pt-6 px-8 ">
            {/* Input Label */}
            <span className="flex gap-1 items-center text-[13px] ">
              <CodeIcon className="text-[15px] font-bold" />
              <span>JSX Code</span>
            </span>

            {/* Input Editor*/}
            <button onClick={formatCode}>Format Code</button>
            <div className="border border-slate-200 rounded-md relative">
              {/* Copy Button */}
              <AceEditor
                ref={aceEditorRef}
                placeholder="Placeholder Text"
                mode="jsx"
                theme="tomorrow"
                height="400px"
                width="99%"
                name="jsxEditor"
                onChange={handleChange}
                fontSize={14}
                lineHeight={24}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={code}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2,
                  useWorker: false,
                  foldStyle: "markbegin", // Enables code folding
                }}
                editorProps={{ $blockScrolling: true }}
              />{" "}
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full mt-7 flex gap-3 justify-end px-8 items-center">
            {/* Cancel Button */}
            <div className="absolute top-10 right-10 bg-red-100 z-50 ">aza</div>
            <button className="border border-slate-200 text-slate-400 text-[12px] p-2 px-6 rounded-md hover:border-slate-300 transition-all">
              Cancel
            </button>

            <button className="bg-sky-500 hover:bg-sky-600 text-white text-[12px] p-2 px-3 rounded-md transition-all">
              Add Component
            </button>
          </div>
        </div>
        {/* Right Part */}
        <div className=" w-1/2 border-l border-slate-100 h-full">
          <LiveProvider code={code} noInline={false}>
            <div className="  ">
              <LiveError className="rounded-lg border-gray-200 p-4 text-red-600" />
              <LivePreview className="rounded-lg border-gray-200 p-4" />
            </div>
          </LiveProvider>
        </div>
      </div>
    );
  }

  function TopBar() {
    return (
      <div className="flex justify-between items-center gap-4 bg-white p-3 px-6 rounded-lg">
        <div className="flex gap-5 items-center">
          {/* Back Button */}
          <div className="absolute top-10 right-10 bg-red-100 z-50 ">aza</div>;
          <div className="border w-14 mt-[2px] p-[2px] text-slate-400 flex h-7 gap-1 px-2 items-center justify-center rounded-md text-[11px] cursor-pointer">
            <ArrowBackIcon className=" text-[11px]" />
            <span>Back</span>
          </div>
          {/* Category Title And Icon */}
          <div className="flex gap-2 items-center">
            {/* <div className="w-[30px] h-[30px] bg-sky-100 rounded-full flex items-center justify-center">
              <CategoryIcon className="text-sky-400 text-[13px]" />
            </div> */}
            <div className="flex flex-col">
              <span className="font-bold text-xl">Buttons</span>
              <span className="text-slate-400 text-[11px]">10 Components</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className=" relative p-[8px] text-[13px] w-[34%] flex px-[15px] h-13 rounded-3xl bg-slate-100 items-center gap-1">
          <SearchIcon className="text-slate-400  text-[19px]" />
          <input
            placeholder="Search a component..."
            className="bg-slate-100 outline-none font-light text-[12px]"
          />
          {/* Close Icon */}
          <div className="absolute right-2 top-2 cursor-pointer w-5 h-5 flex justify-center items-center bg-slate-300 rounded-full">
            <CloseIcon className="text-slate-400  text-[14px]" />
          </div>
        </div>
        {/* Add Component Button */}
        <button className="bg-sky-500 text-[12px] h-[33px] text-white px-3 rounded-md">
          + Component
        </button>
      </div>
    );
  }

  function AllComponents() {
    return (
      <div className=" mt-10 flex flex-col gap-3">
        <SingleComponent />
        <SingleComponent />
      </div>
    );

    function SingleComponent() {
      const [code, setCode] = useState(`
        <div className="p-4 bg-blue-100 rounded-lg">
          <h1 className="text-2xl font-bold text-blue-700">Hello, Tailwind!</h1>
          <p className="mt-2 text-gray-600">Edit this code to see live changes.</p>
        </div>
        
      `);

      const [theme, setTheme] = useState("github");
      return (
        <div className="bg-white w-full rounded-lg p-6 pb-10">
          {/* Component Title */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-[17px]">Outline Buttons</span>
              <FavoriteBorderIcon className="text-slate-400 text-[20px]" />
            </div>
            <MoreVertIcon className="text-slate-400 text-[20px]" />
          </div>

          {/* Component Preview and Code Buttons */}
          <div className="flex gap-2 mt-6 text-[13px] ">
            {/* Preview */}
            <div className="flex gap-1 items-center bg-sky-500 text-white px-3 py-[4px] rounded-md">
              <PreviewIcon className="text-[19px]" />
              <span className="mt-[2px]">Preview</span>
            </div>
            {/* JSX */}
            <div className="flex gap-1 items-center  text-slate-400 px-3 py-[4px] rounded-md">
              <CodeIcon className="text-[19px]" />
              <span className="mt-[2px]">JSX</span>
            </div>
          </div>

          {/* The Component */}

          <div className="w-full border rounded-md border-slate-200 mt-3">
            <LiveProvider code={code} noInline={false}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LiveError className="rounded-lg border-gray-200 p-4 text-red-600" />
                <LivePreview className="rounded-lg border-gray-200 p-4" />
              </div>
            </LiveProvider>
          </div>
        </div>
      );
    }
  }
}

function SideBar() {
  return (
    <div className="h-screen w-[296px] p-6 pt-9 relative">
      <RoundedArrowIcon />
      <Logo />
      <Links />
      <LogOutButton />
    </div>
  );

  function RoundedArrowIcon() {
    return (
      <div
        className={`w-7 h-7 z-40  rounded-full   absolute right-[-11px] top-[95px] flex items-center justify-center`}
      >
        <div></div>
        <div className="bg-sky-500 rounded-full w-[70%] h-[70%] flex items-center justify-center cursor-pointer">
          <KeyboardArrowRightIcon
            fontSize="medium"
            className="text-white text-[13px]"
          />
        </div>
      </div>
    );
  }
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
    <div className=" w-full bg-slate-100  p-3 pt-5 px-4 relative">
      {/* <CategoryWindow /> */}
      <AllProjectsWindow />
      <TopBar />
      <StatsBar />
      <AllCategories />
      <FavoriteComponents />
    </div>
  );

  function AllProjectsWindow() {
    return (
      <div className="w-[90%] p-9 border border-slate-50 h-[70%] bg-white rounded-xl shadow-md absolute left-1/2 top-10 -translate-x-1/2 z-20">
        <Header />
        <SearchBar />
        <SortByComponent />
        <ProjectsList />
      </div>
    );

    function Header() {
      return (
        <div className="flex justify-between items-center  ">
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
              <CategoryIcon className="text-sky-400 text-[17px]" />
            </div>

            <span className="text-lg font-bold  ">All Projects</span>
          </div>
          <div>
            <CloseIcon
              sx={{ fontSize: 16 }}
              className="text-slate-400 cursor-pointer "
            />
          </div>
        </div>
      );
    }

    function SearchBar() {
      return (
        <div className="flex  gap-5 items-center justify-between mt-12 relative ">
          <div
            className={`h-[42px] bg-slate-50 flex items-center text-sm  rounded-md  pl-3 gap-1 w-[85%]    `}
          >
            <SearchRoundedIcon className="text-slate-400" />
            <input
              placeholder="Search a Project..."
              className="bg-transparent outline-none w-full font-light"
            />
          </div>
          <button className="bg-sky-500 ml-2 p-[10px] flex w-[15%] text-sm rounded-md text-white items-center justify-center max-lg:w-[25%]">
            <AddOutlinedIcon sx={{ fontSize: 17 }} />
            <span className="max-md:hidden">Create New</span>
          </button>
        </div>
      );
    }

    function SortByComponent() {
      return (
        <div className="mt-11 mb-[13px] flex gap-2 items-center justify-between text-[13px]">
          <div className="flex gap-1">
            <span className="text-slate-400">You have</span>
            <span className="text-sky-500 font-semibold">3</span>
            <span className="text-slate-400">projects!</span>
          </div>

          <div className="flex gap-2">
            <span className="text-slate-400">Sort By:</span>
            <div className="text-sky-500 flex gap-1 items-center">
              <span>Name</span>
              <KeyboardArrowDownRoundedIcon className="text-[13px]" />
            </div>
          </div>
        </div>
      );
    }

    function ProjectsList() {
      return (
        <div className="w-full bg-slate-50 h-[64%] rounded-lg p-3 flex flex-col gap-3">
          <SingleProject />
          <SingleProject />
          <SingleProject />
        </div>
      );

      function SingleProject() {
        return (
          <div className="w-full bg-white rounded-md flex gap-3 items-center justify-between p-3 ">
            <div className="flex gap-3 items-center">
              <DragIndicatorRoundedIcon className="text-slate-400" />
              {/* Project Icon */}
              <div>
                <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
                  <CategoryIcon className="text-sky-400 text-[17px]" />
                </div>
              </div>
              {/* Project Name */}
              <div className="flex flex-col">
                <span className="font-bold">Buttons</span>
                <span className="text-slate-400 text-[12px]">
                  10 Components
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 items-center">
              {/* Edit Button */}
              <div className=" rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300">
                <EditRoundedIcon
                  className=" text-slate-400"
                  sx={{ fontSize: 15 }}
                />
              </div>

              {/* Edit Button */}
              <div className=" rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300">
                <DeleteIcon className=" text-slate-400" sx={{ fontSize: 15 }} />
              </div>
            </div>
          </div>
        );
      }
    }
  }

  function CategoryWindow() {
    return (
      <div className="w-[50%] h-[278px] border border-slate-50  bg-white rounded-md shadow-md absolute left-1/2 top-20  -translate-x-1/2 z-20">
        {/*  */}
        {/* Header */}
        <div className="flex justify-between items-center pt-7 px-7">
          <div className="flex items-center gap-2">
            {/* Category Icon */}
            <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
              <CategoryIcon className="text-sky-400 text-[17px]" />
            </div>
            {/* Category Header */}
            <span className="font-semibold">New Category</span>
          </div>
          <CloseIcon className="text-slate-400 text-[18px] cursor-pointer" />
        </div>

        {/* Body */}
        <div className=" flex flex-col gap-2 pt-8 px-7">
          <span className="text-[13px] font-medium">Category Name</span>
          <div className="flex gap-3">
            {/* Input */}
            <input
              placeholder="Enter Category Name..."
              className="p-[10px] text-[12px] w-full rounded-md border outline-none"
            />
            {/* Icon */}
            <div className="w-12 h-10 text-white  flex items-center justify-center bg-sky-500 rounded-lg cursor-pointer hover:bg-sky-600">
              <IceSkatingOutlined className="text-[18px]" />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="w-full mt-11 flex gap-3 justify-end px-7 items-center">
          {/* Cancel Button */}
          <button className="border border-slate-200 text-slate-400 text-[12px] p-2 px-6 rounded-md hover:border-slate-300 transition-all">
            Cancel
          </button>

          <button className="bg-sky-500 hover:bg-sky-600 text-white text-[12px] p-2 px-3 rounded-md transition-all">
            Add a category
          </button>
        </div>
      </div>
    );
  }

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
