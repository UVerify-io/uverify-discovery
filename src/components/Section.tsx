interface SectionProps {
  title: string;
  description: string | string[];
  icon: string;
  shadowColor: string;
  style: string;
}

export default function Section(props: SectionProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${props.style}`}>
      <div className="flex flex-col items-center justify-center border-4 border-white rounded-full p-2 mb-2 w-16 h-16 sm:w-32 sm:h-32 h-xs:w-16 h-xs:h-16">
        <img
          src={props.icon}
          alt={`${props.title} icon`}
          className="w-8 sm:w-16 h-xs:w-8"
        />
      </div>
      <h1
        className={`text-md sm:text-lg md:text-2xl font-extrabold mb-2 drop-shadow-center-${props.shadowColor}`}
      >
        {props.title}
      </h1>
      {typeof props.description === 'string' ? (
        <p className="text-sm text-justify sm:text-md">{props.description}</p>
      ) : (
        <ul
          className={`w-10/12 md:w-9/12 lg:w-8/12 font-light text-xs sm:text-sm md:text-lg drop-shadow-center-${props.shadowColor} list-disc`}
        >
          {props.description.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
