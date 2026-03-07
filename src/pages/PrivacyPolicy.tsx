import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { useLayoutEffect } from 'react';
import Logo from '../assets/uverify.svg';

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-2 text-white">Privacy Policy</h1>
        <div className="h-px bg-gradient-to-r from-cyan-400/50 to-transparent mb-10" />

        <div className="space-y-6">
          <Section title="Introduction">
            This Privacy Policy describes how UVerify collects, uses, and shares
            information about you when you use our website. We are committed to
            protecting your privacy and ensuring that your personal information
            is handled in a safe and responsible manner.
          </Section>

          <Section title="Data Collection">
            UVerify uses Matomo for analytics to understand how visitors
            interact with our website. We have configured Matomo to use
            cookieless tracking and have enabled as many privacy options as
            possible. All data collected is pseudonymized using 2-byte IP
            masking and is automatically deleted after 180 days.
          </Section>

          <Section title="Use of Data">
            The data collected is used to evaluate the effectiveness of
            marketing campaigns and to improve the usability of our website.
            This helps us ensure that our services meet the needs of our users.
          </Section>

          <Section title="Data Sharing">
            UVerify does not share your personal data with third parties, except
            as required by law or to protect our rights. We ensure that any data
            shared is done so in compliance with applicable data protection laws.
          </Section>

          <Section title="Data Security">
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, loss, or
            misuse. However, please be aware that no security measures are
            perfect or impenetrable.
          </Section>

          <Section title="User Rights">
            <p>
              You have the right to access, correct, or delete your personal data.
              If you wish to exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@uverify.io" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                privacy@uverify.io
              </a>.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we encourage you to review this
            policy regularly to stay informed about how we are protecting your
            information.
          </Section>

          <Section title="Contact Information">
            <p className="mb-3">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <address className="not-italic text-white/70 space-y-0.5">
              <div>Fabian Bormann</div>
              <div>c/o IP-Management #47491</div>
              <div>Ludwig-Erhard-Str. 18</div>
              <div>20459 Hamburg</div>
              <div className="mt-1">
                Email:{' '}
                <a href="mailto:privacy@uverify.io" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  privacy@uverify.io
                </a>
              </div>
            </address>
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
