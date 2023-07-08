import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AppState } from "../App";

const Header = () => {
  const useAppState = useContext(AppState);

  return (
    <div className=" sticky z-10 header text-3xl flex justify-between items-center text-red-500 font-bold p-3  border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Movie<span className="text-white ">Verse</span>
        </span>
      </Link>
      {useAppState.login ? (
        <Link to={"/addmovie"}>
          <h1 className="text-lg cursor-pointer flex item-center">
            <Button>
              <AddIcon className="mr-1" color="secondary" />
              <span className="text-white"> Add New</span>
            </Button>
          </h1>
        </Link>
      ) : (
        <Link to={"/login"}>
          <h1 className="text-lg  bg-green-500 cursor-pointer flex item-center">
            <Button>
              <span className="text-white font-medium capitalize">Login</span>
            </Button>
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Header;
