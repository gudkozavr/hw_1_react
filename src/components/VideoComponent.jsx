function VideoComponent() {
  return (
    <div>
      <video
        width="500"
        height="400"
        src="https://ik.imagekit.io/ikmedia/example_video.mp4"
        controls="controls"
        autoplay="true"
      >
        {/* <source src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4" type="video/mp4"> */}
      </video>
    </div>
  );
}

export default VideoComponent;
