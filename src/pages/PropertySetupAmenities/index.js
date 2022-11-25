import React from "react";
import { useNavigate } from "react-router-dom";
import { Column, Row, Text, Img, Button, List, Line, Stack } from "components";
import Header from "components/Header/Header";




const PropertySetupAmenitiesPage = () => {

  const navigate = useNavigate();

  function handleNavigate51() {
    navigate("/propertysetupbreakfastdetails");
  }
  function handleNavigate52() {
    navigate("/propertysetuppropertydetails");
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
                <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
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
            <Text
              className="font-normal font-ptsanscaption xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
              variant="body1"
            >
              What can guests use at your place?
            </Text>
            <Row className="font-ptsanscaption items-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[64%]">
              <List
                className="bg-white_A700 gap-[0] min-h-[auto] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs4 w-[61%]"
                orientation="vertical"
              >
              <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[189px] xl:mr-[237px] 2xl:mr-[267px] 3xl:mr-[320px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] rounded-radius4 w-[47%]">
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  variant="body2"
                  >
                    General
                </Text>
                <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                  <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                    Air conditioning
                  </label>
                </Row>
                <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                  <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                    Heating
                    </label>
                </Row>
                <Row className=" form-check font-ptsans items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 w-[100%]">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                      Free wifi
                    </label>
                </Row>
                <Row className=" form-check font-ptsans items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 w-[100%]">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                      Electric vehicle charging station
                    </label>
                </Row>
              </Column>
              <Line className="self-center w-[99%] h-[1.5px] bg-gray_700_33" />
              <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[189px] xl:mr-[237px] 2xl:mr-[267px] 3xl:mr-[320px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] rounded-radius4 w-[47%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Cooking and cleaning
                  </Text>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Kitchen
                      </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Kitchenette
                      </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Washing machine
                      </label>
                  </Row>
                </Column>
                <Line className="self-center w-[99%] h-[1.5px] bg-gray_700_33" />
                <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[189px] xl:mr-[237px] 2xl:mr-[267px] 3xl:mr-[320px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] rounded-radius4 w-[47%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Entertainment
                  </Text>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Flat-screen TV
                      </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Swimming pool
                      </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Hot tub
                      </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Minibar
                      </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Sauna
                      </label>
                  </Row>
                </Column>
                <Line className="self-center w-[99%] h-[1.5px] bg-gray_700_33" />
                <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[189px] xl:mr-[237px] 2xl:mr-[267px] 3xl:mr-[320px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] rounded-radius4 w-[47%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Outside and view
                  </Text>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Balcony
                      </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Garden view
                      </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        Terrace
                      </label>
                  </Row>
                  <Row className=" form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                      <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                      <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                        View
                      </label>
                  </Row>
                </Column>
              </List>
              <Column className="bg-white_A700 font-ptsans items-center justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs4 w-[37%]">
                <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="lightbulb"
                      alt="lightbulb"
                    />
                    <Text className="rowlightbulb" variant="body2">
                      What if i don’t see a facility I offer?
                    </Text>
                    <Img
                      src="images/img_close_23X23.svg"
                      className="close_One1"
                      alt="close"
                    />
                  </Row>
                  <Text
                    className="font-normal leading-[normal] lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-black_900 w-[77%]"
                    variant="body5"
                  >
                    The facilities listed here are the ones most searched for by
                    guests. After you complete your registeration, you can add
                    more facilities from a larger list in the extranet, the
                    platform you’ll use to manage your property
                  </Text>
                </Column>
              </Column>
            </Row>
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

export default PropertySetupAmenitiesPage;
