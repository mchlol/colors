import { Html, Head, Main, NextScript } from 'next/document'
import fetchRandomFont from '@/utils'

const Document = ( { randomFont } ) => {
  return (
    <Html lang="en">
      <Head>
        {randomFont && (
          <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=${randomFont.split(' ').join('+')}`} />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitalProps = async (ctx) => {
  const randomFont = await fetchRandomFont();
  const initialProps = await Document.getInitalProps(ctx);
  return { ...initialProps, randomFont };
};

export default Document;