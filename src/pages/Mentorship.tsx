
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SatoshiButton from '@/components/SatoshiButton';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Mentorship = () => {
  const faqs = [
    {
      question: "How long is the mentorship program?",
      answer: "Our micro-mentorship program runs for exactly one month, providing focused guidance on specific blockchain topics."
    },
    {
      question: "Who can apply to be a mentee?",
      answer: "Anyone interested in learning about blockchain technology can apply. We welcome participants of all skill levels, from beginners to those looking to deepen their expertise in specific areas."
    },
    {
      question: "What is expected of mentees?",
      answer: "Mentees are expected to commit 2-4 hours per week to the program, including meetings with their mentor and independent work. They should come prepared to meetings, actively participate, and follow through on any suggested resources or exercises."
    },
    {
      question: "How are mentors selected?",
      answer: "Our mentors are experienced professionals in the blockchain and Web3 space who volunteer their time. They go through an application process and are vetted by our board members to ensure they can provide valuable guidance."
    },
    {
      question: "Is there a cost to participate?",
      answer: "The mentorship program is offered free of charge to Satoshi Fan Club community members. However, spots are limited and applicants are selected based on their motivation and fit with available mentors."
    },
    {
      question: "Can I request a specific mentor?",
      answer: "While we cannot guarantee specific mentor assignments, you can indicate your preferences and areas of interest in the application, and we'll do our best to match you appropriately."
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Micro Mentorship Program"
        subtitle="One-month focused mentorship to accelerate your blockchain journey"
      />

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to get matched with a mentor and start learning.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-satoshi-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Apply</h3>
              <p className="text-gray-600">
                Fill out our application form sharing your background, interests, and goals for the mentorship.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-satoshi-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Match</h3>
              <p className="text-gray-600">
                We'll review your application and match you with a mentor based on your interests and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-satoshi-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">
                Meet with your mentor to establish goals, expectations, and a schedule for your month together.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-satoshi-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Learn</h3>
              <p className="text-gray-600">
                Engage in weekly sessions and follow your personalized learning plan for the month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Expectations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What to Expect</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Program Duration</h3>
                  <p className="text-gray-600">
                    The mentorship lasts exactly one month, with a clear start and end date. This focused timeframe ensures both mentors and mentees can fully commit to the program.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Meeting Frequency</h3>
                  <p className="text-gray-600">
                    You'll meet with your mentor once per week, typically for 30-60 minutes, either virtually or in-person if both parties are in Chicago.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Structured Learning</h3>
                  <p className="text-gray-600">
                    Your mentor will help you establish clear goals for the month and provide guidance, resources, and feedback to help you achieve them.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                  <p className="text-gray-600">
                    In addition to one-on-one mentorship, you'll have access to our community Discord where you can ask questions and connect with other mentees.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Mentee Expectations</h2>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Be Prepared:</span> Come to meetings having done any agreed-upon work and with questions ready.
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Be Punctual:</span> Respect your mentor's time by arriving to meetings promptly and communicating any scheduling issues in advance.
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Be Engaged:</span> Actively participate in discussions, ask questions, and follow through on suggestions and resources provided by your mentor.
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Be Respectful:</span> Value the guidance and expertise of your mentor, even if you have different perspectives.
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="bg-satoshi-orange rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Be Committed:</span> Dedicate 2-4 hours per week to the program, including meetings and independent work.
                  </p>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-gray-900 text-white rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Ready to Apply?</h3>
                <p className="mb-4">
                  Applications for our next cohort are now open. Click the button below to fill out our JotForm application.
                </p>
                <a
                  href="https://www.jotform.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-satoshi-orange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our micro mentorship program.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-satoshi-orange text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Your Blockchain Journey to the Next Level</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our micro mentorship program and get personalized guidance from experienced professionals in the blockchain space.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.jotform.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-satoshi-orange px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors"
            >
              Apply for Mentorship
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mentorship;
