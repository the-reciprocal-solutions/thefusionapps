import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import DemoSection from '@/components/demo-section';





const ourImpactsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar activePage="our-impacts" />
      {/* Gap for Navbar */}
      <div className="mb-6" /> {/* Added gap for navbar */}

      {/* Banner Container */}
      <div className='flex justify-center'>
        <div className="relative w-7/8  h-full py-16  mb-12 rounded-[20px] "
          style={{
            backgroundImage: `url("/img/our-impacts/our-impactsBanner.png")`,
          }}
        >


          {/* Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Real Stories. Real Results.

            </h1>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
              Explore how our solutions have made a measurable impact through in-depth, real-world case studies.
            </p>
          </div>
        </div>
      </div>


      {/* the feature of view more buttons when iclick the button that change the Problem Statement,Solution Offered:, How It Was Implemented: part of image, content, heading will be another one  */}
      {/* Our Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Product Card - Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Product Image */}
            <div className="relative flex justify-center">
              <Image
                src="/img/our-impactsAnalysis.jpeg"
                alt="Analytics Dashboard"
                width={500}
                height={300}
                className="rounded-[20px] shadow-lg"
              />
            </div>

            {/* Right Side - Product Details */}
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                Why Case Studies <span className="text-[#6C5DD3]">Matter</span>
              </h3>

              {/* Feature List */}
              <div className="space-y-4 relative z-10">
                <p className="text-[#303030] mb-5">Case studies provide actionable insights that go beyond theory. By focusing on actual scenarios, they:​</p>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]">Highlight effective solutions to real-world problems</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]">Demonstrate the practical application of concepts and strategies</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]">Support evidence-based decision-making</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]">Encourage critical thinking and problem-solving</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]">Add credibility through documented results and analysis</p>
                </div>
                <p className="text-[#303030]">They are especially effective in industries where understanding nuance, context, and outcomes is essential—such as business, healthcare, education, and public policy.</p>
                <div className="absolute right-[-0.90px] top-[-150px] -z-10">
                  {/* <Image
                    src="/img/ourprodc2.png"
                    alt="Decorative Background"
                    width={300}
                    height={300}
                    className="opacity-60"
                    priority
                  /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Product Card - AMPR */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-25 items-center">
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                Solution  <span className="text-[#6C5DD3]">Offered:</span>
              </h3>

              <div className="space-y-4 relative z-10">
                <p className="text-[#303030] mb-5">To address these challenges, we proposed an integrated deployment of our Fusion Engine, encompassing:
                </p>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Fusion Attendance:</span> Leveraging existing CCTV infrastructure for facial recognition-based attendance, eliminating the need for separate biometric systems.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Fusion Surveillance:</span>Enhancing real-time monitoring capabilities to track employee movements and identify unauthorized access.​</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Fusion ANPR:</span>Fusion ANPR: Automating vehicle access control by recognizing pre-registered license plates, streamlining deliveries and reducing manual checks.​</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Fusion Health Monitoring:</span> Implementing a system to monitor the health and functionality of surveillance cameras, ensuring minimal downtime.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/img/our-impacts/emerald2.jpg"
                alt="AMPR Surveillace System"
                width={300}
                height={300}
                className="w-full h-auto rounded-[20px] shadow-lg"
              />
            </div>
          </div> */}

          {/* Product Card - Surveillance */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            Left Side - Product Image
            <div className="relative">
              <Image
                src="/img/our-impacts/emerald3.jpg"
                alt="Surveillance System"
                width={600}
                height={400}
                className="w-full h-auto rounded-[20px] shadow-lg"
              />
            </div>

            Right Side - Product Details
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 text-black relative z-10">
                How It Was <span className="text-[#6C5DD3]"> Implemented:</span>
              </h3>

              <div className="space-y-4 relative z-10">
                <p className="text-[#303030] mb-5">Our engagement with Emerald unfolded in a phased manner:​</p>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold"> Initial Assessment:</span>Conducted comprehensive site audits to understand existing systems and identify areas for improvement.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Pilot Deployment:</span> Implemented the Fusion Engine in four departments, tracking employee movements, attendance, and productivity.​</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Feedback & Optimization:</span> Analyzed pilot results, identifying top-performing and underperforming employees, and refined the system accordingly.​</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Full-Scale Rollout: </span>Expanded the deployment across main departments and high-security zones, integrating facial recognition for access control and ANPR for vehicle management.​</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Training & Support: </span>Provided comprehensive training to staff, ensuring seamless adoption of the new systems.​</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="">
                    <div className="w-4 h-4 mt-1">
                      <Image src="/img/tickicon.png" alt="Tick Icon" width={16} height={16} />
                    </div>
                  </div>
                  <p className="text-[#303030]"><span className="font-bold">Continuous Monitoring:</span>Continuous Monitoring: Established ongoing support mechanisms, including real-time alerts for camera malfunctions and system health checks.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <h2 className="text-3xl font-bold text-center text-black mb-10">Case<span className="text-[#6C5DD3]"> studies</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <Image src="/img/our-impacts/emerald.png" alt="Security Camera 1" width={400} height={300} className="rounded-t-lg object-cover" />
              <h3 className="font-bold text-lg mt-4 text-black"> Rabwin Industry</h3>
              <p className="text-gray-600 mt-2 flex-grow">{`Rabwin Industries Pvt. Ltd. is a precision engineering company based in Coimbatore, India, established in 2000. It specializes in the manufacturing of high-quality components and assemblies for industries such as automotive, aerospace, electrical, heavy engineering, pumps, and valves.`}</p>
              {/* <a href="/our-impacts/emeraldjewel" className="mt-4 py-2 w-{15} h-{15} bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition duration-200 inline-block text-center">
                View more
              </a> */}
              <p className="bg-[#5240c5] text-white px-4 mt-2 max-w-[140px] sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                <a href="/our-impacts/rabwin" className="text-white hover:underline ml-1.5">View more</a>
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="flex justify-center items-center w-full">
                <Image
                  src="/img/our-impacts/tex.png"
                  alt="Security Camera 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mt-4 text-black">Texvalley Mall</h3>
              <p className="text-gray-600 mt-2 flex-grow">
                Texvalley, located in Erode, Tamil Nadu, is South India&apos;s largest integrated textile marketplace, spanning over 2 million square feet. Strategically positioned on the Salem-Kochi highway (NH544), it serves as a hub for both B2B and B2C commerce, housing hundreds of retail outlets, a hypermarket, multiplex, food court, and entertainment zones.</p>
              {/* <a href="/our-impacts/texvalley" className="mt-4 py-2 w-{15} h-{15} bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition duration-200 inline-block text-center">
                View more
              </a> */}
              <p className="bg-[#5240c5] text-white px-4 mt-2 max-w-[140px] sm:px-6 py-2 rounded-full inline-block font-medium hover:bg-[#311fa4] transition-colors">
                <a href="/our-impacts/texvalley" className="text-white hover:underline ml-1.5">View more</a>
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="flex justify-center items-center w-full">
                <Image
                  src="/img/our-impacts/5k.png"
                  alt="Security Camera 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mt-4 text-black">5K Care – India&apos;s Fast-Growing Car Care</h3>
              <p className="text-gray-600 mt-2 flex-grow">
                5K Care is a rapidly growing automotive franchise network in India, with over 200 service outlets, 80–90% of which are franchised. With a strong retail presence, their model focuses on delivering standardized vehicle maintenance and car care services across locations.

              </p>
              {/* <a href="/our-impacts/5care" className="mt-4 py-2 w-{15} h-{15} bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-400 transition duration-200 inline-block text-center">
                View more
              </a> */}
              <p className="bg-[#5240c5] text-white px-4 mt-2 max-w-[140px] sm:px-6 py-2 rounded-full  font-medium hover:bg-[#311fa4] transition-colors">
                <a href="/our-impacts/5kcare" className="text-white hover:underline ml-1.5">View more</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <DemoSection />
      <Footer />
    </div>
  );
};

export default ourImpactsPage;
