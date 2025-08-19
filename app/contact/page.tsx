// components/ContactPage.tsx
"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from 'react';
import { Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar activePage="contact" />

      <section className="bg-[#171440] bg-[url('/aboutbanner.png')] bg-cover bg-center py-12 md:py-20 text-white px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Get In Touch</h1>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto md:mx-0">
            We are an AI video intelligence startup providing real-time insights for your business. Our solutions help you save energy and costs by leveraging computer vision technology through your CCTV cameras.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto flex justify-center px-4 ">
          <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
            {/* Left Side - Contact Information */}
            <div className="bg-[#171440] rounded-l-lg p-12 text-white flex flex-col justify-evenly relative">
              <h2 className="text-xl font-bold whitespace-nowrap mb-4 md:mb-0">Contact Information</h2>
              {/* <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur. Amet vitae enim lorem suspendisse non erat.
              </p> */}
              <div className="flex flex-col space-y-4 pt-0 ">
                <div className="flex items-center">
                  <Image src="/img/contact/phonevector.png" alt="Phone" width={20} height={20} />
                  <span className="ml-2">+91 97915 97993</span>
                </div>
                <div className="flex items-center">
                  <Image src="/img/contact/mailvector.png" alt="Email" width={20} height={20} />
                  <span className="ml-2">info@thefusionapps.com</span>
                </div>  
                <div className="flex items-center max-w-2xl">
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a href="https://www.linkedin.com/company/the-fusion-apps/" className="text-white/80 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/thefusionapps/" className="text-white/80 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="https://x.com/thefusionapps" className="text-white/80 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="24" height="24" fill="currentColor">
                        <path d="M714.29 496.64L1176.7 0H1070.9L665.28 460.26L348.66 0H0L486.67 703.83L0 1227H105.87L535.65 743.96L872.63 1227H1221.3L714.29 496.64ZM586.12 678.65L546.78 621.75L153.6 88.55H294.36L610.47 541.69L649.81 598.6L1052.69 1138.1H911.93L586.12 678.65Z" />
                      </svg>
                    </a>
                    <a href="https://www.google.com/search?sca_esv=5c91b037c081e110&biw=1920&bih=869&sxsrf=AHTn8zolxcxKxtJ6Ml5Yi6Z8SbUlqWgkFQ:1743777553190&kgmid=/g/11rv7vsd2s&q=The+Fusion+Apps&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=db1b2a7a8dc5c14f" className="text-white/80 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="24" height="24">
                        <path fill="#4285f4" d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.2H272v95h147.1c-6.4 34.5-25.7 63.7-54.7 83.3v68h88.4c51.7-47.6 80.7-117.7 80.7-196.1z" />
                        <path fill="#34a853" d="M272 544.3c73.8 0 135.7-24.4 180.9-66.2l-88.4-68c-24.6 16.5-56.2 26.2-92.5 26.2-71 0-131.1-47.9-152.6-112.1h-90.4v70.3c45.5 89.4 138.7 149.8 243 149.8z" />
                        <path fill="#fbbc04" d="M119.4 324.2c-10.4-30.9-10.4-64.3 0-95.2v-70.3h-90.4c-38 75.5-38 165.2 0 240.7l90.4-70.3z" />
                        <path fill="#ea4335" d="M272 107.7c39.9-.6 78 14.3 107.3 41.4l80.2-80.2C406.5 24.7 340.4-1 272 0 167.7 0 74.5 60.3 29 149.7l90.4 70.3c21.5-64.2 81.6-112.1 152.6-112.3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-transparent rounded-full opacity-30"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-transparent rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Right Side - Send Message Form */}
            <div className="bg-white rounded-r-lg p-14 flex flex-col">
              <h2 className="text-xl font-medium text-black mb-4">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-md text-black p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE3D5C]"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full border border-gray-300 rounded-md text-black p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE3D5C]"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="w-full border border-gray-300 rounded-md text-black p-2 h-32 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE3D5C]"
                ></textarea>
                {status.type && (
                  <div
                    className={`p-3 rounded-md ${status.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                      }`}
                  >
                    {status.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md py-2 px-4 bg-[linear-gradient(90deg,#EE3D5C_-46.18%,#F28159_69.39%,#F4B457_197.13%)] text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Global Presence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* India Office */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Image src="/img/contact/indiaflag.png" alt="India" width={64} height={64} className="rounded" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">India</h3>
                <p className="text-gray-600 mb-3 text-center">205 - SNS Tech Park, Saravanampatti, Coimbatore - 641107</p>
                <div className="flex items-center text-gray-500">

                  <Phone /> <span className="ml-2">+91 97915 97993</span>
                </div>
              </div>
            </div>

            {/* Singapore Office */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Image src="/img/contact/singaporeflag.png" alt="Singapore" width={64} height={64} className="rounded" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">Singapore</h3>
                <p className="text-gray-600 mb-3 text-center">8 Bumit Road, #03-10, Singapore - 329077</p>
                <div className="flex items-center text-gray-500">
                  <Phone /> <span className="ml-2">+65 8131 4467</span>
                </div>
              </div>
            </div>

            {/* Dubai Office */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Image src="/img/contact/dubai.jpg" alt="Dubai" width={64} height={64} className="rounded" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">Dubai</h3>
                <p className="text-gray-600 mb-3 text-center">
                  17, Al Zarooni building, Al Nahda street, Bur Dubai, Dubai, UAE. P.O. Box-236974
                </p>
                <div className="flex items-center text-gray-500">
                  <Phone /> <span className="ml-2">+971 055 327 3365</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}