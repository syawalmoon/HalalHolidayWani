import React from "react";

import { Row, Text, Column, Img } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-new items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
          <Row className="items-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[92%]">
            <Text className="font-ptsans language" as="h1" variant="h1">
              <span className="text-light_green_A400 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                Halal
              </span>
              <span className="text-blue_600 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                Holiday
              </span>
              <span className="text-white_A700 font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                {" "}
              </span>
            </Text>
            <Column className="items-center justify-start lg:ml-[369px] xl:ml-[461px] 2xl:ml-[519px] 3xl:ml-[623px] w-[22%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[64%]">
                  <Text
                    className="font-bold font-ptsans text-white_A700 w-[auto]"
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
                <Text className="columnnamesproperty" variant="body6">
                  122 Jalan Abc, Johor Bahru, Johor 8350...{" "}
                </Text>
              </Column>
            </Column>
            <Img
              src="images/img_minimize.svg"
              className="minimize"
              alt="minimize"
            />
            <Text className="font-ptsans Help" variant="body1">
              Help
            </Text>
            <Img
              src="images/img_question.svg"
              className="question"
              alt="question"
            />
            <Img
              src="images/img_user_35X35.svg"
              className="user_One"
              alt="user"
            />
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
