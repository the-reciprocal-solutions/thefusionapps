import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import DemoSection from '@/components/demo-section';

const termsAndConditionPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar activePage="" />
            <div className="mb-6" />

            <div className="max-w-6xl mx-auto px-4 py-12 text-black">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Terms and Conditions                </h1>
                <p className="text-gray-500 mb-6">Last updated: April 23, 2025</p>

                <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">1. Agreement Overview                    </h2>
                    <p className="mb-4">
                        {`These Terms and Conditions (“Terms”) govern the use of Fusion Apps' products and services, including the`} <span className='font-bold'>Fusion Engine</span>{`, a video analytics platform that leverages artificial intelligence to process CCTV and visual data. By subscribing to or using our services, the client (“You” or “Client”) agrees to be bound by these Terms.`}
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">2. Services Provided</h2>
                    <p className="mb-4">
                        Fusion Apps provides the following through Fusion Engine:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>AI-powered video stream analytics</li>
                        <li>Attendance tracking via facial recognition</li>
                        <li>Vehicle profiling and ANPR (Automatic Number Plate Recognition)</li>
                        <li>Real-time surveillance and threat detection</li>
                        <li>Business intelligence derived from visual data</li>
                    </ul>
                    <p className="mb-4">
                        Services may be delivered via on-premise, cloud-based, or hybrid deployment models.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">3. Client Responsibilities</h2>
                    <p className="mb-4">
                        By engaging with Fusion Apps, you agree to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Obtain and maintain all necessary <span className='font-bold'>legal permissions</span> for CCTV usage and video data collection</li>
                        <li>Ensure that data captured and processed by Fusion Engine complies with <span className='font-bold'>local data protection laws</span></li>
                        <li>Promptly <span className='font-bold'>inform users</span> and employees via signage and policies where surveillance and AI analytics are in use</li>
                        <li>Cooperate in system deployment, testing, and feedback as defined in the onboarding roadmap</li>
                        <li>Use Fusion Engine only for <span className='font-bold'>lawful purposes</span> and not to infringe on rights, dignity, or freedoms of individuals</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">4. Data Ownership and Usage
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><span className='font-bold'>Client Data Ownership:</span> You retain full ownership of raw video streams and derived analytics captured by your infrastructure.</li>
                        <li><span className='font-bold'>Usage Rights:</span> Fusion Apps may process this data solely for the purpose of delivering and optimizing the service.</li>
                        <li><span className='font-bold'>Anonymized Data:</span> We may use anonymized, aggregated data for improving our algorithms and benchmarking, provided no personal information is identifiable.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">5. System Access and Integration</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Fusion Engine may be integrated with your <span className='font-bold'>existing CCTV</span>, servers, and dashboards based on agreed configurations.</li>
                        <li>You are responsible for <span className='font-bold'>network and hardware readiness</span> (unless Fusion Apps provides it under a separate agreement).</li>
                        <li>Fusion Apps shall not be held responsible for issues caused by <span className='font-bold'>incompatible third-party equipment</span> or non-compliant IT environments.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">6. Service Availability and Support</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Fusion Apps offers <span className='font-bold'>24/7 technical support</span> via phone, email, or dedicated service channels.</li>
                        <li>System downtime due to <span className='font-bold'>maintenance, updates, or third-party disruptions</span> will be communicated in advance wherever possible.</li>
                        <li>Fusion Apps will ensure prompt action for <span className='font-bold'>real-time incident alerting, health monitoring</span>, and bug fixes per SLA agreements.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">7. Confidentiality
                    </h2>
                    <p className="mb-4">
                        Both parties agree to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Maintain the confidentiality of proprietary and sensitive information</li>
                        <li>Not disclose any confidential data to third parties without written consent</li>
                        <li>Take adequate measures to prevent unauthorized access to such information</li>
                    </ul>
                    <p className="mb-4">
                        This clause survives the termination of the agreement.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">8. Privacy and Compliance</h2>
                    <p className="mb-4">
                        Fusion Engine is designed with <span className='font-bold'>privacy by design</span> principles. The client agrees to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Display appropriate <span className='font-bold'>notices and disclosures</span> in monitored zones</li>
                        <li>Not use the system for <span className='font-bold'>profiling or surveillance in prohibited areas</span> (e.g., restrooms, private spaces)</li>
                        <li>Comply with applicable <span className='font-bold'>privacy laws</span> {`such as GDPR, India's DPDP Bill`}, etc.</li>
                        <li>Respond to <span className='font-bold'>data subject access requests (DSARs)</span> where applicable</li>
                    </ul>
                    <p className="mb-4">
                        For details, refer to our <span> <a href="/policy" className='text-blue-500 underline'>Privacy Policy.</a></span>
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">9. Intellectual Property</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>All intellectual property rights in Fusion Engine, including software, algorithms, and documentation, remain the <span className='font-bold'>exclusive property of Fusion Apps</span>.                        </li>
                        <li>You are granted a <span className='font-bold'>non-transferable, non-exclusive license</span> to use the system per your subscription.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">10. Limitation of Liability</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Fusion Apps shall not be liable for any <span className='font-bold'>incidental, indirect, or consequential damages</span>, including but not limited to data loss, business interruption, or system misuse.</li>
                        <li>Our total liability, whether in contract or tort, is limited to the fees paid by you in the <span className='font-bold'>preceding 12 months.</span></li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">11. Indemnity</h2>
                    <p className="mb-4">
                        You agree to indemnify, defend, and hold Fusion Apps harmless from any claims, damages, or liabilities arising out of:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Violation of any data protection law due to your operational practices</li>
                        <li>Unauthorized or unlawful use of Fusion Engine</li>
                        <li>Breach of these Terms</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">12. Termination</h2>
                    <p className="mb-4">
                        Either party may terminate this agreement:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>With 30 days written notice</li>
                        <li>Immediately upon breach of material terms</li>
                        <li>Due to insolvency, legal prohibition, or force majeure</li>
                    </ul>
                    <p className="mb-4">
                        On termination, all system access and licenses will be revoked, and all confidential data will be returned or destroyed per mutual agreement.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">13. Amendments</h2>
                    <p className="mb-4">
                        Fusion Apps reserves the right to modify these Terms at any time. Changes will be notified via email or client portals and will take effect 15 days after notice unless otherwise stated.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">14. Governing Law</h2>
                    <p className="mb-4">
                        This agreement is governed by the laws of [insert jurisdiction: e.g., India / Singapore / UAE]. Any disputes shall be subject to the exclusive jurisdiction of the courts in [insert location].
                    </p>

                    
                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">15. Contact</h2>
                    <p className="mb-4">For queries regarding these Terms, contact us at:</p>
                    <ul className="list-none space-y-3 mb-6">
                        <li className="flex items-start">
                            <span className=" min-w-28 font-bold">📧By email:</span>
                            <span className="text-blue-600">info@thefusionapps.com</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold min-w-28"> 📍Offices:</span>
                            <span>Singapore | India | Dubai</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold min-w-28"> 🌐Website:</span>
                            <a
                                href="https://thefusionapps.com/"
                                rel="noreferrer external nofollow noopener"
                                target="_blank"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                www.thefusionapps.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <DemoSection />
            <Footer />
        </div>
    );
};

export default termsAndConditionPage;
