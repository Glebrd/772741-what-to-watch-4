import * as React from "react";
import {LegacyRef} from "react";

interface Props {
  poster: string;
  videoPreview: string;
  videoRef: LegacyRef<HTMLVideoElement>;
}

const VideoPlayer: React.FunctionComponent<Props> = (props: Props) => {
  const {poster, videoRef, videoPreview} = props;
  return (
    <video
      ref={videoRef}
      poster={poster}
      width="280"
      height="175"
      src={videoPreview}
      muted
    >
    </video>
  );
};

export default VideoPlayer;
