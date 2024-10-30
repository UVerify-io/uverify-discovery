import Logo from '../assets/uverify.svg';
import Button from '../components/Button';

export default function About() {
  return (
    <>
      <div className="absolute top-8 left-8 flex items-center justify-center flex-col">
        <img
          src={Logo}
          alt="UVerify Logo"
          className="w-16 h-16 mb-1 md:w-24 md:h-24"
        />
        <p className="font-bold text-sm text-white uppercase md:text-md">
          UVerify.io
        </p>
      </div>
      <div className="absolute top-8 right-8">
        <Button label="Launch DApp" color="ice" variant="glass" />
      </div>
      <div className="w-10/12 md:w-1/2">
        <h1 className="text-4xl font-extrabold mb-8 drop-shadow-center-ice md:text-5xl md:mb-2">
          Transform Verification with UVerify
        </h1>
        <p className="font-light text-lg drop-shadow-center-ice">
          Secure, transparent, and immutable digital certification without the
          complexity of NFTs or tokens. Perfect for businesses seeking Web3
          solutions with Web2 simplicity.
        </p>
      </div>
    </>
  );
}
