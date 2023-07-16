import { useAuth } from "@/firebase/auth";
import { Avatar, IconButton } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const AppLayout = ({ children }) => {
  const { authUser } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return !!authUser ? (
    <div style={{ height: "100vh" }}>
      <header style={{ height: "11.8vh" }}>
        <div className="bg-lightThemePale">
          <div className="flex flex-row sm:justify-between items-center pt-5 pb-5">
            <Link href="/" className="flex items-center">
              <span className="text-5xl">📝</span>
              <h1 className="text-3xl md:text-3xl font-bold">
                {process.env.APP_NAME}
              </h1>
            </Link>
            <div className="hidden md:flex gap-4 pl-5 pr-5 flex-row justify-end">
              <div className="p-3 bg-black text-white hover:bg-black/[0.8] cursor-pointer">
                My Pofile
              </div>
              <div className="p-3 bg-black text-white hover:bg-black/[0.8] cursor-pointer">
                Logout
              </div>
            </div>
            <div className="md:hidden pl-5 pr-5">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32, backgroundColor: "#000" }}>
                  {authUser.username[0].toUpperCase() ?? "User"}
                </Avatar>
              </IconButton>
            </div>
          </div>
        </div>
      </header>
      <main style={{ height: "74.6vh" }}>{children}</main>
      <footer
        style={{ height: "8.2vh" }}
        className="bg-lightThemePale flex items-center p-5"
      >
        © mightySteelHead
      </footer>
    </div>
  ) : (
    <main>{children}</main>
  );
};

export default AppLayout;
