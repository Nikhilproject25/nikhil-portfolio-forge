
import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Education = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-8">Education & Certifications</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-xl text-white">Education</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Master of Science, Computer Science</h3>
                <p className="text-blue-400 font-medium">University of Dayton</p>
                <p className="text-gray-400">Graduated: December 2022</p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="text-gray-300 text-sm">
                  Focused on advanced software engineering, distributed systems, 
                  and cloud computing technologies. Completed coursework in algorithms, 
                  data structures, and modern software development practices.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-xl text-white">Certifications</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white">Microsoft Certified: Azure Data Engineer</h3>
                <p className="text-purple-400 font-medium">Microsoft</p>
                <p className="text-gray-400 text-sm mt-2">
                  Validates expertise in designing and implementing data solutions 
                  on Microsoft Azure, including data storage, processing, and security.
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2">Additional Training</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• AWS Solutions Architect (In Progress)</li>
                  <li>• Kubernetes Certified Application Developer (CKAD)</li>
                  <li>• Spring Professional Certification</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
