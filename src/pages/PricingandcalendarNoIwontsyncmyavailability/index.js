import React from "react";

import { Column, Row, List, Text, Img, Button, Line, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PricingandcalendarNoIwontsyncmyavailabilityPage = () => {
  const navigate = useNavigate();

  function handleNavigate30() {
    navigate(
      "/pricingandcalendaryesillimportunavailabledatesfromanotherwebsite"
    );
  }
  function handleNavigate31() {
    navigate("/pricingandcalendaryesillconnectwithachannelmanager");
  }
  function handleNavigate32() {
    navigate("/pricingandcalendarrateplans");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] xl:pb-[101px] 2xl:pb-[114px] 3xl:pb-[136px] lg:pb-[81px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="items-center justify-start w-[100%]">
          <Row className="bg-gray_50 items-left justify-evenly w-[100%]">
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
          <Row className="bg-gray_50 items-center justify-center w-[19%]">
              <Text className="Step1" variant="body4">
                Property Setup
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="checkmark"
                alt="checkmark"
              />
            </Row>
            <Row className="bg-gray_50 items-center justify-center w-[19%]">
              <Text className="Step1" variant="body4">
                Photos
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="checkmark"
                alt="checkmark"
              />
            </Row>
            <Column className="bg-gray_50 items-center px-0 w-[19%]">
              <Text className="Step2 mb-2.5" variant="body4">
                Pricing and Calendar
              </Text>
              <Row className="items-center justify-evenly lg:mt-[5px] xl:mt-[10px] 2xl:mt-[13px] 3xl:mt-[18px] w-[100%]">
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                <div className="bg-light_blue_800 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
              </Row>
            </Column>
            <Row className="bg-gray_50 items-center justify-center w-[19%]">
              <Text className="Step1" variant="body4">
                Review and Complete
              </Text>
            </Row>
          </Row>
          <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            <Row className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[87%]">
              <Column className="items-center justify-start w-[68%]">
                <Column className="justify-start w-[99%]">
                  <Text className="availability" as="h6" variant="h6">
                    Availability
                  </Text>
                  <Column className="bg-white_A700 justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] w-[100%]">
                    <Column className="justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] ml-[1px] w-[50%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body1"
                      >
                        When is the first date that guests can check in?
                        <br />
                      </Text>
                      <Row className="items-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[87%]">
                        <Img
                          src="images/img_record.png"
                          className="Record"
                          alt="Record"
                        />
                        <Text className="Assoonasposs" variant="body5">
                          As soon as possible
                        </Text>
                        <Img
                          src="images/img_round.png"
                          className="Round"
                          alt="Round"
                        />
                        <Text className="Onaspecificd" variant="body5">
                          On a specific date
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[99%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="bg-white_A700 justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                      <Column className="justify-start 2xl:mb-[102px] 3xl:mb-[122px] lg:mb-[72px] xl:mb-[90px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[85%]">
                        <Text className="Thingstoconsi" variant="body3">
                          To help you start earning, we automatically make your
                          property available for bookings for up to 18 months –
                          excluding days you import that are marked as
                          unavailable. You can manage your availability and make
                          dates unavailable for bookings after registration.
                        </Text>
                        <Text className="Doyouwantto" variant="body1">
                          Do you want to sync your availability with another
                          website?
                        </Text>
                        <Text
                          className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-green_900 w-[93%]"
                          variant="body5"
                        >
                          You will avoid double bookings by syncing calendars.
                          It will also help you get your property listed on
                          HalalHoliday.com and open for bookings 80% faster.
                        </Text>
                        <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[57%]">
                          <Img
                            src="images/img_round.png"
                            className="common-pointer Round_Two1"
                            onClick={handleNavigate30}
                            alt="Round One"
                          />
                          <Text className="rowround_two1" variant="body5">
                            Yes, I’ll import unavailable dates from another
                            website
                          </Text>
                        </Row>
                        <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[44%]">
                          <Img
                            src="images/img_round.png"
                            className="common-pointer Round_One"
                            onClick={handleNavigate31}
                            alt="Round Two"
                          />
                          <Text className="rowrecord_one" variant="body5">
                            <br />
                            <br />
                            Yes, I’ll connect with a channel manager
                          </Text>
                        </Row>
                        <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[35%]">
                          <Img
                            src="images/img_record.png"
                            className="Round_Two"
                            alt="Record One"
                          />
                          <Text className="rowround_two1" variant="body5">
                            No, I won’t sync my availability
                            <br />
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[100%]" />
                  </Column>
                  <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
                    <Stack onClick={handleNavigate32} className="bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[13%]">
                      <Img
                        src="images/img_expandarrow.png"
                        className="ExpandArrow"
                        alt="ExpandArrow"
                        
                      />
                    </Stack>
                    <Button
                      className="font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                      shape="RoundedBorder3"
                      variant="FillLightblue800"
                    >
                      Continue
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="justify-start lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[28%]">
                <Column className="bg-white_A700 items-center justify-start lg:mr-[34px] xl:mr-[43px] 2xl:mr-[49px] 3xl:mr-[58px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[86%]">
                  <Column className="justify-start lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
                    <Row className="items-start w-[82%]">
                      <Img
                        src="images/img_idea.png"
                        className="Idea"
                        alt="Idea"
                      />
                      <Text className="rowidea" variant="body3">
                        Not ready to sync your availability right now?
                      </Text>
                    </Row>
                    <Text className="columnidea" variant="body5">
                      That’s okay – you can sync your availability with other
                      websites after you finish your registration.
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-blue_50 items-end justify-start lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] mt-6 shadow-bs w-[85%]">
                  <Column className="justify-start lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] w-[93%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text
                        className="font-normal leading-[normal] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-black_900 w-[84%]"
                        variant="body6"
                      >
                        Is there anything preventing you from <br />
                        completing your registration at this <br />
                        point?
                      </Text>
                      <Img
                        src="images/img_multiply.png"
                        className="Multiply"
                        alt="Multiply"
                      />
                    </Row>
                    <Button
                      className="font-bold lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[43%]"
                      variant="OutlineLightblue500"
                    >
                      Let us know
                    </Button>
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

export default PricingandcalendarNoIwontsyncmyavailabilityPage;
