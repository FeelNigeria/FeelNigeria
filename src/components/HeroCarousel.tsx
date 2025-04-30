import { chakra } from "@chakra-ui/react";
import home from '@/assets/img/home.mp4'

const VideoPlayer = () => {
  const ChakraVideo = chakra("video");

  return (
    <ChakraVideo
      src={home}
      // controls
      autoPlay
      loop
      muted
      width="100vw"
      height="100vh"
      objectFit="cover"
      display={["block", "block", "block", "block"]}
      shadow="md"
    />
  );
};

export default VideoPlayer;
