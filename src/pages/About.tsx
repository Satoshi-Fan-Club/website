
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const boardMembers = [
    {
      name: "Mabel Oza",
      role: "Co-Founder",
      bio: "Founder of ChaChing Social, Blockchain professor at the University of Illinois at Chicago, and former blockchain engineer.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFf6tZT3PF5cw/profile-displayphoto-shrink_800_800/B56ZZRY4rWHQAc-/0/1745122201181?e=1750896000&v=beta&t=ehUKfzjXx7wpHo8wDHe1FiRsd07yhCM5FaHDnnuWYws"
    },
    {
      name: "Ann Marie Alanes",
      role: "Co-Founder",
      bio: "Ethereum developer and community builder, passionate about decentralized finance.",
      image: "https://media.licdn.com/dms/image/v2/C5603AQGlFbhSNUIyjg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1629784608286?e=2147483647&v=beta&t=_bOyaYSp3G5qvfp8JN0WLaoGFYtsuE_ATK0Tg6ReP2E"
    },
    {
      name: "Emily Landon",
      role: "Board Member",
      bio: "Financial advisor specializing in cryptocurrency investments and blockchain adoption.",
      image: "https://pbs.twimg.com/profile_images/1880079144794382336/IzWjvdLS_400x400.jpg"
    },
    {
      name: "Alex Nova",
      role: "Board Member",
      bio: "Tech entrepreneur with multiple successful Web3 startups in the Chicago area.",
      image: "https://pbs.twimg.com/profile_images/1507808450499137538/VmAGPjFC_400x400.jpg"
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="About Satoshi Fan Club"
        subtitle="Building and supporting the blockchain ecosystem in Chicago."
      />

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

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Ann Marie and Mabel fell into the rabbit hole of blockchain around 2015 in San Francisco through grassroot initiatives like Starfish Mission. They never knew each other in San Francisco and randomly connected at the Crypto Art field trip Ann Marie organized. Since then, they’ve been passionate about spreading blockchain education throughout Chicago.
                  </p>
                <p className="mb-4">
                  The organization comes from humble beginnings—we started out in a classroom at Douglas Hall at the University of Illinois at Chicago, promoting our very first events with campus flyers.
                </p>
                <p className="mb-4">
                  Since then we’ve moved around the city connecting with several web3 and technology initiatives and web3 leaders (including our current board members, Alex and Emily).
                </p>
                <p className="mb-4">
                  Our mission is to create a blockchain agnostic community in Chicago that welcomes everyone, regardless of their background or experience level. We believe that blockchain technology has the potential to transform industries and improve lives, and we want to be at the forefront of that change.
                </p>
              </div>
            </div>
            <div className="order-first md:order-last">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
                <img
                  src="/sfc-group.jpg"
                  alt="Satoshi Fan Club Group Picture"
                  className="absolute inset-0 object-contain p-12"
                />
              </div>
            </div>
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

export default About;
