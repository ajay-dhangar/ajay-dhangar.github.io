import React from "react";
// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
    ArrowRight,
    Award,
    BadgeCheck,
    Code2,
    ExternalLink,
    Github,
    GraduationCap,
    Medal,
    ShieldCheck,
    Sparkles,
    Trophy,
    Users,
    Zap,
} from "lucide-react";

type Achievement = {
    title: string;
    organization: string;
    period: string;
    category: string;
    description: string;
    highlights: string[];
    icon: React.ElementType;
    accent: string;
    link?: string;
    linkLabel?: string;
};

const achievements: Achievement[] = [
    {
        title: "GSSoC'24 Project Admin",
        organization: "GirlScript Summer of Code",
        period: "2024",
        category: "Open Source Leadership",
        description:
            "Served as a Project Admin for CodeHarborHub during GSSoC'24, helping coordinate an open-source developer education project and its contributor workflow.",
        highlights: [
            "Project administration and contributor coordination",
            "Worked with an open-source community",
            "Helped maintain project contribution workflows",
            "Promoted practical learning through open source",
        ],
        icon: Users,
        accent: "from-blue-500 to-cyan-500",
        link: "https://github.com/CodeHarborHub/codeharborhub.github.io",
        linkLabel: "View CodeHarborHub",
    },
    {
        title: "GSSoC'24 Extended Edition Project Admin",
        organization: "GirlScript Summer of Code",
        period: "2024",
        category: "Open Source Leadership",
        description:
            "Served as a Project Admin for the Algo project, contributing to an open-source environment focused on Data Structures and Algorithms learning and practice.",
        highlights: [
            "Project administration",
            "Open-source contribution management",
            "DSA-focused developer education",
            "Community-driven development",
        ],
        icon: Trophy,
        accent: "from-emerald-500 to-teal-500",
        link: "https://github.com/ajay-dhangar/algo",
        linkLabel: "View Algo",
    },
    {
        title: "Postman API Fundamentals Student Expert",
        organization: "Postman",
        period: "2024",
        category: "Technical Recognition",
        description:
            "Earned the Postman API Fundamentals Student Expert credential, strengthening practical understanding of APIs, HTTP workflows, and API testing.",
        highlights: [
            "API fundamentals",
            "HTTP request and response workflows",
            "API testing with Postman",
            "Practical backend integration knowledge",
        ],
        icon: Zap,
        accent: "from-orange-500 to-amber-500",
    },
    {
        title: "Vertex AI Prompt Design Lab",
        organization: "Google Cloud",
        period: "2024",
        category: "AI Learning",
        description:
            "Completed the Vertex AI Prompt Design lab with a 100% completion result, building practical familiarity with prompt design and generative AI workflows.",
        highlights: [
            "Prompt design fundamentals",
            "Generative AI workflows",
            "Vertex AI learning experience",
            "Applied experimentation with AI",
        ],
        icon: Sparkles,
        accent: "from-violet-500 to-fuchsia-500",
    },
];

const achievementAreas = [
    {
        title: "Open Source",
        description:
            "Building, maintaining, and contributing to public developer-focused projects.",
        icon: Github,
    },
    {
        title: "Technical Growth",
        description:
            "Continuously developing practical skills across full-stack engineering, APIs, AI, and computer science.",
        icon: Code2,
    },
    {
        title: "Community",
        description:
            "Learning through collaboration, contributor workflows, and open-source communities.",
        icon: Users,
    },
    {
        title: "Professional Development",
        description:
            "Combining formal education, hands-on engineering, certifications, and independent projects.",
        icon: GraduationCap,
    },
];

const principles = [
    {
        number: "01",
        title: "Build, don't just collect certificates",
        description:
            "I use certifications and learning programs as a foundation, then reinforce them through real projects.",
    },
    {
        number: "02",
        title: "Contribute in public",
        description:
            "Open source gives me a practical environment to collaborate, review code, communicate, and ship.",
    },
    {
        number: "03",
        title: "Keep the fundamentals strong",
        description:
            "Computer science, programming, algorithms, APIs, and software engineering remain part of my long-term growth.",
    },
    {
        number: "04",
        title: "Turn learning into impact",
        description:
            "My goal is to convert technical learning into useful products, developer resources, and community-driven projects.",
    },
];

function AchievementCard({
    achievement,
}: {
    achievement: Achievement;
}) {
    const Icon = achievement.icon;

    return (
        <article className="group relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700/70 dark:bg-gray-900 sm:p-7">
            <div
                className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${achievement.accent} opacity-[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
            />

            <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${achievement.accent} text-white shadow-lg`}
                    >
                        <Icon size={25} strokeWidth={2} />
                    </div>

                    <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        {achievement.period}
                    </span>
                </div>

                <div className="mb-3">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                        {achievement.category}
                    </span>

                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {achievement.title}
                    </h2>

                    <p className="mt-1 font-medium text-gray-600 dark:text-gray-400">
                        {achievement.organization}
                    </p>
                </div>

                <p className="leading-7 text-gray-600 dark:text-gray-300">
                    {achievement.description}
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-800">
                    <p className="mb-3 text-sm font-bold text-gray-900 dark:text-white">
                        What it represents
                    </p>

                    <ul className="space-y-2.5">
                        {achievement.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="flex items-start gap-2.5 text-sm leading-6 text-gray-600 dark:text-gray-400"
                            >
                                <BadgeCheck
                                    size={17}
                                    className="mt-1 shrink-0 text-emerald-500"
                                />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {achievement.link && (
                    <div className="mt-6">
                        <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            {achievement.linkLabel}
                            <ExternalLink size={15} />
                        </a>
                    </div>
                )}
            </div>
        </article>
    );
}

export default function AchievementsPage(): JSX.Element {
    const pageUrl =
        "https://ajay-dhangar.github.io/career/achievements";

    return (
        <Layout
            title="Achievements & Recognition | Ajay Dhangar"
            description="Explore Ajay Dhangar's achievements, open-source leadership, technical recognition, certifications, and developer community contributions."
        >
            <Head>
                <link rel="canonical" href={pageUrl} />

                <meta
                    name="keywords"
                    content="Ajay Dhangar achievements, Ajay Dhangar awards, open source achievements, GSSoC Project Admin, Postman Student Expert, Vertex AI, software developer achievements, full stack developer"
                />

                <meta
                    property="og:title"
                    content="Achievements & Recognition | Ajay Dhangar"
                />
                <meta
                    property="og:description"
                    content="Open-source leadership, technical recognition, AI learning, and professional development milestones from Ajay Dhangar."
                />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:type" content="profile" />

                <meta
                    name="twitter:title"
                    content="Achievements & Recognition | Ajay Dhangar"
                />
                <meta
                    name="twitter:description"
                    content="Explore Ajay Dhangar's open-source leadership, technical recognition, and engineering growth."
                />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        name: "Ajay Dhangar — Achievements & Recognition",
                        url: pageUrl,
                        mainEntity: {
                            "@type": "Person",
                            name: "Ajay Dhangar",
                            url: "https://ajay-dhangar.github.io/",
                            sameAs: [
                                "https://github.com/Ajay-Dhangar",
                                "https://www.linkedin.com/in/ajay-dhangar/",
                                "https://x.com/CodesWithAjay",
                            ],
                            knowsAbout: [
                                "Full Stack Development",
                                "Software Engineering",
                                "Open Source",
                                "Artificial Intelligence",
                                "JavaScript",
                                "TypeScript",
                                "React",
                                "Next.js",
                                "Data Structures and Algorithms",
                            ],
                            award: [
                                "GSSoC'24 Project Admin",
                                "GSSoC'24 Extended Edition Project Admin",
                                "Postman API Fundamentals Student Expert",
                                "Vertex AI Prompt Design Lab",
                            ],
                        },
                    })}
                </script>
            </Head>

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden border-b border-gray-200/70 dark:border-gray-800 p-4 py-12">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
                        <div className="absolute right-[8%] top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
                    </div>

                    <div className="container-max section-padding">
                        <div className="mx-auto text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                                <Award size={17} />
                                Achievements & Recognition
                            </div>

                            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl py-2">
                                Milestones built through{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                                    building & contributing.
                                </span>
                            </h1>

                            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                                A collection of professional milestones, open-source
                                leadership experiences, technical recognition, and learning
                                achievements that reflect my journey as a software engineer.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 my-8">
                                <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                                    Open Source
                                </span>
                                <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                                    Software Engineering
                                </span>
                                <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                                    AI
                                </span>
                                <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
                                    Community
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Achievement Stats */}
                <section className="container-max p-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="card border border-gray-200/70 p-6 dark:border-gray-700/70">
                            <div className="flex items-center gap-3">
                                <Trophy className="mb-4 text-amber-500" size={25} />
                                <p className="text-2xl font-black text-gray-900 dark:text-white">
                                    2
                                </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Open-source Project Admin roles
                            </p>
                        </div>

                        <div className="card border border-gray-200/70 p-6 dark:border-gray-700/70">
                            <div className="flex items-center gap-3">
                                <Github className="mb-4 text-gray-900 dark:text-white" size={25} />
                                <p className="text-2xl font-black text-gray-900 dark:text-white">
                                    Open Source
                                </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Community-driven engineering
                            </p>
                        </div>

                        <div className="card border border-gray-200/70 p-6 dark:border-gray-700/70">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="mb-4 text-emerald-500" size={25} />
                                <p className="text-2xl font-black text-gray-900 dark:text-white">
                                    API
                                </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Postman fundamentals credential
                            </p>
                        </div>

                        <div className="card border border-gray-200/70 p-6 dark:border-gray-700/70">
                            <div className="mb-4 flex items-center gap-3">
                                <Sparkles className="mb-4 text-violet-500" size={25} />
                                <p className="text-2xl font-black text-gray-900 dark:text-white">
                                    100%
                                </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Vertex AI Prompt Design lab result
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Achievements */}
                <section className="section-padding p-4 py-12">
                    <div className="container-max">
                        <div className="mb-12 max-w-3xl">
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                                Recognition
                            </span>

                            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Achievements that shaped my engineering journey
                            </h2>

                            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                                These milestones represent more than credentials. Each one
                                contributed to how I approach engineering, collaboration,
                                learning, and open-source development.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {achievements.map((achievement) => (
                                <AchievementCard
                                    key={achievement.title}
                                    achievement={achievement}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievement Areas */}
                <section className="border-y border-gray-200/70 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-950/40 p-4 py-12">
                    <div className="container-max section-padding">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                                What matters to me
                            </span>

                            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                More than a list of badges
                            </h2>

                            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                                I care about what each achievement helped me learn and how I
                                can apply that knowledge to real engineering work.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {achievementAreas.map((area) => {
                                const Icon = area.icon;

                                return (
                                    <div
                                        key={area.title}
                                        className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900"
                                    >
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                                            <Icon size={23} />
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                            {area.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                            {area.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Philosophy */}
                <section className="section-padding p-4 py-12">
                    <div className="container-max">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                            <div>
                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                                    My approach
                                </span>

                                <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    Recognition is useful when it leads to better engineering.
                                </h2>

                                <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                                    My achievements are part of a larger process: learn the
                                    fundamentals, build real things, contribute to communities,
                                    receive feedback, and continue improving.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {principles.map((principle) => (
                                    <div
                                        key={principle.number}
                                        className="group flex gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-800"
                                    >
                                        <div className="shrink-0 text-sm font-black text-blue-500">
                                            {principle.number}
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                {principle.title}
                                            </h3>

                                            <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                                                {principle.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open Source Impact */}
                <section className="section-padding pt-0 p-4 py-12">
                    <div className="container-max">
                        <div className="relative overflow-hidden rounded-[2rem] border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-8 dark:border-blue-900/50 dark:from-blue-950/40 dark:via-gray-900 dark:to-emerald-950/30 sm:p-10 lg:p-12">
                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                                <div>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-gray-900">
                                            <Github size={23} />
                                        </div>

                                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
                                            Open Source
                                        </span>
                                    </div>

                                    <h2 className="max-w-3xl text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                        The biggest achievement is continuing to build in public.
                                    </h2>

                                    <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                                        Through CodeHarborHub, Algo, AI Buddies, and other
                                        experiments, I use open source as a practical way to learn,
                                        create useful developer resources, and collaborate with
                                        other developers.
                                    </p>
                                </div>

                                <a
                                    href="https://github.com/Ajay-Dhangar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    View GitHub
                                    <ExternalLink size={17} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Navigation */}
                <section className="border-t border-gray-200/70 dark:border-gray-800 p-4 py-12">
                    <div className="container-max section-padding">
                        <div className="mx-auto">
                            <div className="mb-8 text-center">
                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                                    Continue exploring
                                </span>

                                <h2 className="mt-3 text-2xl font-black text-gray-900 dark:text-white sm:text-3xl">
                                    See the full career story
                                </h2>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                <Link
                                    to="/career/timeline"
                                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                                >
                                    <Trophy
                                        className="mb-4 text-blue-500 transition-transform group-hover:scale-110"
                                        size={22}
                                    />
                                    <h3 className="font-bold text-gray-900 dark:text-white">
                                        Timeline
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Explore the journey
                                    </p>
                                </Link>

                                <Link
                                    to="/career/experience"
                                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                                >
                                    <Code2
                                        className="mb-4 text-emerald-500 transition-transform group-hover:scale-110"
                                        size={22}
                                    />
                                    <h3 className="font-bold text-gray-900 dark:text-white">
                                        Experience
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        See engineering work
                                    </p>
                                </Link>

                                <Link
                                    to="/career/education"
                                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                                >
                                    <GraduationCap
                                        className="mb-4 text-violet-500 transition-transform group-hover:scale-110"
                                        size={22}
                                    />
                                    <h3 className="font-bold text-gray-900 dark:text-white">
                                        Education
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        View academic foundation
                                    </p>
                                </Link>

                                <Link
                                    to="/career/resume"
                                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                                >
                                    <Medal
                                        className="mb-4 text-amber-500 transition-transform group-hover:scale-110"
                                        size={22}
                                    />
                                    <h3 className="font-bold text-gray-900 dark:text-white">
                                        Resume
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Get the complete profile
                                    </p>
                                </Link>
                            </div>

                            <div className="mt-10 text-center">
                                <Link
                                    to="/career"
                                    className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                >
                                    Back to Career
                                    <ArrowRight size={17} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}