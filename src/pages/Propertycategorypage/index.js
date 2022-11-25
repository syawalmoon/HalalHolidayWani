import React from "react";

import { Column, Text, Row, Stack, Img, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PropertycategorypagePage = () => {
  const navigate = useNavigate();

  function handleNavigate68() {
    navigate("/howmuchpropertytolist");
  }
  function handleNavigate69() {
    navigate("/howmuchhoteltolist");
  }


  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[364px] xl:pb-[455px] 2xl:pb-[512px] 3xl:pb-[614px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="font-ptsans justify-start xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[60%]">
            <Text className="Box1 font-semibold text-xl" variant="body2">
              List your property on HalalHoliday.com and start welcoming guests
              in no time!{" "}
            </Text>
            <Text
              className="font-light lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] text-black_900 w-[auto]"
              variant="body4"
            >
              To get started , choose the type of property you want to list in
              HalalHoliday.com
            </Text>
            <Row className="font-ptsans items-start justify-start lg:ml-[12px] xl:ml-[1px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[98%]">
            
            <Column className="font-ptsans bg-white_A700 items-center w-80 h-80 justify-start xl:mt-[5px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[24%]">
           <Button
                  className="ml-18 -mt-6 absolute flex items-center justify-center text-center w-[8%]"
                  leftIcon={
                    <Img
                      src="images/img_menu.svg"
                      className="mr-[1px] text-center left-[8%] absolute lg:w-[14px] lg:h-[15px] xl:w-[17px] xl:h-[18px] 2xl:w-[20px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px]"
                      alt="menu"
                    />
                  }
                  shape="RoundedBorder2"
                  size="sm"
                  variant="FillGreen900"
                >
                  <div className="bg-transparent font-bold inset-x-[0] ml-[10px] xl:text-[12px] 2xl:text-[20px] 3xl:text-[16px] lg:text-[9px] top-[0]">
                    Quick start
                  </div>
                </Button>
                <Img
                  src="images/img_volume.svg"
                  className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[11px] xl:mt-[22px] 2xl:mt-[16px] 3xl:mt-[19px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  alt="user One"
                />
                <div class="font-bold text-xl lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr">
                  Apartment
                </div>
                <div class="font-light text-sm font-ptsans leading-[normal] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[81%]">
                Furnished and self-catering
                    <br />
                    accomodation, where guests rent the <br />
                    entire place.
                </div>
                <Button
                  className="common-pointer font-bold font-inter mb-[4px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[37px] 3xl:mt-[44px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  onClick={handleNavigate68}
                  shape="RoundedBorder2"
                  size="md"
                  variant="FillLightblue800"
                >
                  List your property
                </Button>
              </Column>
              {/* <Stack className="lg:h-[172px] xl:h-[215px] 2xl:h-[242px] 3xl:h-[290px] mb-[1px] w-[24%]">
                <Column className="p-8 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <Column className="font-ptsans items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[31%]">
                    <Img
                      src="images/img_volume.svg"
                      className="lg:h-[32px] justify-center xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                      alt="volume"
                    />
                    <Text
                      className="font-bold text-xl 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-black_900 w-[auto]"
                      variant="body8"
                    >
                      Apartment
                    </Text>
                  </Column>
                  <Text
                    className="font-ptsans leading-[normal] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-black_900 text-center  w-[87%]"
                    variant="body9"
                  >
                    Furnished and self-catering
                    <br />
                    accomodation, where guests rent the <br />
                    entire place.
                  </Text>
                  <Button
                    className="common-pointer font-bold font-inter mb-[4px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                    onClick={handleNavigate68}
                    shape="RoundedBorder2"
                    size="md"
                    variant="FillLightblue800"
                  >
                    List your property
                  </Button>
                </Column>
                <Button
                  className="absolute flex items-center justify-center text-center w-[50%]"
                  leftIcon={
                    <Img
                      src="images/img_menu.svg"
                      className="mr-[1px] text-center left-[5%] absolute lg:w-[14px] lg:h-[15px] xl:w-[17px] xl:h-[18px] 2xl:w-[20px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px]"
                      alt="menu"
                    />
                  }
                  shape="RoundedBorder2"
                  size="sm"
                  variant="FillGreen900"
                >
                  <div className="bg-transparent font-bold inset-x-[0] ml-[10px] xl:text-[12px] 2xl:text-[20px] 3xl:text-[16px] lg:text-[9px] top-[0]">
                    Quick start
                  </div>
                </Button>
              </Stack> */}
              <Column className="bg-white_A700 items-center w-80 h-80 ml-10 justify-start xl:mt-[5px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-lg border w-[24%]">
                <Img
                  src="images/img_user_45X45.svg"
                  className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[11px] xl:mt-[22px] 2xl:mt-[16px] 3xl:mt-[19px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  alt="user One"
                />
                <div class="font-bold text-xl lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr">
                  Hotel
                </div>
                <div class="font-light text-sm font-ptsans leading-[normal] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[13px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[81%]">
                  Accommodations for travelers often with restaurants, meeting rooms and other guest services
                </div>
                <Button
                  className="common-pointer font-bold font-inter mb-[4px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[37px] 3xl:mt-[44px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  onClick={handleNavigate69}
                  shape="RoundedBorder2"
                  size="md"
                  variant="FillLightblue800"
                >
                  List your property
                </Button>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PropertycategorypagePage;
