import { Fragment, useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import coiliseumLogo from "../../assets/images/coliseum-logo.webp";

const navigation = [
  { name: "Boxing Club", href: "#boxing-club", current: false },
  { name: "Coaches", href: "#the-coaches", current: false },
  { name: "Info", href: "#contact", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 300) {
          setShow(false);
        } else {
          setShow(true);
        }
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 z-50 w-full transition duration-300 ease-out ${
        show ? "bg-transparent" : "bg-neutral-900"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center">
              <div className="flex items-center justify-end sm:w-full sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <div
                    className={`transition duration-300 ease-out ${
                      show ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <img
                      loading="lazy"
                      className="block h-12 w-12 rounded-full lg:hidden"
                      src={coiliseumLogo}
                      alt="Coliseum Boxing"
                    />
                    <img
                      loading="lazy"
                      className="hidden h-12 w-12 rounded-full lg:block"
                      src={coiliseumLogo}
                      alt="Coliseum Boxing"
                    />
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center h-full">
                    {navigation.map((item) => (
                      <a
                        aria-label="navbar item"
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
