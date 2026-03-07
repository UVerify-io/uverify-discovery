import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { useLayoutEffect } from 'react';
import Logo from '../assets/uverify.svg';

export default function TermsOfUse() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-main-gradient text-white">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 h-16 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={Logo} alt="UVerify Logo" className="w-8 h-8 transition-[filter] duration-300 group-hover:animate-logo-glow" />
          <p className="font-bold text-sm text-white uppercase tracking-wide group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-[filter] duration-300">
            UVerify
          </p>
        </Link>
        <a
          href="https://app.uverify.io"
          className="flex items-center gap-1.5 border border-cyan-400/40 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/30 px-3 py-1.5 text-sm font-medium text-white/90 transition-all duration-200"
        >
          Launch App
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-4xl font-bold mb-2 text-white">Terms of Use</h1>
        <div className="h-px bg-gradient-to-r from-cyan-400/50 to-transparent mb-10" />

        <div className="space-y-6">
          <Section title="Introduction">
            Welcome to UVerify, a service provided by Fabian Bormann. By
            accessing or using our website, you agree to comply with and be
            bound by the following terms and conditions. Please review these
            terms carefully. If you do not agree with these terms, you should
            not use this website.
          </Section>

          <Section title="Contact Information">
            <p className="mb-3">For any questions or concerns regarding these terms, please contact:</p>
            <address className="not-italic text-white/70 space-y-0.5">
              <div>Email: <a href="mailto:contact@uverify.io" className="text-cyan-400 hover:text-cyan-300 transition-colors">contact@uverify.io</a></div>
              <div>Fabian Bormann</div>
              <div>c/o IP-Management #47491</div>
              <div>Ludwig-Erhard-Str. 18</div>
              <div>20459 Hamburg</div>
            </address>
          </Section>

          <Section title="Description of Service">
            UVerify allows users to place hashes of raw text data or files on
            the Cardano blockchain. This service enables users to verify whether
            a document has been previously uploaded, ensuring its integrity and
            authenticity. Additionally, UVerify offers a white-label solution
            for certificate sites, allowing customization for different customers.
          </Section>

          <Section title="User Obligations">
            <ul className="space-y-2 list-disc list-outside ml-4">
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
          </Section>

          <Section title="Account Information">
            <ul className="space-y-2 list-disc list-outside ml-4">
              <li>
                Users access UVerify services through their Cardano wallet, with
                no traditional account creation required.
              </li>
              <li>
                Users are responsible for managing their own transaction fees on
                the Cardano network.
              </li>
            </ul>
          </Section>

          <Section title="Intellectual Property">
            <ul className="space-y-2 list-disc list-outside ml-4">
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
                <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  GPLv3 license
                </a>.
              </li>
            </ul>
          </Section>

          <Section title="External Links and Third-Party Services">
            <ul className="space-y-2 list-disc list-outside ml-4">
              <li>
                UVerify may provide links to external websites, such as{' '}
                <a href="https://cexplorer.io/" className="text-cyan-400 hover:text-cyan-300 transition-colors">cexplorer.io</a>,
                to display on-chain data. These links are provided for your
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
          </Section>

          <Section title="Disclaimers and Limitation of Liability">
            <ul className="space-y-2 list-disc list-outside ml-4">
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
          </Section>

          <Section title="Governing Law">
            These terms and conditions are governed by and construed in
            accordance with the laws of Germany. You agree that any legal action
            or proceeding between you and UVerify for any purpose concerning
            these terms or the parties' obligations hereunder shall be brought
            exclusively in a court of competent jurisdiction sitting in
            Hannover, Niedersachsen, Germany.
          </Section>

          <Section title="Modification of Terms">
            UVerify reserves the right to change these terms at any time. Any
            changes will be posted on this page, and it is your responsibility
            to review these terms regularly to ensure you are aware of any changes.
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
      <h2 className="text-lg font-semibold text-cyan-300 mb-3">{title}</h2>
      <div className="text-white/75 leading-relaxed text-sm">{children}</div>
    </div>
  );
}
