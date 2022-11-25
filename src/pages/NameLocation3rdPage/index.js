import React from "react";
import { Column, Row, Text, Img, Stack, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const NameLocation3rdPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate23() {
    navigate("/namelocation2ndpage");
  }
  function handleNavigate24() {
    navigate("/propertysetuppropertydetails");
  }
  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[39px] xl:pb-[48px] 2xl:pb-[55px] 3xl:pb-[66px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-indigo_901 items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
              <Row className="items-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[92%]">
                <Text
                  className="cursor-pointer hover:font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-white_A700_99 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  <span className="text-light_green_A400 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    Halal
                  </span>
                  <span className="text-blue_600 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    Holiday
                  </span>
                  <span className="text-white_A700 font-ptsans font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    {" "}
                  </span>
                </Text>
                <Img
                  src="images/img_minimize.svg"
                  className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] 3xl:ml-[1038px] lg:ml-[615px] xl:ml-[769px] 2xl:ml-[865px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[2%]"
                  alt="minimize"
                />
                <Text
                  className="cursor-pointer hover:font-normal font-normal lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-white_A700 hover:text-white_A700_99 w-[auto]"
                  variant="body1"
                >
                  Help
                </Text>
                <Img
                  src="images/img_question.svg"
                  className="lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[3%]"
                  alt="question"
                />
                <Img
                  src="images/img_user_35X35.svg"
                  className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] mt-[1px] Multiply"
                  alt="user"
                />
              </Row>
            </Row>
          </header>
          <Column className="justify-start w-[100%]">
            <Stack className="lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[100%]">
              <div className="absolute bg-gray_50 bottom-[1%] lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] shadow-bs w-[100%]"></div>
              <Column className="absolute bottom-[0] justify-start pt-[2px] w-[100%]">
                <Column className="items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[20%]">
                    <Text className="columnnameandlocati" variant="body4">
                      Name and location
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                      <Line className="bg-green_202 h-[4px] w-[32%]" />
                      <Line className="bg-green_202 h-[4px] w-[32%]" />
                      <Line className="bg-light_blue_800 h-[4px] w-[32%]" />
                    </Row>
                </Column>
                <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
              </Column>
            </Stack>
            <Text
              className="xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] 2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[77px] xl:mt-[96px] not-italic text-black_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Pin the location of your property
            </Text>
            <Column className="bg-white_A700 items-center justify-end xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs4 w-[39%]">
              <Text
                className="font-normal leading-[normal] mt-[3px] not-italic text-black_900 w-[97%]"
                variant="body2"
              >
                This is the location we’ll show to your guests on our site. Drag
                the map so the pin matches the exact location of your place.
              </Text>
              <Stack
                className="bg-cover bg-repeat lg:h-[296px] xl:h-[370px] 2xl:h-[416px] 3xl:h-[499px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:px-[133px] xl:px-[167px] 2xl:px-[188px] 3xl:px-[225px] w-[95%]"
                style={{ backgroundImage: "url('images/img_map.png')" }}
              >
                <Img
                  src="images/img_location.svg"
                  className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[4%] my-[auto] w-[5%]"
                  alt="location"
                />
              </Stack>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[39%]" />
            <Row className="items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
              <Stack
                className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                onClick={handleNavigate23}
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
                onClick={handleNavigate24}
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

export default NameLocation3rdPagePage;
