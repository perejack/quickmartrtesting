import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What documents do I need to apply?',
    answer: 'You will need a valid National ID or Passport, KCSE certificate or higher education documents, and any relevant professional certificates. A CV is optional but recommended.'
  },
  {
    question: 'How long does the application process take?',
    answer: 'After submitting your application, our HR team reviews it within 5-7 business days. Shortlisted candidates are contacted for interviews. The entire process typically takes 2-3 weeks.'
  },
  {
    question: 'Do you hire candidates without experience?',
    answer: 'Yes! Many of our positions, especially cashier and cleaner roles, are open to candidates without prior experience. We provide comprehensive training to all new hires.'
  },
  {
    question: 'What are the working hours?',
    answer: 'Working hours vary by position and location. Most stores operate 7 days a week, and we offer both full-time and part-time positions with flexible scheduling options.'
  },
  {
    question: 'Is there room for career advancement?',
    answer: 'Absolutely! Over 70% of our management positions are filled by internal promotions. We have clear career paths and provide training to help employees grow into supervisory and management roles.'
  },
  {
    question: 'What benefits do employees receive?',
    answer: 'All employees receive competitive salaries, health insurance, paid leave, and performance bonuses. Additional benefits vary by position and include transport allowance, meal subsidies, and pension contributions.'
  },
  {
    question: 'Can I apply for multiple positions?',
    answer: 'Yes, you can apply for multiple positions that match your skills and interests. However, we recommend focusing on roles where you meet the key requirements.'
  },
  {
    question: 'Do you have positions in my county?',
    answer: 'QuicMart operates in all 47 counties across Kenya. When applying, you can select your preferred work location, and we will match you with available positions in that area.'
  }
]

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Got Questions?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about working at QuicMart
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-green-600 py-5">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
