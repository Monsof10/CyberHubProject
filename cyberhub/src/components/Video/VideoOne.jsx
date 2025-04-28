export default function VideoOne() {
  return (
    <div
      className="video__area-6"
      style={{ maskImage: "url('/assets/imgs/bg/video-6.webp')" }}
    >
      <video
        className="features__video w-100"
        src="/assets/media/videos/trainer.mp4"
        loop
        preload="auto"
        muted
        autoPlay
      ></video>
    </div>
  );
}
