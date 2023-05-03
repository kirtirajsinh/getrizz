import { Drawer } from "@mui/material";
import React from "react";

const DrawerWrapper = ({
  children,
  position,
  isDrawerOpen,
  setIsDrawerOpen,
  cancelButton,
  buttonText,
}) => {
  return (
    <>
      <Drawer
        anchor={position}
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        sx={{
          "& .MuiDrawer-paper": {
            borderRadius:
              (position === "bottom" && "20px 20px 0px 0px") ||
              (position === "left" && "0px 10px 10px 0px"),
            bgcolor: "#1a1a1b",
            color: "#fff",
          },
          "& .MuiDrawer-paperAnchorLeft": {
            width: "80%",
          },
        }}
        transitionDuration={200}
        bgcolor="custom"
      >
        <div className="max-h-[500px]">{children}</div>
        {cancelButton && (
          <button
            className=" bg-p-bg p-2 mb-2  text-xl font-md"
            onClick={() => setIsDrawerOpen(false)}
          >
            {buttonText}
          </button>
        )}
      </Drawer>
    </>
  );
};

export default DrawerWrapper;
