import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 7,
    title: "Docs",
    path: "/documentation",
    newTab: false,
  }
];


const footerData = {
    name: "WinWee",
    tagline: "Together for Earth",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "winwee@gmail.com",
            href: "winwee@gmail.com"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Vadodara Gujarat",
            href: "https://maps.app.goo.gl/b4YUas4hEjSCc8LT9"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/#services" },
        { name: "Work", href: "/projects" },
        { name: "Terms", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/" },
        { name: "Instagram", href: "https://www.instagram.com/" },
        { name: "Twitter", href: "https://x.com/" }
    ],
    copyright: "© WinWee copyright 2025"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};