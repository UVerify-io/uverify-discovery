export default function Contact() {
  return (
    <div className="flex items-center justify-center flex-col w-11/12 sm:w-full">
      <h3 className="text-lg sm:text-xl text-center w-full font-bold sm:font-bolder mb-8 mt-8 sm:mb-16 h-xs:mb-4 h-xs:text-sm">
        UVerify | Transparent. Immutable. Trusted.
      </h3>

      <p className="mb-8 text-md text-center h-xs:mb-4">
        <a
          className="mb-1 block"
          target="_blank"
          href="https://www.gesetze-im-internet.de/ddg/__5.html"
        >
          Content according to §5 DDG
        </a>{' '}
        <br />
        Fabian Bormann
        <br />
        c/o IP-Management #47491
        <br />
        Ludwig-Erhard-Str. 18
        <br />
        20459 Hamburg
      </p>

      <a
        href="mailto:hello@uverify.io"
        className="text-center text-xl mb-8 h-xs:mb-4"
      >
        Contact us via mail
        <br />
        hello@uverify.io
      </a>

      <div className="flex items-center justify-center">
        <a href="https://x.com/UVer1fy" target="_blank" rel="noreferrer">
          <svg
            className="w-8 h-8 text-white mx-2"
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
          href="https://github.com/UVerify-io"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="w-8 h-8 text-white mx-2"
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
          href="https://www.linkedin.com/company/uverify-io"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="w-8 h-8 text-white mx-2"
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
      <p className="text-center my-4 font-light text-sm">
        © 2024 UVerify by Fabian Bormann
      </p>
    </div>
  );
}
