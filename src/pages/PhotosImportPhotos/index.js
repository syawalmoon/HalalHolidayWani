import React from "react";

import { Column, Row, Text, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PhotosImportPhotosPage = () => {
  const navigate = useNavigate();

  function handleNavigate12() {
    navigate("/photosimportphotosairbnb");
  }
  function handleNavigate13() {
    navigate("/photosimportphotosairbnb");
  }
  function handleNavigate20() {
    navigate("/pricingandcalendarno");
  }
  function handleNavigate21() {
    navigate("/hostprofile");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
            <Column className="justify-start w-[100%]">
                <Row className="bg-gray_100 items-left justify-evenly  w-[100%]">
                <Row className="bg-gra_100 items-center justify-center w-[19%]">
                  <Text className="Step1" variant="body4">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_checkmark.svg"
                    className="checkmark"
                    alt="checkmark"
                  />
                </Row>
                <Row className="bg-gray_100 items-center justify-center w-[19%]">
                  <Text className="Step1" variant="body4">
                    Property Setup
                  </Text>
                  <Img
                    src="images/img_checkmark.svg"
                    className="checkmark"
                    alt="checkmark"
                  />
                </Row>
                <Column className="bg-gray_100 items-center px-0 w-[19%]">
                  <Text className="Step2 mb-2.5" variant="body4">
                    Photos
                  </Text>
                  <Line className="bg-blue_A200 h-[5px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] shadow-bs2 w-[100%]" />
                </Column>
                <Column className="bg-gray_100 items-center pt-[4px] px-[4px] w-[19%]">
                  <Text className="Step2 mb-2.5" variant="body4">
                    Pricing and Calendar
                  </Text>
                </Column>
              </Row>
              <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            </Column>
          </Column>
            <Row className="items-end justify-end ml-[auto] xl:mt-[58px] 2xl:mt-[73px] 3xl:mt-[99px] lg:mt-[44px] w-[88%]">
              <Column className="justify-start w-[73%]">
                <Row className="items-start justify-between w-[100%]">
                  <Column className="justify-start w-[61%]">
                    <Text className="Firstlastname" variant="body1">
                      What does your place look like?
                    </Text>
                    <Column className="bg-white_A700 items-left justify-center xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] shadow-bs w-[100%]">
                      <Row className="bg-green_50 font-ptsans items-end lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] px-[3px] w-[38%]">
                        <Img
                          src="images/img_combochartico.svg"
                          className="combochartico"
                          alt="combochartico"
                        />
                        <Text
                          className="font-normal mb-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] not-italic text-green_900 w-[auto]"
                          variant="body5"
                        >
                          High impact on bookings
                          <br />
                        </Text>
                      </Row>
                      <Text
                        className="font-roboto font-semibold leading-[normal] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-black_900 w-[86%]"
                        variant="body4"
                      >
                      <span className="text-black_900 font-ptsans font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        Upload at least 5 photos of your property.{" "}
                      </span>
                      <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        The more you upload, the <br />
                        more likely you are to get bookings. You can add more
                        later.
                      </span>
                    </Text>
                    <Stack className="font-ptsans lg:h-[206px] xl:h-[258px] 2xl:h-[290px] 3xl:h-[348px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[28px] 3xl:mt-[29px] w-[93%]">
                      <div class="flex justify-center items-center w-full">
                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div class="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                      </div> 
                      </Stack>
                      <Row className="font-ptsans items-center justify-center ml-2 lg:mb-[23px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] ml-[auto] lg:mt-[11px] xl:mt-[22px] 2xl:mt-[29px] 3xl:mt-[45px] w-[100%]">
                        <Img
                          src="images/img_bookmark.svg"
                          className="common-pointer Idea"
                          onClick={handleNavigate13}
                          alt="bookmark"
                        />
                        <Text
                          className="common-pointer font-normal mb-[4px] lg:mt-[0px] xl:mt-[2px] 2xl:mt-[5px] not-italic text-blue_A700 w-[auto]"
                          variant="body4"
                          onClick={handleNavigate12}
                        >
                          Import photos from your Airbnb listing
                        </Text>
                      </Row>
                    </Column>
                    <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[-3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
                    <Row className="items-center xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[88px] lg:mt-[-3px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                      <Stack
                        className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                        onClick={handleNavigate21}
                      >
                        <Img
                          src="images/img_arrowleft.svg"
                          className="arrowleft1"
                          alt="arrowleft"
                          
                        />
                      </Stack>
                      <Button
                        className="font-bold bg-sky-700 hover:bg-indigo_901 lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                        variant="OutlineLightblue8001_2"
                        onClick={handleNavigate20}
                      >
                        Continue
                      </Button>
                    </Row>
                  </Column>
                  <Row className="bg-white_A700 font-roboto items-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] shadow-bs w-[37%]">
                    <Img
                      src="images/img_thumbsup.svg"
                      className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] Idea"
                      alt="thumbsup"
                    />
                    <Stack className="lg:h-[228px] xl:h-[285px] 2xl:h-[321px] 3xl:h-[385px] lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[80%]">
                      <Text
                        className="absolute font-semibold h-[max-content] inset-[0] justify-center leading-[normal] m-[auto] text-black_900 w-[97%]"
                        variant="body4"
                      >
                        <span className="text-black_900 font-ptsans font-bold lg:text-[10px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px]">
                          {`What if I don't have professional photos?`}
                          <br />
                          <br />
                          <br />
                          <br />
                        </span>
                        <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                          No problem! You can use a smartphone or a digital
                          camera.Here are some tips for taking great photos of
                          your property
                          <br />
                          <br />
                        </span>
                        <span className="text-blue_A700 font-ptsans font-normal not-italic lg:text-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                          Here are some tips for taking great photos of your
                          property
                          <br />
                          <br />
                        </span>
                        <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                          If you don’t know who took a photo, it's best to avoid
                          using it. Only use photos others have taken if you
                          have permission.
                        </span>
                      </Text>
                      <Img
                        src="images/img_close_23X23.svg"
                        className="absolute left-[260px] top-[0] Idea"
                        alt="close"
                      />
                    </Stack>
                  </Row>
                </Row>
              </Column>
              <Column className="bg-blue_50 justify-start lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[341px] xl:mt-[427px] 2xl:mt-[480px] 3xl:mt-[576px] p-[4px] shadow-bs w-[23%]">
                <Img
                  src="images/img_close_23X23.svg"
                  className="close_One3"
                  alt="close One"
                />
                <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mx-[auto] w-[92%]">
                  <Text className="columndescription_two" variant="body4">
                    Is there anything preventing you from <br />
                    completing your registration at this <br />
                    point?
                  </Text>
                  <Button
                    className="font-bold lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[44%]"
                    variant="OutlineLightblue500"
                  >
                    Let us know
                  </Button>
                </Column>
              </Column>
            </Row>
        </Column>
    </>
  );
};

export default PhotosImportPhotosPage;
