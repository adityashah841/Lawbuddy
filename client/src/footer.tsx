import React from 'react'
import code_omega from './code_omega.png'
import nyaymitra from './img/logo_wbag.png';

type Props = {}

const footer = (props: Props) => {
    return (
        <div>
            <footer className="flex text-gray-600 bg-[#dddddd] body-font items-center justify-center">
                <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex md:mx-0 mx-auto md:text-left md:mt-0 mt-10">
                        <a className="flex flex-col title-font font-medium items-center justify-center text-gray-900">
                            <img src={nyaymitra} alt='law_buddy' className='w-80' />
                            {/* <h1 className='text-sm'>By</h1> */}
                            {/* <img src={code_omega} alt='nyaymitra' className='w-44' /> */}
                        </a>

                    </div>
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Important link</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-sky-600 hover:text-gray-800" href='/chatbot-lawbot'>Lawbot</a>
                                </li>
                                <li>
                                    <a className="text-sky-600 hover:text-gray-800">Human Rights</a>
                                </li>
                                <li>
                                    <a href="/features" className="text-sky-600 hover:text-gray-800">Features</a>
                                </li>
                                <li>
                                    <a className="text-sky-600 hover:text-gray-800">Community</a>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Team Members</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Aditya Shah</a>
                                </li>
                                {/* <li>
                                    <a className="text-gray-600 hover:text-gray-800">Hatim Mullajiwala</a>
                                </li> */}
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Meet Vasa</a>
                                </li>
                            </nav>

                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Team Members</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Devang Shah</a>
                                </li>
                                {/* <li>
                                    <a className="text-gray-600 hover:text-gray-800">Vedant Kambli</a>
                                </li> */}
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Hastansh Pandit</a>
                                </li>
                            </nav>

                        </div>
                    </div>
                </div>
                {/* <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div> */}
            </footer>
        </div>
    )
}

export default footer