import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex items-center justify-center flex-col w-11/12 sm:w-full">
      <h3 className="text-sm sm:text-xl text-center w-full font-bold sm:font-bolder mb-8 mt-16 sm:mb-16 h-xs:mb-4 h-xs:text-sm">
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

      <Footer />
    </div>
  );
}
