import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Store, Award, TrendingUp } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#16a34a;stop-opacity:0.95" />
                    <stop offset="50%" style="stop-color:#15803d;stop-opacity:0.9" />
                    <stop offset="100%" style="stop-color:#166534;stop-opacity:0.95" />
                  </linearGradient>
                </defs>
                <rect width="1920" height="1080" fill="url(%23grad1)"/>
                <g opacity="0.1">
                  <circle cx="200" cy="200" r="150" fill="white"/>
                  <circle cx="1700" cy="800" r="200" fill="white"/>
                  <circle cx="500" cy="900" r="100" fill="white"/>
                </g>
                <g opacity="0.05" fill="white">
                  <rect x="100" y="100" width="60" height="60" rx="10"/>
                  <rect x="200" y="150" width="80" height="80" rx="10"/>
                  <rect x="1600" y="200" width="100" height="100" rx="10"/>
                  <rect x="1500" y="600" width="70" height="70" rx="10"/>
                  <rect x="300" y="700" width="90" height="90" rx="10"/>
                </g>
              </svg>
            `)}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-green-900/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Now Hiring: 500+ Positions Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Career With{' '}
              <span className="text-green-300">QuicMart</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl">
              Join Kenya&apos;s fastest-growing supermarket chain. We&apos;re hiring across all 
              47 counties for cashier, store keeper, driver, and supervisor positions. 
              Competitive salaries and career growth opportunities await.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply">
                <Button 
                  size="lg" 
                  className="bg-white text-green-800 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all text-base px-8"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/jobs">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-base px-8"
                >
                  View Openings
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-2 mb-1">
                  <Store className="w-5 h-5 text-green-300" />
                  <span className="text-2xl sm:text-3xl font-bold">50+</span>
                </div>
                <p className="text-sm text-white/70">Stores Nationwide</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-2 mb-1">
                  <Users className="w-5 h-5 text-green-300" />
                  <span className="text-2xl sm:text-3xl font-bold">2,000+</span>
                </div>
                <p className="text-sm text-white/70">Team Members</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-2 mb-1">
                  <Award className="w-5 h-5 text-green-300" />
                  <span className="text-2xl sm:text-3xl font-bold">10+</span>
                </div>
                <p className="text-sm text-white/70">Years of Excellence</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-2 mb-1">
                  <TrendingUp className="w-5 h-5 text-green-300" />
                  <span className="text-2xl sm:text-3xl font-bold">47</span>
                </div>
                <p className="text-sm text-white/70">Counties Covered</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main decorative element */}
              <div className="w-96 h-96 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <Store className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">QuicMart Careers</p>
                      <p className="text-sm text-white/70">Join Our Team</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-sm text-white/80 mb-2">Available Positions</p>
                      <div className="flex flex-wrap gap-2">
                        {['Cashier', 'Driver', 'Supervisor', 'Warehouse'].map((role) => (
                          <span 
                            key={role}
                            className="px-3 py-1 bg-green-500/30 rounded-full text-xs text-white"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-sm text-white/80 mb-2">Salary Range</p>
                      <p className="text-2xl font-bold text-white">KSh 18,000 - 65,000</p>
                      <p className="text-xs text-white/60">Monthly + Benefits</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-white/70">+500 hired this month</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
