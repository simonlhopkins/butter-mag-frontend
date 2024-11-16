"use client";
import React, { useEffect, useState } from "react";

interface Props {
  url: string;
}
export default function OembedRenderer({ url }: Props) {
  const [embedHtml, setEmbedHtml] = useState(null);

  useEffect(() => {
    // Detect the provider and construct the oEmbed URL
    let oembedUrl = "";
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(
        url
      )}&format=json`;
    } else if (url.includes("vimeo.com")) {
      oembedUrl = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
        url
      )}`;
    }

    // Fetch the oEmbed data
    if (oembedUrl) {
      fetch(oembedUrl)
        .then((response) => response.json())
        .then((data) => setEmbedHtml(data.html))
        .catch((error) => console.error("Error fetching oEmbed data:", error));
    }
  }, [url]);

  // Render the embed HTML
  if (!embedHtml) {
    return <p>loading oembed...</p>;
  }
  return <div dangerouslySetInnerHTML={{ __html: embedHtml }} />;
}
