import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Fragment } from 'react'

const navigation = [{ name: 'FAQ', href: '/faq' }]

const Navbar = () => {
  const router = useRouter()

  return (
    <Disclosure as="nav" className="border-b-2 border-zinc-800 bg-zinc-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={'/'} passHref locale={router.locale}>
                    <a>
                      <div className="relative block h-8 w-20 lg:hidden">
                        <Image
                          src={require('assets/logos/request-logo-single.svg')}
                          alt="Logo simple"
                          layout="fill"
                        />
                      </div>
                      <div className="relative hidden h-8 w-28 lg:block">
                        <Image
                          src={require('assets/logos/request-logo.svg')}
                          alt="Logo"
                          layout="fill"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        locale={router.locale}
                      >
                        <a
                          className={clsx(
                            router.pathname.includes(item.href)
                              ? 'bg-slate-800 text-white'
                              : 'text-slate-300 hover:bg-slate-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                          aria-current={
                            router.pathname.includes(item.href)
                              ? 'page'
                              : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex h-8 w-8 overflow-hidden rounded-full ring-2 ring-slate-200 ring-offset-2 ring-offset-slate-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        src={
                          router.locale === 'de'
                            ? require('@/assets/i18n/Flag_of_Germany.svg')
                                .default.src
                            : require('@/assets/i18n/Square_Flag_of_the_United_Kingdom.svg')
                                .default.src
                        }
                        className="h-full w-full"
                        alt="Flag DE"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-4 origin-top-right py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={router.pathname}
                            locale={router.locale === 'de' ? 'en' : 'de'}
                            passHref
                          >
                            <div className="relative flex h-8 w-8 overflow-hidden rounded-full ring-2 ring-slate-200 ring-offset-2 ring-offset-slate-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                src={
                                  router.locale === 'en'
                                    ? require('@/assets/i18n/Flag_of_Germany.svg')
                                        .default.src
                                    : require('@/assets/i18n/Square_Flag_of_the_United_Kingdom.svg')
                                        .default.src
                                }
                                className="h-full w-full"
                                alt="Flag DE"
                              />
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    router.pathname.includes(item.href)
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={
                    router.pathname.includes(item.href) ? 'page' : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
