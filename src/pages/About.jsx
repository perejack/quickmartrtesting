import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Store, Users, Award, TrendingUp, Target, Heart, Globe, Leaf } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const stats = [
    { icon: Store, value: '50+', label: 'Stores Nationwide' },
    { icon: Users, value: '2,000+', label: 'Team Members' },
    { icon: Award, value: '10+', label: 'Years of Service' },
    { icon: TrendingUp, value: '47', label: 'Counties Covered' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do.'
    },
    {
      icon: Users,
      title: 'People Matter',
      description: 'Our employees are our greatest asset and we invest in their growth.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our business.'
    },
    {
      icon: Globe,
      title: 'Community',
      description: 'We are committed to the communities we serve across Kenya.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We care about the environment and practice sustainable business.'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-green-100 text-green-800">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Kenya&apos;s Fastest-Growing Supermarket Chain
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              QuicMart has been serving Kenyan communities since 2015, providing quality 
              products at affordable prices while creating thousands of jobs across the country.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Story</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From Humble Beginnings to National Success
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                QuicMart was founded in 2015 with a simple mission: to provide Kenyan families 
                with access to quality products at affordable prices, while creating meaningful 
                employment opportunities for local communities.
              </p>
              <p>
                What started as a single store in Nairobi has grown into one of Kenya&apos;s most 
                trusted supermarket chains, with over 50 stores spanning all 47 counties. Our 
                success is built on the dedication of our 2,000+ team members who serve millions 
                of customers every year.
              </p>
              <p>
                We take pride in being a truly Kenyan company, sourcing products from local 
                farmers and suppliers whenever possible, and reinvesting in the communities 
                that have supported our growth.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div 
              className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: `url('data:image/svg+xml,${encodeURIComponent(`
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
                    <rect width="800" height="450" fill="#f0fdf4"/>
                    <rect x="50" y="100" width="200" height="250" fill="#16a34a" rx="10"/>
                    <rect x="70" y="120" width="160" height="100" fill="#ffffff" rx="5"/>
                    <rect x="70" y="240" width="70" height="90" fill="#ffffff" rx="5"/>
                    <rect x="160" y="240" width="70" height="90" fill="#ffffff" rx="5"/>
                    <rect x="280" y="150" width="180" height="200" fill="#15803d" rx="10"/>
                    <rect x="300" y="170" width="140" height="80" fill="#ffffff" rx="5"/>
                    <rect x="300" y="270" width="60" height="60" fill="#ffffff" rx="5"/>
                    <rect x="380" y="270" width="60" height="60" fill="#ffffff" rx="5"/>
                    <rect x="490" y="80" width="220" height="270" fill="#166534" rx="10"/>
                    <rect x="510" y="100" width="180" height="120" fill="#ffffff" rx="5"/>
                    <rect x="510" y="240" width="80" height="90" fill="#ffffff" rx="5"/>
                    <rect x="610" y="240" width="80" height="90" fill="#ffffff" rx="5"/>
                    <circle cx="150" cy="380" r="30" fill="#22c55e"/>
                    <circle cx="370" cy="390" r="25" fill="#22c55e"/>
                    <circle cx="600" cy="375" r="35" fill="#22c55e"/>
                    <rect x="0" y="420" width="800" height="30" fill="#e5e7eb"/>
                  </svg>
                `)}') center/cover`
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Our Values</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide every decision we make and every interaction we have 
              with our customers, employees, and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Careers at QuicMart */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Build Your Career With Us
              </h2>
              <p className="text-green-100 mb-6 leading-relaxed">
                At QuicMart, we believe in growing together. With over 70% of our management 
                positions filled through internal promotions, we offer real opportunities for 
                career advancement. Join our team and be part of Kenya&apos;s retail success story.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold">70%</p>
                  <p className="text-sm text-green-200">Internal Promotions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm text-green-200">New Hires Yearly</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">95%</p>
                  <p className="text-sm text-green-200">Employee Retention</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10" />
                  </div>
                  <p className="text-xl font-semibold mb-2">Join Our Growing Team</p>
                  <p className="text-green-200">
                    We&apos;re always looking for talented individuals who share our passion 
                    for excellent customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
