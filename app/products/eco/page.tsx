import Image from "next/image"
import { CheckCircle2, Lightbulb, Clock, DollarSign } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar activePage="products" />

            {/* Hero Section */}
            <section className=" py-16 md:py-32 relative">

                <div className="absolute inset-0 bg-[url('/img/eco/ecoBanner.png')] bg-cover"></div>

                <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <div className="mb-6 flex items-center justify-center">
                        <div className="relative h-10 w-40">
                            <Image
                                src="/img/eco/ecoLogo2.png"
                                alt="Fusion Eco Logo"
                                width={800}
                                height={400}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-white px-8 md:px-0">
                        <span className="text-[#00af54]">Fusion Eco:</span> Smart Energy for a Greener Future
                    </h1>
                    <p className="mt-4 max-w-2xl text-xl text-white px-8 md:px-0">
                        A product of FusionPro Solutions
                    </p>
                    <div className="mt-8 flex gap-4">
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
                </div>
            </section>

            {/* What is Fusion Eco */}
            <div className="mx-2 md:mx-10 bg-gray-50 rounded-2xl px-2 md:px-10">
                <section className="container py-16">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div className="flex flex-col justify-center items-start h-full">
                            <h2 className="text-3xl text-black font-bold flex items-center">What is<span className="text-[#00af54] ml-2">Fusion Eco?</span></h2>
                            <p className="mt-4 text-lg text-black flex items-center text-muted-foreground">
                                Fusion Eco is an intelligent, energy-saving solution designed to optimize electricity usage for lighting
                                and air conditioning—helping businesses save up to 40% on their power bills. No infrastructure overhaul,
                                no downtime—just smarter energy use.
                            </p>
                            <div className="mt-8">
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
                        </div>
                        <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
                            <Image
                                src="/img/fusionEco.jpg"
                                alt="Smart Energy Solution"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Why Choose Fusion Eco */}
            <div className="mx-2 md:mx-10 px-2 md:px-10">
                <section className="bg-muted py-16">
                    <div className="container">
                        <h2 className="text-center text-black text-3xl font-bold">
                            {/* <Zap className="mr-2 inline-block h-8 w-8 text-green-500" /> */}
                            Why Choose <span className="text-[#00af54] ml-2">Fusion Eco?</span>
                        </h2>

                        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
                            <Card className="shadow-md hover:shadow-lg">
                                <CardContent className="flex flex-col items-center p-6 text-center text-black">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                                        <DollarSign className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 text-xl font-semibold">Save 30–40% Instantly</h3>
                                    <p className="mt-2">
                                        Our Smart Driver Module reduces energy consumption immediately after installation.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-md hover:shadow-lg">
                                <CardContent className="flex flex-col items-center p-6 text-center text-black">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full  bg-blue-100 text-blue-500">
                                        <Lightbulb className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 text-xl font-semibold">No Replacements Needed</h3>
                                    <p className="mt-2">Retrofit your existing lights without replacing any infrastructure.</p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-md hover:shadow-lg">
                                <CardContent className="flex flex-col items-center p-6 text-center text-black">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full  bg-blue-100 text-blue-500">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 text-xl font-semibold">Zero Downtime</h3>
                                    <p className="mt-2">Seamless integration into your current setup with no business interruption.</p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-md hover:shadow-lg">
                                <CardContent className="flex flex-col items-center p-6 text-center text-black">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full  bg-blue-100 text-blue-500">
                                        <DollarSign className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 text-xl font-semibold">ROI in Just 6 Months</h3>
                                    <p className="mt-2">Start saving from day one with quick return on your investment.</p>
                                </CardContent>
                            </Card>
                        </div>

                        <p className="mt-8 text-center text-lg font-medium text-black">
                            {` Upgrade, don't replace. It's not just energy-efficient—it's budget-efficient.`}
                        </p>
                    </div>
                </section>
            </div>

            {/* How It Works Desktop*/}
            <div className="hidden md:block mx-2 md:mx-60 bg-gray-50 rounded-2xl">
                <section className="container py-16">
                    <h2 className="text-center text-3xl font-bold text-black">
                        How It Works :<span className="text-[#00af54] ml-2">3 Simple Steps</span>
                    </h2>

                    <div className="mt-12 flex justify-center text-black">
                        <Image
                            src="/img/eco/ECOIMG.jpg"
                            alt="How it works"
                            width={800}
                            height={500}
                            className="object-contain rounded-2xl shadow-lg hover:shadow-2xl "
                        />
                    </div>
                </section>
            </div>

            {/* How It Works view*/}
            <div className="block md:hidden mx-4 bg-gray-50 rounded-xl">
                <section className="container py-10">
                    <h2 className="text-center text-2xl font-semibold text-black">
                        How It Works :<span className="text-[#00af54] ml-2">3 Steps</span>
                    </h2>

                    <div className="mt-8 p-4 flex justify-center text-black">
                        <Image
                            src="/img/eco/ecoImgMobile.png"
                            alt="How it works"
                            width={400}
                            height={250}
                            className="object-contain rounded-xl shadow-md hover:shadow-lg"
                        />
                    </div>
                </section>
            </div>

            {/* Smarter Lighting */}
            <div className="mx-2 md:mx-10 px-2 md:px-10 text-black mt-8">
                <section className="bg-muted py-8 md:py-8">
                    <h2 className="text-center text-3xl font-bold">
                        {/* <Lightbulb className="mr-2 inline-block h-8 w-8 text-yellow-500" /> */}
                        Smarter <span className="text-[#00af54] ml-2">Lighting</span>, Smarter <span className="text-[#00af54] ml-2">Business</span>
                    </h2>

                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        <div className="space-y-6 flex flex-col items-start justify-center">
                            <div className="flex items-start">
                                <div className="">
                                    <CheckCircle2 className="mr-4 mt-1 h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Smart Lighting</h3>
                                    <p className="mt-2 text-muted-foreground">
                                        Save up to 40% energy with our intelligent lighting solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="">
                                    <CheckCircle2 className="mr-4 mt-1 h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Smart AC Controls</h3>
                                    <p className="mt-2 text-muted-foreground">
                                        Reduce electricity waste without upgrades to your existing systems.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="">
                                    <CheckCircle2 className="mr-4 mt-1 h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">24/7 Facility Optimization</h3>
                                    <p className="mt-2 text-muted-foreground">
                                        Works perfectly in 24/7 facilities, where traditional systems over-consume power.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="">
                                    <CheckCircle2 className="mr-4 mt-1 h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Large-Scale Infrastructure</h3>
                                    <p className="mt-2 text-muted-foreground">
                                        Ideal for businesses with large-scale lighting and HVAC infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-400px] overflow-hidden">
                            <Image
                                src="/img/eco/smartlight.png"
                                alt="Smart Lighting Solutions"
                                width={600}
                                height={600}
                                className="object-contain rounded-2xl"
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Product Line-up */}
            <div className="mx-2 md:mx-10 px-2 md:px-10 text-black bg-gray-50 rounded-2xl mt-8 md:mt-10">
                <section className="bg-muted py-4">
                    <div className="container">
                        <h2 className="text-center text-3xl font-bold">
                            Product <span className="text-[#00af54] ml-2">Line-up</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground">
                            Our energy-saving solutions are designed for various applications and environments.
                        </p>

                        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
                            {["Tube Lights", "Down Lights", "Panel Lights", "Street Lights"].map((product) => (
                                <div key={product} className="relative h-[250px] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
                                    <Image
                                        src={`/img/eco/${product}.png`}
                                        alt={product}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4">
                                        <h3 className="text-lg font-semibold text-white">{product}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* CTA Section */}
            <section className="bg-white md:py-20 py-8 px-4 md:px-8">
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
        </main>
    )
}