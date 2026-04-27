import { useEffect } from 'react'
import JobListings from '@/components/JobListings'
import { Briefcase } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Jobs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">All Job Openings</h1>
              <p className="text-gray-600 mt-1">
                Browse all available positions at QuicMart across Kenya
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="outline" className="text-sm">
              Full-time
            </Badge>
            <Badge variant="outline" className="text-sm">
              Part-time
            </Badge>
            <Badge variant="outline" className="text-sm">
              Contract
            </Badge>
            <Badge variant="outline" className="text-sm">
              All 47 Counties
            </Badge>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <JobListings showViewAll={false} />
    </div>
  )
}

export default Jobs
