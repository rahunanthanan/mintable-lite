import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const navigations = [
  {
    href: "/",
    label: "Shop",
  },
  {
    href: "/mint",
    label: "Mint",
  },
  {
    href: "/",
    label: "Discover",
  },
  {
    href: "/",
    label: "Resources",
  },
];

const Navbar = () => {
  const { user, signOut } = useAuthenticator((context) => [context.isPending, context.user]);
  const router = useRouter();

  const onSignout = React.useCallback(async () => {
    await signOut();
    router.push("/");
  }, [signOut, router]);

  return (
    <Disclosure as="nav" className="shadow sticky top-0 z-10 bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center flex-1">
                <div className="flex-shrink-0">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/mintable-lite-logo.svg"
                    alt="Mintable"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/mintable-lite-logo.svg"
                    alt="Mintable"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/">
                      <a className="px-3 py-2 rounded-md text-sm font-medium">
                        All Categories
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-1 items-center lg:ml-6 px-2">
                  <div className="w-full">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigations.map((l) => (
                        <Link href={l.href} key={l.label}>
                          <a className="px-3 py-2 rounded-md text-sm font-medium uppercase">
                            {l.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {user ? (
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={React.Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/">
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {user?.attributes?.email}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            <button
                              type="button"
                              onClick={onSignout}
                              className="block px-4 py-2 text-sm text-red-700 w-full text-left hover:text-white hover:bg-red-700"
                            >
                              Sign out
                            </button>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => router.push('/mint')}
                        className="px-3 py-2 rounded-md text-sm font-medium uppercase"
                      >
                        Sign In
                      </button>

                      <button
                        type="button"
                        onClick={() => router.push('/mint')}
                        className="px-3 py-2 rounded-md text-sm font-medium uppercase bg-primary text-white"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigations.map((l) => (
                <Link href={l.href} key={l.label}>
                  <Disclosure.Button
                    as="a"
                    className="lock px-3 py-2 rounded-md text-base font-medium w-full"
                  >
                    {l.label}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
            {user && (
              <div className="pt-4 pb-3 border-t border-gray-100">
                <div className="px-2 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  >
                    {user?.attributes?.email}
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="button"
                    onClick={async () => {
                      signOut();
                      router.push("/");
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 text-red-700 hover:text-white"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
