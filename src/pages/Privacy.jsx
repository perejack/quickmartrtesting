import { useEffect } from 'react'
import { Shield, Lock, Eye, FileText, Trash2, Share2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const Privacy = () => {
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
              <Shield className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: January 15, 2026</p>
            </div>
          </div>
          <p className="text-lg text-gray-600">
            QuicMart Supermarkets Ltd is committed to protecting your privacy. This Privacy 
            Policy explains how we collect, use, disclose, and safeguard your information 
            when you apply for employment with us.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
            </div>
            <p className="text-gray-600 mb-4">
              When you submit a job application, we collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, and national ID/passport number.</li>
              <li><strong>Professional Information:</strong> Education history, work experience, skills, and qualifications.</li>
              <li><strong>Documents:</strong> CV, certificates, and other supporting documents you choose to upload.</li>
              <li><strong>Demographic Information:</strong> County of residence and preferred work location.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">How We Use Your Information</h2>
            </div>
            <p className="text-gray-600 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>To process and evaluate your job application</li>
              <li>To contact you regarding your application status</li>
              <li>To schedule interviews and assessments</li>
              <li>To verify your qualifications and references</li>
              <li>To comply with legal and regulatory requirements</li>
              <li>To improve our recruitment processes</li>
            </ul>
          </section>

          <Separator />

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Share2 className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Information Sharing</h2>
            </div>
            <p className="text-gray-600 mb-4">
              We do not sell or rent your personal information to third parties. We may share 
              your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>With our HR team and hiring managers for application evaluation</li>
              <li>With background check providers for verification purposes</li>
              <li>With legal authorities when required by law</li>
              <li>With your consent or at your direction</li>
            </ul>
          </section>

          <Separator />

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Data Security</h2>
            </div>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or 
              destruction. This includes encryption of data in transit and at rest, access 
              controls, and regular security assessments.
            </p>
          </section>

          <Separator />

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Trash2 className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Data Retention</h2>
            </div>
            <p className="text-gray-600">
              We retain your personal information for as long as necessary to fulfill the 
              purposes for which it was collected. If your application is unsuccessful, we 
              may retain your information for up to 2 years for future opportunities, unless 
              you request deletion. Successful applicants&apos; information is retained in accordance 
              with our employee data retention policies.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to request deletion of your information</li>
              <li>Right to object to processing of your information</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy or our data 
              practices, please contact us at:
            </p>
            <div className="mt-4 space-y-2 text-gray-600">
              <p><strong>Email:</strong> privacy@quicmart.co.ke</p>
              <p><strong>Address:</strong> QuicMart Supermarkets Ltd, Mombasa Road, Nairobi, Kenya</p>
              <p><strong>Phone:</strong> +254 700 123 456</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy
