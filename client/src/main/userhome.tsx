import React from 'react';
import './css/fontawesome-all.css';
import './css/magnific-popup.css';
import './css/styles.css';
import './css/swiper.css';
import lawyer from './features/lawyer.png';
import donation from './features/donation.png';
import forum from './features/forum.png';
import documentImg from './features/document.png';
import rights from './features/rights.png';
// import CardGrid from '../components/Card';
import documentDraft from './assets/images/document draft.png';
import humanRights from './assets/images/human rights.jpg';
import lawJargon from './assets/images/law jargon.jpg';
import ChatWidget from "../components/ChatWidget"
import Navbar from '@/navbar';
import Footer from '@/footer';
import lawyer_img from './assets/lawyer.svg'
import { useEffect, useRef, useState } from 'react';
import freedom from './human-rights/freedom.jpg';
import "../../src/main/assets/css/bd-coming-soon.css";

interface CardData {
    imageUrl: string;
    title: string;
    description: string;
}


const Home: React.FC = () => {
    const counterRef = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const cardsData: CardData[] = [
        {
            imageUrl: documentImg,
            title: 'Document Drafting',
            description: 'Effortlessly generate precise and efficient legal documents, including contracts, agreements, and legal notices, with our advanced document drafting AI.',
        },
        {
            imageUrl: rights,
            title: 'Know Your Rights',
            description: 'Navigate the complexities of the legal landscape with our Know-Your-Rights framework. We simplify intricate laws into user-friendly insights, providing you with a legal compass for informed decision-making.',
        },
        {
            imageUrl: lawyer,
            title: 'Advo Connect',
            description: 'Connect with legal experts in real-time through Advo Connect. Engage in conversations to seek advice and clarification on a wide range of legal matters with our interactive platform.',
        },
        {
            imageUrl: forum,
            title: 'Legal Consultancy Forums',
            description: 'Participate in Legal Consultancy Forums to analyze legal cases, extract relevant information, and generate insightful reports. Collaborate with legal professionals to enhance your understanding of complex legal issues.',
        },
        {
            imageUrl: donation,
            title: 'Platform for Legal Aid Fund-Raising',
            description: 'Contribute to the cause of justice by using our platform for Legal Aid Fund-Raising. Automatically review contracts, identify potential issues, and ensure compliance while supporting legal aid initiatives.',
        },
        {
            imageUrl: documentImg,
            title: 'Legal Compliance Checker',
            description: 'Safeguard against legal risks with our Legal Compliance Checker. Leverage our AI-powered tool to ensure legal compliance by checking documents against the latest laws and regulations, providing you with peace of mind.',
        },
    ];

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            threshold: 0.5, // Trigger when 50% of the element is visible
        };

        const handleIntersection: IntersectionObserverCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        // Cleanup the observer on component unmount
        return () => observer.disconnect();
    }, []); // Run the effect only once on component mount

    const startCounterAnimation = (target: HTMLDivElement, count: number) => {
        let currentCount = 0;
        const increment = count / 100; // Adjust the increment based on the desired smoothness

        const intervalId = setInterval(() => {
            currentCount += increment;
            target.textContent = Math.floor(currentCount).toString();

            if (currentCount >= count) {
                target.textContent = count.toString(); // Ensure the final count is accurate
                clearInterval(intervalId);
            }
        }, 15); // Adjust the interval for smoother animation
    };

    useEffect(() => {
        if (isIntersecting && counterRef.current) {
            const counterElements = counterRef.current.querySelectorAll('.number-count');
            counterElements.forEach((element) => {
                const count = parseInt(element.getAttribute('data-count') || '0', 10);
                startCounterAnimation(element as HTMLDivElement, count);
            });
        }
    }, [isIntersecting]);


    return (
        <div>
            <Navbar />
            <ChatWidget />

            <body className="main2 mt-3 leading-normal tracking-normal text-white gradient">
           
            {/* <header id="header_new" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Replace with the actual path to your image
                backgroundSize: 'cover', // Adjust as needed
                // backgroundPosition: 'center', // Adjust as needed
                height: "100vh",
            }} className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"> */}
                <div className="container mt-28 flex flex-col justify-center px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-10">
                    <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                        <h1 className="h1-large mb-4 text-5xl">LAW BUDDY</h1>
                        <p className="p-large mb-8 text-black text-3xl"><strong>Are you tired of navigating the complex world of legal jargon and documentation? Look no further!</strong></p>
                  <button className="text-lg ml-2 hover:underline bg-yellow-900 text-white font-semibold rounded-3xl my-6 py-3 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <a className="page-scroll " href="/userhome"> Get Started
                    {/* <NavLink to="/advoconnect">AdvoConnect</NavLink> */}
                </a>
                  </button>
                        {/* <a className="bg-[#eb427e] pl-8 pr-8 pt-3 pb-3 rounded-xl hover:bg-transparent hover:border border-white hover:text-black hover:no-underline" href="#your-link">Get Started</a> */}
                    </div>
                </div>
            {/* </header> */}
            {/* <div className="pt-4 pb-14 text-center">
                <div className="container px-4 sm:px-8 xl:px-4">
                    <p className="mb-4 mt-12 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto font-serif"> Welcome to "NyayMitra" your friendly guide to understanding the ins and outs of the legal world. Whether you're a law enthusiast, a student with legal dreams, or just curious about how laws affect you, this show is here to make it all clear and interesting.</p>
                </div>
            </div> */}
            <div className="relative -mt-12 lg:-mt-24"> 
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    
    <ChatWidget />
</body>



            {/* <div classNameName="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto lg:m-5 lg:ml-12">
                {cardsData.map((card, index) => (
                    <CardGrid
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div> */}



            <div id="details" className="pt-12 pb-16 lg:pt-16 justify-center items-center mx-auto my-auto">
                <div className="container mx-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-40">
                    <div className="lg:col-span-5">
                        <div className="mb-16 lg:mb-0 xl:mt-16">
                            <h2 className="mb-6">Document Drafting</h2>
                            <p className="my-4">Immerse yourself in the Law Buddy Community, a digital sanctuary for legal enthusiasts and inquisitive minds alike. Engage in thought-provoking discussions, seek advice, and explore an abundance of legal resources within a supportive network</p>
                            <p className="my-4">Whether you're a seasoned professional or an eager learner, Law Buddy Community is your destination for continuous legal education, networking opportunities, and staying informed about the ever-evolving legal landscape.</p>
                        </div>
                    <a className="btn-solid-reg popup-with-move-anim" href="https://localhost:8000">Details</a>
                    </div>
                    <div className="mx-auto lg:col-span-7">
                        <div className="xl:ml-14">
                            <img className="inline h-1/6 w-1/2" src={documentDraft} alt="alternative" />
                        </div>
                    </div>
                </div>
            </div>




            <div className="py-24">
                <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
                    <div className="lg:col-span-7">
                        <div className="mb-12 lg:mb-0 xl:mr-14">
                            <img className="inline" src={humanRights} alt="alternative" />
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="xl:mt-12">
                            <h2 className="mb-6">Know Your Rights</h2>
                            <ol className="list mb-7 space-y-2">
                                <li className="flex">
                                    <div>Empower yourself with Law Buddy's Know-your-Right (KYR) Framework, a dynamic chatbot designed for practical understanding of basic laws in various scenarios. Immerse yourself in an interactive exploration that unveils legal landscapes with actionable guidance.</div>
                                </li>
                                <li className="flex">
                                    <div> Whether it's understanding your rights in everyday situations or navigating through legal challenges, the KYR Framework ensures you're equipped with the knowledge to make informed decisions confidently. Law Buddy transforms legal understanding into a practical and engaging adventure with the KYR Framework.</div>
                                </li>
                            </ol>
                            <a className="btn-solid-reg popup-with-move-anim" href="/chatbot-lawbot">Details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ml-32 pt-16 pb-12">
                <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-40">
                    <div className="lg:col-span-5">
                        <div className="mb-16 lg:mb-0 xl:mt-16">
                            <h2 className="mb-6">Narrative Legalism</h2>
                            <p className="mb-4">Embark on a captivating journey through Narrative Legalism, an innovative chatbot that transforms the learning of laws into playful and enjoyable narratives. </p>
                            <p className="mb-4">Dive into engaging stories that unravel legal complexities in a fun and accessible manner. Law Buddy's Narrative Legalism goes beyond traditional legal education, making the exploration of laws a delightful adventure through interactive storytelling</p>
                        </div>
                        <a className="btn-solid-reg popup-with-move-anim" href="https://localhost:8003">Details</a>
                    
                    </div>
                    <div className="lg:col-span-7">
                        <div className="ml-14">
                            <img className="inline h-1/6 w-1/2" src={lawJargon} alt="alternative" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24">
                <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
                    <div className="lg:col-span-7">
                        <div className="mb-12 lg:mb-0 xl:mr-14">
                            <img className="inline" src={lawyer_img} alt="alternative" />
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="xl:mt-12">
                            <h2 className="mb-6">Connect to Advocate</h2>
                            <ol className="list mb-7 space-y-2">
                                <li className="flex">
                                    <div>Experience personalized legal support like never before with AdvoConnect, Law Buddy's groundbreaking lawyer matchmaking feature. </div>
                                </li>
                                <li className="flex">
                                    <div> Imagine a streamlined process that connects you with the ideal legal expert based on your unique needs, location, and specialization requirements. Bid farewell to the arduous task of finding the right lawyer; AdvoConnect simplifies the journey, ensuring you discover the perfect legal representation effortlessly and effectively..</div>
                                </li>
                            </ol>
                            <a className="btn-solid-reg popup-with-move-anim" href="/advoconnect">Details</a>
                    
                            {/* <a className="bg-[#eb427e] pl-8 pr-8 pt-3 pb-3 rounded-xl hover:bg-transparent hover:border border-white hover:text-black hover:no-underline">Details</a> */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="counter" ref={counterRef}>
                <div className="container px-4 sm:px-8">

                    <div id="counter">
                        <div className="cell">
                            <div className="counter-value number-count" data-count="231">1</div>
                            <p className="counter-info">Multilingual</p>
                        </div>
                        <div className="cell">
                            <div className="counter-value number-count" data-count="385">1</div>
                            <p className="counter-info">Issues Solved</p>
                        </div>
                        <div className="cell">
                            <div className="counter-value number-count" data-count="159">1</div>
                            <p className="counter-info">Advocate Family</p>
                        </div>
                        <div className="cell">
                            <div className="counter-value number-count" data-count="127">1</div>
                            <p className="counter-info">Drafts</p>
                        </div>
                    </div>


                </div>
            </div>



            <div>
                <div className="flex justify-center items-center">
                    <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                        <div role="main" className="flex flex-col items-center justify-center">
                            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">Human Rights Awareness</h1>
                            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">Human rights are inherent to all individuals and encompass a wide range of fundamental rights and freedoms, such as the right to life, liberty, and security, freedom of expression, and protection from discrimination.</p>
                        </div>
                        <div className="lg:flex items-stretch md:mt-12 mt-8">
                            <div className="lg:w-1/2">
                                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                                    <div className="sm:w-1/2 relative">
                                        <div>
                                            <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Article 19 to 22</p>
                                            <div className="absolute bottom-0 left-0 p-6">
                                                <h2 className="text-xl font-semibold 5 text-white">Rights to Freedom</h2>
                                                <p className="text-base leading-4 text-white mt-2">To protect individuals</p>
                                                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                    <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <img src={freedom} className="w-full" alt="chair" />
                                    </div>
                                    <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                                        <div>
                                            <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Article 21</p>
                                            <div className="absolute bottom-0 left-0 p-6 ml-28">
                                                <h2 className="text-xl font-semibold 5 text-white">Disability Rights</h2>
                                                <p className="text-base leading-4 text-white mt-2">No Discrimination</p>
                                                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                    <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <img src="https://i.pinimg.com/564x/96/0e/e8/960ee8f6e97434e0d23aefe0f8357ec6.jpg" className="h-[330px]" alt="wall design" />
                                    </div>
                                </div>
                                <div className="relative">
                                    <div>
                                        <p className="md:p-10 p-6 text-md font-medium leading-3 text-white absolute top-0 right-0">Article 25-28</p>
                                        <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                            <h2 className="text-xl font-semibold 5 text-black">Freedom of Religion</h2>
                                            <p className="text-base leading-4 text-black mt-2">Equality to all</p>
                                            <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1579296440601-efe78a19fa91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjByaWdodHN8ZW58MHx8MHx8fDA%3D" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                                    <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                                <div className="relative">
                                    <div>
                                        <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Section 498A</p>
                                        <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                            <h2 className="text-xl font-semibold 5 text-white bg-slate-400">Domestic Volience</h2>
                                            <p className="text-base leading-4 text-white mt-2 bg-slate-400">Increasing awareness for Section</p>
                                            <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <img src="https://saccityexpress.com/wp-content/uploads/2021/10/domestic-violence-Instagram-portrait-1.png" alt="sitting place" className="w-full sm:block hidden" />
                                    <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
                                </div>
                                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                                    <div className="relative w-full">
                                        <div>
                                            <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Article 29-30</p>
                                            <div className="absolute bottom-0 left-0 p-6">
                                                <h2 className="text-xl font-semibold 5 text-white">Education Rights</h2>
                                                <p className="text-base leading-4 text-white mt-2">Education for everyone</p>
                                                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                    <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <img src="https://i.pinimg.com/564x/cb/21/28/cb212876480f56336437bcfda3c2c654.jpg" className="w-full" alt="chair" />
                                    </div>
                                    <div className="relative w-full sm:mt-0 mt-4">
                                        <div>
                                            <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Article 41 - 43</p>
                                            <div className="absolute bottom-0 left-0 p-6">
                                                <h2 className="text-xl font-semibold 5 text-white">Labour Rights</h2>
                                                <p className="text-base leading-4 text-white mt-2">Fair and humane treatment</p>
                                                <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                    <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <img src="https://i.pinimg.com/564x/1a/de/62/1ade62d721ecfc3a82ee7eef3c967e27.jpg" className="w-full" alt="wall design" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div id="pricing" className="cards-2">
                <div className="absolute bottom-0 h-40 w-full bg-white"></div>
                <div className="container px-4 pb-px sm:px-8">
                    <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">Pricing options for all budgets</h2>
                    <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto"> Our pricing plans are setup in such a way that any user can start enjoying Pavo without worrying so much about costs. They are flexible and work for any type of industry </p>


                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Public</div>
                            <div className="price"><span className="currency">₹</span><span className="value">FREE</span></div>
                            <div className="frequency">monthly</div>
                            <p>This basic package covers the needs</p>
                            <ul className="list mb-7 space-y-2 text-left">
                                <li className="flex">
                                    <div>1. Narrative Legalism</div>
                                </li>
                                <li className="flex">
                                    <div>2. Document Summarization</div>
                                </li>
                                <li className="flex">
                                    <div>3. Community support and videos</div>
                                </li>
                            </ul>
                            <div className="button-wrapper">
                                <a className="bg-[#eb427e] pl-8 pr-8 pt-3 pb-3 rounded-xl hover:bg-transparent hover:border border-white hover:text-black hover:no-underline" href="#download">Download</a>
                            </div>
                        </div>
                    </div>




                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Premium</div>
                            <div className="price"><span className="currency">₹</span><span className="value">500</span></div>
                            <div className="frequency">monthly</div>
                            <p>This is a comprehensive package</p>
                            <ul className="list mb-7 text-left space-y-2">
                                <li className="flex">
                                    <div>Law Chatbot</div>
                                </li>
                                <li className="flex">
                                    <div>Document Draft</div>
                                </li>
                                <li className="flex">
                                    <div>Advo Connect</div>
                                </li>
                                <li className="flex">
                                    <div>Community support and videos</div>
                                </li>
                            </ul>
                            <div className="button-wrapper">
                                <a className="bg-[#eb427e] pl-8 pr-8 pt-3 pb-3 rounded-xl hover:bg-transparent hover:border border-white hover:text-black hover:no-underline" href="#download">Download</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            {/* <div id="download" className="basic-5">
                <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
                    <div className="mb-16 lg:mb-0">
                        <img src="./images/conclusion-smartphone.png" alt="alternative" />
                    </div>
                    <div className="lg:mt-24 xl:mt-44 xl:ml-12">
                        <p className="mb-9 text-gray-800 text-3xl leading-10">Team management mobile applications don’t get much better than Pavo. Download it today</p>
                        <a className="btn-solid-lg" href="#your-link"><i className="fab fa-apple"></i>Download</a>
                        <a className="btn-solid-lg secondary" href="#your-link"><i className="fab fa-google-play"></i>Download</a>
                    </div>
                </div>
            </div> */}




            {/* <div className="footer">
                <div className="container px-4 sm:px-8">
                    <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">Pavo is a mobile application for marketing automation and you can reach the team at <a className="text-indigo-600 hover:text-gray-500" href="mailto:email@domain.com">email@domain.com</a></h4>
                    <div className="social-container">
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-pinterest-p fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-youtube fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div> */}



            {/* <div className="copyright">
                <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
                    <ul className="mb-4 list-unstyled p-small">
                        <li className="mb-2"><a href="article.html">Article Details</a></li>
                        <li className="mb-2"><a href="terms.html">Terms & Conditions</a></li>
                        <li className="mb-2"><a href="privacy.html">Privacy Policy</a></li>
                    </ul>
                    <p className="pb-2 p-small statement">Copyright © <a href="#your-link" className="no-underline">Your name</a></p>

                    <p className="pb-2 p-small statement">Distributed by :<a href="https://themewagon.com/" className="no-underline">Themewagon</a></p>
                </div>

            </div> */}
            <Footer />
        </div>
    )
}

export default Home