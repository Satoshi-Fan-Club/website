
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const boardMembers = [
    {
      name: "Jane Smith",
      role: "President",
      bio: "Blockchain technology advocate with over 10 years of experience in the financial industry.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Michael Johnson",
      role: "Vice President",
      bio: "Ethereum developer and community builder, passionate about decentralized finance.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Sarah Williams",
      role: "Treasurer",
      bio: "Financial advisor specializing in cryptocurrency investments and blockchain adoption.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "David Chen",
      role: "Secretary",
      bio: "Tech entrepreneur with multiple successful Web3 startups in the Chicago area.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400&h=400"
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="About Satoshi Fan Club" 
        subtitle="A blockchain agnostic community in Chicago since 2019"
      />

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Founded in 2019, the Satoshi Fan Club began as a small group of blockchain enthusiasts meeting at a local Chicago coffee shop. What started as informal discussions about Bitcoin and other cryptocurrencies quickly evolved into a structured community dedicated to blockchain education and adoption.
                </p>
                <p className="mb-4">
                  As interest in blockchain technology grew throughout Chicago, so did our community. We remained committed to being blockchain agnostic, recognizing that the future of Web3 would be multichain and interconnected. This inclusive approach helped us attract members from various backgrounds and with diverse interests in the blockchain space.
                </p>
                <p>
                  Today, the Satoshi Fan Club stands as one of Chicago's leading blockchain communities, hosting regular events, providing educational resources, and connecting enthusiasts, developers, and entrepreneurs throughout the city's growing Web3 ecosystem.
                </p>
              </div>
            </div>
            <div className="order-first md:order-last">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
                <img 
                  src="/lovable-uploads/b4f96609-8374-406d-ad98-acb5490d6078.png"
                  alt="Satoshi Fan Club Logo" 
                  className="absolute inset-0 object-contain p-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to building a thriving blockchain ecosystem in Chicago through education, collaboration, and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-4 text-satoshi-orange">Education</h3>
                  <p className="text-gray-600">
                    We believe in making blockchain knowledge accessible to everyone, regardless of their technical background. Through our resources, workshops, and mentorship programs, we aim to empower individuals to understand and participate in the Web3 revolution.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-4 text-satoshi-orange">Neutrality</h3>
                  <p className="text-gray-600">
                    As a blockchain agnostic community, we don't favor any single platform or technology. We recognize the value in diverse approaches and encourage exploration of the entire blockchain ecosystem, from Bitcoin to the latest innovations.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-4 text-satoshi-orange">Community</h3>
                  <p className="text-gray-600">
                    We foster an inclusive, collaborative environment where members can share ideas, build relationships, and grow together. Our strength lies in our diverse community of enthusiasts, developers, and entrepreneurs united by a passion for blockchain technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Board Members</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who lead the Satoshi Fan Club and drive our mission forward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-satoshi-orange font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Community Values Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Community Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Inclusivity</h3>
                    <p className="text-gray-300">We welcome members from all backgrounds, skill levels, and interests in the blockchain space.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Collaboration</h3>
                    <p className="text-gray-300">We believe in working together to solve problems and advance blockchain adoption.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Innovation</h3>
                    <p className="text-gray-300">We encourage experimentation and forward-thinking approaches to blockchain technology.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-gray-300">We're committed to continuous learning and sharing knowledge with our community.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-first md:order-last flex justify-center">
              <div className="max-w-md p-8 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-satoshi-orange">All Chains Welcome</h3>
                <p className="mb-6 text-gray-100">
                  At Satoshi Fan Club, we embrace the diversity of blockchain technologies and believe in a multichain future. Our community brings together enthusiasts from across the ecosystem—Bitcoin, Ethereum, Solana, Polkadot, and beyond.
                </p>
                <p className="text-gray-100">
                  No matter which blockchain technology interests you, you'll find support, resources, and like-minded individuals in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
