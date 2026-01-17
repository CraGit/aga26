import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

const rtfComponents = {
  heading1: ({ children }) => (
    <h1 className="text-heading-1 color-gray-900 mb-30">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-heading-2 color-gray-900 mb-25">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-heading-3 color-gray-900 mb-20">{children}</h3>
  ),
  heading4: ({ children }) => (
    <h4 className="text-heading-4 color-gray-900 mb-15">{children}</h4>
  ),
  heading5: ({ children }) => (
    <h5 className="text-heading-5 color-gray-900 mb-15">{children}</h5>
  ),
  heading6: ({ children }) => (
    <h6 className="text-heading-6 color-gray-900 mb-10">{children}</h6>
  ),
  paragraph: ({ children }) => (
    <p className="text-body-text color-gray-600 mb-20">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="color-gray-900">{children}</strong>
  ),
  hyperlink: ({ node, children, key }) => (
    <PrismicNextLink
      key={key}
      field={node.data}
      className="color-green-900 text-decoration-underline"
    >
      {children}
    </PrismicNextLink>
  ),
  em: ({ children }) => <em className="color-gray-500">{children}</em>,
  listItem: ({ children }) => (
    <li className="text-body-text color-gray-600 mb-10">{children}</li>
  ),
  oListItem: ({ children }) => (
    <li className="text-body-text color-gray-600 mb-10">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-30" style={{ paddingLeft: "20px", listStyle: "disc" }}>
      {children}
    </ul>
  ),
  oList: ({ children }) => (
    <ol className="mb-30" style={{ paddingLeft: "20px", listStyle: "decimal" }}>
      {children}
    </ol>
  ),
  preformatted: ({ children }) => (
    <pre
      className="bg-gray-100 p-20 mb-20 border-radius-8"
      style={{ overflowX: "auto", fontSize: "14px", fontFamily: "monospace" }}
    >
      {children}
    </pre>
  ),
  image: ({ node }) => (
    <div className="mb-30 mt-30">
      <PrismicNextImage
        field={node}
        className="img-responsive bdrd-16"
        style={{ height: "auto" }}
      />
    </div>
  ),
  embed: ({ node }) => (
    <div
      className="mb-30 mt-30"
      style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "16px",
        }}
        src={node.oembed.embed_url}
        allowFullScreen
      />
    </div>
  ),
};

// Light theme components for white/light backgrounds
const rtfComponentsLight = {
  heading1: ({ children }) => (
    <h1 className="text-heading-1 color-gray-900 mb-30">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-heading-2 color-gray-900 mb-25">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-heading-3 color-gray-900 mb-20">{children}</h3>
  ),
  heading4: ({ children }) => (
    <h4 className="text-heading-4 color-gray-900 mb-15">{children}</h4>
  ),
  heading5: ({ children }) => (
    <h5 className="text-heading-5 color-gray-900 mb-15">{children}</h5>
  ),
  heading6: ({ children }) => (
    <h6 className="text-heading-6 color-gray-900 mb-10">{children}</h6>
  ),
  paragraph: ({ children }) => (
    <p className="text-body-text color-gray-600 mb-20">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="color-gray-900">{children}</strong>
  ),
  hyperlink: ({ node, children, key }) => (
    <PrismicNextLink
      key={key}
      field={node.data}
      className="color-green-900 text-decoration-underline"
    >
      {children}
    </PrismicNextLink>
  ),
  em: ({ children }) => <em className="color-gray-500">{children}</em>,
  listItem: ({ children }) => (
    <li className="text-body-text color-gray-600 mb-10">{children}</li>
  ),
  oListItem: ({ children }) => (
    <li className="text-body-text color-gray-600 mb-10">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-30" style={{ paddingLeft: "20px", listStyle: "disc" }}>
      {children}
    </ul>
  ),
  oList: ({ children }) => (
    <ol className="mb-30" style={{ paddingLeft: "20px", listStyle: "decimal" }}>
      {children}
    </ol>
  ),
  preformatted: ({ children }) => (
    <pre
      className="bg-gray-100 p-20 mb-20 border-radius-8"
      style={{ overflowX: "auto", fontSize: "14px", fontFamily: "monospace" }}
    >
      {children}
    </pre>
  ),
  image: ({ node }) => (
    <div className="mb-30 mt-30">
      <PrismicNextImage
        field={node}
        className="img-responsive bdrd-16"
        style={{ height: "auto" }}
      />
    </div>
  ),
  embed: ({ node }) => (
    <div
      className="mb-30 mt-30"
      style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "16px",
        }}
        src={node.oembed.embed_url}
        allowFullScreen
      />
    </div>
  ),
};

export default rtfComponents;
export { rtfComponentsLight };
