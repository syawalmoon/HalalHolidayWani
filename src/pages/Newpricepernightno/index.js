import React from "react";

import {
  Column,
  Stack,
  Row,
  Text,
  Img,
  List,
  Button,
  Line,
  Input,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const NewpricepernightnoPage = () => {
  const navigate = useNavigate();

  function handleNavigate44() {
    navigate("/pricepernighty");
  }
  //back button
  function handleNavigate45() {
    navigate("/pricingandcalendarno");
  }
  //continue button
  function handleNavigate46() {
    navigate("/pricingandcalendarrateplans");
  }

  return (
    <>
    <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[416px] xl:pb-[521px] 2xl:pb-[586px] 3xl:pb-[703px] w-[100%]">
    <Column className="items-center justify-start w-[100%]">
      <Header className="w-[100%]" />
      <Column className="items-center justify-start mt-[1px] w-[100%]">
      <Row className="bg-gray_50 items-left justify-evenly lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[100%]">
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
            <div className="bg-light_blue_800 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
            <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
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
        <Row className="items-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[86%]">
          <Column className="justify-start w-[76%]">
            <Row className="items-end justify-between w-[100%]">
              <Column className="justify-start w-[64%]">
                <Text className="Firstlastname" as="body1" variant="body1">
                  Price per night
                </Text>
                <Column className="bg-white_A700 items-center justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                  <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[99%]">
                    <Text className="columndescription_two" variant="body3">
                      <span className="text-black_900 font-ptsans lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        Properties that received bookings over the last year
                        and share similar features such as location,
                        facilities, and amenities to yours have usually had
                        pricing that falls between
                      </span>
                      <span className="text-black_900 font-ptsans font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        {" "}
                        MYR 89.02 - MYR 146.14
                      </span>
                      <span className="text-black_900 font-ptsans lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        , with a median price of{" "}
                      </span>
                      <span className="text-black_900 font-ptsans font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        MYR 106.12
                      </span>
                      <span className="text-black_900 font-ptsans lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                        .{" "}
                      </span>
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]" />
                    <Row className="items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[61%]">
                      <Text className="Firstlastname" variant="body4">
                        Did this help you decide on a price?
                      </Text>
                      <Img
                        src="images/img_thumbsup_30X30.png"
                        className="ThumbsUp h-[30px] w-[30px]"
                        alt="ThumbsUp"
                      />
                      <Img
                        src="images/img_thumbsdown.png"
                        className="ThumbsDown h-[30px] w-[30px]"
                        alt="ThumbsDown"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              
              <Stack className="bg-white_A700 lg:h-[152px] xl:h-[190px] 2xl:h-[214px] 3xl:h-[256px] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[31%]">
                <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[13%] w-[84%]">
                  <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[78%]">
                    <Img
                      src="images/img_idea.png"
                      className="Idea"
                      alt="Idea"
                    />
                    <Text className="rowidea" variant="body3">
                      {`What if I'm not sure `}
                      <br />
                      about my price?
                    </Text>
                  </Row>
                  <Text className="columnidea" variant="body5">
                    Don't worry, you can always change it later. You can
                    even set weekend, midweek and seasonal prices, giving
                    you more control over what you earn.
                  </Text>
                </Column>
                <Column className="absolute bg-white_A700 items-center justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                  <Column className="justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                    <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[78%]">
                      <Img
                        src="images/img_idea.png"
                        className="Idea"
                        alt="Idea One"
                      />
                      <Text className="rowidea" variant="body3">
                        {`What if I'm not sure `}
                        <br />
                        about my price?
                      </Text>
                    </Row>
                    <Text className="columnidea" variant="body5">
                      Don't worry, you can always change it later. You can
                      even set weekend, midweek and seasonal prices, giving
                      you more control over what you earn.
                    </Text>
                  </Column>
                </Column>
              </Stack>
            </Row>
            
            <Column className="bg-white_A700 items-center justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[63%]">
              <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[94%]">
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  variant="body3"
                >
                  How much do you want to charge per night?
                </Text>
                <Text className="Priceguestspa" variant="body5">
                  Price guests pay
                </Text>
                <Input
                  className="placeholder:text-gray_801 price"
                  wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[7px]"
                  name="price"
                  placeholder="MYR"
                  size="sm"
                  type="number"
                ></Input>
                <Text className="Includingtaxes" variant="body4">
                  Including taxes, commission and charges
                </Text>
              </Column>
              <Column className="items-center justify-start lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[98%]">
                <Column className="justify-start w-[100%]">
                  <Column className="justify-start mb-2 lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[99%]">
                    <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                    <Row className="bg-green_50 items-center justify-center ml-[1px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] h-[35px] w-[37%]">
                      <Img
                        src="images/img_combochart.png"
                        className="ComboChart_One h-full"
                        alt="ComboChart One"
                      />
                      <Text
                        className="text-light_green_A700_c4 "
                        variant="body5"
                      >
                        &nbsp; High impact on bookings
                      </Text>
                    </Row>
                  </Column>
                  <Text className="Doyouwantto2 my-1 mx-1" variant="body4">
                    Do you want to lower your price by 20% for your first
                    guests?
                  </Text>
                  <Text className="offer1 mx-1" variant="body5">
                    You’re more likely to get your first bookings and
                    reviews faster with a 20% discount than with none
                  </Text>
                  <Row className="items-center lg:mt-[3px] xl:mt-[8px] 2xl:mt-[11px] 3xl:mt-[16px] w-[21%]">
                    <Row class="form-check">
                      <input onClick={handleNavigate44} class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 ml-2 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="xl:text-[[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] mt-1" class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                        Yes
                      </label>
                    </Row>
                    <Row class="form-check">
                      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 ml-2 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                      <label className="xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] mt-1" class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                        No
                      </label>
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="bg-white_A700 justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[63%]">
                  <Stack className="2xl:h-[109px] 3xl:h-[130px] lg:h-[77px] xl:h-[97px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[78%]">
                    <Stack className="absolute 2xl:h-[104px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] top-[0] w-[100%]">
                      <Stack className="absolute 2xl:h-[104px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] w-[100%]">
                        <Text className="description_Six" variant="body4">
                          <span className="text-black_900 font-ptsans lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[18px]">
                            15.00% Halalholiday.com commission
                            <br />
                            <br />{" "}
                          </span>
                          <span className="text-gray_801 font-ptsans lg:text-[10px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[18px]">
                            24/7 help in your language
                            <br />Save time with automatically confirmed
                            bookings
                            <br />We promote your place on Google
                          </span>
                        </Text>
                      </Stack>
                  </Stack>
                  </Stack>
                  <Line className="bg-bluegray_100 h-[1px] lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] mt-4 w-[89%]" />
                  <Text className="test_15booking mt-2 mx-10" variant="body4">
                    MYR 76.50 Your earnings (including taxes)
                  </Text>
                </Column>
            <Column className="items-center justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[63%]">
              <Column className="items-center justify-start w-[100%]">
              <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[-3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
              <Row className="items-center xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[88px] lg:mt-[-3px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Stack
                  className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                  onClick={handleNavigate45}
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
                  onClick={handleNavigate46}
                >
                  Continue
                </Button>
              </Row>
              </Column>
            </Column>
          </Column>
          <br/><br/><br/>
          <Stack className="bg-blue_50 lg:h-[136px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[166px] xl:mt-[208px] 2xl:mt-[234px] 3xl:mt-[280px] shadow-bs w-[24%]">
          
         
            <Column className="absolute justify-start right-[1%] top-[3%] w-[94%]">
              <Row className="items-start justify-between ml-[4px] w-[99%]">
                <Text className="rowdescription_seven" variant="body6">
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
              <Column className="bg-white_A700 items-center justify-end lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] outline outline-[1px] outline-light_blue_500 lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] shadow-bs w-[42%]">
                <Text className="columnletusknow" variant="body4">
                  Let us know
                </Text>
              </Column>
            </Column>
            
          </Stack>
        </Row>
      </Column>
    </Column>
  </Column>
  </>
  );
};

export default NewpricepernightnoPage;
