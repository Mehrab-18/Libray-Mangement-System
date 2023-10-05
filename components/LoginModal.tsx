import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Input, Form, notification } from "antd";
import { LoginModal } from "@/types";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material";
import { ClipLoader } from "react-spinners";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

import { useUserObj } from "@/app/UserContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { loginApi } from "@/api/works";
import Link from "next/link";

const LoginModal = ({ modal, setModal }: LoginModal) => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [selectModalToOpen, setSelectModalToOpen] = useState("login");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [loader, setLoader] = useState(false);
  const [loginPayload, setLoginPayload] = useState<any>();
  const [forgotPasswordPayload, setForgotPasswordPayload] = useState<any>({
    libraryNum: 0,
    name: "",
    phone: "",
  });

  const handleModalCancel = () => {
    setModal(false);
  };

  const handleForgotModalPayload = (name: any, value: any) => {
    setForgotPasswordPayload({ ...forgotPasswordPayload, [name]: value });
  };

  function handleForgotSubmit() {
    console.log("forgot payload", forgotPasswordPayload);
    const emailBody = `
    Library Number: ${forgotPasswordPayload.libraryNum}
    Name: ${forgotPasswordPayload.name}
    Phone Number: ${forgotPasswordPayload.phone}
    
  `;
    console.log("emailBody", emailBody);
    // Encode the email body for the mailto link
    const encodedEmailBody = encodeURIComponent(emailBody);

    // Create the mailto link
    const mailtoLink = `mailto:your@email.com?subject=New Book Data&body=${encodedEmailBody}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  }

  const handleInputChange = (name: any, value: any) => {
    setLoginPayload({ ...loginPayload, [name]: value });
  };

  const formSubmit = () => {
    login();
  };

  const login = async () => {
    setLoader(true);
    const res = await loginApi(loginPayload);
    const redirectLink = document.createElement("a");
    redirectLink.href = "/my_library";
    redirectLink.click();
    if (res?.response?.data?.error) {
      api["error"]({
        message: "Failed",
        description: `Error: ${res?.response.data.error.message}`,
      });
      setTimeout(() => {
        setLoader(false);
        handleModalCancel();
      }, 1000);
    } else {
      const user = res.response.data.user;
      const { setUserObj } = useUserObj();
      setUserObj(user);
      api["success"]({
        message: "Successful",
        description: `You have successfully logged In`,
      });
      setTimeout(() => {
        setLoader(false);
        handleModalCancel();
      }, 1000);
    }
  };

  const handleBack = () => {
    setSelectModalToOpen("login");
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
    width: selectModalToOpen === "login" ? "80%" : "85%",
    height: selectModalToOpen === "login" ? "80%" : "55%",
    bgcolor: "#c25b3c",
    borderRadius: 8,
    boxShadow: 24,
    [theme.breakpoints.up("lg")]: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: selectModalToOpen === "login" ? "50%" : "30%",
      height: selectModalToOpen === "login" ? "70%" : "60%",
      bgcolor: "#c25b3c",
      borderRadius: 8,
      boxShadow: 24,
    },
  };

  const handleForgotClick = () => {
    setSelectModalToOpen("forgot");
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        onFinish={formSubmit}
        style={{ backgroundColor: "none" }}
      >
        <Modal
          open={modal}
          onClose={handleModalCancel}
          BackdropProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {selectModalToOpen === "login" ? (
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
                    <div className="flex flex-col">
                      <div className="w-3/4 pb-12 text-[25px] text-[#342923] font-bold">
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
                          Welcome to your personal book register at Kollektiv
                          Archiv.{" "}
                        </Typography>
                      </div>
                      <div className="flex flex-col gap-2 lg:gap-4">
                        <Form.Item name="identifier">
                          <Input
                            type="text"
                            required={true}
                            placeholder="Library number"
                            className="bg-[#FAFAFA] focus:outline-none focus:border-blue-500 w-full lg:w-3/4 p-2"
                            onChange={(val) =>
                              handleInputChange("identifier", val.target.value)
                            }
                          />
                        </Form.Item>
                        <Form.Item name="password">
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
                            onChange={(val) =>
                              handleInputChange("password", val.target.value)
                            }
                            placeholder="Password"
                            className="bg-[#FAFAFA] focus:outline-none focus:border-blue-500 w-full lg:w-3/4 p-2"
                          />
                        </Form.Item>
                      </div>
                      <span
                        className="text-custom-mobile-orange gap-0 text-[14px] cursor-pointer flex justify-end w-full lg:w-3/4"
                        onClick={handleForgotClick}
                      >
                        Forgot Password?
                      </span>
                    </div>
                    <div className="flex justify-center items-center mb-4 mt-4 lg:mt-0">
                      <button
                        onClick={formSubmit}
                        type="submit"
                        className="rounded-full bg-custom-mobile-orange text-white w-full lg:w-3/4 h-8 lg:h-10"
                      >
                        {loader ? (
                          <ClipLoader color="#fff" size={15} />
                        ) : (
                          <>Login</>
                        )}
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
                  <Link
                    href="/binding_form"
                    className="rounded-full text-center bg-white text-black w-[35%] h-10 p-2"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </Box>
          ) : (
            <Box sx={style}>
              <div className="w-full flex flex-col lg:flex-row h-full">
                <div className="w-full lg:w-full px-4 py-4 bg-white h-full rounded-[20px] flex flex-col gap-4 lg:gap-12 justify-start">
                  <div className="px-2 w-full flex justify-between items-center ">
                    <div className="w-1/4 text-custom-mobile-orange ">
                      <div
                        className="flex items-center cursor-pointer"
                        onClick={handleBack}
                      >
                        <IoIosArrowBack /> Back
                      </div>
                    </div>
                    <div
                      className="w-1/4 flex items-center gap-3 justify-end cursor-pointer"
                      onClick={handleModalCancel}
                    >
                      Close <AiOutlineClose />
                    </div>
                  </div>
                  <div className="pl-6 flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-8">
                      <div className="w-full pt-8 text-[25px] text-[#342923] font-bold">
                        <Typography
                          id="modal-modal-description"
                          sx={{
                            fontWeight: "900",
                            fontSize: "20px",
                            [theme.breakpoints.up("lg")]: {
                              fontWeight: "900",
                              fontSize: "20px",
                            },
                          }}
                        >
                          You forgot your password?
                        </Typography>
                      </div>
                    </div>
                    <div className="h-full flex flex-col items-center mb-4 lg:mt-0">
                      <div className="w-full my-6">
                        <div className="w-3/4 mb-4">
                          <label className="block text-[#4B4B50] text-[10px] mb-2">
                            Library number
                          </label>
                          <input
                            type="text"
                            required={true}
                            onChange={(val) =>
                              handleForgotModalPayload(
                                "libraryNum",
                                val.target.value
                              )
                            }
                            placeholder="12 digit library number"
                            className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                          />
                        </div>
                        <div className="w-3/4 mb-4">
                          <label className="block text-[#4B4B50] text-[10px] mb-2">
                            Name{" "}
                          </label>
                          <input
                            type="text"
                            required={true}
                            placeholder="Name"
                            onChange={(val) =>
                              handleForgotModalPayload("name", val.target.value)
                            }
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
                            onChange={(val) =>
                              handleForgotModalPayload(
                                "phone",
                                val.target.value
                              )
                            }
                            className="border-b border-black bg-white focus:outline-none focus:border-blue-500 w-full py-2"
                          />
                        </div>

                        <div className="w-full py-3 mb-4 flex justify-between">
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              className="appearance-none border rounded-full border-custom-mobile-orange checked:appearance-auto checked:bg-custom-mobile-orange  focus:outline-none w-[46px] h-[16px] lg:h-5 lg:w-8 mr-2"
                            />
                            <span className="text-gray-600 text-sm">
                              Yes, I agree that my data will be processed in
                              accordance with this data protection declaration
                              for the purpose of establishing contact.{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={handleForgotSubmit}
                        className="rounded-full bg-custom-mobile-orange text-white w-full lg:w-3/4 h-8 lg:h-10"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          )}
        </Modal>
      </Form>
    </>
  );
};

export default LoginModal;
