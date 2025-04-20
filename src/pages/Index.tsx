import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import SatoshiButton from '@/components/SatoshiButton';
import { Card, CardContent } from '@/components/ui/card';
import {Calendar, Book, Users, Globe, Building, MessageSquare, Newspaper} from 'lucide-react';

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
              <p className="text-xl md:text-2xl text-gray-800">
                Educating and Supporting the Chicago Web3 Ecosystem
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <SatoshiButton>Learn More</SatoshiButton>
                </Link>
                <Link to="/events">
                  <SatoshiButton>Upcoming Events</SatoshiButton>
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end ">
              <img src="/lovable-uploads/b4f96609-8374-406d-ad98-acb5490d6078.png" alt="Satoshi Fan Club Logo" className="max-w-xs md:max-w-sm" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden opacity-10 bg-red-600">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-satoshi-orange blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-satoshi-orange blur-3xl"></div>
        </div>
      </section>

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
                  <SatoshiButton>Get Mentored</SatoshiButton>
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
                  Regular meetups, workshops, and panels to network, learn, and stay updated on the latest blockchain developments.
                </p>
                <Link to="/events">
                  <SatoshiButton>Meet Us</SatoshiButton>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Globe className="h-16 w-16 text-satoshi-orange" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Company Showcase</h3>
                <p className="text-gray-600 mb-4">
                  We support Chicago Web3 companies and projects by giving them a platform to showcase their work and connect with the community.
                </p>
                <Link to="/companies">
                  <SatoshiButton>Explore our Ecosystem</SatoshiButton>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Newspaper className="h-16 w-16 text-satoshi-orange" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Blog</h3>
                <p className="text-gray-600 mb-4">
                  We support Chicago Web3 companies and projects by giving them a platform to showcase their work and connect with the community.
                </p>
                <Link to="/companies">
                  <SatoshiButton>Read</SatoshiButton>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                  <span>Join ChaChing Social</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-satoshi-orange py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join the Satoshi Fan Club?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're just getting started or a DeGen, this is your community.
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
