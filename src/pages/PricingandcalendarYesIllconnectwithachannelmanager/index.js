import React from "react";

import { Column, Row, List, Text, Img, Button, Line, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PricingandcalendarYesIllconnectwithachannelmanagerPage = () => {
  const navigate = useNavigate();

  function handleNavigate33() {
    navigate("/pricingandcalendarnoiwontsyncmyavailability");
  }
  function handleNavigate34() {
    navigate(
      "/pricingandcalendaryesillimportunavailabledatesfromanotherwebsite");
  }
  function handleNavigate34() {
    navigate("/pricingandcalendarrateplans");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] 2xl:pb-[112px] 3xl:pb-[134px] lg:pb-[79px] xl:pb-[99px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="items-center justify-start w-[100%]">
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
            <Row className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[88%]">
              <Column className="items-center justify-start w-[68%]">
                <Column className="justify-start w-[99%]">
                  <Text className="availability" as="h6" variant="h6">
                    Availability
                  </Text>
                  <Column className="bg-white_A700 justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] w-[100%]">
                    <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[1px] w-[50%]">
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
                          <br />
                          <br />
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
                <Column className="items-center justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[99%]">
                  <Column className="bg-white_A700 justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                    <Column className="justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[95%]">
                      <Text
                        className="font-normal leading-[normal] not-italic text-black_900 w-[90%]"
                        variant="body3"
                      >
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
                        className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-green_900 w-[84%]"
                        variant="body5"
                      >
                        You will avoid double bookings by syncing calendars. It
                        will also help you get your property listed on
                        HalalHoliday.com and open for bookings 80% faster.
                      </Text>
                      <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[51%]">
                        <Img
                          src="images/img_round.png"
                          className="common-pointer Round_Two1"
                          onClick={handleNavigate34}
                          alt="Round One"
                        />
                        <Text className="rowround_two1" variant="body5">
                          Yes, I’ll import unavailable dates from another
                          website
                        </Text>
                      </Row>
                      <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[39%]">
                        <Img
                          src="images/img_record.png"
                          className="Round_One"
                          alt="Record One"
                        />
                        <Text className="rowrecord_one" variant="body5">
                          <br />
                          <br />
                          Yes, I’ll connect with a channel manager
                        </Text>
                      </Row>
                      <Row className="bg-green_50 border border-green_900 border-solid items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pb-[4px] px-[4px] w-[99%]">
                        <Img
                          src="images/img_ok.png"
                          className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[6%]"
                          alt="Ok"
                        />
                        <Text
                          className="font-normal leading-[normal] lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-black_900 text-shadow-ts w-[82%]"
                          variant="body5"
                        >
                          <br />
                          <br />
                          {`You'll be able to connect with a channel manager after your registration is complete – please continue to the next step.`}
                        </Text>
                      </Row>
                      <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[32%]">
                        <Img
                          src="images/img_round.png"
                          className="common-pointer Round_Two"
                          onClick={handleNavigate33}
                          alt="Round Two"
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
                <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[99%]">
                  <Stack onClick={handleNavigate34} className="bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[13%]">
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
              <Column className="justify-start lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[28%]">
                <Column className="bg-white_A700 items-center justify-start lg:mr-[40px] xl:mr-[50px] 2xl:mr-[57px] 3xl:mr-[68px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[84%]">
                  <Column className="justify-start lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
                    <Row className="items-start w-[86%]">
                      <Img
                        src="images/img_idea.png"
                        className="Idea"
                        alt="Idea"
                      />
                      <Text
                        className="font-bold leading-[normal] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] text-black_900 w-[79%]"
                        variant="body2"
                      >
                        Not ready to sync your availability right now?
                      </Text>
                    </Row>
                    <Text
                      className="font-normal leading-[normal] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-black_900 w-[93%]"
                      variant="body5"
                    >
                      That’s okay – you can sync your availability with other
                      websites after you finish your registration.
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-blue_50 items-center justify-start lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] shadow-bs w-[83%]">
                  <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text
                        className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-black_900 w-[83%]"
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
                      className="font-bold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[42%]"
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

export default PricingandcalendarYesIllconnectwithachannelmanagerPage;
