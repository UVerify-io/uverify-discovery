import CompanyIcon from '../assets/company.svg';
import CodingIcon from '../assets/coding.svg';
import Section from '../components/Section';

export default function Features() {
  return (
    <div className="flex flex-col justify-between items-center sm:items-start sm:flex-row lg:w-10/12 h-xs:pt-8 h-xs:w-11/12">
      <Section
        title="Enterprise-Ready"
        description={[
          'No cryptocurrency exposure required',
          'PayPal integration for transaction fees',
          'Customizable white-label solutions',
          'Built on Cardano blockchain technology',
        ]}
        icon={CompanyIcon}
        style="w-10/12 sm:2/5 mt-8 sm:mt-0"
        shadowColor="purple"
      />
      <Section
        title="Developer-Friendly"
        description={[
          'Open-source SDKs for Python, JavaScript/TypeScript, and Java',
          'Flexible templating engine for custom UI',
          'Comprehensive API documentation',
          'Seamless integration options',
        ]}
        icon={CodingIcon}
        style="w-10/12 sm:2/5 mt-8 sm:mt-0"
        shadowColor="purple"
      />
    </div>
  );
}
