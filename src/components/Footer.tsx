import { LogoGithub } from "../assets/LogoGithub";

export default function Footer() {
  return (
    <div className="md:flex md:flex-row-reverse justify-end items-center mt-4 max-w-5xl m-auto text-xs px-4">
      <div className="text-blue-600 flex flex-wrap justify-center">
        <div className="mx-2 cursor-pointer hover:underline">Term</div>
        <div className="mx-2 cursor-pointer hover:underline">Privcy</div>
        <div className="mx-2 cursor-pointer hover:underline">Security</div>
        <div className="mx-2 cursor-pointer hover:underline">Status </div>
        <div className="mx-2 cursor-pointer hover:underline">Doc</div>
        <div className="mx-2 cursor-pointer hover:underline">
          Contact GitHub
        </div>
        <div className="mx-2 cursor-pointer hover:underline">Pricing</div>
        <div className="mx-2 cursor-pointer hover:underline">API</div>
        <div className="mx-2 cursor-pointer hover:underline">Training</div>
        <div className="mx-2 cursor-pointer hover:underline">Blog</div>
        <div className="mx-2 cursor-pointer hover:underline">About</div>
      </div>
      <div className="flex items-center justify-center mt-4 md:mt-0">
        <LogoGithub />
        <span className="mx-2">© 2023 GitHub, Inc.</span>
      </div>
    </div>
  );
}
