/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import AuthLogin from './AuthLogin'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm ">
                            <img className="h-10 rounded-full bg-pink-300" src="https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png" alt="" />

                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-56 z-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            <div className="">
                                <Menu.Item>
                                    {({ active }) => (
                                        <AuthLogin />
                                    )}
                                </Menu.Item>


                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}
