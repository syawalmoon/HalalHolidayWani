import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Text,
  PagerIndicator,
  Button,
  Line,
} from "components";

const PropertyDetailsLivingRoomPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-ptsans justify-start mx-[auto] lg:pb-[162px] xl:pb-[203px] 2xl:pb-[229px] 3xl:pb-[274px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[90px] w-[100%]">
            <Img src="images/img_user_35X35.svg" className="user" alt="user" />
            <Row className="absolute bg-indigo_901 items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
              <Row className="items-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[92%]">
                <Text className="language" as="h1" variant="h1">
                  <span className="text-light_green_A400 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    Halal
                  </span>
                  <span className="text-blue_600 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    Holiday
                  </span>
                  <span className="text-white_A700 font-ptsans font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    {" "}
                  </span>
                </Text>
                <Column className="items-center justify-start lg:ml-[369px] xl:ml-[461px] 2xl:ml-[519px] 3xl:ml-[623px] w-[22%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="font-ptsans items-center justify-end ml-[auto] w-[64%]">
                      <Text
                        className="font-bold text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Name’s Property
                      </Text>
                      <Img
                        src="images/img_arrow1.svg"
                        className="ArrowOne"
                        alt="ArrowOne"
                      />
                    </Row>
                    <Text className="columnnamesproperty" variant="body6">
                      122 Jalan Abc, Johor Bahru, Johor 8350...{" "}
                    </Text>
                  </Column>
                </Column>
                <Img
                  src="images/img_minimize.svg"
                  className="minimize"
                  alt="minimize"
                />
                <Text className="Help" variant="body1">
                  Help
                </Text>
                <Img
                  src="images/img_question.svg"
                  className="question"
                  alt="question"
                />
                <Img
                  src="images/img_user_35X35.svg"
                  className="user_One"
                  alt="user One"
                />
              </Row>
            </Row>
          </Stack>
          <Row className="items-center justify-evenly w-[100%]">
            <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
            <Row className="bg-gray_50 items-center justify-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] shadow-bs w-[19%]">
              <Text className="Step1" variant="body4">
                Name and location
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="checkmark"
                alt="checkmark"
              />
            </Row>
            <Column className="bg-gray_50 items-center pt-[4px] px-[4px] shadow-bs w-[19%]">
              <Text className="Step2" variant="body4">
                Property Setup
              </Text>
              <PagerIndicator
                className="h-[5px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[max-content]"
                count={7}
                activeCss="inline-block cursor-pointer w-[35px] h-[5px] bg-blue_300 shadow-bs3"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer w-[35px] h-[5px] bg-gray_502 shadow-bs3"
                selectedWrapperCss="inline-block mx-[1px]"
                unselectedWrapperCss="inline-block mx-[1px]"
              />
            </Column>
            <Button
              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
              size="xl"
            >
              Photos
            </Button>
            <Button
              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
              size="xl"
            >
              Pricing and calendar
            </Button>
            <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[19%]"></div>
            <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
          </Row>
        </Column>
        <Column className="items-center justify-start xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[40%]">
          <Column className="justify-start lg:mb-[174px] xl:mb-[218px] 2xl:mb-[246px] 3xl:mb-[295px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Living Room
            </Text>
            <Column className="items-center justify-start lg:mt-[56px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] shadow-bs4 w-[100%]">
              <Row className="bg-white_A700 items-center justify-between outline outline-[0.5px] outline-gray_700_7f lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[100%]">
                <Row className="items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[24%]">
                  <Img
                    src="images/img_notification.svg"
                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    alt="notification"
                  />
                  <Text className="availability" variant="body4">
                    Sofa Bed{" "}
                  </Text>
                </Row>
                <Stack className="bg-white_A700 lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:mr-[12px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] mt-[2px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[25%]">
                  <Img
                    src="images/img_button.svg"
                    className="button"
                    alt="button"
                  />
                  <Text className="One" variant="body4">
                    1
                  </Text>
                </Stack>
              </Row>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]" />
            <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
              <Button
                className="flex items-center justify-center text-center w-[25%]"
                leftIcon={
                  <Img
                    src="images/img_arrowleft.svg"
                    className="text-center lg:w-[4px] lg:mr-[4px] xl:w-[6px] xl:mr-[6px] 2xl:w-[7px] 2xl:mr-[7px] 3xl:w-[8px] 3xl:mr-[8px]"
                    alt="arrow_left"
                  />
                }
                variant="OutlineLightblue800"
              >
                <div className="bg-transparent font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Cancel
                </div>
              </Button>
              <Button
                className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[72%]"
                variant="OutlineLightblue8001_2"
              >
                Save
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PropertyDetailsLivingRoomPage;
