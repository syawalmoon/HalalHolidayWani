import React from "react";
import { useNavigate } from "react-router-dom";
import { Column, Row, Text, Img, Button, Line, Stack } from "components";
import Header from "components/Header/Header";

const PropertySetupBreakfastDetailsPage = () => {

  const navigate = useNavigate();

  function handleNavigate51() {
    navigate("/parking");
  }
  function handleNavigate52() {
    navigate("/propertysetupamenities");
  }
  function handleNavigate53() {
    navigate("/propertysetupbreakfastdetailsy");
  }
  function handleNavigate54() {
    navigate("/propertysetupbreakfastdetailsn");
  }

  return (
    <>
    <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
    <Column className="items-center justify-start w-[100%]">
      <Header className="w-[100%]" />
        <Column className="justify-start w-[100%]">
          <Row className="bg-gray_50 items-left justify-evenly  w-[100%]">
            <Row className="bg-gray_50 items-center justify-center w-[19%]">
              <Text className="Step1" variant="body4">
                Name and location
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="checkmark"
                alt="checkmark"
              />
            </Row>
            <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
              <Text className="Step2 mb-2.5" variant="body4">
                Property Setup
              </Text>
              <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
              </Row>
            </Column>
            <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
              <Text className="Step2 mb-2.5" variant="body4">
                Photos
              </Text>
            </Column>
            <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
              <Text className="Step2 mb-2.5" variant="body4">
                Pricing and Calendar
              </Text>
            </Column>
        </Row>
        <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            <Text className="font-normal font-ptsanscaption xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
            variant="body1">
              Breakfast details
            </Text>
            <Column className="bg-white_A700 justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] shadow-bs4 w-[39%]">
              <Column className="justify-start lg:mb-[233px] xl:mb-[292px] 2xl:mb-[329px] 3xl:mb-[395px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[35%]">
                <Text
                  className="mb-4 font-bold text-black_900 w-[auto]"
                  variant="body2"
                >
                  Do you serve breakfast?
                </Text>
                <Row class="form-check" className="mb-1">
                  <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={handleNavigate53}/>
                  <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                    Yes
                  </label>
                </Row>
                <Row class="form-check">
                  <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={handleNavigate54}/>
                  <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
                    No
                  </label>
                </Row>
              </Column>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
            <Row className="items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
              <Stack
                className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                onClick={handleNavigate52}
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
                onClick={handleNavigate51}
              >
                Continue
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PropertySetupBreakfastDetailsPage;
