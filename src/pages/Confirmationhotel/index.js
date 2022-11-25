import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const ConfirmationhotelPage = () => {
  const navigate = useNavigate();

  function handleNavigate73() {
    navigate("/#");
  }
  function handleNavigate82() {
    navigate("/howmuchhoteltolist");
  }

  return (
    <>
      <Column className="bg-gray_50 items-center justify-start mx-[auto] lg:pb-[33px] xl:pb-[41px] 2xl:pb-[47px] 3xl:pb-[56px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Stack className="font-roboto 2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[90px] w-[100%]">
            <Text
              className="absolute bottom-[30%] left-[2%] text-white_A700 w-[auto]"
              as="h3"
              variant="h3"
            >
              HalalHoliday
            </Text>
            <Row className="absolute bg-indigo_900 font-ptsans items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
              <Row className="items-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[92%]">
                <Text className="language" as="h1" variant="h1">
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
                <Column className="items-center justify-start lg:ml-[369px] xl:ml-[461px] 2xl:ml-[519px] 3xl:ml-[623px] w-[22%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="font-ptsans items-center justify-end ml-[auto] w-[64%]">
                      <Text
                        className="font-bold text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Name’s Property
                      </Text>
                      <Img
                        src="images/img_arrow1.svg"
                        className="ArrowOne"
                        alt="ArrowOne"
                      />
                    </Row>
                  </Column>
                </Column>
                <Img
                  src="images/img_minimize.svg"
                  className="minimize"
                  alt="minimize"
                />
                <Text className="Help" variant="body1">
                  Help
                </Text>
                <Img
                  src="images/img_question.svg"
                  className="question"
                  alt="question"
                />
                <Img
                  src="images/img_user.svg"
                  className="user_One"
                  alt="user"
                />
              </Row>
            </Row>
          </Stack>
          <div
            className="font-ptsans 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] not-italic text-black_900 w-[auto]"
            as="h4"
            variant="h4"
          >
           
          </div>
          <Row className="font-ptsans items-start justify-start ml-[auto] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[88%]">
            <Column className="bg-white_A700 items-center justify-end lg:mb-[115px] xl:mb-[145px] 2xl:mb-[163px] 3xl:mb-[195px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] shadow-bs3 w-[45%]">
              <Column className="font-ptsans items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[18%]">
                <Text className="Box1" variant="body4">
                  You’re listing:
                </Text>
                <Img
                  src="images/img_user_45X45.svg"
                  className="lg:h-[45px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[88%]"
                  alt="volume"
                />
              </Column>
              <Text
                className="font-roboto font-semibold leading-[normal] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] text-black_900 text-center w-[71%]"
                as="h5"
                variant="h5"
              >
                One hotel where guests can
                <br /> book the entire place
              </Text>
              <Text
                className="3xl:mt-[117px] lg:mt-[69px] xl:mt-[87px] 2xl:mt-[98px] columneachpropertyw"
                variant="body4"
              >
                Does this sound like your property?
              </Text>
              <Column className="font-ptsans items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]">
                <Button
                  className="common-pointer font-bold hover:bg-sky-900 lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[100%]"
                  // onClick={handleNavigate73}
                  shape="RoundedBorder3"
                  variant="FillLightblue800"
                >
                  Continue
                </Button>
                <Button
                  className="common-pointer font-bold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-light_blue_800 w-[100%]"
                  onClick={handleNavigate82}
                  variant="OutlineLightblue8001_2"
                >
                  No, I need to make a change
                </Button>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ConfirmationhotelPage;
