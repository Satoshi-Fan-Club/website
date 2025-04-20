
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
      name: "BlockChicago",
      description: "Blockchain development studio focusing on enterprise solutions.",
      url: "https://www.blockchicago.com",
      category: "development",
      location: "River North"
    },
    {
      name: "CryptoWindy",
      description: "Digital asset trading platform with advanced tools for traders.",
      url: "https://www.cryptowindy.com",
      category: "exchange",
      location: "Loop"
    },
    {
      name: "ChiTown Chain",
      description: "Blockchain infrastructure provider for businesses and developers.",
      url: "https://www.chitownchain.io",
      category: "infrastructure",
      location: "West Loop"
    },
    {
      name: "Lake Michigan NFT",
      description: "Marketplace for digital art and collectibles on multiple chains.",
      url: "https://www.lakemichigannft.com",
      category: "nft",
      location: "South Loop"
    },
    {
      name: "Midwest DeFi",
      description: "Decentralized finance protocols built for accessibility and security.",
      url: "https://www.midwestdefi.finance",
      category: "defi",
      location: "Loop"
    },
    {
      name: "ChiDAO",
      description: "Decentralized autonomous organization supporting Chicago's blockchain projects.",
      url: "https://www.chidao.org",
      category: "dao",
      location: "West Loop"
    },
    {
      name: "Windy City Wallet",
      description: "Multi-chain crypto wallet with enhanced security features.",
      url: "https://www.windycitywallet.com",
      category: "wallet",
      location: "River North"
    },
    {
      name: "Chi-Block Analytics",
      description: "Blockchain data analytics and business intelligence services.",
      url: "https://www.chiblockanalytics.com",
      category: "analytics",
      location: "Loop"
    },
    {
      name: "Second City Chain",
      description: "Layer 2 scaling solutions for Ethereum and other major blockchains.",
      url: "https://www.secondcitychain.tech",
      category: "infrastructure",
      location: "West Loop"
    },
    {
      name: "Illinois Web3 Labs",
      description: "Research and development lab for cutting-edge blockchain applications.",
      url: "https://www.illinoisweb3labs.io",
      category: "research",
      location: "University Village"
    },
    {
      name: "Chicago Crypto Consulting",
      description: "Advisory services for businesses entering the blockchain space.",
      url: "https://www.chicagocryptoconsulting.com",
      category: "consulting",
      location: "Loop"
    },
    {
      name: "Lake Shore Smart Contracts",
      description: "Smart contract development and auditing services.",
      url: "https://www.lakeshoresmartcontracts.dev",
      category: "development",
      location: "South Loop"
    },
  ];

  const categories = [
    { id: 'all', label: 'All Companies' },
    { id: 'development', label: 'Development' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'defi', label: 'DeFi' },
    { id: 'nft', label: 'NFTs' },
    { id: 'consulting', label: 'Consulting' }
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
              <h2 className="text-2xl font-bold">Supported Companies</h2>
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
                    <Card key={index} className="hover:shadow-md transition-shadow h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg">{company.name}</h3>
                          <span className="bg-gray-100 text-xs text-gray-600 px-2 py-1 rounded-full">
                            {company.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">{company.description}</p>
                        <div className="flex flex-wrap items-center justify-between mt-2">
                          <div className="flex items-center text-xs text-gray-500">
                            <Building className="h-3 w-3 mr-1" />
                            <span>{company.location}</span>
                          </div>
                          <a 
                            href={company.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-satoshi-orange hover:underline"
                          >
                            <span>Website</span>
                            <Link className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {filterCompanies(companies, searchTerm, category.id).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No companies found matching your search criteria.</p>
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
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Chicago Areas</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-satoshi-orange">The Loop</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Chicago's central business district is home to many financial and enterprise blockchain companies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {companies
                        .filter(company => company.location === 'Loop')
                        .map((company, index) => (
                          <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {company.name}
                          </span>
                        ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-satoshi-orange">West Loop</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      A tech hub with many startups and innovation centers focused on blockchain.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {companies
                        .filter(company => company.location === 'West Loop')
                        .map((company, index) => (
                          <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {company.name}
                          </span>
                        ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-satoshi-orange">River North</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Known for its creative agencies and tech companies expanding into blockchain.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {companies
                        .filter(company => company.location === 'River North')
                        .map((company, index) => (
                          <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {company.name}
                          </span>
                        ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-satoshi-orange">South Loop</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Close to universities and research institutions with a focus on blockchain innovation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {companies
                        .filter(company => company.location === 'South Loop')
                        .map((company, index) => (
                          <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {company.name}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
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
