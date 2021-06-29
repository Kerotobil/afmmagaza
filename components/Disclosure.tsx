import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { getStaticProps } from "../yedekID";

export default function DisclosureElement(props) {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full px-6 text-left text-lg md:text-2xl bg-gray-100 text-gray-900 flex justify-between rounded">
              <span>{props.veri}</span>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : " transform rotate-90"
                } w-8 h-8 my-auto text-gray-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="w-full rounded px-10 text-lg text-gray-50 my-2">
              Tyt matematiği öğreneceksin
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
