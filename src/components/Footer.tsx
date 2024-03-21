import { Footer } from "flowbite-react";
import logo from "../assets/logo.jpg";
import {
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export const Foot = () => {
  return (
    <Footer container className="rounded-none shadow-none">
      <div className="w-full">
        <div className="grid w-full justify-center sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* items-center mb-6 md:mb-0 */}
          <div className="flex sm:flex-col items-center mb-6 md:mb-0  ">
            <Footer.Brand
              src={logo}
              alt="App Logo"
              name="ShoppApp"
              className="lg:w-20 sm:w-14 lg:h-20 sm:h-14"
            />
            <span className="text-gray-700/90 font-bold">ShoppApp</span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ps-2 md:ps-0">
            <div>
              <Footer.Title title="productos" className="text-left" />
              <Footer.LinkGroup col className="text-left">
                <Footer.Link href="#">Destacados</Footer.Link>
                <Footer.Link href="#">Ofertas</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Redes" className="text-left" />
              <Footer.LinkGroup col className="text-left">
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" className="text-left" />
              <Footer.LinkGroup col className="text-left">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Maurolb" year={2024} />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0 ">
            <Footer.Icon
              icon={BsFacebook}
              href="https://www.facebook.com/profile.php?id=100005777808591"
              target="_blank"
              rel="noopener noreferrer"
            />
            <Footer.Icon
              href="https://www.instagram.com/maurolb96/"
              icon={BsInstagram}
              target="_blank"
              rel="noopener noreferrer"
            />
            <Footer.Icon
              href="https://twitter.com/MauroBr01333171"
              icon={BsTwitter}
              target="_blank"
              rel="noopener noreferrer"
            />
            <Footer.Icon
              href="https://github.com/maurolb"
              icon={BsGithub}
              target="_blank"
              rel="noopener noreferrer"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/maurobritez/"
              icon={BsLinkedin}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};
