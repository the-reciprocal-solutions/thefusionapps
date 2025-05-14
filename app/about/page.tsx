import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar activePage="about" />

            {/* Hero Section */}
            <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#28236B] to-[#28236B]">
                <div className="absolute inset-0">
                    <Image
                        src="/aboutbanner.png"
                        alt="Banner Background"
                        fill
                        className="object-cover mix-blend-overlay"
                        priority
                    />
                </div>

                <div className="container mx-auto px-4 md:px-8 h-screen flex items-center relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                        {/* Left Side - Logo */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-[150px] md:max-w-[200px] h-[150px] md:h-[200px]">
                                <div className="relative w-full h-full animate-[spin_5s_linear_infinite]">
                                    <Image
                                        src="/img/Logo svg.svg"
                                        alt="Fusion Apps Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="text-white text-center md:text-left">
                            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                                Meet Our Company{" "}

                            </h1>
                            <p className="text-base md:text-lg mb-4 md:mb-8 text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                                We are The <span className="text-[#ffffff] text-2xl font-bold">Fusion Apps</span>, and we&apos;re all about using the latest technology to help businesses
                                thrive. We specialize in Artificial Intelligence, which means we teach computers to think and
                                do tasks like analyzing videos or recognizing license plates.
                            </p>
                            {/* <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <button className="px-6 py-2 md:px-8 md:py-3 bg-white text-[#1A1A3D] rounded-full font-medium hover:bg-opacity-90 transition-all">
                  Get Started
                </button>
                <button className="px-4 py-2 md:px-6 md:py-2 text-white rounded-full" style={{ background: "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)" }}>
                  Book a Demo
                </button>
              </div> */}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div> */}
            </section>

            {/* Introduction */}
            <div className="mx-2 md:mx-10 px-2 md:px-10  mt-10">
                <section className="container">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl text-black font-bold">Our <span className="text-[#5240c5]">Story</span></h2>
                            <p className="mt-4 text-lg text-muted-foreground text-black">
                                At Fusion App, we are redefining how businesses harness video surveillance and AI to make smarter, safer,
                                and more efficient decisions. What began as a single-camera setup has grown into a sophisticated
                                international network, delivering advanced analytics and seamless integration across industries.
                            </p>
                            <p className="mt-4 text-lg text-muted-foreground text-black">
                                We are proud to be a trusted partner to over 100+ facilities, with 10,000+ camera channels and growing
                                operations across three countries. Our proprietary Fusion Engine powers every solution—enabling real-time
                                insights, anomaly detection, automated workflows, and much more.
                            </p>
                        </div>
                        <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px] flex items-center">
                            <Image src="/img/aboutus/ourstories.png" alt="Fusion App Team" width="600" height="400" className="object-cover" />
                        </div>
                    </div>
                </section>
            </div>

            {/* Mission & Vision */}
            <div className="mx-2 md:mx-10 px-2 md:px-10 mt-20 p-10 bg-gray-50 rounded-2xl">
                <section className="bg-muted">
                    <div className="container">
                        <h2 className="text-center text-3xl font-bold text-black">Mission & <span className="text-[#5240c5]">Vision</span></h2>

                        <div className="mt-12 grid gap-8 md:grid-cols-2">
                            <Card>
                                <CardContent className="flex flex-col items-center p-8">
                                    <h3 className="text-2xl font-semibold text-black">Our Mission</h3>
                                    <div className="my-6 h-[200px] w-full relative overflow-hidden flex items-center justify-center rounded-2xl">
                                        <Image src="/img/aboutus/vision.png" alt="Our Mission" width="400" height="200" className="object-cover" />
                                    </div>
                                    <p className="text-center text-black">
                                        To empower organizations with intelligent, scalable, and secure surveillance solutions—leveraging AI
                                        to transform data into actionable intelligence.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex flex-col items-center p-8">
                                    <h3 className="text-2xl font-semibold text-black">Our Vision</h3>
                                    <div className="my-6 h-[200px] w-full relative overflow-hidden flex items-center justify-center rounded-2xl">
                                        <Image src="/img/aboutus/mision.png" alt="Our Mission" width="400" height="200" className="object-cover" />
                                    </div>
                                    <p className="text-center text-black">
                                        To be a global leader in AI-powered surveillance and automation—enhancing safety, operational
                                        efficiency, and business performance for our clients.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>

            {/* What We Do */}
            <div className="mx-2 md:mx-10 px-2 md:px-10 mb-20">
                <section className="container py-16">
                    <h2 className="text-center text-3xl text-black font-bold">What We <span className="text-[#5240c5]">Do</span></h2>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-black text-lg text-muted-foreground">
                        Fusion App specializes in designing and deploying end-to-end surveillance ecosystems built on the strength of
                        our proprietary technologies:
                    </p>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardContent className="p-6">
                                <div className="relative h-[200px] w-full overflow-hidden rounded-lg flex items-center">
                                    <Image src="/img/Fusion Apps Dashboard 1.png" alt="Fusion ANPR" height={200} width={400} className="object-contain rounded-lg" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-black">Fusion Analytics</h3>
                                <p className="mt-2 text-black">Real-time and predictive insights for enhanced decision-making.</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="relative h-[200px] w-full overflow-hidden rounded-lg flex items-center">
                                    <Image src="/img/aboutus/anpr.png" alt="Fusion ANPR" height={200} width={400} className="object-contain rounded-lg" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-black">Fusion ANPR</h3>
                                <p className="mt-2 text-black">High-accuracy number plate recognition for traffic, security, and logistics.</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="relative h-[200px] w-full overflow-hidden rounded-lg flex items-center">
                                    <Image src="/img/aboutus/sur.png" alt="Fusion ANPR" height={200} width={400} className="object-contain rounded-lg" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-black">Fusion Surveillance</h3>
                                <p className="mt-2 text-black">Smart monitoring for industries, facilities, and remote sites.</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="relative h-[200px] w-full overflow-hidden rounded-lg flex items-center">
                                    <Image src="/img/aboutus/hr.png" alt="Fusion ANPR" height={200} width={400} className="object-contain rounded-lg" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-black">Fusion Attendance</h3>
                                <p className="mt-2 text-black">People analytics to support attendance, access control, and workforce management.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>

            {/* Why Choose Us */}
            <div className="mx-2 md:mx-10 px-2 md:px-10 ">
                <section className="bg-muted container">
                    <div className="container">
                        <h2 className="text-center text-3xl font-bold text-black">Why Choose <span className="text-[#5240c5]">The Fusion App?</span></h2>
                        <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <CheckCircle2 className="mr-4 mt-1 h-6 w-6 text-primary bg-[#5240c5] rounded-full " />
                                    <div>
                                        <h3 className="text-xl font-semibold text-black">AI-Driven Platform</h3>
                                        <p className="mt-2 text-muted-foreground text-black">
                                            Our solutions are powered by machine learning and advanced analytics.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <CheckCircle2 className="mr-4 mt-1 h-6 w-6 text-primary bg-[#5240c5] rounded-full" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-black">Scalable Infrastructure</h3>
                                        <p className="mt-2 text-muted-foreground text-black">Built to grow with your business needs.</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <CheckCircle2 className="mr-4 mt-1 h-6 w-6 text-primary bg-[#5240c5] rounded-full" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-black">Cross-Industry Expertise</h3>
                                        <p className="mt-2 text-muted-foreground text-black">Serving manufacturing, retail, logistics, Attendance, and more.</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <CheckCircle2 className="mr-4 mt-1 h-6 w-6 text-primary bg-[#5240c5] rounded-full" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-black">End-to-End Support</h3>
                                        <p className="mt-2 text-muted-foreground text-black">
                                            {` From installation to monitoring and reporting—we've got you covered.`}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[500px] overflow-hidden rounded-lg">
                                <Image
                                    src="/img/aboutus/whychooseus.png"
                                    alt="Fusion App Technology"
                                    width="600"
                                    height="500"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Our Clients */}
            <div className="mx-2 md:mx-10 px-2 md:px-10 mt-[-50px] md:mt-20">
                <section className="bg-muted container">
                    <h2 className="text-center text-3xl font-bold text-black">Our <span className="text-[#5240c5]">Clients</span></h2>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground text-black">
                        {`We proudly serve a diverse portfolio of brands across sectors who trust us to deliver reliability,
                        performance, and value. Whether you're a single facility or a multi-site enterprise, Fusion App is your
                        partner in transformation.`}
                    </p>

                    {/* Logo Container */}
                    <div className="w-full overflow-hidden relative mt-8">
                        <div className="animate-scroll-x flex w-max gap-8 md:gap-12">
                            {/* Repeat logos if needed for seamless loop */}
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    {[...Array(19)].map((_, j) => (
                                        <div
                                            key={j + i * 10}
                                            className="flex-none border border-gray-300 shadow-md rounded-md p-2"
                                        >
                                            <Image
                                                src={`/img/clients/client${j + 1}.png`}
                                                alt={`client-${j + 1}`}
                                                width={140}
                                                height={60}
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* CTA Section */}
            <section className="bg-white md:py-20 py-6 px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="relative overflow-hidden rounded-[32px] bg-[#28236B] ">
                        {/* Circuit Pattern Background */}
                        <div className="absolute inset-0">
                            <Image
                                src="/img/CTA.png"
                                alt="Circuit Pattern"
                                fill
                                className="object-cover opacity-20"
                            />
                            {/* Glowing Overlay */}
                            <div className="relative"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 flex flex-col items-center justify-center md:py-20 py-6 px-4 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Schedule a Demo
                            </h2>
                            <p className="text-white/80 max-w-xl mb-8 text-lg">
                                Get a personalized demo today — no commitment, just insight.
                            </p>
                            <a
                                href="https://calendly.com/thefusionapps/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 w-full sm:w-auto text-center flex items-center justify-center text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)",
                                }}
                            >
                                Book a Demo
                            </a>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}