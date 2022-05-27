import { React, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/project-carousel.css";
import {
  Box,
  Heading,
  Img,
  Stack,
  AspectRatio,
  Link,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaCode, FaEye } from "react-icons/fa";
import projectsData from "../components/assets/json/projectsData.json";

export default function ProjectsCarousel() {
  const carouselBreakpoints = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2700,
    cssEase: "linear",
    responsive: [...carouselBreakpoints],
  };

  return (
    <Fragment>
      <Stack margin="5px 10px" pb = '10px'>
        <Heading fontSize="xl" textAlign="center" my="20px">
          {" "}
          My Projects
        </Heading>
        <Slider className="Slider" {...settings}>
          {projectsData.map((obj) => {
            return (
              <Box key={obj.id} p="10px 12px">
                <AspectRatio minW={["150px"]} ratio={4 / 3}>
                  <Img src={obj.imgSrc} alt={obj.imgAlt} objectFit="cover" />
                </AspectRatio>
                <Heading fontSize={["md", null, "lg"]} noOfLines="1" pt="8px">
                  {obj.title}
                </Heading>
                <HStack alignItems="center" justifyContent="space-around">
                  <Link href={obj.code} isExternal alignItems="center">
                    <Button
                      leftIcon={<FaCode />}
                      size={["sm"]}
                      variant="ghost"
                      colorScheme="red"
                      fontWeight="700"
                    >
                      Code
                    </Button>
                  </Link>{" "}
                  <Link href={obj.link} isExternal>
                    <Button
                      leftIcon={<FaEye />}
                      size={["sm"]}
                      variant="ghost"
                      colorScheme="red"
                      fontWeight="700"
                    >
                      Link
                    </Button>
                  </Link>
                </HStack>
              </Box>
            );
          })}
        </Slider>
      </Stack>
    </Fragment>
  );
}
