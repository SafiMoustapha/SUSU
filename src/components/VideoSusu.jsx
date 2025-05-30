const VideoSusu = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg w-80 max-w-sm mx-auto mb-10">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/wtMHan7EmS0"
        title="L'équipe Susu simplifie la vie d'Odile !"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};


export default VideoSusu;
