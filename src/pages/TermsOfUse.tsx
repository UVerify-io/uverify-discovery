import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { useLayoutEffect } from 'react';

export default function TermsOfUse() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center bg-blue-950 text-white">
      <div className="w-10/12 mt-8 sm:w-2/3">
        <div className="mb-8 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center text-blue-500 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Top
          </Link>
          <a
            className="flex items-center text-blue-500 hover:underline"
            href="https://app.uverify.io"
          >
            Launch App
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-center">Terms of Use</h1>

        <section className="mb-6 mt-8">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p>
            Welcome to UVerify, a service provided by Fabian Bormann. By
            accessing or using our website, you agree to comply with and be
            bound by the following terms and conditions. Please review these
            terms carefully. If you do not agree with these terms, you should
            not use this website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p className="mb-2">
            For any questions or concerns regarding these terms, please contact:
          </p>
          <address className="not-italic">
            Email:{' '}
            <a href="mailto:contact@uverify.io" className="text-blue-500">
              contact@uverify.io
            </a>
            <br />
            Fabian Bormann
            <br />
            c/o IP-Management #47491
            <br />
            Ludwig-Erhard-Str. 18
            <br />
            20459 Hamburg
          </address>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Description of Service
          </h2>
          <p>
            UVerify allows users to place hashes of raw text data or files on
            the Cardano blockchain. This service enables users to verify whether
            a document has been previously uploaded, ensuring its integrity and
            authenticity. Additionally, UVerify offers a white-label solution
            for certificate sites, allowing customization for different
            customers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">User Obligations</h2>
          <ul className="list-disc list-outside">
            <li>
              Users must ensure that any metadata added to the blockchain is
              appropriate and lawful. As blockchain data is immutable, users are
              responsible for the content they upload.
            </li>
            <li>
              UVerify reserves the right to hide content that violates these
              terms, although it cannot remove content from the blockchain.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Account Information</h2>
          <ul className="list-disc list-outside">
            <li>
              Users access UVerify services through their Cardano wallet, with
              no traditional account creation required.
            </li>
            <li>
              Users are responsible for managing their own transaction fees on
              the Cardano network.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
          <ul className="list-disc list-outside">
            <li>
              All content, trademarks, and data on this website, including but
              not limited to software, databases, text, graphics, icons, and
              hyperlinks, are the property of UVerify or its licensors and are
              protected by law.
            </li>
            <li>
              Portions of the service, including the frontend, are available as
              open-source software under the GNU General Public License v3.0
              (GPLv3). Users are free to use, modify, and distribute this
              software in accordance with the terms of the GPLv3 license. For
              more details, please refer to the{' '}
              <a
                href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                className="text-blue-500"
              >
                GPLv3 license
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            External Links and Third-Party Services
          </h2>
          <ul className="list-disc list-outside">
            <li>
              UVerify may provide links to external websites, such as{' '}
              <a href="https://cexplorer.io/" className="text-blue-500">
                cexplorer.io
              </a>
              , to display on-chain data. These links are provided for your
              convenience and informational purposes only.
            </li>
            <li>
              UVerify does not endorse and is not responsible for the content,
              accuracy, or availability of any external sites or services.
              Accessing these links is at your own risk, and you should review
              the terms and privacy policies of any third-party sites you visit.
            </li>
            <li>
              UVerify disclaims any liability for any harm or damages arising
              from your use of third-party websites or services.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Disclaimers and Limitation of Liability
          </h2>
          <ul className="list-disc list-outside">
            <li>
              UVerify provides the service "as is" and makes no representations
              or warranties of any kind, express or implied, regarding the
              operation of the service or the information, content, materials,
              or products included on this site.
            </li>
            <li>
              UVerify will not be liable for any damages of any kind arising
              from the use of this site, including but not limited to direct,
              indirect, incidental, punitive, and consequential damages.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of Germany. You agree that any legal action
            or proceeding between you and UVerify for any purpose concerning
            these terms or the parties' obligations hereunder shall be brought
            exclusively in a court of competent jurisdiction sitting in
            Hannover, Niedersachsen, Germany.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Modification of Terms</h2>
          <p>
            UVerify reserves the right to change these terms at any time. Any
            changes will be posted on this page, and it is your responsibility
            to review these terms regularly to ensure you are aware of any
            changes.
          </p>
        </section>
        <Footer />
      </div>
    </div>
  );
}
