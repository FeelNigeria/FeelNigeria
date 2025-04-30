import React from "react";
import { chakra } from "@chakra-ui/react";
import home from "@/assets/img/home.mp4";

const VideoPlayer: React.FC = () => {
  const ChakraVideo = chakra("video");

  return (
    <ChakraVideo
      src={home}
      // controls
      autoPlay
      loop
      muted
      width="100vw"
      preload="auto"
      height="100vh"
      objectFit="cover"
      objectPosition="center bottom"
      display="block"
      shadow="md"
    />
  );
};

export default VideoPlayer;
