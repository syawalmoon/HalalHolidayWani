import React from "react";

import { Column, Stack, Text, Row, Line, Input, Img, Button } from "components";
import Header1 from "components/Header/Header1";
import { useNavigate } from "react-router-dom";

const NameLocation1stPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate24() {
    navigate("/namelocation2ndpage");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] xl:pb-[111px] 2xl:pb-[125px] 3xl:pb-[150px] lg:pb-[88px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Stack className="lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[100%]">
              <div className="absolute bg-gray_50 bottom-[1%] lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] shadow-bs w-[100%]"></div>
              <Column className="absolute bottom-[0] justify-start pt-[2px] w-[100%]">
                <Column className="items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[20%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Text className="columnnameandlocati" variant="body4">
                      Name and location
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Line className="bg-light_blue_800 h-[4px] w-[32%]" />
                      <Line className="bg-bluegray_400 h-[4px] w-[32%]" />
                      <Line className="bg-bluegray_400 h-[4px] w-[32%]" />
                    </Row>
                  </Column>
                </Column>
                <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
              </Column>
            </Stack>
            <Row className="items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] 2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[77px] xl:mt-[96px] w-[65%]">
              <Column className="w-[60%]">
                <Text
                  className="not-italic text-black_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  What’s the name of your place?
                </Text>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Column className="bg-white_A700 justify-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] shadow-bs4 w-[100%]">
                  <label class="block">
                    <Text className="Maincard" variant="body2">
                      Property name
                    </Text>
                    <Input
                      id="propertyname"
                      className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[100%]"
                      wrapClassName="2xl:mb-[323px] 2xl:mt-[5px] 3xl:mb-[387px] 3xl:mt-[6px] lg:mb-[229px] lg:mt-[3px] w-[100%] xl:mb-[287px] xl:mt-[4px]"
                      name="GroupFiftyEight"
                      placeholder="Enter property name"
                      shape="RoundedBorder3"
                      size="sm"
                    />
                    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Please provide a valid email address.
                    </p>
                    </label>
                  </Column>
                </Column>
                <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Stack className="bg-white_A700 hover:bg-gray_400 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="arrowleft1"
                      alt="arrowleft"
                    />
                  </Stack>
                  <Button
                    className="common-pointer bg-sky-700 hover:bg-indigo_901 font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                    onClick={handleNavigate24}
                    variant="OutlineLightblue8001_2"
                  >
                    Continue
                  </Button>
                </Row>
              </Column>
              <Column className="items-center mt-1 lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] w-[36%]">
                <Column className="bg-white_A700 items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] shadow-bs4 w-[100%]">
                  <Column className="justify-start lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] w-[100%]">
                    <Row className="items-start w-[100%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="Idea"
                        alt="thumbsup"
                      />
                      <Text
                        className="font-bold leading-[normal] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-black_900 w-[60%]"
                        variant="body2"
                      >
                        What should I consider when choosing a name?
                      </Text>
                      <Img
                        src="images/img_close_23X23.svg"
                        className="lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] close_One1"
                        alt="close"
                      />
                    </Row>
                    <Stack className="lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[56%]">
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] left-[0] top-[4%] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc"
                      />
                      <Img
                        src="images/img_akariconscirc.svg"
                        className="absolute bottom-[2%] lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] left-[0] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                        alt="akariconscirc One"
                      />
                      <Row className="absolute items-center w-[100%]">
                        <Img
                          src="images/img_akariconscirc.svg"
                          className="lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"
                          alt="akariconscirc Two"
                        />
                        <Text
                          className="font-normal leading-[normal] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic text-black_900 w-[90%]"
                          variant="body5"
                        >
                          Keep it short and catchy
                          <br />
                          Avoid abbreviations
                          <br />
                          Stick to the facts
                        </Text>
                      </Row>
                    </Stack>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs4 w-[100%]">
                  <Column className="items-center justify-start lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Img
                        src="images/img_lightbulb.svg"
                        className="lightbulb"
                        alt="lightbulb"
                      />
                      <Text className="rowlightbulb" variant="body2">
                        Why do I need to name my property?
                      </Text>
                      <Img
                        src="images/img_close_23X23.svg"
                        className="close_One1"
                        alt="close One"
                      />
                    </Row>
                    <Text
                      className="font-normal leading-[normal] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] not-italic text-black_900 w-[70%]"
                      variant="body5"
                    >
                      This is the name that will appear as the title of your
                      listing on our site. It should tell guests something
                      specific about your place, where it is or what you offer.
                      This will be visible to anyone visiting our site, so don’t
                      include your address in the name{" "}
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default NameLocation1stPagePage;
