import React from "react";
import { Psize } from "components/Psize";
import {
  Column,
  Row,
  Text,
  Img,
  PagerIndicator,
  Button,
  Stack,
  Line,
  Input,
  SelectBox,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PropertySetupPropertyDetailsPage = () => {
  const navigate = useNavigate();
  const [changeColor, setChangeColor] = useState(false);
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);

  function handleNavigate49() {
    navigate("/propertydetailsotherspaces");
  }
  function handleNavigate50() {
    navigate("/propertydetailsbedroomtwo");
  }
  function handleNavigate51() {
    navigate("/propertysetupamenities");
  }
  function handleNavigate52() {
    navigate("/namelocation3rdpage");
  }
  const handleClick = () =>{
    setChangeColor(!changeColor)
  };
  const handleClick1 = () =>{
    setChangeColor1(!changeColor1)
  };
  const handleClick2 = () =>{
    setChangeColor2(!changeColor2)
  };
  const handleClick3 = () =>{
    setChangeColor3(!changeColor3)
  };
  const handleClick4 = () =>{
    setChangeColor4(!changeColor4)
  };
  


  return (
    <> 
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start w-[100%]">
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
              <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
                <Text className="Step2 mb-2.5" variant="body4">
                  Property Setup
                </Text>
                <PagerIndicator
                  className="mb-3 h-[5px] w-[max-content]"
                  count={7}
                  activeCss="inline-block cursor-pointer w-[35px] h-[5px] bg-blue_300"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer w-[35px] h-[5px] bg-gray_502"
                  selectedWrapperCss="inline-block mx-[1px]"
                  unselectedWrapperCss="inline-block mx-[1px]"
                />
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
            <Column className="justify-start xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pr-[3px] py-[3px] w-[40%]">
              <Text
                className="ml-[4px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Property Details
              </Text>
              <Column className="bg-white_A700 items-center justify-start ml-[4px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] shadow-bs4 w-[99%]">
                <Column className="justify-start mb-[3px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                  <Column className="items-left justify-start w-[37%]">
                    <Text className="Firstlastname" variant="body2">
                      Where can people sleep?
                    </Text>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                    <Column className="bg-white_A700 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs5 w-[87%]">
                      <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[20%]">
                        <Text className="columneachpropertyw" variant="body4">
                          Bedroom 1
                        </Text>
                        <Text
                          className="font-normal font-ptsanscaption lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
                          variant="body6"
                        >
                          1 double bed
                        </Text>
                      </Column>
                    </Column>
                    <Img
                      src="images/img_antdesignminu.svg"
                      className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                      alt="antdesignminu"
                    />
                  </Row>
                  <Column className="bg-white_A700 justify-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs5 w-[87%]">
                    <Column className="justify-start ml-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[19%]">
                      <Text className="Firstlastname" variant="body4">
                        Living Room
                      </Text>
                      <Text className="weburl_Two" variant="body6">
                        0 beds
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="common-pointer bg-white_A700 justify-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs5 w-[87%]"
                    onClick={handleNavigate49}
                  >
                    <Column className="justify-start ml-[2px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[20%]">
                      <Text className="Firstlastname" variant="body4">
                        Other spaces
                      </Text>
                      <Text className="weburl_Two" variant="body6">
                        0 beds
                      </Text>
                    </Column>
                  </Column>
                  <Row
                    className="common-pointer items-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[19%]"
                    onClick={handleNavigate50}
                  >
                    <Img
                      src="images/img_plus.svg"
                      className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="plus"
                    />
                    <Text
                      className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] not-italic text-light_blue_800 w-[auto]"
                      variant="body6"
                    >
                      Add bedroom
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-end ml-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs4 w-[99%]">
                <Column className="justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[6px] w-[41%]">
                  <Text className="lg:mt-[5px] xl:mt-[8px] 2xl:mt-[10px] 3xl:mt-[13px] mb-2 Firstlastname" variant="body4">
                    How many guests can stay?
                  </Text>
                  <Input
                    id="number"
                    className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[100%]"
                    name="GroupFiftyEight"
                    placeholder="0"
                    shape="RoundedBorder3"
                    size="sm"
                    type="number"
                  />
                  <Text
                    className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mb-2 Firstlastname"
                    variant="body4"
                  >
                    How many bathrooms are there?
                  </Text>
                  <Input
                    id="number"
                    className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[100%]"
                    name="GroupFiftyEight"
                    placeholder="0"
                    shape="RoundedBorder3"
                    size="sm"
                    type="number"
                  />
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start ml-[4px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs4 w-[99%]">
                <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mt-[1px] w-[68%]">
                  <Column className="justify-start w-[49%]">
                    <Text className="Firstlastname" variant="body4">
                      How big is this property?
                    </Text>
                    <Text
                      className="font-bold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[15px] 3xl:mt-[20px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Apartment size - optional
                    </Text>
                  </Column>
                  <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                    <Input
                      id="number"
                      className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:required text-slate_700 w-[100%]"
                      name="GroupFiftyEight"
                      placeholder=""
                      shape="RoundedBorder3"
                      size="sm"
                      type="number"
                    />
                    <Psize 
                      className="h-[40px] font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[40%]"
                      placeholder="Unit area" 
                      size="sm"
                    >
            
                    </Psize>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:mb-[53px] xl:mb-[66px] 2xl:mb-[75px] 3xl:mb-[90px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs4 w-[99%]">
                <Column className="justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] w-[96%]">
                  <Text className="columneachpropertyw" variant="body2">
                    What type of room do you offer?
                  </Text>
                  <Text className="Selectallthat" variant="body6">
                    Select all that apply
                  </Text>
                  <Row className="font-ptsans items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[16%] ${(changeColor === true) ? 'bg-indigo_901 text-white' : 'bg-white_A700 text-black'}`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      onClick={handleClick}
                    >
                      Universal
                    </Button>
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%] ${(changeColor1 === true) ? 'bg-indigo_901 text-white' : 'bg-white_A700 text-black'}`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      onClick={handleClick1}
                    >
                      Muslim friendly
                    </Button>
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[22%] ${(changeColor2 === true) ? 'bg-indigo_901 text-white' : 'bg-white_A700 text-black'}`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      onClick={handleClick2}
                    >
                      Muslim owned
                    </Button>
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[11%] ${(changeColor3 === true) ? 'bg-indigo_901 text-white' : 'bg-white_A700 text-black'}`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      onClick={handleClick3}
                    >
                      Halal
                    </Button>
                    <Button
                      className={`font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%] ${(changeColor4 === true) ? 'bg-indigo_901 text-white' : 'bg-white_A700 text-black'}`}
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                      onClick={handleClick4}
                    >
                      Pet-friendly
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Column>
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

export default PropertySetupPropertyDetailsPage;
