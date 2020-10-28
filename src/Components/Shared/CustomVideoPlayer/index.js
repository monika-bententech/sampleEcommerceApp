import React from "react";
import { useRef, useState ,useEffect} from "react";
import { View, Dimensions } from "react-native";
import Video from "react-native-video";

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

/**
* Returns true of the screen is in landscape mode
*/
const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
};

const CustomVideoPlayer = ({ src, height, width, style, ...props }) => {
  const containerWidth = width || 400;
  const containerHeight = (height || 300) + 100;
  let initialLoad = useRef(true).current;
  const [orientation, setOrientation] = useState(isPortrait() ? 'portrait' : 'landscape');
  const [isPaused, setIsPaused] = useState(false);
  const handleOnProgress = () => {
    if (initialLoad) {
      initialLoad = false;
      setIsPaused(true);
    }
  };

  useEffect(() => {
    const handleListener = () => {
      setOrientation(isPortrait() ? 'portrait' : 'landscape')
      // videoRef && videoRef.presentFullscreenPlayer()
    }

    Dimensions.addEventListener('change', handleListener);

    return () =>  {
      Dimensions.removeEventListener('change', handleListener)
    }
  }, [])

  return (
    // <View
    //   style={{
    //     height: containerHeight,
    //     width: containerWidth,
    //   }}
    // >
      <Video
        {...props}
        onProgress={handleOnProgress}
        paused={isPaused}
        resizeMode={"stretch"}
        style={{ ...style, minWidth: containerWidth, minHeight: height  }}
        source={src}
        autorotate
        // resizeMode="cover"
        fullscreen={orientation === "landscape"}
        fullscreenOrientation={'landscape'}
      />
    // </View>
  );
};

export default CustomVideoPlayer;
