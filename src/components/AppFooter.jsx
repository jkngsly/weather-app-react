import GitHubLogo from "../assets/github.svg";
import ReactLogo from "../assets/react.svg";
import ViteLogo from "../assets/vite.svg";
import TailWindLogo from "../assets/tailwind.svg";

export default function AppFooter() {
  return (
    <>
      <footer className="fixed w-full flex flex-row justify-center">
        <img src={ReactLogo} alt="React" />
        <img src={ViteLogo} alt="Vite" />
        <img src={TailWindLogo} alt="Tailwind" />
        <a
          className="absolute block w-auto"
          href="https://github.com/jkngsly"
          title="GitHub"
        >
          <img className="float-left" src={GitHubLogo} alt="GitHub" />
          <span className="float-left">jkngsly</span>
        </a>
      </footer>
    </>
  );
}
