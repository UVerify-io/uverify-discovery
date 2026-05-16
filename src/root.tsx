import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { MetaFunction } from 'react-router';
import './index.css';

export const meta: MetaFunction = () => [
  { title: 'UVerify | Prove authenticity. Forever.' },
  {
    name: 'description',
    content:
      'UVerify records tamper-proof fingerprints of verifiable products, laboratory reports, digital product passports, agent receipts or any other document that needs file integrity on Cardano. Every certificate is a fully interactive decentralized app: shareable, instantly verifiable, and permanent.',
  },
  { property: 'og:title', content: 'UVerify | Prove authenticity. Forever.' },
  {
    property: 'og:description',
    content:
      'UVerify records tamper-proof fingerprints of verifiable products, laboratory reports, digital product passports, agent receipts or any other document that needs file integrity on Cardano. Every certificate is a fully interactive decentralized app: shareable, instantly verifiable, and permanent.',
  },
  { property: 'og:image', content: 'https://uverify.io/og-image.png' },
  { property: 'og:url', content: 'https://uverify.io' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'UVerify | Prove authenticity. Forever.' },
  {
    name: 'twitter:description',
    content:
      'UVerify records tamper-proof fingerprints on Cardano. Every certificate is a fully interactive decentralized app: shareable, instantly verifiable, and permanent.',
  },
  { name: 'twitter:image', content: 'https://uverify.io/og-image.png' },
];

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
