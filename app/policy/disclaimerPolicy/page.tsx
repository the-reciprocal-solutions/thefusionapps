import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import DemoSection from '@/components/demo-section';

const disclaimerPolicyPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar activePage="" />
            <div className="mb-6" />

            <div className="max-w-6xl mx-auto px-4 py-12 text-black">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Disclaimer Policy for Fusion Apps (Fusion Engine)</h1>
                <p className="text-gray-500 mb-6">Last updated: April 23, 2025</p>

                <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">1. General Disclaimer</h2>
                    <p className="mb-4">
                        {`Fusion Apps ("we", "our", or "us") provides AI-based video analytics services through the `}<span className='font-bold'>Fusion Engine</span>{`,  platform, which leverages artificial intelligence to process CCTV feeds for real-time insights, security, compliance, and operational efficiency.`}
                        {` By accessing or using our services, you acknowledge and agree to the disclaimers set forth below.`}
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">2. Not a Substitute for Human Oversight</h2>
                    <p className="mb-4">
                        Fusion Engine is a <span className='font-bold'>decision-support tool</span>, not a replacement for human monitoring or responsibility. While it can assist with surveillance, detection, and analytics:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Final responsibility for operational decisions, interventions, and security remains with the <span className='font-bold'>client or authorized personnel.</span></li>
                        <li>We recommend continued human oversight, especially in environments involving health, safety, or critical infrastructure.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">3. Accuracy of AI Analytics</h2>
                    <p className="mb-4">
                        While our AI models are trained with high accuracy standards:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>No algorithm is 100% error-proof. There may be <span className='font-bold'>false positives or false negatives</span> in face recognition, vehicle identification, or behavioral analytics.</li>
                        <li>System accuracy may vary based on <span className='font-bold'>camera quality, lighting, placement</span>, and <span className='font-bold'>external environmental factors</span>.</li>
                    </ul>
                    <p className="mb-4">
                        Clients must validate critical outputs, particularly in <span className='font-bold'>legal, compliance, or safety-sensitive scenarios</span>.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">4. Client Responsibility for Compliance
                    </h2>
                    <p className="mb-4">
                        Fusion Apps provides tools that <span className='font-bold'>enable</span> compliance with data protection and workplace regulations. However:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><span className='font-bold'>Clients are responsible</span> for ensuring that use of CCTV and AI video analytics complies with all applicable <span className='font-bold'>privacy, labor, and surveillance laws</span> in their respective jurisdictions.</li>
                        <li>Clients must install <span className='font-bold'>appropriate signage</span> and provide notices to inform data subjects (e.g., employees, customers) about ongoing surveillance.</li>
                    </ul>
                    <p className="mb-4">
                        We disclaim any liability arising from <span className='font-bold'>non-compliance</span> with legal requirements by clients.                    </p>
                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">5. Third-Party Integrations
                    </h2>
                    <p className="mb-4">
                        Fusion Engine may be integrated with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Third-party CCTV systems</li>
                        <li>Cloud storage or analytics platforms</li>
                    </ul>
                    <p className='mb-4'>
                        We do not guarantee the performance, security, or accuracy of third-party systems. Fusion Apps shall not be liable for issues arising from <span className='font-bold'>hardware limitations, incompatibility, or misconfiguration</span> not provided or maintained by us.
                    </p>
                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">6.  No Guarantee of Incident Prevention</h2>
                    <p className="mb-4">
                        Our system provides <span className='font-bold'>real-time alerts and analytics</span>, but:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>It <span className='font-bold'>does not guarantee</span> the prevention of incidents such as theft, unauthorized access, safety violations, or operational failures.</li>
                        <li>Clients must maintain <span className='font-bold'>appropriate physical and procedural safeguards</span> regardless of the AI system.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">7.  Limitation of Liability
                    </h2>
                    <p className="mb-4">
                        Fusion Apps is not liable for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Any <span className='font-bold'>loss of data</span>, revenue, or operations due to system misuse or misinterpretation</li>
                        <li>Decisions made based solely on system outputs without appropriate human validation</li>
                        <li><span className='font-bold'>Security breaches or data loss</span> caused by external hacking, third-party systems, or force majeure events</li>
                    </ul>
                    <p className="mb-4">
                        Our liability is limited to the <span className='font-bold'>scope and value of services rendered</span> under the applicable agreement.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">8. Updates and Modifications</h2>
                    <p className="mb-4">
                        The platform, its features, and outputs are subject to continuous <span className='font-bold'>updates and improvements</span>. While we strive to enhance accuracy and efficiency, changes may be made without prior notice. Clients are encouraged to keep systems <span className='font-bold'>up to date</span> and participate in training provided by Fusion Apps.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">9. Jurisdictional Variances</h2>
                    <p className="mb-4">
                        This Disclaimer is general in nature. <span className='font-bold'>Local data protection laws and surveillance regulations</span> may impose stricter or additional obligations. Fusion Apps disclaims liability for violations due to lack of local compliance, and we encourage clients to consult <span className='font-bold'>legal counsel</span> where appropriate.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">10. Contact Us</h2>
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

export default disclaimerPolicyPage;
