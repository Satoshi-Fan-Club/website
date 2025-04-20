import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SatoshiButton from '@/components/SatoshiButton';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Book, Users, Globe, Building, MessageSquare } from 'lucide-react';

const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="bg-yellow-300 text-black py-16 md:py-24 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:pr-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Chicago's Blockchain Agnostic Community
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Educating, Connecting, and Supporting the Web3 Ecosystem in Chicago Since 2019
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <SatoshiButton>Learn More</SatoshiButton>
                </Link>
                <Link to="/events">
                  <SatoshiButton variant="outline" className="bg-transparent border border-white hover:bg-white hover:text-black">
                    Upcoming Events
                  </SatoshiButton>
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end bg-yellow-300">
              <img src="/lovable-uploads/b4f96609-8374-406d-ad98-acb5490d6078.png" alt="Satoshi Fan Club Logo" className="max-w-xs md:max-w-sm" />
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10 bg-red-600">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-satoshi-orange blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-satoshi-orange blur-3xl"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Chains Welcome</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're a blockchain agnostic community focused on education, collaboration, and growth in the Web3 space. 
              Whether you're a blockchain veteran or just getting started, you'll find a home at Satoshi Fan Club.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-100 p-3 rounded-full mb-4">
                    <Users className="h-8 w-8 text-satoshi-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-gray-600">
                    Join a diverse group of blockchain enthusiasts, developers, and entrepreneurs.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-100 p-3 rounded-full mb-4">
                    <Book className="h-8 w-8 text-satoshi-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-600">
                    Access resources, workshops, and mentorship to deepen your blockchain knowledge.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-100 p-3 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-satoshi-orange" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Stay at the forefront of blockchain technology and Web3 innovations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about">
              <SatoshiButton>About Our Mission</SatoshiButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer various programs to support our community members at every stage of their Web3 journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Users className="h-16 w-16 text-satoshi-orange" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Micro Mentorship</h3>
                <p className="text-gray-600 mb-4">
                  Our 1-month mentorship program pairs you with experienced professionals in the blockchain space to accelerate your learning and growth.
                </p>
                <Link to="/mentorship">
                  <SatoshiButton>Learn More</SatoshiButton>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Calendar className="h-16 w-16 text-satoshi-orange" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Events & Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Regular meetups, workshops, and conferences to network, learn, and stay updated on the latest blockchain developments.
                </p>
                <Link to="/events">
                  <SatoshiButton>View Events</SatoshiButton>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources & Companies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources & Partnerships</h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide comprehensive resources for blockchain education and connect you with leading Web3 companies in Chicago.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <Book className="h-6 w-6 text-satoshi-orange mr-3 mt-0.5" />
                  <span>Curated learning resources for all skill levels</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-6 w-6 text-satoshi-orange mr-3 mt-0.5" />
                  <span>Network of Chicago's top Web3 service providers</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-satoshi-orange mr-3 mt-0.5" />
                  <span>Active community for questions and collaboration</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link to="/resources">
                  <SatoshiButton>Explore Resources</SatoshiButton>
                </Link>
                <Link to="/companies">
                  <SatoshiButton variant="outline" className="bg-transparent border border-black text-black hover:bg-black hover:text-white">
                    View Companies
                  </SatoshiButton>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="bg-gray-900 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="mb-6">
                  Connect with blockchain enthusiasts, developers, and entrepreneurs in Chicago. Share knowledge, find opportunities, and grow together.
                </p>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-satoshi-orange text-white rounded-md hover:bg-orange-600 transition-colors">
                  <span>Join Discord</span>
                  <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-satoshi-orange py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Satoshi Fan Club?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're just getting started or you're a blockchain veteran, we welcome you to our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about">
              <SatoshiButton className="bg-white text-satoshi-orange hover:bg-gray-100">
                Learn About Us
              </SatoshiButton>
            </Link>
            <Link to="/events">
              <SatoshiButton className="bg-black text-white hover:bg-gray-900">
                Join an Event
              </SatoshiButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;
