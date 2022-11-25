import React from "react";

import { Column, Stack, Img, Row, Text, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const HowmuchapartmenttolistPage = () => {
  const navigate = useNavigate();

  function handleNavigate76() {
    navigate("/confirmation");
  }

  function handleNavigate77() {
    navigate("/propertycategorypage");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans justify-start mx-[auto] lg:pb-[24px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[40px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[90px] w-[100%]">
            <Img
              src="images/img_mdihomegroup.svg"
              className="absolute lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] inset-y-[0] my-[auto] right-[17%] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
              alt="mdihomegroup"
            />
            <Row className="absolute bg-indigo_900 items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
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
                  src="images/img_user.svg"
                  className="user_One"
                  alt="user"
                />
              </Row>
            </Row>
          </Stack>
        </Column>
        <Column className="justify-start 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] w-[39%]">
          <Text
            className="not-italic text-black_900 w-[auto]"
            as="h4"
            variant="h4"
          >
            How many apartment are you listing?{" "}
          </Text>
          <Stack className="lg:h-[277px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
            <Line className="absolute bg-gray_200_ce bottom-[24%] h-[1px] w-[100%]" />
            <Column className="absolute items-center justify-start w-[100%]">
              <Column className="bg-white_A700 items-center justify-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] shadow-bs3 w-[100%]">
                <ul class="grid gap-6 w-full md:grid-cols-2">
                  <li>
                    <input type="radio" id="hosting-small1" name="hosting" value="hosting-small" class="hidden peer" required=""/>
                    <label for="hosting-small1" class="inline-flex justify-between items-center p-7 w-full text-black_900 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <Img
                          src="images/img_home.svg"
                          className="mr-[3px] bg-white_A700 lg:w-[23px] lg:h-[24px] lg:ml-[22px] xl:w-[29px] xl:h-[30px] xl:ml-[28px] 2xl:w-[33px] 2xl:h-[34px] 2xl:ml-[32px] 3xl:w-[39px] 3xl:h-[40px] 3xl:ml-[38px] my-[auto]"
                          alt="home" loading="lazy" />
                      </div>
                      <div class="w-full ml-[75px] mt-[7px] text-lg font-medium">One Apartment</div>
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="hosting-big1" name="hosting" value="hosting-big" class="hidden peer" />
                    <label for="hosting-big1" class="inline-flex justify-between items-center p-7 w-full text-black_900 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600  hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div class="block">
                        <Img
                          src="images/img_calculator.svg"
                          className="mr-[2px] bg-white_A700 lg:w-[30px] lg:ml-[22px] xl:w-[38px] xl:ml-[27px] 2xl:w-[43px] 2xl:ml-[40px] 3xl:w-[51px] 3xl:ml-[37px] my-[auto]"
                          alt="calculator" />
                      </div>
                      <div class="w-full ml-[75px] mt-[7px] text-lg font-medium">Multiple Apartment</div>
                    </label><br></br>
                    <div class="mt-4 hidden peer-checked:block">
                      <Text className="columnyesillimpor" font-medium variant="body5">
                        Are these properties at the same address or building?
                      </Text>
                      <ul class="mt-9 grid gap-6 w-full md:grid-cols-2">
                        <li>
                          <input type="radio" id="hosting-small2" name="hosting2" value="hosting-small2" class="hidden peer" required="" />
                          <label for="hosting-small2" class="inline-flex justify-between items-center p-5 w-full text-black_900 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                              <Img
                                src="images/location1.svg"
                                className="mr-[3px] bg-white_A700 lg:w-[23px] lg:h-[24px] lg:ml-[22px] xl:w-[29px] xl:h-[30px] xl:ml-[28px] 2xl:w-[33px] 2xl:h-[34px] 2xl:ml-[32px] 3xl:w-[39px] 3xl:h-[40px] 3xl:ml-[38px] my-[auto]"
                                alt="home" loading="lazy" />
                            </div>
                            <div class="w-full ml-[75px] mt-[7px] text-lg font-medium">Yes, these apartments are at the same address or building</div>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="hosting-big2" name="hosting2" value="hosting-big2" class="hidden peer" />
                          <label for="hosting-big2" class="inline-flex justify-between items-center p-5 w-full text-black_900 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600  hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                              <Img
                                src="images/location2.svg"
                                className="mr-[2px] bg-white_A700 lg:w-[30px] lg:ml-[22px] xl:w-[38px] xl:ml-[27px] 2xl:w-[43px] 2xl:ml-[40px] 3xl:w-[51px] 3xl:ml-[37px] my-[auto]"
                                alt="calculator" />
                            </div>
                            <div class="w-full ml-[75px] mt-[7px] text-lg font-medium">No, these apartments are at different addresses or buildings</div>
                          </label>
                        </li>
                      </ul>
                      <div class="mt-6">
                        <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mt-[1px] w-[68%]">
                          <Column className="justify-start w-[49%]">
                            <Text className="Firstlastname" variant="body4">
                              Number of properties
                            </Text>
                          </Column>
                          <Row className=" mt-4 items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                            <input
                              id="message"
                              type="number"
                              rows="1"
                              defaultValue={2}
                              class="justify-start mb-1.5 block p-2 w-13 text-sm text-gray-900 bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </Row>
                        </Column>
                      </div>
                    </div>
                  </li>
                </ul>
              </Column>
              <Row className="common-pointer items-center justify-between lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">
                <Stack
                  className="bg-white_A700 border border-light_blue_800 border-solid lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]"
                  onClick={handleNavigate77}>

                  <Img
                    src="images/img_arrowleft_14X7.svg"
                    className="arrowleft1"
                    alt="arrowleft"
                  />
                </Stack>
                <Button
                  className="font-bold hover:bg-sky-900 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_101 w-[87%]"
                  shape="RoundedBorder3"
                  variant="FillLightblue800"
                  onClick={handleNavigate76}
                >
                  Continue
                </Button>
              </Row>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default HowmuchapartmenttolistPage;
