import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className='ml-12'>
      <div className="h-full max-w-sm rounded-2xl shadow bg-gray-600 border-gray-700">
        <a href="#">
          <img className="rounded-t-lg h-[80px] p-2" src={props.imageUrl} alt="" />
        </a>
        <div className="p-5 justify-between">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {props.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">{props.description}</p>
          <a
            href={props.url}
            target="_blank"
            className="bg-green-700 w-44 items-center pl-8 pr-8 flex my-auto pt-3 pb-3 rounded-xl hover:bg-green-300 hover:border border-green-700 hover:text-black hover:no-underline"
          >
            Get Started
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
