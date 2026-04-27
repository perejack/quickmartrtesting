import { motion } from 'framer-motion'
import { DollarSign, GraduationCap, Heart, Trophy, Clock, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salaries',
    description: 'Earn above-market wages with regular salary reviews and performance bonuses.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Access to professional training programs and skill development workshops.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Comprehensive medical cover for you and your immediate family members.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Trophy,
    title: 'Career Growth',
    description: 'Clear promotion paths with 70% of management promoted from within.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    description: 'Flexible scheduling options and paid annual leave for all employees.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Users,
    title: 'Inclusive Culture',
    description: 'Join a diverse team where everyone is respected and valued equally.',
    color: 'bg-teal-100 text-teal-600'
  }
]

const WhyJoinUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Working at QuicMart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our people because they are the heart of our success. 
              Discover the advantages of building your career with us.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyJoinUs
