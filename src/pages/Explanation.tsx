import Fingerprint from '../components/Fingerprint';

interface StepProps {
  number: string;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex items-start gap-4 mb-6 h-xs:mb-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-bold text-base mb-1 h-xs:text-sm">{title}</h3>
        <p className="text-white/70 text-sm leading-snug h-xs:text-xs">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Explanation() {
  return (
    <div className="w-10/12 flex flex-col md:flex-row items-center gap-8 md:gap-16 md:w-9/12 lg:w-7/12">
      <div className="flex-shrink-0 flex flex-col items-center h-xs:hidden">
        <Fingerprint hash="a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e" />
        <p className="text-xs text-white/40 mt-3 text-center max-w-[150px]">
          Your file's unique fingerprint, stored on Cardano
        </p>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 h-xs:text-xl h-xs:mb-4">
          How it works
        </h1>
        <Step
          number="1"
          title="Drop your file or paste text"
          description="UVerify computes a unique fingerprint of your file locally on your device. Nothing is ever uploaded or sent to a server."
        />
        <Step
          number="2"
          title="Sign one transaction"
          description="The fingerprint and your metadata are stored permanently on the Cardano blockchain. A small fee applies: typically ~0.17 ADA, up to ~0.45 ADA with extensive metadata."
        />
        <Step
          number="3"
          title="Share a permanent proof link"
          description="Anyone can verify by dragging the file onto the certificate page. The metadata lives fully on-chain, readable by any validator. No account, no login, forever verifiable."
        />
      </div>
    </div>
  );
}
