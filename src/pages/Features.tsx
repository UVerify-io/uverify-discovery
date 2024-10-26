import CompanyIcon from '../assets/company.svg';
import CodingIcon from '../assets/coding.svg';

export default function Featrues() {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="w-2/5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center border-4 border-white rounded-full p-2 mb-4 w-32 h-32">
          <img src={CompanyIcon} alt="Company Icon" className="w-20" />
        </div>
        <h1 className="text-2xl font-extrabold mb-2 drop-shadow-center-purple">
          Enterprise-Ready
        </h1>
        <ul className="font-light text-lg drop-shadow-center-purple list-disc">
          <li>No cryptocurrency exposure required</li>
          <li>PayPal integration for transaction fees</li>
          <li>Customizable white-label solutions</li>
          <li>Built on Cardano blockchain technology</li>
        </ul>
      </div>
      <div className="w-2/5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center border-4 border-white rounded-full p-2 mb-4 w-32 h-32">
          <img src={CodingIcon} alt="Company Icon" className="w-20" />
        </div>
        <h1 className="text-2xl font-extrabold mb-2 drop-shadow-center-purple">
          Developer-Friendly
        </h1>
        <ul className="font-light text-lg drop-shadow-center-purple list-disc">
          <li>Open-source SDKs for Python, JavaScript/TypeScript, and Java</li>
          <li>Flexible templating engine for custom UI</li>
          <li>Comprehensive API documentation</li>
          <li>Seamless integration options</li>
        </ul>
      </div>
    </div>
  );
}
