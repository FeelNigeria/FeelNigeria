import React from "react";
import { chakra } from "@chakra-ui/react";
import home from "@/assets/img/home.mp4";

const VideoPlayer: React.FC = React.memo(() => {
  const ChakraVideo = chakra("video");

  return (
    <ChakraVideo
      src={home}
      autoPlay
      loop
      muted
      preload="auto"
      width={{ base: "100%", md: "100vw" }}
      height={{ base: "auto", md: "100vh" }}
      objectFit="cover"
      objectPosition="center bottom"
      display="block"
      shadow="md"
    />
  );
});

export default VideoPlayer;
