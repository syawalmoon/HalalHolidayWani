import React from "react";

import { Column, Text, Row, Button, Img, Line, Input, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const QuestionaboutpropertyPage = () => {
  const navigate = useNavigate();

  function handleNavigate81() {
    navigate("/confirmation");
  }

  function handleNavigate82() {
    navigate("/namelocation1stpage");
  }
  function handleNavigate104() {
    window.location.href = "https://www.airbnb.com/rooms/xxxxxxxx";
  }
  function handleNavigate105() {
    window.location.href = "https://www.vrbo.com/xxxxxx";
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] 3xl:pb-[102px] lg:pb-[60px] xl:pb-[75px] 2xl:pb-[85px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] w-[42%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Where else is your property listed?
            </Text>
            <Column className="items-center justify-start lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[94%]">
              <Column className="bg-white_A700 items-center justify-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] shadow-bs3 w-[100%]">
                <Column className="justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[97%]">
                  <Text
                    className="font-normal leading-[normal] not-italic text-black_900 w-[80%]"
                    variant="body4"
                  >
                    If your property is listed in Airbnb or Vrbo, you can speed
                    up
                    <br />
                    registration by importing it directly to HalalHoliday.com
                  </Text>
                  <br />
                  <ul class="w-50 text-sm font-medium text-gray-900 ">
                    <li class="w-full rounded-t-lg ">
                      <div class="flex items-center pl-3">
                        <input
                          id="airbnb-checkbox"
                          type="checkbox"
                          value=""
                          class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="Airbnb-checkbox"
                          class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Airbnb
                        </label>
                      </div>
                    </li>
                    <li class="w-full rounded-t-lg ">
                      <div class="flex items-center pl-3">
                        <input
                          id="tripadvisor-checkbox"
                          type="checkbox"
                          value=""
                          class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="tripadvisor-checkbox"
                          class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          TripAdvisor
                        </label>
                      </div>
                    </li>
                    <li class="w-full rounded-t-lg ">
                      <div class="flex items-center pl-3">
                        <input
                          id="vrbo-checkbox"
                          type="checkbox"
                          value=""
                          class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="vrbo-checkbox"
                          class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Vrbo
                        </label>
                      </div>
                    </li>
                    <li class="w-full rounded-t-lg ">
                      <div class="flex items-center pl-3">
                        <input
                          id="anotherweb-checkbox"
                          type="checkbox"
                          value=""
                          class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="anotherweb-checkbox"
                          class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Another website
                        </label>
                      </div>
                    </li>
                    <li class="w-full rounded-t-lg ">
                      <div class="flex items-center pl-3">
                        <input
                          id="anotherweb-checkbox"
                          type="checkbox"
                          value=""
                          class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="anotherweb-checkbox"
                          class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          My property isn't listed on any other websites
                        </label>
                      </div>
                    </li>
                  </ul>
                  <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]" />
                  <Text
                    className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Aboutproperty"
                    variant="body4"
                  >
                    Import property details from Airbnb or Vrbo
                  </Text>
                  <Text className="Pastethelink" variant="body6">
                    Paste the link to your Airbnb or Vrbo listing
                  </Text>
                  <Row className="items-center ml-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[83%]">
                    <Input
                      className="placeholder:text-gray_503 GroupSixtyNine"
                      wrapClassName="w-[74%]"
                      name="weburl"
                      placeholder="https://www.airbnb.com/rooms/xxxxxxxx"
                      shape="RoundedBorder3"
                      size="sm"
                      variant="OutlineGray503"
                    ></Input>
                    <Button
                      className="font-bold hover:bg-sky-900 lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[25%]"
                      shape="RoundedBorder3"
                      size="md"
                      variant="OutlineBluegray101"
                    >
                      Apply
                    </Button>
                  </Row>
                  <Text
                    className="ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rownameandlocati1"
                    variant="body6"
                  >
                    Example link:
                  </Text>
                  <Text
                    className="common-pointer ml-[1px] mt-[3px] rownameandlocati1"
                    variant="body6"
                    onClick={handleNavigate104}
                  >
                    https://www.airbnb.com/rooms/xxxxxxxx
                  </Text>
                  <Text
                    className="common-pointer weburl_Two"
                    variant="body6"
                    onClick={handleNavigate105}
                  >
                    https://www.vrbo.com/xxxxxx
                  </Text>
                  <a href="https://www.airbnb.com/" target="_blank"
                    className="font-normal hover:underline 
                    3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[7px] not-italic text-light_blue_800 w-[auto]"
                    variant="body4"> Where I can find this link? 
                  </a>
                </Column>
              </Column>
              <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]" />
              <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                <Stack
                  className="common-pointer bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                  onClick={handleNavigate81}
                >
                  <Img
                    src="images/img_arrowleft_14X7.svg"
                    className="arrowleft2"
                    alt="arrowleft"
                  />
                </Stack>
                <Button
                  className="font-bold hover:bg-sky-900 lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                  shape="RoundedBorder3"
                  variant="FillLightblue800"
                  onClick={handleNavigate82}
                >
                  Continue
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default QuestionaboutpropertyPage;
