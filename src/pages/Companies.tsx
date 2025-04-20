
import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Link, Globe, Building, Search } from 'lucide-react';

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const companies = [
    {
      name: "Crypto Recruiters",
      description: "Blockchain development studio focusing on enterprise solutions.",
      url: "https://thecryptorecruiters.io/",
      image: "https://media.licdn.com/dms/image/v2/D560BAQEffeW2sfdCRA/company-logo_200_200/company-logo_200_200/0/1729821542833/crypto_recruiters_logo?e=2147483647&v=beta&t=-dyRb_HZ8AU8MJoifZb5QHShmx-xjhHIjUDlF15OsEo",
      category: "recruitment",
      type: "service",
    },
    {
      name: "ChaChing Social",
      description: "Digital asset trading platform with advanced tools for traders.",
      url: "https://www.chaching.social",
      image: "https://www.chaching.social/logo.svg",
      category: "creator tech",
      type: "tech product",
    },
    {
      name: "Web3Weekends",
      description: "Blockchain infrastructure provider for businesses and developers.",
      url: "https://www.chaching.social/communities/web3weekends?id=pD0OV8aQHvTbSdLIfNvG",
      image: "https://avatars.githubusercontent.com/u/205381876?s=200&v=4",
      category: "education",
      type: "community",
    },
    {
      name: "Hopscotch Research",
      description: "Marketplace for digital art and collectibles on multiple chains.",
      url: "https://hopscotch.trade/",
      image: "https://zealy-webapp-images-prod.s3.eu-west-1.amazonaws.com/public/701558d3-63ff-41c2-88c6-96bfff777cf9-logo.png",
      category: "marketplace",
      type: "tech product",
    },
    {
      name: "Fishcakes",
      description: "Decentralized finance protocols built for accessibility and security.",
      url: "https://www.fishcake.org",
      image: "https://www.fishcake.org/_next/static/media/Logo.6ed14fc4.png",
      category: "nft",
      type: "tech product",
    },
    {
      name: "SkyLabs",
      description: "A sustainable community of humans passionate about building in Web3 where members connect through mentorship, education, co-creation, and co-investment.",
      url: "https://www.skylab.xyz/",
      image: "https://framerusercontent.com/modules/ii2OFXrepZTSFazcxfB1/50i7xoAHwFHcxapvfSZV/assets/1024/mfaNqxiGCnkgUjHvjEmfBOBqG8Q.png",
      category: "investment",
      type: "community",
    },
    {
      name: "Decasonic",
      description: "The venture and digital assets fund building blockchain innovation.",
      url: "https://www.decasonic.com/",
      image: "https://static.wixstatic.com/media/51577e_64b3c0cc438d47cb83d487b192e0c4b3~mv2_d_4000_2048_s_2.png/v1/fill/w_226,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/51577e_64b3c0cc438d47cb83d487b192e0c4b3~mv2_d_4000_2048_s_2.png",
      category: "investment",
      type: "investment",
    },
    {
      name: "CoinFlip",
      description: "BOur ecosystem includes the CoinFlip network of ATMs, which let users buy bitcoin and other cryptocurrencies with cash, the self-custodial CoinFlip Wallet app, and our over-the-counter ordering desk, CoinFlip Preferred.",
      url: "https://coinflip.tech/",
      image: "data:image/jpeg;base64,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",
      category: "custody",
      type: "custody",
    },
  ];

  const categories = [
    { id: 'all', label: 'All Companies' },
    { id: 'custody', label: 'Custody' },
    { id: 'investment', label: 'Investment' },
    { id: 'creator tech', label: 'Creator Tech' },
    { id: 'recruitment', label: 'Recruitment' },
    { id: 'education', label: 'Education' },
    { id: 'marketplace', label: 'Marketplace' },
  ];

  const filterCompanies = (companies, searchTerm, category) => {
    return companies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          company.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'all' || company.category === category;

      return matchesSearch && matchesCategory;
    });
  };

  return (
    <Layout>
      <PageHeader
        title="Chicago Web3 Companies"
        subtitle="Discover blockchain service providers and products in the Chicago area"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div className="mb-4 md:mb-0 md:mr-4">
              <h2 className="text-2xl font-bold">Chicago Web3 Companies</h2>
              <p className="text-gray-600">Explore Web3 businesses in the Chicago ecosystem</p>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search companies..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-8 flex flex-wrap">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterCompanies(companies, searchTerm, category.id).map((company, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                          <div className="aspect-square relative">
                            <img
                                src={company.image || '/placeholder-image.png'} // Fallback to a placeholder if no image is provided
                                alt={company.name}
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-1">{company.name}</h3>
                            <p className="text-gray-600 text-sm mb-3">{company.description}</p>
                            <a
                                href={company.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-satoshi-orange font-medium"
                            >
                              Visit Website
                            </a>
                          </CardContent>
                        </Card>
                    ))}
                  </div>

                  {filterCompanies(companies, searchTerm, category.id).length === 0 && (
                      <div className="text-center py-12">
                        <p className="text-gray-600">No companies found in this category.</p>
                      </div>
                  )}
                </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Company Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Chicago Web3 Ecosystem</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chicago has become a thriving hub for blockchain innovation with companies distributed across the city.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-12">

            <div>
              <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Industry Breakdown</h3>

                <div className="space-y-6">
                  {categories
                    .filter(category => category.id !== 'all')
                    .map((category, index) => {
                      const count = companies.filter(company => company.category === category.id).length;
                      const percentage = Math.round((count / companies.length) * 100);

                      return (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="capitalize">{category.label}</span>
                            <span className="text-sm">{count} companies</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2">
                            <div
                              className="bg-satoshi-orange h-2 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-2">Key Insights</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 bg-satoshi-orange rounded-full mr-2 mt-2"></span>
                      <span>Chicago shows strong growth in DeFi and infrastructure projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 bg-satoshi-orange rounded-full mr-2 mt-2"></span>
                      <span>Development services are concentrated in River North and West Loop</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1 h-1 bg-satoshi-orange rounded-full mr-2 mt-2"></span>
                      <span>The Loop remains strong for enterprise blockchain consulting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Satoshi Fan Club partners with Chicago Web3 companies to strengthen the local blockchain ecosystem.
              Join our network to connect with talent, access resources, and participate in community events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Co-Host Events</h3>
                <p className="text-gray-600 mb-4">
                  Partner with us to organize workshops, hackathons, and networking events that showcase your company and engage the community.
                </p>
                <a
                  href="mailto:partnerships@satoshifanclub.org"
                  className="text-satoshi-orange hover:underline inline-flex items-center"
                >
                  <span>Contact for Events</span>
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Mentorship Program</h3>
                <p className="text-gray-600 mb-4">
                  Have your team members serve as mentors in our micro mentorship program or sponsor mentee projects to identify talent.
                </p>
                <a
                  href="mailto:mentorship@satoshifanclub.org"
                  className="text-satoshi-orange hover:underline inline-flex items-center"
                >
                  <span>Join as Mentor</span>
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Resource Contributions</h3>
                <p className="text-gray-600 mb-4">
                  Share educational content, tools, or other resources with our community to help advance blockchain knowledge.
                </p>
                <a
                  href="mailto:resources@satoshifanclub.org"
                  className="text-satoshi-orange hover:underline inline-flex items-center"
                >
                  <span>Submit Resources</span>
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">List Your Company</h3>
                <p className="text-gray-600 mb-6">
                  If your Chicago-based company offers blockchain services or products and would like to be featured on this page, please get in touch with us. We're always looking to expand our network of supported companies.
                </p>
                <a
                  href="mailto:listings@satoshifanclub.org"
                  className="bg-satoshi-orange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors inline-block"
                >
                  Request Listing
                </a>
              </div>
              <div className="order-first md:order-last flex justify-center">
                <div className="w-full max-w-xs">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-3">Listing Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-satoshi-orange mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Chicago-based or with a significant Chicago presence</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-satoshi-orange mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Offers blockchain/Web3 products or services</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-satoshi-orange mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Has an operational website and contact information</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-satoshi-orange mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Aligns with our community values</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;
