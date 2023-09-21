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

const ContactModal = ({ modal, setModal }: LoginModal) => {
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
    width: "85%",
    height: "95%",
    bgcolor: "#fff",
    borderRadius: 8,
    boxShadow: 24,
    [theme.breakpoints.up("lg")]: {
      // Apply styles for screens that are 600px wide or wider
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "42%",
      height: "86%",
      bgcolor: "#fff",
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
          <div className="w-full lg:w-full px-10 bg-white h-full rounded-[20px] flex flex-col gap-4 lg:gap-12 justify-start">
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
                        fontWeight: "900",
                        fontSize: "16px",
                      },
                    }}
                  >
                    You can not contact the library (ID: 202310350015) directly,
                    but your request will get sent to the Kollektum GmbH.{" "}
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      fontWeight: "300",
                      fontSize: "14px",
                      [theme.breakpoints.up("lg")]: {
                        mt: 2,
                        fontWeight: "900",
                        fontSize: "12px",
                      },
                    }}
                  >
                    Your message will be forwarded to the library provided that
                    your text doesn't violate any laws.
                  </Typography>
                </div>
              </div>
              <div className="h-full flex flex-col items-center mb-4 mt-4 lg:mt-0">
                <div className="w-full my-6">
                  <div className="w-3/4 mb-4">
                    <label className="block text-[#4B4B50] text-[10px] mb-2">
                      Name*
                    </label>
                    <input
                      type="text"
                      required={true}
                      placeholder="Name"
                      className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                    />
                  </div>
                  <div className="w-3/4 mb-4">
                    <label className="block text-[#4B4B50] text-[10px] mb-2">
                      Lastname*
                    </label>
                    <input
                      type="text"
                      required={true}
                      placeholder="Lastname"
                      className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                    />
                  </div>
                  <div className="w-3/4 mb-4">
                    <label className="block text-[#4B4B50] text-[10px] mb-2">
                      Phone*
                    </label>
                    <input
                      type="text"
                      required={true}
                      placeholder="Phone"
                      className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                    />
                  </div>
                  <div className="w-3/4 mb-4">
                    <label className="block text-[#4B4B50] text-[10px] mb-2">
                      Email
                    </label>
                    <input
                      type="text"
                      required={true}
                      placeholder="Email"
                      className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                    />
                  </div>
                  <div className="w-3/4 mb-4">
                    <label className="block text-[#4B4B50] text-[10px] mb-2">
                      Message
                    </label>
                    <input
                      type="text"
                      required={true}
                      placeholder="Message"
                      className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                    />
                  </div>
                  <div className="w-full py-3 mb-4 flex justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="appearance-none border rounded-full border-custom-mobile-orange checked:appearance-auto checked:bg-custom-mobile-orange  focus:outline-none w-4 h-4 mr-2"
                      />
                      <span className="text-gray-600 text-sm">
                        By submitting I accept the privacy statement.
                      </span>
                    </div>
                    <div className="hidden lg:block text-[#4B4B50] text-[12px]">
                      * Required fields
                    </div>
                  </div>
                </div>
                <button className="rounded-full bg-custom-mobile-orange text-white w-full lg:w-3/4 h-8 lg:h-10">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ContactModal;
