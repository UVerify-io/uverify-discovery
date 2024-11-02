import WorldIcon from '../assets/world.svg';

export default function UseCases() {
  return (
    <div className="flex items-start flex-col justify-start w-screen h-screen relative">
      <div
        style={{
          backgroundImage: `url(${WorldIcon})`,
          backgroundSize: '90%',
        }}
        className="absolute h-full w-full overflow-hidden bg-[300%_140%] sm:bg-[400%_-60%] h-xs:bg-[500%_-60%] bg-no-repeat"
      />

      <h1 className="ml-8 text-2xl mt-48 sm:mt-52 sm:text-4xl font-bold sm:font-extrabold mb-8 sm:mb-16 h-xs:text-lg h-xs:mb-2 h-xs:mt-36">
        Use Cases
      </h1>
      <ul className="ml-8 list-disc list-inside">
        <li className="text-lg sm:text-xl h-xs:text-sm">
          Manufacturing Supply Chain Verification
        </li>
        <li className="text-lg sm:text-xl h-xs:text-sm">
          Document Authentication
        </li>
        <li className="text-lg sm:text-xl h-xs:text-sm">Digital Credentials</li>
        <li className="text-lg sm:text-xl h-xs:text-sm">
          Quality Assurance Certificates
        </li>
        <li className="text-lg sm:text-xl h-xs:text-sm">
          Compliance Documentation
        </li>
        <li className="text-lg sm:text-xl h-xs:text-sm">
          Product Authentication
        </li>
      </ul>
    </div>
  );
}
