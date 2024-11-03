export function PrivacyPolicy() {
  return (
    <div className="w-10/12 mt-8 sm:w-2/3">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          This Privacy Policy describes how UVerify collects, uses, and shares
          information about you when you use our website. We are committed to
          protecting your privacy and ensuring that your personal information is
          handled in a safe and responsible manner.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
        <p>
          UVerify uses Matomo for analytics to understand how visitors interact
          with our website. We have configured Matomo to use cookieless tracking
          and have enabled as many privacy options as possible. All data
          collected is pseudonymized using 2-byte IP masking and is
          automatically deleted after 180 days.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Use of Data</h2>
        <p>
          The data collected is used to evaluate the effectiveness of marketing
          campaigns and to improve the usability of our website. This helps us
          ensure that our services meet the needs of our users.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Data Sharing</h2>
        <p>
          UVerify does not share your personal data with third parties, except
          as required by law or to protect our rights. We ensure that any data
          shared is done so in compliance with applicable data protection laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, loss, or
          misuse. However, please be aware that no security measures are perfect
          or impenetrable.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">User Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data.
          If you wish to exercise these rights, please contact us at{' '}
          <a href="mailto:hello@uverify.io" className="text-blue-500">
            hello@uverify.io
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and we encourage you to review this policy
          regularly to stay informed about how we are protecting your
          information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <address className="not-italic">
          Fabian Bormann
          <br />
          c/o IP-Management #47491
          <br />
          Ludwig-Erhard-Str. 18
          <br />
          20459 Hamburg
          <br />
          Email:{' '}
          <a href="mailto:privacy@uverify.io" className="text-blue-500">
            privacy@uverify.io
          </a>
        </address>
      </section>
      <p className="text-center my-4 font-light text-sm">
        © 2024 UVerify by Fabian Bormann
      </p>
    </div>
  );
}
