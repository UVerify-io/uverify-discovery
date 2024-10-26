import Logo from '../assets/uverify.svg';
import Button from '../components/Button';

export default function About() {
  return (
    <>
      <div className="absolute top-8 left-8 flex items-center justify-center flex-col">
        <img src={Logo} alt="UVerify Logo" className="w-24 h-24 mb-1" />
        <p className="font-bold text-md text-white uppercase">UVerify.io</p>
      </div>
      <div className="absolute top-8 right-8">
        <Button label="Launch DApp" color="ice" variant="glass" />
      </div>
      <div className="w-5/12">
        <h1 className="text-5xl font-extrabold mb-2 drop-shadow-center-ice">
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
