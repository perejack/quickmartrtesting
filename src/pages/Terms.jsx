import { useEffect } from 'react'
import { FileText, Scale, AlertCircle, CheckCircle, Gavel } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <FileText className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-gray-600">Last updated: January 15, 2026</p>
            </div>
          </div>
          <p className="text-lg text-gray-600">
            Please read these Terms of Service carefully before submitting a job application 
            through the QuicMart Careers website. By using our services, you agree to be 
            bound by these terms.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Acceptance of Terms</h2>
            </div>
            <p className="text-gray-600">
              By accessing and using the QuicMart Careers website and submitting a job 
              application, you acknowledge that you have read, understood, and agree to be 
              bound by these Terms of Service. If you do not agree with any part of these 
              terms, please do not use our services.
            </p>
          </section>

          <Separator />

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Eligibility</h2>
            </div>
            <p className="text-gray-600 mb-4">
              To apply for positions at QuicMart, you must:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Be at least 18 years of age</li>
              <li>Be legally authorized to work in Kenya</li>
              <li>Hold a valid National ID or work permit</li>
              <li>Meet the minimum qualifications for the position applied for</li>
              <li>Provide accurate and truthful information in your application</li>
            </ul>
          </section>

          <Separator />

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Application Requirements</h2>
            </div>
            <p className="text-gray-600 mb-4">
              When submitting an application, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Provide complete and accurate information</li>
              <li>Upload only authentic documents and certificates</li>
              <li>Not submit false or misleading information</li>
              <li>Not use automated systems or bots to submit applications</li>
              <li>Not submit multiple applications using different identities</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">User Conduct</h2>
            <p className="text-gray-600 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Use our website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the website or its servers</li>
              <li>Transmit any viruses, malware, or harmful code</li>
              <li>Collect or harvest personal information of other users</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-600">
              All content on the QuicMart Careers website, including but not limited to text, 
              graphics, logos, images, and software, is the property of QuicMart Supermarkets 
              Ltd or its licensors and is protected by copyright and other intellectual property 
              laws. You may not reproduce, modify, distribute, or republish any content without 
              our prior written consent.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600">
              Submitting an application does not guarantee employment. All applications are 
              reviewed based on qualifications, experience, and organizational needs. 
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
              <li>Reject any application for any reason</li>
              <li>Verify all information provided</li>
              <li>Conduct background checks</li>
              <li>Contact references provided</li>
              <li>Modify or withdraw job postings at any time</li>
            </ul>
          </section>

          <Separator />

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Gavel className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Limitation of Liability</h2>
            </div>
            <p className="text-gray-600">
              QuicMart Supermarkets Ltd shall not be liable for any direct, indirect, 
              incidental, special, or consequential damages arising from your use of the 
              website or participation in our recruitment process. This includes but is 
              not limited to damages for loss of profits, goodwill, use, data, or other 
              intangible losses.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms of Service at any time. Changes 
              will be effective immediately upon posting on the website. Your continued 
              use of the website after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600">
              These Terms of Service shall be governed by and construed in accordance with 
              the laws of the Republic of Kenya. Any disputes arising from these terms shall 
              be subject to the exclusive jurisdiction of the Kenyan courts.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 space-y-2 text-gray-600">
              <p><strong>Email:</strong> legal@quicmart.co.ke</p>
              <p><strong>Address:</strong> QuicMart Supermarkets Ltd, Mombasa Road, Nairobi, Kenya</p>
              <p><strong>Phone:</strong> +254 700 123 456</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Terms
