import { Link } from 'react-router-dom'
import { ShoppingCart, MapPin, Phone, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/jobs', label: 'Job Openings' },
    { path: '/apply', label: 'Apply Now' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ]

  const legalLinks = [
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
  ]

  const jobCategories = [
    { path: '/jobs?category=cashier', label: 'Cashier Jobs' },
    { path: '/jobs?category=driver', label: 'Driver Jobs' },
    { path: '/jobs?category=warehouse', label: 'Warehouse Jobs' },
    { path: '/jobs?category=supervisor', label: 'Supervisor Jobs' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">QuicMart</span>
                <span className="text-xs text-green-400">Careers</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Join Kenyas fastest-growing supermarket chain. We offer exciting career 
              opportunities across all 47 counties with competitive benefits and growth potential.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Mombasa Road, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>careers@quicmart.co.ke</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Job Categories</h3>
            <ul className="space-y-2">
              {jobCategories.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {currentYear} QuicMart Supermarkets Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Proudly serving Kenya since 2015
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
