import Section from '../components/Section';
import BlockchainIcon from '../assets/blockchain.svg';
import FindIcon from '../assets/find.svg';
import UploadIcon from '../assets/upload.svg';

export default function HowTo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl h-xs:text-lg font-bold sm:text-4xl sm:font-extrabold mt-28 h-xs:mt-8 mb-8 sm:mt-0 sm:mb-16 h-xs:mb-8 drop-shadow-center-ice">
        How UVerify Works?
      </h1>
      <div className="flex flex-row justify-center flex-wrap items-start sm:flex-nowrap sm:justify-evenly">
        <Section
          title="Upload & Certify"
          description="Create verifiable trust certificates for any document or data with custom metadata"
          icon={UploadIcon}
          style="w-2/5 mr-4 sm:w-1/4 sm:mr-0"
          shadowColor="ice"
        />
        <Section
          title="Secure Storage"
          description="Data is stored on-chain using advanced datum technology, ensuring immutability and accessibility"
          icon={BlockchainIcon}
          style="w-2/5 ml-4 sm:w-1/4 sm:ml-0"
          shadowColor="ice"
        />
        <Section
          title="Easy Verification"
          description="Instantly verify certificates through our platform or integrate verification into your own systems"
          icon={FindIcon}
          style="w-4/5 mt-4 sm:w-1/4 sm:mt-0"
          shadowColor="ice"
        />
      </div>
    </div>
  );
}
