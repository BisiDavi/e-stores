import Image from "next/image";
import Link from "next/link";

import footerContent from "@/json/footer.json";

type footerContentItems = {
    name?: string;
    links?: footerLinkType[];
    group?: { name: string; links: footerLinkType[] }[];
};

type footerLinkType = {
    name: string;
    link: string;
};

export default function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="topsection bg-gray-700 py-12">
                <div className="container grid grid-cols-3 mx-auto">
                    {footerContent.section1.map((item: footerContentItems) =>
                        !item.group ? (
                            <div
                                key={item.name}
                                className="footer-link flex flex-col"
                            >
                                <h4 className="my-4 text-white font-semibold text-xl">
                                    {item.name}
                                </h4>
                                <div className="links flex flex-col">
                                    {item?.links?.map(
                                        (footerLink: footerLinkType) => (
                                            <Link
                                                key={footerLink.name}
                                                href={footerLink.link}
                                                passHref
                                            >
                                                <a className="hover:text-gray-50 text-gray-400 my-2">
                                                    {footerLink.name}
                                                </a>
                                            </Link>
                                        ),
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                {item.group.map((footerItem) => (
                                    <div
                                        key={footerItem.name}
                                        className="footer-link flex flex-col"
                                    >
                                        <h4 className="text-white font-semibold my-4 text-xl">
                                            {footerItem.name}
                                        </h4>
                                        <div className="links flex flex-col">
                                            {footerItem.links.map(
                                                (
                                                    footerLink: footerLinkType,
                                                ) => (
                                                    <Link
                                                        key={footerLink.name}
                                                        href={footerLink.link}
                                                        passHref
                                                    >
                                                        <a className="hover:text-gray-50 text-gray-400 my-2">
                                                            {footerLink.name}
                                                        </a>
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ),
                    )}
                    <div className="contact-form flex flex-col">
                        <h4 className="text-white text-xl font-semibold text-loose">
                            Stay informed
                        </h4>
                        <div className="flex items-center form-input my-2">
                            <input
                                placeholder="Your email"
                                className="bg-white focus:ring-red-200 focus:border-transparent focus:outline-none focus:ring-2 focus:border-red-500 focus:border-red-500 rounded-lg border border-transparent p-2 rounded-r-none"
                            />
                            <button className="bg-red-500 rounded-lg hover:bg-red-600 text-white p-2 rounded-l-none border-transparent border">
                                Subscribe*
                            </button>
                        </div>
                        <p className="text-sm text-gray-400">
                            *Subscribe to our newsletter to receive early
                            discount offers, updates and new products info.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section-2 bg-gray-800 py-10">
                <div className="container m-auto">
                    <div className="point grid grid-cols-4 gap-10">
                        {footerContent.section2.points.map((point) => (
                            <div
                                key={point.title}
                                className="point flex items-center"
                            >
                                <i
                                    className={`text-red-500 ${point.icon} fa-2x`}
                                ></i>
                                <span className="ml-4 flex flex-col">
                                    <h3 className="text-xl font-semibold text-white my-2">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        {point.text}
                                    </p>
                                </span>
                            </div>
                        ))}
                    </div>
                    <hr className="w-full my-8 opacity-20" />
                    <div className="footer-logo flex items-center justify-between">
                        <div className="footer-logo flex flex-col">
                            <div className="ml-2 mb-2">
                                <Image
                                    src="/footer-logo-light.webp"
                                    height="40px"
                                    width="120px"
                                    alt="logo"
                                    layout="fixed"
                                />
                            </div>
                            <div className="footer-links text-white mb-12 mt-4">
                                {footerContent.section2.footerLinks.map(
                                    (footerLink) => (
                                        <Link
                                            key={footerLink.name}
                                            href={footerLink.link}
                                        >
                                            <a className="m-2 hover:text-gray-100 text-gray-400">
                                                {footerLink.name}
                                            </a>
                                        </Link>
                                    ),
                                )}
                            </div>
                            <p className="text-gray-300 text-sm ml-2">
                                &copy; All rights reserved. Made by Sailfish
                                Studio.
                            </p>
                        </div>
                        <div className="footer-icons">
                            <div className="social-icons flex">
                                {footerContent.section2.socialIcons.map(
                                    (socialIcon) => (
                                        <a
                                            key={socialIcon}
                                            className="m-2 flex justify-center hover:bg-red-400 bg-gray-900 items-center h-8 w-8 rounded-lg"
                                            href="#"
                                        >
                                            <i
                                                className={`${socialIcon} text-white rounded border-tranparent`}
                                            ></i>
                                        </a>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
