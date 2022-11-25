import React from "react";

import { Column, Row, Text, Img, Input, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PhotosImportPhotosAirbnbPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/pricingandcalendarno");
  }
  function handleNavigate5() {
    navigate("/photosimportphotos");
  }

  return (
    <>
    <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[23px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] w-[100%]">
    <Column className="items-center justify-start w-[100%]">
      <Header className="w-[100%]" />
        <Column className="items-center justify-start w-[100%]">
          <Column className="justify-start w-[100%]">
            <Row className="bg-gray_100 items-left justify-evenly  w-[100%]">
            <Row className="bg-gray_100 items-center justify-center w-[19%]">
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
            <Column className="bg-gray_100 items-center pt-[4px] px-[4px] w-[19%]">
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
        <Row className="items-start justify-start ml-[10%] xl:mt-[58px] 2xl:mt-[73px] 3xl:mt-[99px] lg:mt-[44px] w-fit">
          <Column className="items-start justify-start w-[60%]">
            <Row className="items-start justify-between w-[100%]">
              <Column className="bg-white_A700 justify-start lg:p-[12px] xl:p-[18px] 2xl:p-[22px] 3xl:p-[28px] shadow-bs w-[100%]">
                <Img
                  src="images/img_download_50X50.svg"
                  className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] ml-[2px] lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  alt="download"
                />
                <Text
                  className="font-light leading-[normal] ml-[2px] mt-[4px] text-black_900 w-[91%]"
                  variant="body4"
                >
                <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Import photos from your Airbnb listing
                  <br />
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  If you have your property listed on Airbnb you can import
                  photos from that listing to this one. Simply copy the URL
                  address that guests see for your listing and paste into
                  the box below.
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                  {`Note: Photos taken by Airbnb's professional photographers cannot be uploaded here.`}
                  <br />
                  <br />
                </span>
                <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  <br />
                  <br />
                  Live listing URL address:
                </span>
              </Text>
              <Input
                      id="url"
                      className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[100%]"
                      wrapClassName="2xl:mb-[100px] 2xl:mt-[5px] 3xl:mb-[387px] 3xl:mt-[6px] lg:mb-[229px] lg:mt-[3px] w-[100%] xl:mb-[287px] xl:mt-[4px]"
                      name="GroupFiftyEight"
                      placeholder="Enter URL address"
                      size="sm"
                    />
            </Column>
            </Row>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[-3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
            <Row className="items-center xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[88px] lg:mt-[-3px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
              <Stack
                className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                onClick={handleNavigate5}
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
                onClick={handleNavigate4}
              >
                Continue
              </Button>
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
  </Column>
    </>
  );
};

export default PhotosImportPhotosAirbnbPage;
