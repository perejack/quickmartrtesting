import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Join thousands of Kenyans building their careers at QuicMart. 
            Apply today and take the first step towards a brighter future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/apply">
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-gray-100 text-base px-8 shadow-xl"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+254700123456">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-base px-8"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </Button>
            </a>
          </div>
          
          <p className="text-green-200 mt-8 text-sm">
            Have questions? Contact our HR team at{' '}
            <a href="mailto:careers@quicmart.co.ke" className="underline hover:text-white">
              careers@quicmart.co.ke
            </a>{' '}
            or call{' '}
            <a href="tel:+254700123456" className="underline hover:text-white">
              +254 700 123 456
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
