import React from "react";

import { Column, Row, Text, Img, Button, Stack, Line } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PricingandcalendarYesTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate10() {
    navigate("/pricingandcalendarno");
  }
  function handleNavigate11() {
    navigate("/pricepernight");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[23px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] w-[100%]">
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
                    <div className="bg-light_blue_800 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                    <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                    <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                    <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                  </Row>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            <Row className="items-start justify-end ml-[auto] xl:mt-[87px] 2xl:mt-[102px] 3xl:mt-[128px] lg:mt-[63px] w-[88%]">
              <Column className="items-center justify-start lg:mb-[35px] xl:mb-[44px] 2xl:mb-[50px] 3xl:mb-[60px] w-[45%]">
                <Column className="justify-start w-[99%]">
                  <Column className="bg-white_A700 justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] shadow-bs w-[100%]">
                  <Text className="Firstlastname" variant="body1">
                    Which cards can you charge at your property?
                  </Text>  
                  <Row className="items-center 2xl:mb-[107px] 3xl:mb-[128px] lg:mb-[76px] xl:mb-[95px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[43%]">
                      <Column className="items-center w-[100%]">
                      <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                        <Stack className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[18%]">
                            <div className="absolute bg-light_blue_401 lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] inset-[0] justify-center m-[auto] rounded-radius5 w-[82%]"></div>
                            <Img
                              src="images/img_television_27X33.svg"
                              className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[100%]"
                              alt="television"
                            />
                          </Stack>
                        <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                          American Express
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                            <Img
                            src="images/img_file.svg"
                            className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[18%]"
                            alt="file"
                          />
                        <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                          Visa
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                            <Img
                            src="images/img_clock_21X28.svg"
                            className="lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[23px] mt-[3px] w-[18%]"
                            alt="clock"
                          />
                        <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                          Euro / Mastercard
                        </label>
                      </Row>  
                      <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                          <Img
                            src="images/img_folder.svg"
                            className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[18%]"
                            alt="folder"
                          />
                        <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                          Diners Club
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                        <Img
                        src="images/img_jcbcard.png"
                        className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[18%]"
                        alt="jcbcard"
                      />
                        <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                          JCB
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                        <Img
                            src="images/img_clock_25X31.svg"
                            className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] rounded-radius3 w-[18%]"
                            alt="clock One"
                          />
                        <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                          Maestro
                        </label>
                      </Row>  
                      <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                        <Img
                            src="images/img_twitter.svg"
                            className="common-pointer lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] w-[18%]"
                            alt="twitter"
                          />
                        <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Discover
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                        <Img
                            src="images/img_ticket.svg"
                            className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[18%]"
                            alt="ticket"
                          />
                        <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                          UnionPay debit card
                        </label>
                      </Row>
                      <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                        <Img
                            src="images/img_ticket.svg"
                            className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[18%]"
                            alt="ticket"
                          />
                        <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        UnionPay credit card
                        </label>
                      </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[-3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
                <Row className="items-center xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[88px] lg:mt-[-3px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Stack
                    className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                    onClick={handleNavigate10}
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
                    onClick={handleNavigate11}
                  >
                    Continue
                  </Button>
                </Row>
              </Column>
              <Column className="bg-blue_50 justify-start lg:ml-[290px] xl:ml-[363px] 2xl:ml-[409px] 3xl:ml-[491px] lg:mt-[339px] xl:mt-[424px] 2xl:mt-[477px] 3xl:mt-[572px] p-[4px] shadow-bs w-[23%]">
                <Img
                  src="images/img_close_23X23.svg"
                  className="close_One3"
                  alt="close"
                />
                <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mx-[auto] w-[92%]">
                  <Text className="columndescription_two1" variant="body4">
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
      </Column>
    </>
  );
};

export default PricingandcalendarYesTwoPage;