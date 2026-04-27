import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Upload, 
  CheckCircle, 
  ChevronRight,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  FileText,
  ExternalLink,
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { jobs, counties } from '@/lib/jobs'

const applicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\+?254\d{9}$|^0\d{9}$/, 'Please enter a valid Kenyan phone number'),
  idNumber: z.string().min(6, 'Please enter a valid ID number'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  county: z.string().min(1, 'Please select your county'),
  education: z.string().min(1, 'Please select your education level'),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().min(1, 'Please select your experience level'),
  coverLetter: z.string().min(50, 'Cover letter must be at least 50 characters'),
  termsAccepted: z.boolean().refine(val => val === true, 'You must accept the terms'),
})

const Apply = () => {
  const { jobId } = useParams()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState({ cv: null, certificates: null })

  const selectedJob = jobId ? jobs.find(j => j.id === jobId) : null

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      position: selectedJob?.id || '',
      termsAccepted: false
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    if (selectedJob) {
      setValue('position', selectedJob.id)
    }
  }, [selectedJob, setValue])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call - store application data
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Application submitted:', data)
    setIsSubmitting(false)
    setIsSuccess(true)
    toast.success('Application submitted successfully!')
    
    // Start redirect countdown
    setIsRedirecting(true)
    
    // Redirect to official application portal after 3 seconds
    setTimeout(() => {
      window.location.href = 'https://www.supermarkethiring.space/apply/quickmart'
    }, 3000)
  }

  const handleFileUpload = (type, event) => {
    const file = event.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB')
        return
      }
      setUploadedFiles(prev => ({ ...prev, [type]: file }))
      toast.success(`${type === 'cv' ? 'CV' : 'Certificates'} uploaded successfully`)
    }
  }

  if (isSuccess) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Application Received!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in joining QuicMart. Your preliminary application 
              has been logged in our system.
            </p>
            
            {isRedirecting && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8"
              >
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                  <span className="text-blue-800 font-semibold">
                    Redirecting to Secure Portal
                  </span>
                </div>
                <p className="text-sm text-blue-700 mb-4">
                  To complete your application and upload required documents securely, 
                  you will be redirected to our official application processing portal.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-blue-600">
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-mono">supermarkethiring.space</span>
                </div>
                <p className="text-xs text-blue-500 mt-4">
                  You will be redirected automatically in a few seconds...
                </p>
                
                {/* Progress bar */}
                <div className="mt-4 w-full bg-blue-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-blue-600 h-full rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
                  />
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-4 border-blue-300 text-blue-700 hover:bg-blue-100"
                  onClick={() => window.location.href = 'https://www.supermarkethiring.space/apply/quickmart'}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Go Now
                </Button>
              </motion.div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/jobs')}
                variant="outline"
              >
                Browse More Jobs
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
              >
                Return Home
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/jobs" className="hover:text-green-600">Jobs</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Apply</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900">Job Application</h1>
          <p className="text-gray-600 mt-2">
            Complete the form below to apply for a position at QuicMart
          </p>
        </div>
      </div>

      {/* Application Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedJob && (
          <Card className="mb-8 border-green-200 bg-green-50/50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {selectedJob.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">{selectedJob.department}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">{selectedJob.type}</Badge>
                    <Badge variant="secondary">{selectedJob.location}</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {selectedJob.salary}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Tell us about yourself</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    {...register('firstName')}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    {...register('lastName')}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="john.doe@email.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    placeholder="+254 700 123 456"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="idNumber">National ID / Passport Number *</Label>
                  <Input 
                    id="idNumber" 
                    placeholder="Enter your ID number"
                    {...register('idNumber')}
                  />
                  {errors.idNumber && (
                    <p className="text-sm text-red-500">{errors.idNumber.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input 
                    id="dateOfBirth" 
                    type="date"
                    {...register('dateOfBirth')}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-sm text-red-500">{errors.dateOfBirth.message}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location & Education */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <CardTitle>Location & Education</CardTitle>
                  <CardDescription>Your location and qualifications</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="county">Preferred Work County *</Label>
                <Select onValueChange={(value) => setValue('county', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred county" />
                  </SelectTrigger>
                  <SelectContent>
                    {counties.map((county) => (
                      <SelectItem key={county} value={county.toLowerCase()}>
                        {county}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.county && (
                  <p className="text-sm text-red-500">{errors.county.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Education Level *</Label>
                <Select onValueChange={(value) => setValue('education', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your highest education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary">Primary School</SelectItem>
                    <SelectItem value="kcse">KCSE / High School</SelectItem>
                    <SelectItem value="certificate">Certificate</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="degree">Bachelor&apos;s Degree</SelectItem>
                    <SelectItem value="masters">Master&apos;s Degree</SelectItem>
                  </SelectContent>
                </Select>
                {errors.education && (
                  <p className="text-sm text-red-500">{errors.education.message}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Job Details */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <CardTitle>Job Details</CardTitle>
                  <CardDescription>Select your preferred position</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="position">Position Applied For *</Label>
                <Select 
                  value={watch('position')}
                  onValueChange={(value) => setValue('position', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobs.map((job) => (
                      <SelectItem key={job.id} value={job.id}>
                        {job.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.position && (
                  <p className="text-sm text-red-500">{errors.position.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Select onValueChange={(value) => setValue('experience', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">No experience</SelectItem>
                    <SelectItem value="0-1">Less than 1 year</SelectItem>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="2-5">2-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">More than 10 years</SelectItem>
                  </SelectContent>
                </Select>
                {errors.experience && (
                  <p className="text-sm text-red-500">{errors.experience.message}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Upload className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <CardTitle>Documents</CardTitle>
                  <CardDescription>Upload your CV and certificates (Optional)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cv">Curriculum Vitae (CV)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                  <input
                    type="file"
                    id="cv"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => handleFileUpload('cv', e)}
                  />
                  <label htmlFor="cv" className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      {uploadedFiles.cv ? uploadedFiles.cv.name : 'Click to upload your CV'}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF, DOC, or DOCX up to 5MB
                    </p>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="certificates">Certificates (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                  <input
                    type="file"
                    id="certificates"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => handleFileUpload('certificates', e)}
                  />
                  <label htmlFor="certificates" className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      {uploadedFiles.certificates ? uploadedFiles.certificates.name : 'Click to upload certificates'}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF, JPG, or PNG up to 5MB
                    </p>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cover Letter */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <CardTitle>Cover Letter</CardTitle>
                  <CardDescription>Tell us why you want to join QuicMart</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="coverLetter">Your Message *</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Describe your skills, experience, and why you'd be a great fit for QuicMart..."
                  rows={6}
                  {...register('coverLetter')}
                />
                {errors.coverLetter && (
                  <p className="text-sm text-red-500">{errors.coverLetter.message}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Terms */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms"
                  {...register('termsAccepted')}
                />
                <div className="space-y-1">
                  <Label htmlFor="terms" className="font-normal cursor-pointer">
                    I confirm that all information provided is accurate and complete. 
                    I understand that providing false information may result in disqualification 
                    from the application process. I agree to the{' '}
                    <Link to="/terms" className="text-green-600 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-green-600 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </Label>
                  {errors.termsAccepted && (
                    <p className="text-sm text-red-500">{errors.termsAccepted.message}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              size="lg"
              className="flex-1 bg-green-600 hover:bg-green-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <ChevronRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => navigate('/jobs')}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Apply
