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

const ScamsModal = ({ modal, setModal }: LoginModal) => {
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
    width: "60%",
    height: "fit-content",
    bgcolor: "#fff",
    borderRadius: 8,
    boxShadow: 24,
    [theme.breakpoints.up("lg")]: {
      // Apply styles for screens that are 600px wide or wider
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      height: "fit-content",
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
        <div className="w-full px-10 bg-white h-full rounded-[20px] flex flex-col gap-4 lg:gap-0 justify-start">
          <div className="flex items-center mt-6 gap-3 self-end">
            Close <AiOutlineClose />
          </div>
          <div className="flex flex-col gap-2 justif-between">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#342923",
                fontSize: "25px",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              Kollektiv Archiv warns of scams!
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "#342923", fontSize: "14px" }}
            >
              At present, persons appear to be posing as Kollectiv Archiv
              employees and presenting business cards.{" "}
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "#342923", fontSize: "14px" }}
            >
              We expressly request that you show a valid identification document
              before any business transactions are made and that you call our
              hotline on +49 (0) 89 540 489 378 to confirm whether the person is
              actually an employee of our company.{" "}
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "#342923", fontSize: "14px" }}
            >
              Without exception, we do not accept cash payments and do not offer
              books/facsimiles for sale.{" "}
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "#342923", fontSize: "14px" }}
            >
              Kollektiv Archiv strongly advises you to refrain from doing
              business in such a case.{" "}
            </Typography>
          </div>
          <div className="flex flex-col justify-between my-8">
            <div className="flex flex-col gap-8"></div>
            <div className="flex justify-center items-center mb-4 mt-4 lg:mt-0">
              <button className="rounded-full bg-custom-mobile-orange text-white w-1/2 lg:w-1/4 h-12 lg:h-10">
                Okay
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ScamsModal;
