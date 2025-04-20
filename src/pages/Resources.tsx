
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Book, Globe, Link as LinkIcon } from 'lucide-react';

const Resources = () => {
  const blockchainResources = [
    {
      title: "Bitcoin Whitepaper",
      description: "The original whitepaper by Satoshi Nakamoto that started it all.",
      url: "https://bitcoin.org/bitcoin.pdf",
      category: "fundamentals"
    },
    {
      title: "Ethereum Documentation",
      description: "Comprehensive documentation for developers building on Ethereum.",
      url: "https://ethereum.org/developers",
      category: "fundamentals"
    },
    {
      title: "Web3 University",
      description: "Free educational resources for Web3 developers.",
      url: "https://www.web3.university/",
      category: "learning"
    },
    {
      title: "Crypto Zombies",
      description: "Learn to code blockchain DApps by building simple games.",
      url: "https://cryptozombies.io/",
      category: "learning"
    },
    {
      title: "DeFi Pulse",
      description: "Track metrics and rankings for DeFi protocols.",
      url: "https://defipulse.com/",
      category: "tools"
    },
    {
      title: "Etherscan",
      description: "Ethereum blockchain explorer for analytics and data.",
      url: "https://etherscan.io/",
      category: "tools"
    },
    {
      title: "Blockchain at Berkeley",
      description: "Educational resources from UC Berkeley's blockchain organization.",
      url: "https://blockchain.berkeley.edu/",
      category: "learning"
    },
    {
      title: "Solidity Documentation",
      description: "Official documentation for the Solidity programming language.",
      url: "https://docs.soliditylang.org/",
      category: "fundamentals"
    },
    {
      title: "Metamask Docs",
      description: "Learn how to use the most popular Ethereum wallet.",
      url: "https://docs.metamask.io/",
      category: "tools"
    },
    {
      title: "The Graph",
      description: "Indexing protocol for querying blockchain data.",
      url: "https://thegraph.com/",
      category: "tools"
    },
    {
      title: "a16z Crypto Canon",
      description: "Curated list of crypto readings and resources.",
      url: "https://a16z.com/crypto-canon/",
      category: "learning"
    },
    {
      title: "Blockchain Demo",
      description: "Visual demonstration of blockchain technology concepts.",
      url: "https://andersbrownworth.com/blockchain/",
      category: "fundamentals"
    },
  ];

  const chicagoResources = [
    {
      title: "Chicago Blockchain Project",
      description: "Community-driven organization promoting blockchain innovation in Chicago.",
      url: "https://www.chicagoblockchainproject.com/",
      type: "organization"
    },
    {
      title: "DePaul Blockchain Lab",
      description: "Academic research and education on blockchain at DePaul University.",
      url: "https://blockchain.cdm.depaul.edu/",
      type: "education"
    },
    {
      title: "Chicago Blockchain Center",
      description: "Non-profit connecting blockchain enthusiasts and businesses in Chicago.",
      url: "https://www.chicagoblockchain.center/",
      type: "organization"
    },
    {
      title: "CME Group Bitcoin Futures",
      description: "Information on Bitcoin futures from Chicago's CME Group.",
      url: "https://www.cmegroup.com/markets/cryptocurrencies.html",
      type: "business"
    },
    {
      title: "Blockchain Developers United - Chicago",
      description: "Local meetup group for blockchain developers.",
      url: "https://www.meetup.com/",
      type: "community"
    },
    {
      title: "Illinois Blockchain Initiative",
      description: "State government exploration of blockchain applications.",
      url: "https://www2.illinois.gov/",
      type: "government"
    },
    {
      title: "FinTEx Chicago",
      description: "Financial technology community in Chicago with blockchain focus.",
      url: "https://fintex.org/",
      type: "organization"
    },
    {
      title: "Chicago Crypto Day",
      description: "Annual conference on cryptocurrency and blockchain in Chicago.",
      url: "https://www.chicagocryptoday.com/",
      type: "event"
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Resources" 
        subtitle="Educational materials and community resources for blockchain enthusiasts"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="blockchain" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="blockchain" className="px-6">Blockchain Resources</TabsTrigger>
                <TabsTrigger value="chicago" className="px-6">Chicago Web3 Community</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="blockchain">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Blockchain Learning Resources</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Explore our curated collection of resources to learn about blockchain technology, cryptocurrencies, and Web3 development.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blockchainResources.map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <div className="mr-4 mt-1">
                              <Book className="h-6 w-6 text-satoshi-orange" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                              <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                              <a 
                                href={resource.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center text-satoshi-orange hover:underline"
                              >
                                <span>Visit Resource</span>
                                <LinkIcon className="ml-1 h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6">Resource Categories</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Blockchain Fundamentals</h3>
                        <p className="text-gray-600 mb-4">
                          Core resources to understand the basic concepts and technology behind blockchain systems.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          {blockchainResources
                            .filter(r => r.category === 'fundamentals')
                            .map((resource, index) => (
                              <li key={index}>
                                <a 
                                  href={resource.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-satoshi-orange hover:underline"
                                >
                                  {resource.title}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Learning Platforms</h3>
                        <p className="text-gray-600 mb-4">
                          Interactive courses and educational content to develop your blockchain skills.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          {blockchainResources
                            .filter(r => r.category === 'learning')
                            .map((resource, index) => (
                              <li key={index}>
                                <a 
                                  href={resource.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-satoshi-orange hover:underline"
                                >
                                  {resource.title}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Development Tools</h3>
                        <p className="text-gray-600 mb-4">
                          Tools and utilities for building and analyzing blockchain applications.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          {blockchainResources
                            .filter(r => r.category === 'tools')
                            .map((resource, index) => (
                              <li key={index}>
                                <a 
                                  href={resource.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-satoshi-orange hover:underline"
                                >
                                  {resource.title}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Suggest a Resource</h2>
                  <p className="text-gray-600 mb-6">
                    Know of a great blockchain resource that's not listed here? Let us know and we'll consider adding it to our collection.
                  </p>
                  <Link to="/contact" className="text-satoshi-orange hover:underline inline-flex items-center">
                    <span>Contact Us</span>
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="chicago">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Chicago Web3 Community Resources</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Connect with blockchain organizations, events, and initiatives in the Chicago area.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {chicagoResources.map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <div className="mr-4 mt-1">
                              <Globe className="h-6 w-6 text-satoshi-orange" />
                            </div>
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-lg">{resource.title}</h3>
                                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                  {resource.type}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                              <a 
                                href={resource.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center text-satoshi-orange hover:underline"
                              >
                                <span>Visit Website</span>
                                <LinkIcon className="ml-1 h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-lg overflow-hidden">
                  <div className="p-8 md:p-10">
                    <h2 className="text-2xl font-bold mb-4">Chicago Web3 Map</h2>
                    <p className="text-gray-300 mb-6">
                      Chicago is home to a vibrant blockchain ecosystem spanning startups, enterprises, research institutions, and community organizations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-satoshi-orange mb-3">Key Areas</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-satoshi-orange rounded-full mr-2"></span>
                            <span>Chicago Loop - Financial District</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-satoshi-orange rounded-full mr-2"></span>
                            <span>River North - Startup Hub</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-satoshi-orange rounded-full mr-2"></span>
                            <span>West Loop - Tech Innovation</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-satoshi-orange rounded-full mr-2"></span>
                            <span>South Loop - Educational Institutions</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-satoshi-orange mb-3">Popular Venues</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-satoshi-orange rounded-full mr-2"></span>
                            <span>1871 - Chicago's Tech Hub</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-satoshi-orange rounded-full mr-2"></span>
                            <span>mHUB - Innovation Center</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-satoshi-orange rounded-full mr-2"></span>
                            <span>University Tech Centers</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-satoshi-orange rounded-full mr-2"></span>
                            <span>Chicago Blockchain Center</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6">Community Engagement</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Meetups</h3>
                        <p className="text-gray-600 mb-4">
                          Regular gatherings of blockchain enthusiasts in Chicago, from technical discussions to networking events.
                        </p>
                        <Link to="/events" className="text-satoshi-orange hover:underline inline-flex items-center">
                          <span>View Upcoming Meetups</span>
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Hackathons</h3>
                        <p className="text-gray-600 mb-4">
                          Competitive events where developers collaborate to build blockchain solutions in a limited timeframe.
                        </p>
                        <Link to="/events" className="text-satoshi-orange hover:underline inline-flex items-center">
                          <span>Find Hackathons</span>
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Job Board</h3>
                        <p className="text-gray-600 mb-4">
                          Opportunities in blockchain and Web3 at Chicago companies and remote positions.
                        </p>
                        <a 
                          href="https://www.web3.career/chicago-web3-jobs" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-satoshi-orange hover:underline inline-flex items-center"
                        >
                          <span>Browse Opportunities</span>
                          <LinkIcon className="ml-1 h-4 w-4" />
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
              <p className="text-gray-300 mb-6">
                Subscribe to receive updates on new resources, upcoming events, and blockchain trends directly in your inbox.
              </p>
              <form className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-satoshi-orange"
                    required 
                  />
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="bg-satoshi-orange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="order-first md:order-last">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Resource Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Weekly Educational Content</h4>
                      <p className="text-sm text-gray-400">Articles and guides on blockchain topics</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Event Announcements</h4>
                      <p className="text-sm text-gray-400">Be the first to know about upcoming events</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Exclusive Content</h4>
                      <p className="text-sm text-gray-400">Resources only available to subscribers</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
