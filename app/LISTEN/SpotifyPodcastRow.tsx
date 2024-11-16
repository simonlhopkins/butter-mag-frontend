interface Props {
  url: string;
  type?: "album" | "episode";
}
function SpotifyPodcastRow({ url, type }: Props) {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={`https://open.spotify.com/embed/${
        type || "episode"
      }/${url}?utm_source=generator`}
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export default SpotifyPodcastRow;
