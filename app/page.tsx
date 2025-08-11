'use client';

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from 'react';
import { motion } from "framer-motion"

export default function Home() {
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const [isVisible, setIsVisible] = useState(false)
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const industries = [
    {
      name: "Hospitals",
      description: "Fusion Engine transforms hospitality with smarter operations, personalized service, and enhanced guest experiences.",
      image: "/img/homeProd1.png",
      link: "/industries/hospital",
      icon: "/img/industries/icons/hospitalIcon.svg"
    },
    {
      name: "Manufacturing",
      description: "Fusion Engine drives intelligent manufacturing with efficiency, safety, and smart insights.",
      image: "/img/homeProd2.png",
      link: "/industries/manufacture",
      icon: "/img/industries/icons/manuIcon.svg"
    },
    {
      name: "Banking",
      description: "Fusion Engine empowers banks with enhanced security, performance, and customer trust in a digital world.",
      image: "/img/homeProd3.png",
      link: "/industries/bank",
      icon: "/img/industries/icons/bankIcon.svg"
    },
    {
      name: "Transportation",
      description: "Fusion Engine transforms transportation with real-time insights, improved safety, and smarter infrastructure.",
      image: "/img/homeProd4.png",
      link: "/industries/transport",
      icon: "/img/industries/icons/transportIcon.svg"
    },
    {
      name: "Retail",
      description: "Fusion Engine transforms retail with smarter operations, seamless customer experiences, and unmatched digital security—building trust and driving growth.",
      image: "/img/homeProd5.png",
      link: "/industries/retail",
      icon: "/img/industries/icons/retailIcon.svg"
    },
    {
      name: "Advertisement",
      description: "Fusion Engine empowers advertisers with real-time insights, optimized performance, and deeper audience trust in a digital-first landscape.",
      image: "/img/homeProd6.png",
      link: "/industries/advertisement",
      icon: "/img/industries/icons/advertisementIcon.svg"
    },
    {
      name: "Mall Analytics",
      description: "Fusion Engine transforms shopping centers with intelligent analytics, driving foot traffic, optimizing operations, and elevating the customer experience.",
      image: "/img/homeProd7.png",
      link: "/industries/mall",
      icon: "/img/industries/icons/mallIcon.svg"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar activePage="home" />

      {/* Hero video-2 Section Desktop & mobile -view */}
      {/* <section >
        <div className="relative overflow-hidden bg-gradient-to-br min-h-screen flex items-center justify-center">
          Animated circuit pattern overlay
          <div className="absolute inset-0 ">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/img/bannervideo3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            Overlay image
            <img
              src="/img/videoOverlay.png"
              alt="Overlay"
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            />
          </div>

          <div className="container relative mx-auto px-4 py-12">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              Logo
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="mb-14"
              >
                <div className="relative w-36 h-36">
                  <div className="relative w-full h-full">
                    <div className="flex justify-center items-center mr-2">
                      <div className="relative w-full max-w-[200px] h-[200px] flex items-center justify-center animate-[spin_5s_linear_infinite]">
                        <div>
                          <Image
                            src="/img/Logo svg.svg"
                            alt="Fusion Apps Logo"
                            fill
                            className="object-contain "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              Heading
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white">
                  <span className="block mb-2">We Provide AI Solution with</span>
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                    Fusion Engine
                  </span>
                </h1>
              </motion.div>

              Description
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl  max-w-4xl mb-4"
              >
                We are an AI video intelligence startup providing real-time insights for your business. Our solutions help
                you save energy and costs by leveraging computer vision technology through your CCTV cameras.
              </motion.p>

              Buttons
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
              >
                <a
                  href="/onBoarding"
                  className="px-6 py-4 font-semibold text-white rounded-full  hover:bg-opacity-90 transition-all" style={{ background: "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)" }}
                >
                  Onboarding Journey
                </a>
                <Button>
                <a
                  href="https://calendly.com/thefusionapps/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 flex items-center justify-center  text-white rounded-full font-semibold hover:bg-opacity-90 transition-all"
                  style={{
                    background:
                      "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)",
                  }}
                >
                  Book a Demo
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Hero video-2 Section Desktop only -view */}
      <section className="hidden md:block">
        <div className="relative overflow-hidden bg-gradient-to-br min-h-screen flex items-center justify-center">
          {/* Animated circuit pattern overlay */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/img/bannervideo3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay image */}
            <Image
              src="/img/videoOverlay.png"
              alt="Overlay"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            />
          </div>

          <div className="container relative mx-auto px-4 py-12">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight text-white">
                  <span className="block mb-2">We Provide AI Solution with</span>
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                    Fusion Engine
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl  max-w-screen mb-4 mt-4 text-white"
              >
                We are an AI video intelligence startup providing real-time insights for your business. Our solutions help
                you save energy and costs by leveraging computer vision technology through your CCTV cameras.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-10 mt-15"
              >
                <Link
                  href="/onBoarding"
                  className="px-6 py-4 w-full sm:w-auto text-center flex items-center justify-center text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                  style={{
                    background: "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)",
                  }}
                >
                  Onboarding Journey
                </Link>
                <Link
                  href="https://calendly.com/thefusionapps/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 w-full sm:w-auto text-center flex items-center justify-center text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                  style={{
                    background: "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)",
                  }}
                >
                  Book a Demo
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section Mobile-view */}
      <section className="block md:hidden overflow-hidden bg-[#171440] ">
        {/* Top Background Image */}
        <div className="absolute top-0 left-0 w-full h-1/2 ">
          <div className="relative w-full h-full mt-[-50]" >
            <Image
              src="/img/mobilebanner.png"
              alt="Mobile Banner Background"
              fill
              className="object-cover "
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#191545]/30 to-[#171440] z-10" />
          </div>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 h-full flex flex-col justify-end mt-75">
          <div className="px-4 pb-12 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              We Provide AI Solution with
              <span className="block text-[#FF4A4A]">Fusion Engine</span>
            </h1>
            <p className="text-base text-gray-300 leading-relaxed mb-6 max-w-sm mx-auto">
              We are an AI video intelligence startup providing real-time insights for your business through computer vision and CCTV cameras.
            </p>
            <div className="flex flex-col gap-4 w-50 max-w-sm mx-auto">
              <Link
                href="/onBoarding"
                className="px-6 py-4 w-full sm:w-auto text-center flex items-center justify-center text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                style={{
                  background:
                    "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)",
                }}
              >
                Onboarding Journey
              </Link>
              <Link
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-4 md:mx-12 px-4 md:px-12 pb-6">

        {/* How It Works */}
        <section className="md:py-20 py-6 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
              How It <span className="text-[#6C5DD3]">Works</span>
            </h2>
            <div className="relative flex flex-col md:flex-row justify-between items-center max-w-[3280px] mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center max-w-[280px] mb-8 md:mb-0">
                <div className="w-[120px] h-[120px] rounded-[20px] overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/img/gif1.gif"
                    alt="Video Input"
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                  {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={120}
                    height={120}
                    className="w-120 h-120 object-cover mix-blend-darken"
                  >
                    <source src="/img/gif1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#303030]">Video Stream</h3>
                <p className="text-[#666666] text-base">
                  CCTV cameras capture store activities.
                </p>
              </div>

              {/* Dot Line 1 */}
              <div className="hidden md:flex flex-1 items-center justify-center relative h-[2px] mx-12">
                <div className="w-full border-t-2 border-dashed border-[#6C5DD3] translate-y-[-47px]"></div>
                <div className="absolute left-0 w-3 h-3 bg-[#6C5DD3] rounded-full top-1/2 -translate-y-9/2"></div>
                <div className="absolute right-0 w-3 h-3 bg-[#6C5DD3] rounded-full top-1/2 -translate-y-9/2"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center max-w-[280px] mb-8 md:mb-0">
                <div className="w-[120px] h-[120px] rounded-[20px] overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/img/gif2.gif"
                    alt="AI Processing"
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                  {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={120}
                    height={120}
                    className="w-120 h-120 object-cover mix-blend-darken"
                  >
                    <source src="/img/gif2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#303030]">AI Algorithm</h3>
                <p className="text-[#666666] text-base">
                  Our AI analyzes real-time video feeds.
                </p>
              </div>

              {/* Dot Line 2 */}
              <div className="hidden md:flex flex-1 items-center justify-center relative h-[2px] mx-12">
                <div className="w-full border-t-2 border-dashed border-[#6C5DD3] translate-y-[-47px]"></div>
                <div className="absolute left-0 w-3 h-3 bg-[#6C5DD3] rounded-full top-1/2 -translate-y-9/2"></div>
                <div className="absolute right-0 w-3 h-3 bg-[#6C5DD3] rounded-full top-1/2 -translate-y-9/2"></div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center max-w-[280px] mb-8 md:mb-0">
                <div className="w-[120px] h-[120px] rounded-[20px] overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/img/gif3.gif"
                    alt="Actionable Insights & Results"
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                  {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={120}
                    height={120}
                    className="w-120 h-120 object-cover mix-blend-darken"
                  >
                    <source src="/img/gif3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#303030]">Actionable Insights & Results</h3>
                <p className="text-[#666666] text-base">
                  The system provides data-driven results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="md:py-20 py-6 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-16">
              {/* Left Side - Content */}
              <div className="mt-4 order-2 md:order-1"> {/* Added margin-top to move the position down */}
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-black">
                  Why <span className="text-[#6C5DD3]">Choose Us</span>
                </h2>
                <p className="text-[#666666] mb-20 max-w-xl">
                  Delivering innovative and scalable tech solutions tailored to your business needs.
                  Seamless integration, robust security, and future-ready performance.
                  Trusted by clients for our reliability, expertise, and customer-first approach.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Feature 1 */}
                  <div className="flex flex-col mb-4 md:mb:8 gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                      <Image
                        src="/img/industries/icons/onpremiseIcon.svg"
                        alt="On-Premise Solutions"
                        width={30}
                        height={30}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#303030]">On-Premise Solution</h3>
                      <p className="text-[#666666] text-sm">
                        Gain full control with secure and customizable in-house infrastructure.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col mb-[-20] md:mb:8 gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                      <Image
                        src="/img/industries/icons/cloudsolnIcon.svg"
                        alt="Cloud Solutions"
                        width={30}
                        height={30}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#303030]">Cloud Solution</h3>
                      <p className="text-[#666666] text-sm mb-8">
                        Access anytime, anywhere with flexible and scalable cloud environments.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col mb-4 md:mb:8 gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                      <Image
                        src="/img/industries/icons/cloundIcon2.svg"
                        alt="Integrated Cloud Solutions"
                        width={30}
                        height={30}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#303030]">Integrated Cloud Solution</h3>
                      <p className="text-[#666666] text-sm">
                        Experience the best of both worlds with hybrid architecture that adapts to you.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex flex-col mb-4 md:mb:8 gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                      <Image
                        src="/img/industries/icons/aiIcon.svg"
                        alt="AI Processing"
                        width={30}
                        height={30}
                        className="text-[#6C5DD3]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#303030]">AI Processing</h3>
                      <p className="text-[#666666] text-sm">
                        Accelerate decision-making with intelligent automation and real-time insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="relative rounded-[32px] overflow-hidden order-1 md:order-2">
                <Image
                  src="/img/wcu2.png"
                  alt="Team Meeting"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://youtu.be/4u6s8xqtL_M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" fill="#6C5DD3" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Products */}
        <section className="md:py-20 py-6 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-black">
              Our <span className="text-[#6C5DD3]">Features</span>
            </h2>

            {/* Product Card - Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-6 items-center mb-20">
              {/* Left Side - Product Image */}
              <div className="relative">
                <Image
                  src="/img/Fusion Apps Dashboard 1.png"
                  alt="Analytics Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-[20px] shadow-lg"
                />
              </div>

              {/* Right Side - Product Details */}
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                  Fusion <span className="text-[#6C5DD3]">Analytics</span>
                </h3>

                {/* Feature List */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <p className="text-[#303030] mb-5">Fusion Analytics empowers businesses with AI-driven insights to optimize customer experience and store operations. With precision vision systems, gain deep visibility into footfalls, product interactions, and staff performance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="">
                      <div className="w-4 h-4 mt-1">
                        <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                      </div>
                    </div>
                    <p className="text-[#303030]">Ensure security and loss prevention with real-time intrusion alerts </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="">
                      <div className="w-4 h-4 mt-1">
                        <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                      </div>
                    </div>
                    <p className="text-[#303030]">Improve operations with facial recognition-based staff attendance</p>
                  </div>

                  <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                    <a href="/products/analytics" className="text-white hover:underline ml-1.5">Learn more</a>
                  </p>

                  <p className="bg-[#5240c5] ml-4 sm:ml-4 text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                    <a href="https://calendly.com/thefusionapps/30min" target="_blank"
                      rel="noopener noreferrer" className="text-white hover:underline ml-1.5">Book a Demo</a>
                  </p>

                  {/* <div className="flex items-center gap-3">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                    <p className="text-[#303030]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div> */}

                  <div className="absolute right-[-0.90px] top-[-150px] -z-10">
                    <Image
                      src="/img/ourproduct2.png"
                      alt="Decorative Background"
                      width={300}
                      height={300}
                      className="opacity-60"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card - AMPR */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-6 mb-25 items-center">
              {/* Left Side - Product Details */}
              <div className="relative order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-6 text-black">
                  Fusion <span className="text-[#6C5DD3]">ANPR</span>
                </h3>
                <p className="text-[#666666] mb-8">
                  Fusion ANPR leverages AI and computer vision to accurately recognize vehicle license plates in real time. It enables smarter traffic management, seamless toll automation, and efficient parking solutions.  </p>
                <div className="absolute left-[-50px] top-[-70px] -z-10">
                  <Image
                    src="/img/ANPR.jpg"
                    alt="Decorative Background"
                    width={300}
                    height={300}
                    className="opacity-70"
                    priority
                  />
                </div>

                {/* Feature List */}
                <div >
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="">
                        <div className="w-4 h-4 mt-1">
                          <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                        </div>
                      </div>
                      <p className="text-[#303030]">Automates traffic monitoring and reduces congestion at busy junctions.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="">
                        <div className="w-4 h-4 mt-1">
                          <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                        </div>
                      </div>
                      <p className="text-[#303030]">Streamlines parking by identifying vehicles and allocating slots instantly.</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="">
                        <div className="w-4 h-4 mt-1">
                          <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                        </div>
                      </div>
                      <p className="text-[#303030]">Enables fast, contactless toll collection for a smoother travel experience.</p>
                    </div>

                    <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                      <a href="/products/anpr" className="text-white hover:underline ml-1.5">Learn more</a>
                    </p>

                    <p className="bg-[#5240c5] ml-4 sm:ml-4 text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                      <a href="https://calendly.com/thefusionapps/30min" target="_blank"
                        rel="noopener noreferrer" className="text-white hover:underline ml-1.5">Book a Demo</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Product Image */}
              <div className="relative order-1 md:order-2">
                <Image
                  src="/img/ANPR.jpg"
                  alt="AMPR Surveillance System"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-[20px] shadow-lg"
                />
              </div>
            </div>

            {/* Product Card - Surveillance */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-6 items-center mb-20">
              {/* Left Side - Product Image */}
              <div className="relative">
                <Image
                  src="/img/Fusion Survillence1.jpg"
                  alt="Surveillance System"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-[20px] shadow-lg"
                />
              </div>

              {/* Right Side - Product Details */}
              <div className="relative">
                <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                  Fusion <span className="text-[#6C5DD3]">Surveillance</span>
                </h3>

                {/* Feature List */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <p className="text-[#303030] mb-5">Fusion Surveillance is an AI-powered vision system built on a neural compute engine, delivering 100% accurate human intrusion detection with zero false positives.
                        Designed for all perimeter types, it integrates thermal and visual surveillance, customizable alerts, and centralized monitoring for round-the-clock security.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-start gap-3">
                      <div className="">
                        <div className="w-4 h-4 mt-1">
                          <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                        </div>
                      </div>
                      <p className="text-[#303030]">Detects only human intrusions with precision using AI and deep learning scene analysis</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="">
                        <div className="w-4 h-4 mt-1">
                          <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                        </div>
                      </div>
                      <p className="text-[#303030]">Operates independently with in-camera intelligence, voice alerts, and motion-triggered lighting.
                      </p>
                    </div>
                  </div>

                  <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                    <a href="/products/surveillance" className="text-white hover:underline ml-1.5">Learn more</a>
                  </p>

                  <p className="bg-[#5240c5] ml-4 sm:ml-4 text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                    <a href="https://calendly.com/thefusionapps/30min" target="_blank"
                      rel="noopener noreferrer" className="text-white hover:underline ml-1.5">Book a Demo</a>
                  </p>
                  {/* <div className="flex items-center gap-3">
                  <img src="/img/tickicon.png" alt="Tick Icon" className="w-4 h-4" />
                  <p className="text-[#303030]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div> */}

                  {/* <div className="absolute right-[-0.90px] top-[-150px] -z-10">
                    <Image
                      src="/img/fusionsurveillane.png"
                      alt="Decorative Background"
                      width={300}
                      height={300}
                      className="opacity-60"
                      priority
                    />
                  </div> */}
                </div>
              </div>
            </div>

            {/* Product Card - HR */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-6 items-center">
              {/* Left Side - Product Details */}
              <div className="relative  order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-6 text-black">
                  Fusion <span className="text-[#6C5DD3]">Attendance</span>
                </h3>
                <p className="text-[#666666] mb-8">
                  Fusion Attendance is an AI-driven facial recognition solution designed to streamline HR operations like attendance, access control, and workforce management.
                  With real-time identification, centralized dashboards, and high data security, it enhances workplace efficiency and compliance.
                </p>
                <div className="absolute left-[-50px] top-[-70px] -z-10">
                  <Image
                    src="/img/fusionhr.png"
                    alt="Decorative Background"
                    width={600}
                    height={500}
                    className="opacity-70"
                    priority
                  />
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="">
                      <div className="w-4 h-4 mt-1">
                        <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                      </div>
                    </div>
                    <p className="text-[#303030]">Automates employee attendance and access control with microsecond facial identification.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="">
                      <div className="w-4 h-4 mt-1">
                        <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                      </div>
                    </div>
                    <p className="text-[#303030] mb-2">Centralized dashboard lets HR easily manage records across locations.</p>
                  </div>

                  <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                    <a href="/products/attendance" className="text-white hover:underline ml-1.5">Learn more</a>
                  </p>

                  <p className="bg-[#5240c5] ml-4 sm:ml-4 text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                    <a href="https://calendly.com/thefusionapps/30min" target="_blank"
                      rel="noopener noreferrer" className="text-white hover:underline ml-1.5">Book a Demo</a>
                  </p>

                </div>
              </div>

              {/* Right Side - Product Image */}
              <div className="relative  order-1 md:order-2">
                <Image
                  src="/img/facial recognition3.jpg"
                  alt="Attendance System"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-[20px] shadow-lg"
                />
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Monitor Easily Section */}
      <section className="md:py-20 py-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 rounded-t-[0px] overflow-hidden">
          <Image
            src="/img/overviewbackground.png"
            alt="Background Pattern"
            fill
            className="object-cover"

          />
        </div>
        <div className="mx-4 md:mx-12 px-4 md:px-12 pb-6">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <div className="relative z-10 px-4 sm:px-8 py-10">
                <h3 className="text-3xl font-bold mb-6 text-white text-center sm:text-left">
                  Monitor<span className="text-[#6C5DD3] ml-2">Easily</span>
                </h3>

                <div className="mb-8">
                  <h3 className="text-[#f28b58] text-lg mb-2 text-center sm:text-left">
                    Problem: <span className="text-white">You currently have data for only 20% of buyers, meaning you only know what they are purchasing.</span>
                  </h3>
                  <p className="text-white opacity-80 text-center sm:text-left"></p>
                </div>

                <div className="mb-8">
                  <h3 className="text-[#f28b58] text-lg mb-2 text-center sm:text-left">
                    Solution: <span className="text-white">We provide data for 80% of customer walk-outs, allowing you to understand why they are not buying.</span>
                  </h3>
                  <p className="text-white opacity-80 text-center sm:text-left"></p>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <Link
                    href="https://calendly.com/thefusionapps/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 w-full sm:w-auto text-center flex items-center justify-center text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                    style={{
                      background: "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)",
                    }}
                  >
                    Book a Demo
                  </Link>

                  <Link
                    href="/onBoarding"
                    className="px-6 py-4 text-white rounded-full font-medium text-center w-full sm:w-auto hover:bg-opacity-90 transition-all"
                    style={{
                      background: "linear-gradient(90deg, #EE3D5C -46.18%, #F28159 69.39%, #F4B457 197.13%)",
                    }}
                  >
                    Onboarding Journey
                  </Link>
                </div>
              </div>


              {/* Right Side - Dashboard Image */}
              <div className="relative z-10 order-1 md:order-2">
                <Image
                  src="/img/overview.png"
                  alt="Retail Analytics Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <div className=" md:mx-12 px-4 md:px-12 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 mt-10 text-black">
          Our <span className="text-[#6C5DD3]">Products</span>
        </h2>
        <section className="md:py-20 py-5 bg-[#F8F8FF] rounded-[32px]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fusion Engine Card */}
              <div className="bg-white rounded-[32px] p-10">
                <div className="flex items-start mt-3">
                  <Image
                    src="/img/fEngine.png"
                    alt="The Fusion Apps"
                    width={250}
                    height={50}
                    className="h-auto"
                  />
                </div>

                <p className="text-[#666666] mt-3 mb-4">
                  Fusion Engine is an AI-powered video processing powerhouse that turns raw visuals into actionable insights.From real-time recognition to intelligent alerts, it revolutionizes surveillance, industrial monitoring, and smart environments.... </p>

                <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  <a href="/products/engine">View more</a>
                </p>
              </div>

              {/* Fusion Eco Card */}
              <div className="bg-white rounded-[32px] p-12">
                <div className="mb-8">
                  <Image
                    src="/img/Fusion Apps 3.png"
                    alt="Fusion Eco"
                    width={200}
                    height={60}
                    className="h-auto"
                  />
                </div>

                <p className="text-[#666666] mb-4">
                  A smart energy-saving solution that optimizes electricity usage, reducing waste and cutting costs for businesses.We optimize consumption so only 60% of necessary energy is used efficiently....</p>

                <p className="bg-[#5240c5] text-white px-4 sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                  <a href="/products/eco">View more</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-black mt-10">
          <div className="container mx-auto px-4 md:px-8">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-start ml-[-22] mb-10">
              Our <span className="text-[#6C5DD3]">Partners</span>
            </h2>

            {/* Logo Container */}
            <div className="w-full overflow-hidden relative">
              <div className="animate-scroll-x flex w-max gap-8 md:gap-12">
                {/* Repeat logos if needed for seamless loop */}
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {[...Array(7)].map((_, j) => (
                      <div
                        key={j + i * 10}
                        className="flex-none border border-gray-300 shadow-md rounded-md p-2"
                      >
                        <Image
                          src={`/img/partners/partner${j + 1}.png`}
                          alt={`partner-${j + 1}`}
                          width={140}
                          height={60}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Showcase Section */}
        <section className="relative py-6 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold md:mt-10 text-black">
            Our <span className="text-[#6C5DD3]">Solutions</span>
          </h2>

          <div className="container mx-auto px-4 md:px-8 mt-10 relative">
            {/* External navigation buttons */}
            <div
              ref={prevRef}
              className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer text-[#6C5DD3] hover:text-indigo-700 text-3xl"
            >
              ❮
            </div>
            <div
              ref={nextRef}
              className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer text-[#6C5DD3] hover:text-indigo-700 text-3xl"
            >
              ❯
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                // @ts-expect-error - assigning custom prev button reference
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-expect-error - assigning custom next button reference
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {industries.map((industry, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group overflow-hidden rounded-[20px] w-full h-[350px] md:h-[450px]">
                    <div className="h-full w-full">
                      <Image
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                      />
                      <div className="absolute inset-0 hidden md:flex justify-center items-end text-white transition-opacity duration-300 group-hover:opacity-0 pb-6">
                        <h3 className="text-xl font-semibold px-4 rounded-[10px]">{industry.name}</h3>
                      </div>
                      <div
                        className="absolute inset-0 flex flex-col justify-between items-center text-center text-white 
                    bg-[#28236B]/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 
                    rounded-[20px] p-6 z-20"
                      >
                        <div className="mt-4">
                          <div className="border border-white p-3 rounded-[10px]">
                            <Image src={industry.icon} alt={`${industry.name} icon`} width={40} height={40} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                          <hr className="border-white w-10 mx-auto mb-2" />
                          <p className="text-sm px-4">
                            {industry.description || "Lorem ipsum dolor sit amet consectetur..."}
                          </p>
                        </div>
                        <div className="mb-4">
                          <Link href={industry.link} className="mt-4 bg-white text-[#28236B] font-semibold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
                            View more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>

      {/* Statistics Section */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 mt-10 ml-5 md:ml-30 text-black">
        Our <span className="text-[#6C5DD3]">Milestones</span>
      </h2>
      <section className="md:py-10 py-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 ">
          <div className="md:mx-12 px-4 md:px-12">
            <Image
              src="/img/counter.png"
              alt="Background Pattern"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="container px-4 md:px-8 relative mt-[-10] ">
          <p className="text-white font-semibold flex justify-center text-center text-2xl">
            From one camera to a global network—driven by innovation, security, and client value.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 mt-5">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Camera Channels */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/img/icon-white.png"
                  alt="Camera Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/80 text-lg">Camera Channel</div>
            </div>

            {/* Facilities */}
            <div className="flex flex-col items-center text-center p-6  rounded-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/img/icon-white.png"
                  alt="Facility Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80 text-lg">Facilities</div>
            </div>

            {/* Brands */}
            <div className="flex flex-col items-center text-center p-6  rounded-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/img/icon-white.png"
                  alt="Brand Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-white/80 text-lg">Brands</div>
            </div>

            {/* Countries */}
            <div className="flex flex-col items-center text-center p-6  rounded-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/img/icon-white.png"
                  alt="Country Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <div className="text-white/80 text-lg">Countries</div>
            </div>
          </div>
        </div>

      </section>

      <div className="mx-4 md:mx-12 px-4 md:px-12 pb-6 md:pb-0">

        {/* Solutions Overview Section */}
        {/* <section className="py-20 bg-white ">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#303030] block">Apart from retail,</span>
                  <span className="text-2xl font-semibold text-[#6C5DD3] mt-2 block">Our AI solutions are applicable in</span>
                </h2>


                <p className="text-[#666666] mb-8">
                  Our cutting-edge AI solutions go beyond retail, empowering industries like healthcare and manufacturing with intelligent automation, actionable insights, and real-time decision-making for improved outcomes.
                </p>


                <div className="flex items-center gap-8">

                  <div className="text-start">
                    <div className="text-[#6C5DD3] text-4xl font-bold mb-1">2.4K+</div>
                    <div className="text-[#303030] text-md font-bold">Used</div>
                  </div>


                  <div className="w-px h-12 bg-gray-200"></div>


                  <div className="text-start">
                    <div className="flex items-center gap-2">
                      <span className="text-[#6C5DD3] text-4xl font-bold">4.9</span>
                      <Image
                        src="/img/star-icon.png"
                        alt="Star Rating"
                        width={24}
                        height={24}
                        className="mt-1"
                      />
                    </div>
                    <div className="text-[#303030] text-md font-bold">Rating</div>
                  </div>
                </div>
              </div>


              <div className="space-y-8">

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#6C5DD3] rounded-lg flex items-center justify-center">
                    <Image
                      src="/img/icon-white.png"
                      alt="Video Icon"
                      width={24}
                      height={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#303030] mb-2">Hospitals</h3>
                    <p className="text-[#666666]">
                      Healthcare solutions for better service.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#6C5DD3] rounded-lg flex items-center justify-center">
                    <Image
                      src="/img/icon-white.png"
                      alt="Video Icon"
                      width={24}
                      height={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#303030] mb-2">Manufacturing</h3>
                    <p className="text-[#666666]">
                      Optimizing production processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Customer Reviews Section */}
        <section className="md:py-20 py-6 bg-white text-black">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header with Navigation */}
            <div className="flex justify-between items-center ml-[-22] md:0 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                What <span className="text-[#6C5DD3]">Our Customers</span> Say
              </h2>
              {/* <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-[#303030] flex items-center justify-center transition-all hover:bg-gray-50">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-[#28236B] flex items-center justify-center transition-all hover:bg-opacity-90">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div> */}
            </div>

            {/* Reviews Slider */}
            <div className="overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 transition-all duration-500">
                {/* Review Card 1 */}
                <div className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#F8F8FF] rounded-[20px] p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/img/cus1.jpg"
                        alt="Victor"
                        width={60}
                        height={60}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#303030]">Retail Industry Client – Smart Surveillance
                      </h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src="/img/star-icon.png"
                            alt="Star"
                            width={16}
                            height={16}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#666666]">
                    Fusion Engine has completely transformed our in-store surveillance. The real-time alerts and facial recognition help us prevent theft and improve customer service. It&apos;s like having an intelligent security team on watch 24/7!</p>
                </div>

                {/* Review Card 2 */}
                <div className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#F8F8FF] rounded-[20px] p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/img/cus2.jpg"
                        alt="Victor"
                        width={70}
                        height={70}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#303030]"> Industrial Monitoring Client – Automation Upgrade</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src="/img/star-icon.png"
                            alt="Star"
                            width={16}
                            height={16}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#666666]">
                    We integrated Fusion Engine into our manufacturing plant&apos;s monitoring system, and the results have been phenomenal. It detects anomalies instantly and helps us reduce downtime significantly.</p>
                </div>

                {/* Review Card 3 */}
                <div className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#F8F8FF] rounded-[20px] p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/img/cus3.jpg"
                        alt="Victor"
                        width={60}
                        height={60}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#303030]">Corporate Office Client – Access & Safety
                      </h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src="/img/star-icon.png"
                            alt="Star"
                            width={16}
                            height={16}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#666666]">
                    Installing Fusion Engine helped us centralize access control and monitor multiple office locations with ease. Its face recognition and alert system have added a whole new layer of security. </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logo Section */}
        <section className="bg-white text-black">
          <div className="container mx-auto px-4 md:px-8">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-start ml-[-22] mb-10">
              Our <span className="text-[#6C5DD3]">Clients</span>
            </h2>

            {/* Logo Container */}
            <div className="w-full overflow-hidden relative">
              <div className="animate-scroll-x flex w-max gap-8 md:gap-12">
                {/* Repeat logos if needed for seamless loop */}
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {[...Array(20)].map((_, j) => (
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
  );
}
