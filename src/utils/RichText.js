import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

const rtfComponents = {
  heading1: ({ children }) => (
    <h1 className="text-4xl font-semibold leading-tight font-fancy text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-2xl font-semibold font-fancy leading-tight text-white sm:text-3xl sm:leading-tight lg:text-4xl lg:leading-tight">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-lg font-semibold font-fancy leading-tight text-white sm:text-xl sm:leading-tight lg:text-2xl lg:leading-tight">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p className="py-2 leading-7 text-base font-normal font-sans text-white mb-4">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <span className="font-bold tracking-normal  font-fancy text-white">
      {children}
    </span>
  ),
  hyperlink: ({ node, children, key }) => (
    <PrismicNextLink
      key={key}
      field={node.data}
      className="text-zuta hover:text-zuta/80 font-semibold font-sans underline decoration-dotted underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
  em: ({ children }) => (
    <em className="italic font-sans text-gray-300">{children}</em>
  ),
  listItem: ({ children }) => (
    <li className="mb-3 ml-2 font-sans text-white">{children}</li>
  ),
  oListItem: ({ children }) => (
    <li className="mb-3 ml-2 font-sans text-white">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-6 list-disc pl-6 ml-4 font-sans text-white">
      {children}
    </ul>
  ),
  oList: ({ children }) => (
    <ol className="mb-6 list-decimal pl-6 ml-4 font-sans text-white">
      {children}
    </ol>
  ),
  preformatted: ({ children }) => (
    <pre className="bg-[#f4f4f4] rounded-lg p-4 mb-4 overflow-x-auto text-sm font-mono">
      {children}
    </pre>
  ),
  image: ({ node }) => (
    <div className="relative w-full aspect-video mb-4 mt-6">
      <PrismicNextImage field={node} />
    </div>
  ),
  embed: ({ node }) => (
    <div className="relative aspect-video mb-4 mt-6">
      <iframe
        className="absolute w-full h-full top-0 left-0 rounded-lg"
        src={node.oembed.embed_url}
        allowFullScreen
      />
    </div>
  ),
};

// Dark text components for light backgrounds (like yellow MeetUs section)
const rtfComponentsDark = {
  heading1: ({ children }) => (
    <h1 className="text-4xl font-semibold leading-tight font-fancy text-black sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-2xl font-semibold font-fancy leading-tight text-black sm:text-3xl sm:leading-tight lg:text-4xl lg:leading-tight">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-lg font-semibold font-fancy leading-tight text-black sm:text-xl sm:leading-tight lg:text-2xl lg:leading-tight">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p className="py-2 leading-7 text-base font-normal font-sans text-black mb-4">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <span className="font-bold tracking-normal font-fancy text-black">
      {children}
    </span>
  ),
  hyperlink: ({ node, children, key }) => (
    <PrismicNextLink
      key={key}
      field={node.data}
      className="text-black hover:text-gray-700 font-semibold font-sans underline decoration-dotted underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
  em: ({ children }) => (
    <em className="italic font-sans text-gray-800">{children}</em>
  ),
  listItem: ({ children }) => (
    <li className="mb-3 ml-2 font-sans text-black">{children}</li>
  ),
  oListItem: ({ children }) => (
    <li className="mb-3 ml-2 font-sans text-black">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-6 list-disc pl-6 ml-4 font-sans text-black">
      {children}
    </ul>
  ),
  oList: ({ children }) => (
    <ol className="mb-6 list-decimal pl-6 ml-4 font-sans text-black">
      {children}
    </ol>
  ),
  preformatted: ({ children }) => (
    <pre className="bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto text-sm font-mono text-black">
      {children}
    </pre>
  ),
  image: ({ node }) => (
    <div className="relative w-full aspect-video mb-4 mt-6">
      <PrismicNextImage field={node} />
    </div>
  ),
  embed: ({ node }) => (
    <div className="relative aspect-video mb-4 mt-6">
      <iframe
        className="absolute w-full h-full top-0 left-0 rounded-lg"
        src={node.oembed.embed_url}
        allowFullScreen
      />
    </div>
  ),
};

export default rtfComponents;
export { rtfComponentsDark };
