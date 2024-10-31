import Fingerprint from '../components/Fingerprint';

export default function Explanation() {
  return (
    <div className="w-10/12 md:w-5/12">
      <div className="flex flex-col items-center mb-8 md:mb-16">
        <Fingerprint hash="a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e" />
      </div>
      <h1 className="text-4xl h-xs:text-lg font-extrabold mb-2 drop-shadow-center-purple">
        Seamless Verification
      </h1>
      <p className="font-light text-lg drop-shadow-center-purple">
        Create tamper-proof digital certificates for any file or text with
        custom metadata. Verify authenticity instantly through our user-friendly
        platform.
      </p>
    </div>
  );
}
