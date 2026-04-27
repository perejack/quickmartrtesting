import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const testimonials = [
  {
    name: 'Mary Wanjiku',
    role: 'Store Supervisor',
    location: 'Nairobi',
    quote: 'Started as a cashier 5 years ago and now I\'m a supervisor. QuicMart truly believes in promoting from within and invests in employee growth.',
    rating: 5,
    years: '5 years'
  },
  {
    name: 'James Ochieng',
    role: 'Delivery Driver',
    location: 'Mombasa',
    quote: 'The flexible schedule allows me to balance work and family. The fuel allowance and vehicle maintenance support make this job sustainable.',
    rating: 5,
    years: '3 years'
  },
  {
    name: 'Grace Mutua',
    role: 'Cashier',
    location: 'Kisumu',
    quote: 'Great working environment with supportive management. The health insurance covers my whole family which gives me peace of mind.',
    rating: 5,
    years: '2 years'
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Employee Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Team Says
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from real employees who have built their careers at QuicMart
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <Quote className="w-8 h-8 text-green-200" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <span>{testimonial.location}</span>
                  <span>{testimonial.years} at QuicMart</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
