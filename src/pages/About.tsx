import Button from '../components/Button';

export default function About() {
  return (
    <div className="w-10/12 md:w-7/12 lg:w-1/2">
      <p className="text-sm uppercase tracking-widest text-white/60 mb-4 font-semibold h-xs:hidden">
        Built on Cardano
      </p>
      <h1 className="text-5xl font-extrabold mb-4 md:text-6xl h-xs:text-2xl h-xs:mb-2">
        Prove authenticity.
        <br />
        Forever.
      </h1>
      <p className="font-light text-lg text-white/80 mb-3 md:text-xl h-xs:text-sm h-xs:mb-2">
        UVerify records a tamper-proof fingerprint of any file or document on
        the Cardano blockchain. Your data never leaves your device.
      </p>
      <p className="font-light text-base text-white/55 mb-8 h-xs:text-xs h-xs:mb-4">
        Every certificate is a fully interactive decentralized app: shareable,
        instantly verifiable, and permanent. No blockchain experience required.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button
          label="Launch App"
          color="white"
          variant="contained"
          onClick={() => window.open('https://app.uverify.io', '_blank')}
        />
        <Button
          label="Read the Docs"
          color="ice"
          variant="glass"
          onClick={() => window.open('https://docs.uverify.io', '_blank')}
        />
        <Button
          label="Join Discord"
          color="purple"
          variant="glass"
          onClick={() =>
            window.open('https://discord.gg/Dvqkynn6xc', '_blank')
          }
        />
      </div>
    </div>
  );
}
