import FabianProfilePicture from '../assets/fabian.jpg';
import RizProfilePicture from '../assets/riz.jpg';
import SachaProfilePicture from '../assets/sacha.jpg';

export default function Team() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center w-full pt-32 sm:pt-24">
      <div className="w-11/12 sm:w-5/12 flex justify-center items-center flex-col">
        <h1 className="text-lg sm:text-4xl font-extrabold mb-4 sm:mb-8 drop-shadow-center-blue">
          Team
        </h1>
        <div className="flex justify-center sm:justify-center items-center flex-row sm:flex-col">
          <img
            src={FabianProfilePicture}
            alt="Fabian Bormann"
            className=" w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mr-4 sm:mr-0 rounded-full sm:mb-4"
          />
          <div>
            <p className="text-blue-600">Fabian Bormann</p>
            <p className="text-blue-600 mb-4 italic">Founder</p>

            <div className="flex flex-row justify-around items-center">
              <a
                href="https://x.com/YetAnotherAiGuy"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
              </a>
              <a
                href="https://github.com/fabianbormann"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/fabian-bormann-748642130/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 sm:w-7/12 flex justify-center items-center flex-col mt-6 sm:mt-0 mb-8 sm:mb-0">
        <h1 className="text-lg sm:text-4xl font-extrabold mb-4 sm:mb-8 drop-shadow-center-blue">
          Supported By
        </h1>
        <a href="https://exponentialpartners.io" target="_blank">
          <div className="flex items-center justify-center">
            <img
              src="https://exponentialpartners.io/images/b25ca68e80e7e7c0633d66c7f984ac48.svg"
              alt="Exponential Partners Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mb-4"
            />
            <div className="flex flex-col items-center justify-center ml-2">
              <p className="text-white uppercase font-thin tracking-widest">
                Exponential
              </p>
              <p className="text-white uppercase font-thin tracking-widest">
                Partners
              </p>
            </div>
          </div>
        </a>
        <p className="text-blue-600 mb-4 italic w-11/12">
          Exponential Partners specialises in guiding startups and enterprises
          worldwide in adopting blockchain and AI technologies through expert
          consulting
        </p>
        <div className="flex justify-center sm:justify-evenly items-center w-full ">
          <div className="flex flex-col justify-center items-center mr-8 sm:mr-0">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
              <img
                src="https://exponentialpartners.io/images/b25ca68e80e7e7c0633d66c7f984ac48.svg"
                alt="Exponential Partners Logo"
                className="rounded-full"
              />
              <div
                style={{ backgroundImage: `url(${RizProfilePicture})` }}
                className="absolute left-[12.5%] top-[12.5%] w-[75%] h-[75%] rounded-full bg-cover"
              />
            </div>
            <p className="text-blue-600 flex mt-2">
              Rizwan Pabani
              <a
                href="https://www.linkedin.com/in/rizpabani/"
                target="_blank"
                className="ml-2"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
              <img
                src="https://exponentialpartners.io/images/b25ca68e80e7e7c0633d66c7f984ac48.svg"
                alt="Exponential Partners Logo"
                className="rounded-full"
              />
              <div
                style={{ backgroundImage: `url(${SachaProfilePicture})` }}
                className="absolute left-[12.5%] top-[12.5%] w-[75%] h-[75%] rounded-full bg-cover"
              />
            </div>
            <p className="text-blue-600 flex mt-2">
              Sacha Windisch
              <a
                href="https://www.linkedin.com/in/sachawindisch/"
                className="ml-2"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
