import React from 'react';
import CardGrid from './Card';
import lawyer from './features/lawyer.png';
import donation from './features/donation.png';
import forum from './features/forum.png';
import documentImg from './features/document.png';
import lawFeatures from './features/LawFeatures.png';
import rights from './features/rights.png';
import Navbar from '../advonav';
import Footer from '@/footer';

// Assuming CardData type definition
type CardData = {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
};

type Props = {};

const Features1 = (props: Props) => {
  const cardsData: CardData[] = [
    {
      imageUrl: documentImg,
      title: "Document Drafting",
      url: "http://localhost:8000/",
      description:
        "Effortlessly generate precise and efficient legal documents, including contracts, agreements, and legal notices, with our advanced document drafting AI.",
    },
    {
      imageUrl: rights,
      title: "Know Your Rights",
      url: "/chatbot-lawbot",
      // 8001
      description:
        "Navigate the complexities of the legal landscape with our Know-Your-Rights framework. We simplify intricate laws into user-friendly insights, providing you with a legal compass for informed decision-making.",
    },
    {
      imageUrl: lawyer,
      title: "Client Connect",
      url: "/connect",
      description:
        "Connect with our users in real-time through Client Connect. Engage in conversations to seek advice and clarification on a wide range of legal issues with our interactive platform.",
    },
    {
      imageUrl: forum,
      title: "Communtiy Forums",
      url: "/community",
      description:
        "Immerse yourself in the Law Buddy Community, a digital sanctuary for legal enthusiasts and inquisitive minds alike. Engage in thought-provoking discussions, seek advice, and explore an abundance of legal resources within a supportive network.",
    },
    {
      imageUrl: donation,
      title: "Document Summary & QnA",
      url: "http://localhost:8002/",
      description:
        "Law Buddy leverages advanced artificial intelligence to provide comprehensive support for legal research, case management, and documentation. Whether youre a law student, or someone seeking legal guidance.",
    },
    {
      imageUrl: documentImg,
      title: "Narrative Legalism",
      url: "http://localhost:8003/",
      description:
        "Embark on a captivating journey through Narrative Legalism, an innovative chatbot that transforms the learning of laws into playful and enjoyable narratives. Dive into engaging stories that unravel legal complexities in a accessible manner. ",
    },
  ];

  return (
    <div>
      <Navbar/>
        <div style={{ padding: '20px', overflow: 'hidden' }}>
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-yellow-900 leading-none md:text-5xl xl:text-6xl dark:text-white">Features</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Empowering Legal Excellence: Discover Law Buddy's Array of Features Tailored to Simplify, Navigate, and Master Legal Frontiers</p>
              <a href="#" className="bg-yellow-900 flex w-48 pl-8 pr-8 pt-3 pb-3 rounded-xl hover:bg-transparent hover:border border-white hover:text-black hover:no-underline">
                Get started below
                {/* <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={lawFeatures} alt="mockup" />
            </div>
          </div>
        </section>
      </div>
      {/* <div className="flex flex-wrap gap-8 mx-auto lg:m-5 lg:ml-12"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto lg:m-5 lg:ml-12">
        {cardsData.map((card, index) => (
          // <div className='h-10'>
          <CardGrid
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            url={card.url}
          />
          // </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Features1;
