import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import './index.css';

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/uverify.png" />
        <meta name="theme-color" content="#002039" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content"
        />
        <title>UVerify | Technology and Trust</title>
        <meta
          name="description"
          content="UVerify lets you certify documents, diplomas, lab reports, and digital products on the Cardano blockchain — tamper-proof and instantly verifiable by anyone."
        />
        <meta property="og:title" content="UVerify | Technology and Trust" />
        <meta
          property="og:description"
          content="Blockchain-powered document certification. Issue tamper-proof certificates backed by Cardano — no technical knowledge required."
        />
        <meta property="og:image" content="https://uverify.io/og-image.png" />
        <meta property="og:url" content="https://uverify.io" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UVerify | Technology and Trust" />
        <meta
          name="twitter:description"
          content="Blockchain-powered document certification. Issue tamper-proof certificates backed by Cardano — no technical knowledge required."
        />
        <meta name="twitter:image" content="https://uverify.io/og-image.png" />
        <Meta />
        <Links />
        {/* Matomo */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['disableCookies']);
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="//matomo.battlechoc.com:8181/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '3']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
          }}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
