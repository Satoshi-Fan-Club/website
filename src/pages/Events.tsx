
import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const Events = () => {
  // Current date for filtering upcoming events
  const currentDate = new Date();
  
  const events = [
    {
      id: 1,
      title: "Web3 Chicago Meetup",
      description: "Monthly gathering of blockchain enthusiasts to discuss the latest developments in Web3.",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 10),
      time: "6:00 PM - 8:00 PM",
      location: "1871 Tech Hub, Merchandise Mart",
      type: "meetup",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 2,
      title: "DeFi Workshop: Yield Farming Strategies",
      description: "Learn about different yield farming strategies across multiple blockchain platforms.",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 15),
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event (Zoom)",
      type: "workshop",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 3,
      title: "Chicago Blockchain Week",
      description: "A week-long series of events focusing on blockchain innovation in Chicago.",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 5),
      time: "Various Times",
      location: "Multiple Locations Across Chicago",
      type: "conference",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 4,
      title: "Smart Contract Security Hackathon",
      description: "48-hour hackathon focused on building secure smart contracts and finding vulnerabilities.",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 25),
      time: "10:00 AM - 10:00 AM (48 hours)",
      location: "mHUB Chicago, 965 W Chicago Ave",
      type: "hackathon",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 5,
      title: "Intro to NFTs and Digital Art",
      description: "Beginner-friendly workshop on NFTs, digital art, and the NFT marketplace ecosystem.",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 5),
      time: "6:30 PM - 8:30 PM",
      location: "Harold Washington Library, 400 S State St",
      type: "workshop",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 6,
      title: "Chicago Crypto Trading Panel",
      description: "Industry experts discuss cryptocurrency trading strategies and market analysis.",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 18),
      time: "5:00 PM - 7:00 PM",
      location: "Chicago Board of Trade Building",
      type: "panel",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 7,
      title: "Blockchain Developer Bootcamp",
      description: "Intensive weekend bootcamp for developers looking to enter the blockchain space.",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 15),
      time: "9:00 AM - 5:00 PM (Sat & Sun)",
      location: "University of Chicago, Hyde Park Campus",
      type: "workshop",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 8,
      title: "Web3 Networking Mixer",
      description: "Casual networking event for Web3 professionals, entrepreneurs, and enthusiasts.",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 5),
      time: "7:00 PM - 10:00 PM",
      location: "Fulton Market Kitchen, 311 N Sangamon St",
      type: "networking",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 9,
      title: "CrossChain Interoperability Forum",
      description: "Technical discussions on cross-chain protocols and interoperability solutions.",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 10),
      time: "1:00 PM - 4:30 PM",
      location: "Illinois Institute of Technology",
      type: "forum",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 10,
      title: "Blockchain for Enterprise Summit",
      description: "Conference focusing on enterprise applications of blockchain technology.",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 8),
      time: "8:30 AM - 5:00 PM",
      location: "Navy Pier, Grand Ballroom",
      type: "conference",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=400"
    }
  ];

  const pastEvents = events.filter(event => event.date < currentDate);
  const upcomingEvents = events.filter(event => event.date >= currentDate);
  
  // Format date function
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Get badge color based on event type
  const getBadgeColor = (type) => {
    switch (type) {
      case 'meetup':
        return 'bg-blue-500';
      case 'workshop':
        return 'bg-green-500';
      case 'conference':
        return 'bg-purple-500';
      case 'hackathon':
        return 'bg-red-500';
      case 'networking':
        return 'bg-yellow-500';
      case 'panel':
        return 'bg-indigo-500';
      case 'forum':
        return 'bg-teal-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  const [filter, setFilter] = useState('all');
  
  const filteredUpcomingEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === filter);
    
  const filteredPastEvents = filter === 'all' 
    ? pastEvents 
    : pastEvents.filter(event => event.type === filter);

  const eventTypes = [
    { id: 'all', label: 'All Events' },
    { id: 'meetup', label: 'Meetups' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'conference', label: 'Conferences' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'networking', label: 'Networking' }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Events" 
        subtitle="Connect with the Chicago blockchain community through our events"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Next Blockchain Event</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to learn, network, or collaborate, our events bring together the best of Chicago's Web3 community.
            </p>
          </div>
          
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="upcoming" className="px-8">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past" className="px-8">Past Events</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-center flex-wrap gap-2">
                {eventTypes.map((type) => (
                  <Badge 
                    key={type.id}
                    className={`cursor-pointer ${filter === type.id ? 'bg-satoshi-orange hover:bg-orange-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => setFilter(type.id)}
                  >
                    {type.label}
                  </Badge>
                ))}
              </div>
            </div>
            
            <TabsContent value="upcoming">
              {filteredUpcomingEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredUpcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className={getBadgeColor(event.type)}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-satoshi-orange" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-satoshi-orange" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-satoshi-orange" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <a 
                            href={`/event/${event.id}`} 
                            className="bg-satoshi-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors inline-block"
                          >
                            Event Details
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No upcoming events match your filter. Try selecting a different category.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              {filteredPastEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPastEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg">{event.title}</h3>
                          <Badge className={getBadgeColor(event.type)}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2 text-sm mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-satoshi-orange" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-satoshi-orange" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <a 
                          href={`/event/${event.id}`} 
                          className="text-satoshi-orange hover:underline"
                        >
                          View Recap
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No past events match your filter. Try selecting a different category.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-satoshi-orange text-white px-3 py-1 rounded-md text-sm font-medium mb-4">Featured Event</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Chicago Blockchain Week</h2>
              <p className="text-gray-300 mb-6">
                Join us for Chicago's biggest blockchain event of the year! A week-long celebration of blockchain technology with keynotes, panels, workshops, and networking opportunities across the city.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-satoshi-orange" />
                  <span>{formatDate(events.find(e => e.title === "Chicago Blockchain Week").date)}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-satoshi-orange" />
                  <span>Multiple Locations Across Chicago</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-satoshi-orange" />
                  <span>Expected Attendance: 1000+</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/event/3" 
                  className="bg-satoshi-orange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors inline-block"
                >
                  Learn More
                </a>
                <a 
                  href="https://chicagoblockchainweek.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors inline-block"
                >
                  Register Now
                </a>
              </div>
            </div>
            <div className="order-first md:order-last">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800"
                  alt="Chicago Blockchain Week" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Host an Event Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
                <h3 className="text-xl font-semibold mb-4">Event Venues</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-satoshi-orange mt-1" />
                    <div>
                      <h4 className="font-medium">1871 Tech Hub</h4>
                      <p className="text-sm text-gray-600">222 W Merchandise Mart Plaza #1212</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-satoshi-orange mt-1" />
                    <div>
                      <h4 className="font-medium">mHUB Chicago</h4>
                      <p className="text-sm text-gray-600">965 W Chicago Avenue</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-satoshi-orange mt-1" />
                    <div>
                      <h4 className="font-medium">University Venues</h4>
                      <p className="text-sm text-gray-600">UChicago, IIT, DePaul, Northwestern</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-satoshi-orange mt-1" />
                    <div>
                      <h4 className="font-medium">Harold Washington Library</h4>
                      <p className="text-sm text-gray-600">400 S State Street</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Host an Event with Us</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Satoshi Fan Club collaborates with individuals, companies, and organizations to host blockchain events throughout Chicago. If you're interested in hosting an event, we can help with venue selection, promotion, speaker connections, and more.
                </p>
                <p className="mb-6">
                  Our community members are engaged and enthusiastic about blockchain technology, making them the perfect audience for your Web3-focused event.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Access to our network of venues and partners</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Promotion to our community of blockchain enthusiasts</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Assistance with speaker and sponsor connections</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Event planning and logistics support</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="mailto:events@satoshifanclub.org" 
                  className="bg-satoshi-orange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors inline-block"
                >
                  Contact Events Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calendar Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Up to Date</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Never miss an event with our community calendar. Subscribe to receive notifications about upcoming blockchain events in Chicago.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="https://calendar.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zM11 7v5.414l3.293 3.293 1.414-1.414L13 11.586V7h-2z" />
              </svg>
              <span>Google Calendar</span>
            </a>
            <a 
              href="https://calendar.yahoo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-satoshi-orange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span>Subscribe to Events</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
