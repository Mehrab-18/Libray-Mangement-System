import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Input } from "antd";
import { LoginModal } from "@/types";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LoginModal = ({ modal, setModal }: LoginModal) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState("password");

  const handleModalCancel = () => {
    setModal(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setInputType(passwordVisible ? "password" : "text");
  };

  const theme = createTheme();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "#c25b3c",
    borderRadius: 8,
    boxShadow: 24,
    [theme.breakpoints.up("lg")]: {
      // Apply styles for screens that are 600px wide or wider
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "70%",
      bgcolor: "#c25b3c",
      borderRadius: 8,
      boxShadow: 24,
    },
  };

  return (
    <Modal
      open={modal}
      onClose={handleModalCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="w-full flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-3/4 px-10 bg-white h-full rounded-[20px] flex flex-col gap-4 lg:gap-12 justify-start">
            <div
              className="flex items-center mt-6 gap-3 self-end cursor-pointer"
              onClick={handleModalCancel}
            >
              Close <AiOutlineClose />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-8">
                <div className="w-3/4 text-[25px] text-[#342923] font-bold">
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      fontWeight: "900",
                      fontSize: "14px",
                      [theme.breakpoints.up("lg")]: {
                        mt: 2,
                        fontWeight: "900",
                        fontSize: "25px",
                      },
                    }}
                  >
                    Welcome to your personal book register at Kollektiv Archiv.{" "}
                  </Typography>
                </div>
                <div className="flex flex-col gap-2 lg:gap-8">
                  <Input
                    type="text"
                    required={true}
                    placeholder="Library number"
                    className="bg-[#FAFAFA] focus:outline-none focus:border-blue-500 w-full lg:w-3/4 p-2"
                  />
                  <Input
                    type={inputType}
                    required={true}
                    suffix={
                      <div
                        className="text-[16px] text-custom-mobile-orange"
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        {passwordVisible ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </div>
                    }
                    placeholder="Password"
                    className="bg-[#FAFAFA] focus:outline-none focus:border-blue-500 w-full lg:w-3/4 p-2"
                  />
                </div>
                <span className="text-custom-mobile-orange gap-0 text-[14px] flex justify-end w-full lg:w-3/4">
                  Forgot Password?
                </span>
              </div>
              <div className="flex justify-center items-center mb-4 mt-4 lg:mt-0">
                <button className="rounded-full bg-custom-mobile-orange text-white w-full lg:w-3/4 h-8 lg:h-10">
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-custom-mobile-orange h-full rounded-[16px] flex flex-col items-center justify-center gap-4">
            <div>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ color: "white", textAlign: "center" }}
              >
                Not registered yet?
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ color: "white", textAlign: "center" }}
              >
                Contact us!
              </Typography>
            </div>
            <button className="rounded-full bg-white text-black w-[35%] h-10 p-2">
              Contact
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default LoginModal;
