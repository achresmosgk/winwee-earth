import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Seed Saver"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Plant Protector"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Earth Guardian"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Planet Hero"
    },
];

const statsFactData = {
    number: '01',
    name: "Stats & facts",
    heading: "Pollution at a Glance: Key Global Stats",
    description: "Behind every statistic is a reminder that our choices matter. By knowing the impact of pollution on air, water, and land, we can work together to build a healthier, cleaner future for everyone.",
    scoreData: [
        {
            number: 8.1,
            numberValue: 'M',
            scoreDescp: "deaths globally, making Air Pollution the 2nd leading risk factor for death worldwide"
        },
        {
            number: 1.36 ,
            numberValue: 'M',
            scoreDescp: "deaths were due to water pollution"
        },
        {
            number: 900,
            numberValue: 'M',
            scoreDescp: "people live in areas with soil contamination at levels that threaten health and/or food safety."
        },
    ]
};

const servicesData = {
    number: '02',
    name: "Our Work",
    heading: "What we do",
    description: "A glimpse into our creativity—exploring innovative projects.",
    data: [
        {
            id: 1,
            image: "/images/home/services/1.svg",
            heading: "Waste Tracker",
            descp: "Students log plastic, paper, food waste reduction and can record their eco-friendly activities, such as planting trees, recycling, conserving water, or reducing electricity usage."
        },
        {
            id: 2,
            image: "/images/home/services/2.svg",
            heading: "WinWee Magazine",
            descp: "Student-led stories, comics, eco-projects."
        },
        {
            id: 3,
            image: "/images/home/services/3.svg",
            heading: "Marketplace",
            descp: "Eco-friendly products made by students with "
        },
        {
            id: 4,
            image: "/images/home/services/4.svg",
            heading: "Leaderboards",
            descp: "Recognizing top eco-schools and students globally."
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Hear from them",
        title: "Our website redesign was flawless. They understood our vision perfectly!",
        author: "Albert Flores",
        company: "MasterCard"
    },
    data_2: {
        preTitle: "Hear from them",
        title: "From concept to execution, they delivered outstanding results. Highly recommend their expertise!",
        author: "Robert Fox",
        company: "Mitsubishi"
    },
    data_3: {
        preTitle: "Hear from them",
        title: "Super smooth process with incredible results. highly recommend!",
        author: "Jenny Wilson",
        company: "Pizza Hut"
    },
};

const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/team-img-1.jpg",
            name: "Gaurika Kalia",
            position: "Founder & Ceo",
            socialLinks: [
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-2.jpg",
            name: "Vibhuti",
            position: "Eco Club Head",
            socialLinks: [
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        }
        ]
        };
    


const pricingData = {
    data: [
        {
            planName: "Launch",
            planPrice: "$699",
            planDescp: "Ideal for startups and small businesses taking their first steps online.",
            planIncludes: ["Competitive research & insights","Wireframing and prototyping","Basic tracking setup (Google Analytics, etc.)","Standard contact form integration"]
        },
        {
            planName: "Scale",
            tag: "Most popular",
            planPrice: "$1,699",
            cancelPrice: "$2,199",
            planDescp: "Perfect for growing brands needing more customization and flexibility.",
            planIncludes: ["Everything in the Launch Plan","Custom design for up to 10 pages","Seamless social media integration","SEO enhancements for key pages"]
        },
        {
            planName: "Elevate",
            planPrice: "$3,499",
            planDescp: "Best suited for established businesses wanting a fully tailored experience.",
            planIncludes: ["Everything in the Scale Plan","E-commerce functionality (if needed)","Branded email template design","Priority support for six months after launch"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
      ],
};

const faqData = {
    data: [
        {
            faq_que: "What services does your agency offer?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "How long does a typical project take?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you offer custom designs, or do you use templates?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "What’s the cost of a project?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you provide ongoing support after project completion?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        }
    ]
};
const contactData = {
    keypoint:["Always-On Customer Support","Service Across the Globe"],
    managerProfile:{
        image:"/images/avatar/avatar_1.jpg",
        name:"Courtney Henry",
        position:"Onboarding & Success Manager"
    }
}

const aboutusStats = [
  {
    number: 1,
    postfix: "",
    title: "Shared Mission, One Healthy Earth",
    descp:
      "All avatars work toward a common goal—helping students track waste and adopt environment-friendly habits."
  },
  {
    number: 100,
    postfix: "%",
    title: "Action Through Awareness",
    descp:
      "By making waste tracking visual and fun, the eco tracker turns awareness into real-world action."
  },
  {
    number: 0,
    postfix: "",
    title: "Zero-Waste Mindset",
    descp:
      "Every small reduction counts. Students progress with their avatar as they move closer to a zero-waste lifestyle."
  }
];


const servicesSliderData = [
    "Eco-World"
]



export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};