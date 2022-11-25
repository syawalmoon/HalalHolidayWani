import React from "react";
import { useNavigate } from "react-router-dom";
import { SelectBoxcopy } from "components/SelectBox copy";
import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Stack,
  Switch,
  List,
  SelectBox,
  Button,
} from "components";
import Header from "components/Header/Header";

const RulesOnePage = () => {

  const navigate = useNavigate();

  function handleNavigate77() {
    navigate("/hostprofile");
  }
  function handleNavigate76() {
    navigate("/language");
  }

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
            <Column className="bg-gray_50 items-center px-0 w-[19%]">
              <Text className="Step2 mb-2.5" variant="body4">
                Property Setup
              </Text>
              <Row className="items-center justify-evenly lg:mt-[5px] xl:mt-[10px] 2xl:mt-[13px] 3xl:mt-[18px] w-[100%]">
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-light_blue_800 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
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
              className="columnrectangleeight xl:ml-[112px] 2xl:ml-[124px] 3xl:ml-[150px] lg:ml-[90px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
              variant="body1"
            >
              House rules
            </Text>
            <Column className="items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[39%]">
              <Row className="items-end lg:ml-[0px] xl:ml-[8px] 2xl:ml-[13px] 3xl:ml-[21px] w-[100%]">
              <Column className="bg-white_A700 justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
              <Row className="items-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                <Text className="Smoking" as="h7" variant="h7">
                  Smoking allowed
                </Text>
                <Switch
                  value={false}
                  className="mb-[2px] lg:ml-[236px] xl:ml-[295px] 2xl:ml-[332px] 3xl:ml-[398px] w-[7%]"
                />
              </Row>
              <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Text className="Pets" as="h7" variant="h7">
                  Pets allowed
                </Text>
                <Switch
                  value={false}
                  className="mb-[1px] lg:ml-[257px] xl:ml-[323px] 2xl:ml-[364px] 3xl:ml-[437px] w-[7%]"
                />
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Text className="Pets" as="h7" variant="h7">
                  Children allowed
                </Text>
                <Switch
                  value={false}
                  className="mb-[1px] lg:ml-[237px] xl:ml-[297px] 2xl:ml-[334px] 3xl:ml-[401px] w-[7%]"
                />
              </Row>
              <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Text className="Smoking" as="h7" variant="h7">
                  Parties/events allowed
                </Text>
                <Switch
                  value={false}
                  className="mb-[1px] lg:ml-[211px] xl:ml-[262px] 2xl:ml-[295px] 3xl:ml-[353px] w-[7%]"
                />
              </Row>
              <List
                  className="gap-[0] xl:mb-[110px] 2xl:mb-[124px] 3xl:mb-[148px] lg:mb-[88px] min-h-[auto] lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="rules_one">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Check in
                      </Text>
                      <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[59%]">
                        <Text className="Pets" variant="body4">
                          From
                        </Text>
                        <Text className="Until" variant="body4">
                          Until
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                        <SelectBoxcopy
                          className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                          placeholderClassName="text-black_900"
                          name="time"
                          placeholder="15:00"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2"
                        ></SelectBoxcopy>
                        <SelectBoxcopy
                          className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                          placeholderClassName="text-black_900"
                          name="time One"
                          placeholder="15:00"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2"
                        ></SelectBoxcopy>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="rules_one">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="mt-2 font-bold text-black_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Check out
                      </Text>
                      <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[59%]">
                        <Text className="Pets" variant="body4">
                          From
                        </Text>
                        <Text className="Until" variant="body4">
                          Until
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                        <SelectBoxcopy
                          className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                          placeholderClassName="text-black_900"
                          name="time One"
                          placeholder="15:00"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2"
                        ></SelectBoxcopy>
                        <SelectBoxcopy
                          className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                          placeholderClassName="text-black_900"
                          name="time One One"
                          placeholder="15:00"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2"
                        ></SelectBoxcopy>
                      </Row>
                    </Column>
                  </Column>
                </List>
            </Column>
              </Row>
              
            </Column>
            
                
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
            <Row className="items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
              <Stack
                className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                onClick={handleNavigate76}
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
                onClick={handleNavigate77}
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

export default RulesOnePage;