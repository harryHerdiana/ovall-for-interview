// NOTE: This is the way to add a lang attribute to the <html> tag, see:
// https://nextjs.org/docs/advanced-features/custom-document
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { mapLocaleString } from '@lib/utils'

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang={mapLocaleString(this.props.locale)}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
