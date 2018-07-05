import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { APPLE_METAS_LINKS } from '@/utils/constants';

export default class ServerDocument extends Document {
  renderAppleMetas() {
    const { metas } = APPLE_METAS_LINKS;
    return metas.map((item, index) => <meta key={index} {...item} />);
  }

  renderAppleLinks() {
    const { links } = APPLE_METAS_LINKS;
    return links.map((item, index) => <link key={index} {...item} />);
  }

  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    const env = `window.ENV = '${process.env.ENV || 'development'}';`;
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/static/img/favicon.ico" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          {this.renderAppleMetas()}
          {this.renderAppleLinks()}
          {styleTags}
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          {main}
          <script dangerouslySetInnerHTML={{ __html: env }} />
          <NextScript />
        </body>
      </html>
    );
  }
}
