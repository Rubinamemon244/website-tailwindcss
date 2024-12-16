import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // <Html lang="en">
    <Html className="scroll-smooth">
      <Head />
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
