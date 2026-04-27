import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  ChevronRight, 
  Briefcase,
  Search,
  Filter
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { jobs } from '@/lib/jobs'

const JobListings = ({ limit = null, showViewAll = true }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Positions' },
    { id: 'cashier', label: 'Cashier' },
    { id: 'driver', label: 'Driver' },
    { id: 'warehouse', label: 'Warehouse' },
    { id: 'supervisor', label: 'Supervisor' },
    { id: 'cleaner', label: 'Cleaner' },
    { id: 'security', label: 'Security' },
  ]

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || job.id === selectedCategory
    return matchesSearch && matchesCategory
  })

  const displayJobs = limit ? filteredJobs.slice(0, limit) : filteredJobs

  return (
    <section id="jobs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Current Openings
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Career Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect role that matches your skills and career aspirations. 
              We&apos;re hiring across Kenya for various positions.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by job title or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-green-600" />
                    </div>
                    <Badge variant="secondary" className="bg-green-50 text-green-700">
                      {job.type.split('/')[0]}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {job.department}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-3">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {job.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-green-600" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2 text-green-600" />
                      <span className="font-medium text-green-700">{job.salary}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4">
                  <Link to={`/apply/${job.id}`} className="w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Apply Now
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {displayJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
          </div>
        )}

        {/* View All Button */}
        {showViewAll && limit && filteredJobs.length > limit && (
          <div className="text-center mt-12">
            <Link to="/jobs">
              <Button size="lg" variant="outline" className="border-green-600 text-green-700">
                View All {filteredJobs.length} Positions
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default JobListings
