import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  ChevronRight,
  User,
  MapPin,
  GraduationCap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { counties } from '@/lib/jobs'

const applicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  county: z.string().min(1, 'Please select your county'),
  education: z.string().min(1, 'Please select your education level'),
})

const Apply = () => {
  const { jobId } = useParams()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(applicationSchema)
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call - store application data
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Application submitted:', data)
    setIsSubmitting(false)
    setIsSuccess(true)
    toast.success('Application submitted successfully!')
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
