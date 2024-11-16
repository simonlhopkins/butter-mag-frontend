import clsx from "clsx";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import styles from "./ckContent.module.css";
import OembedRenderer from "./OembedRenderer";
interface Props {
  htmlString: string;
  className?: string;
}
function CKContent({ htmlString, className }: Props) {
  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.name == "oembed") {
        return <OembedRenderer url={domNode.attribs.url} />;
      }
      if (
        domNode instanceof Element &&
        domNode.name === "img" &&
        domNode.attribs?.src?.startsWith("http://localhost:1337")
      ) {
        domNode.attribs.src = domNode.attribs.src.replace(
          "http://localhost:1337",
          process.env.STRAPI_URL as string
        );
        domNode.attribs.srcset = domNode.attribs.src.replaceAll(
          "http://localhost:1337",
          process.env.STRAPI_URL as string
        );
        console.log(domNode);
        return domNode;
      }
    },
  };
  return (
    <div className={clsx(styles["ck-content"], className)}>
      {parse(htmlString, options)}
    </div>
  );
}

export default CKContent;
