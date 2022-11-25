import React from "react";

import { Column, Row, List, Text, Img, Button, Stack, Line } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PricingandcalendarFivePage = () => {
  const navigate = useNavigate();

  function handleNavigate28() {
    navigate("/pricingandcalendarnoiwontsyncmyavailability");
  }
  function handleNavigate29() {
    navigate(
      "/pricingandcalendaryesillimportunavailabledatesfromanotherwebsite"
    );
  }
  function handleNavigate37() {
    navigate("/pricingandcalendaryesillconnectwithachannelmanager");
  }
  function handleNavigate38() {
    navigate("/pricingandcalendaryesillconnectwithachannelmanager");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[123px] xl:pb-[153px] 2xl:pb-[173px] 3xl:pb-[207px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="items-center justify-start w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
              <List
                className="gap-[0] grid grid-cols-3 min-h-[auto] w-[57%]"
                orientation="horizontal"
              >
                <Row className="listnameandlocati">
                  <Text className="rownameandlocati" variant="body4">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="TikTokVerified"
                    alt="TikTokVerified"
                  />
                </Row>
                <Row className="listnameandlocati">
                  <Text className="rowpropertysetup" variant="body4">
                    Property Setup
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="TikTokVerified_One"
                    alt="TikTokVerified One"
                  />
                </Row>
                <Row className="listnameandlocati">
                  <Text className="rowphotos" variant="body4">
                    Photos
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="TikTokVerified_Two"
                    alt="TikTokVerified Two"
                  />
                </Row>
              </List>
              <Column className="bg-gray_50 items-center pl-[1px] py-[1px] shadow-bs w-[19%]">
                <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[99%]">
                  <Text className="Firstlastname" variant="body4">
                    Pricing and calendar
                  </Text>
                  <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-blue_A200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-gray_501 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                  </Row>
                </Column>
              </Column>
              <Button
                className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                size="xl"
              >
                Review and complete
              </Button>
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
            </Row>
            <Row className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[87%]">
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
                  <Stack className="lg:h-[305px] xl:h-[381px] 2xl:h-[429px] 3xl:h-[514px] w-[100%]">
                    <Img
                      src="images/img_round.png"
                      className="common-pointer absolute bottom-[34%] lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] left-[4%] w-[4%]"
                      onClick={handleNavigate38}
                      alt="Round One"
                    />
                    <Column className="absolute items-center justify-start w-[100%]">
                      <Column className="bg-white_A700 justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                        <Column className="justify-start lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[85%]">
                          <Text className="Thingstoconsi" variant="body3">
                            To help you start earning, we automatically make
                            your property available for bookings for up to 18
                            months – excluding days you import that are marked
                            as unavailable. You can manage your availability and
                            make dates unavailable for bookings after
                            registration.
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
                              onClick={handleNavigate29}
                              alt="Round Two"
                            />
                            <Text className="rowround_two1" variant="body5">
                              Yes, I’ll import unavailable dates from another
                              website
                            </Text>
                          </Row>
                          <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[44%]">
                            <Img
                              src="images/img_round.png"
                              className="Round_One"
                              alt="Round Three"
                            />
                            <Text
                              className="font-normal leading-[normal] mb-[3px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] not-italic text-black_900 w-[85%]"
                              variant="body5"
                            >
                              <br />
                              <br />
                              Yes, I’ll connect with a channel manager
                            </Text>
                          </Row>
                          <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[35%]">
                            <Img
                              src="images/img_round.png"
                              className="common-pointer Round_Two"
                              onClick={handleNavigate28}
                              alt="Round Four"
                            />
                            <Text className="rowround_two1" variant="body5">
                              No, I won’t sync my availability
                              <br />
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                      <Line className="bg-bluegray_100 h-[1px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]" />
                    </Column>
                  </Stack>
                  <Row className="items-center justify-between lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[100%]">
                    <Stack className="bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[13%]">
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
                <Column className="bg-blue_50 items-end justify-start lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] xl:pl-[12px] 2xl:pl-[14px] 3xl:pl-[16px] lg:pl-[9px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:py-[9px] shadow-bs w-[85%]">
                  <Column className="justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] w-[97%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text
                        className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-black_900 w-[83%]"
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
                      className="font-bold lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[42%]"
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

export default PricingandcalendarFivePage;
