import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerProps {
  videoId: string;
  height: number;
  width: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, height, width }) => {
  const playerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let player: YT.Player | undefined;

    const onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player(playerRef.current!, {
        height,
        width,
        videoId,
        playerVars: {
          playsinline: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    const onPlayerReady = (event: YT.PlayerEvent) => {
      event.target.playVideo();
    };

    const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        setTimeout(() => {
          if (player) {
            player.stopVideo();
          }
        }, 130000); 
      }
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [videoId, height, width]);

  return <div ref={playerRef} />;
};

export default YouTubePlayer;
