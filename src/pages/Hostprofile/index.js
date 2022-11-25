import React from "react";

import { Column, Stack, Img, Row, Text, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import Header from "components/Header/Header";

const HostprofilePage = () => {
  const navigate = useNavigate();
  
  function handleNavigate51() {
    navigate("/rules");
  }
  
  function handleNavigate52() {
    navigate("/photosimportphotos");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Column className="justify-start w-[100%]">
        <Header className="w-[100%]" />
          <Column className="items-center justify-start w-[100%]">
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
        </Column>
      </Column>
          <Text 
            className="columnrectangleeight xl:ml-[112px] 2xl:ml-[124px] 3xl:ml-[150px] lg:ml-[90px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
            variant="body1"
          >
            Host profile
          </Text>
          <Row className="items-start xl:ml-[109px] 2xl:ml-[124px] 3xl:ml-[150px] lg:ml-[90px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[66%]">
            <Column className="bg-white_A700 border border-gray_300 border-solid justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[60%]">
              <Text className="Maincard3 w-[100%]" variant="h7">
                Help your listing stand out by telling potential guests a bit more about yourself, your property and your neighbourhood. This information will be shown on your property page.
              </Text>
              <Row className="items-left justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[93%]">
                <Column className="items-start lg:ml-[15px] xl:ml-[7px] 2xl:ml-[-3px] 3xl:ml-[9px] w-[93%]">  
                  <div class="mb-5">
                    <input type="checkbox" name="agree" id="agree" class="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label for="agree" class="ml-3">
                      The property
                    </label>
                    <div class="mt-2 hidden peer-checked:block">
                      <Column>
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About the property</label>
                        <textarea id="message" rows="4" class="block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]" placeholder="What makes your place
                        unique? What can guests expect?"></textarea>
                      </Column>
                    </div>
                  </div>
                  <div class="mb-5 ">
                    <input type="checkbox" name="agree" id="agree" class="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label for="agree" class="ml-3">The host
                    </label>

                    <div class="mt-2 hidden peer-checked:block">
                        
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Host Name</label>
                    <textarea id="message" rows="1" class="mb-3 block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]" placeholder=""></textarea>

                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About the host</label>
                    <textarea id="message" rows="4" class="block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]" placeholder="What are your interests? 
                    What do you like about hosting?"></textarea>

                    </div>
                    </div>
                  
                  <div class="mb-5">
                    <input type="checkbox" name="agree" id="agree" class="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label for="agree" class="ml-3">The neighbourhood
                    </label>

                    <div class="mt-2 hidden peer-checked:block">
                        
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About the neighbourhood</label>
                    <textarea id="message" rows="4" class="block p-2.5 2xl:ml-[20px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[250%]" placeholder="What's the area like? 
                    Are there any attractions nearby?"></textarea>

                    </div>
                    </div>
                  
                  <div class="mb-5">
                    <input type="checkbox" name="agree" id="agree" class="peer w-6 h-6 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label for="agree" class="ml-3">None of the above/I'll add these later
                    </label>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
          <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
            <Row className="items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
              <Stack
                className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                onClick={handleNavigate51}
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
                onClick={handleNavigate52}
              >
                Continue
              </Button>
            </Row>
        </Column>
      </Column>
    </>
  );
};

export default HostprofilePage;