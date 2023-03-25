import React, { useRef, useState } from "react";
import styles from "./index.module.css";

const VideoSRC =
  "https://v16m.tiktokcdn-us.com/c933ee31b1c1ab1c6f0c1561f023526c/641f64f1/video/tos/useast2a/tos-useast2a-pve-0068/osIAyfgjQGoNcNDmcyivA3kbbmICUSWWzaWXho/?a=1233&ch=0&cr=0&dr=0&cd=0%7C0%7C0%7C0&cv=1&br=1482&bt=741&cs=0&ds=6&ft=kLx3-y_RZGs0PD1Ol8_Xg9wlivjtkEeC~&mime_type=video_mp4&qs=0&rc=NzM5NmlpZWhoNDs7OGY7ZUBpanFzNGc6Zm5vajMzNzczM0BjNC4yXi81Xl8xY2BeNGA1YSNvYGZncjQwZmFgLS1kMTZzcw%3D%3D&l=202303251514129DBB5C5E3EA5875FC052";
const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);

  const video = useRef();

  const handlePlay = () => {
    playing ? video.current.pause() : video.current.play();
    setPlaying(!playing);
  };

  return (
    <div>
      <video
        className={styles.video}
        src={VideoSRC}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay}></button>
    </div>
  );
};

export default VideoPlayer;
