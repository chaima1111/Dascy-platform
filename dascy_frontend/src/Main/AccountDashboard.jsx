import React from "react";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../Pages/scenes/global/Topbar";
import Sidebar from "../Pages/scenes/global/Sidebar";
import {Article} from "../components"
import "./dash.css";
const AccountDashboard = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="dascy__dashbaord">
          <Sidebar />
          <main className="dascy-content">
            <Topbar />
            <Article />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AccountDashboard;
