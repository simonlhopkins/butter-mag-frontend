import StrapiClient from "@/scripts/StrapiClient";
import SpotifyPodcastRow from "./SpotifyPodcastRow";
import partyImage from "@/public/cute/babybandblob.gif";

export default async function Page() {
  const bites = await StrapiClient.GetButterBites();
  if (bites == null) return <p>error fetching butter bites</p>;
  return (
    <div>
      <h1>Listen</h1>
      <p>
        Want to explore all the stories of Butter Mag but don’t have time to sit
        down and read? Don’t worry we’ve gotchu! Listen to narrated versions of
        Butter Mag’s articles made specially for you by the editor. Episodes are
        also available on Spotify, Apple Podcasts, and Patreon, where supporter
        are able to access new uploads a week early.
      </p>
      <img src={partyImage.src}></img>
      {bites.butterBites.map((item) => (
        <SpotifyPodcastRow key={item.url} url={item.url} />
      ))}
      <SpotifyPodcastRow url={"1SYDjwymTAVIIpJcu2y30K"} type="album" />
    </div>
  );
  //https://open.spotify.com/episode/1YYqVGVE5pvNe2NmsJ3vdO?si=b0b7670d8d90427e
}
