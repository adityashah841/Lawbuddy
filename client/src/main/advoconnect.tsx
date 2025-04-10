import React, { useState, useEffect, ChangeEvent } from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
import "../index.css";
import Navbar from "@/navbar";
import Footer from "@/footer";

type Lawyer = {
  advocate_id: number;
  fname: string;
  lname: string;
  rating: number;
  state: string;
  city: string;
  experience: string;
  specialization: string;
  min_cost_per_hr: number;
  languages: string[];
};

type LawyerCardProps = Lawyer;

const LawyerCard: React.FC<LawyerCardProps> = ({
  advocate_id,
  fname,
  lname,
  rating,
  state,
  city,
  experience,
  specialization,
  min_cost_per_hr,
  languages,
}) => {
  const [value, setValue] = useState(rating);

  useEffect(() => {
    setValue(rating);
  }, [rating]);

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const openForm = (): void => {
    setIsFormOpen(true);
    // window.alert("Successfully Connected to the Lawyer!");
  };

  const closeForm = (): void => {
    setIsFormOpen(false);
  };
  const newReq = (): void => {
    window.alert("Request sent to the Lawyer!");
    window.location.href = "/userhome";
  };

  // ------------------------------------------------------------------

  const handleSubmit = async (event) => {
    console.log("hello");
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log(formData);

    try {
      const response = await axios.post("/api/user/add-meeting", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  const displayPopup = () => {
    console.log("inside popup function");
    return (
      <div>
        <div
          id='static-modal'
          data-modal-backdrop='static'
          // tabIndex='-1'
          aria-hidden='true'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
        >
          <div className='relative p-4 w-full max-w-2xl max-h-full'>
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Static modal
                </h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-hide='static-modal'
                >
                  <svg
                    className='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>
              <div className='p-4 md:p-5 space-y-4'>
                <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              <div className='flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600'>
                <button
                  data-modal-hide='static-modal'
                  type='button'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  I accept
                </button>
                <button
                  data-modal-hide='static-modal'
                  type='button'
                  className='ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ------------------------------------------------------------------

  return (
    <div className='wrapper antialiased text-gray-900 w-[450px] min-h-[300px]'>
      <div className='relative px-4'>
        <div className='bg-white p-6 rounded-lg shadow-lg items-center min-h-[370px]'>
          {/* <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span> */}
          <h4 className='mt-1 text-xl font-semibold uppercase leading-tight truncate'>
            {fname} {lname}
          </h4>

          <div className=' text-gray-600 uppercase text-xs font-semibold tracking-wider'>
            {city},{state}
          </div>
          <div className='mt-1'>Practice Areas: {specialization}</div>
          <div className='mt-1'>Minimun Cost per Hour: {min_cost_per_hr}</div>
          <div className='mt-1' style={{ minHeight: "2em" }}>
            Languages: {languages}
          </div>
          <div className='mt-2'>
            <span className='text-md font-semibold'>
              Experience: {experience}
            </span>
            <br />
            <span className='text-teal-600 text-md font-semibold flex flex-row items-center'>
              Ratings : {rating}
            </span>
          </div>
          <div>
            <div
              className='form-popup'
              id={`myForm${advocate_id}`}
              style={{ display: isFormOpen ? "block" : "none" }}
            >
              <form className='form-container' onSubmit={handleSubmit}>
                <input
                  type='string'
                  name='id'
                  value={advocate_id}
                  style={{ display: "none" }}
                />
                <h1>Connect</h1>
                <label>
                  <b>Date : </b>
                </label>
                <br />
                <input
                  type='date'
                  placeholder='Enter Date'
                  name='date'
                  required
                />
                <br />
                <label>Time:</label> <br />
                <input
                  type='time'
                  placeholder='Enter Time'
                  id='time'
                  name='time'
                  required
                />
                <br />
                <label>
                  <b>Subject</b>
                </label>
                <input
                  type='text'
                  placeholder='Enter Subject'
                  name='subject'
                  required
                />
                <label>
                  <b>Description</b>
                </label>
                <br />
                <textarea
                  id='description'
                  name='description'
                  className='bg-gray-100'
                  placeholder='Enter Description'
                ></textarea>
                {/* <button
                  onClick={displayPopup}
                  data-modal-target='static-modal'
                  data-modal-toggle='static-modal'
                  className='btn block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  type='submit'
                >
                  Get Connected
                </button> */}
                <button onClick={newReq} type='submit' className='btn'>
                  Request meeting
                </button>
                <button
                  type='button'
                  className='btn cancel'
                  onClick={closeForm}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
          <a
            href='#'
            onClick={openForm}
            // onClick={window.alert("Successfully Connected to the Lawyer!")}
            className='m-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-black rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
          >
            Get Connected
          </a>
        </div>
      </div>
    </div>
  );
};

type InputProps = {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => (
  <input
    type='text'
    placeholder={placeholder}
    style={{ padding: "5px", margin: "10px" }}
    onChange={onChange}
  />
);

const Lawyers: React.FC = () => {
  const [lawyersData, setLawyersData] = useState<Lawyer[]>([]);
  const [filteredLawyers, setFilteredLawyers] = useState<Lawyer[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const getLawyersDataFromServer = async (searchValue: string) => {
    console.log("input value", searchValue);
    try {
      const response = await axios.post("/api/user/get-advocate", {
        search: searchValue,
      });
      if (response.data.response) {
        setLawyersData(response.data.lawyers); // Assuming your server returns an array of lawyers
      } else {
        setLawyersData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const showLawyerCards = () => {
    if (lawyersData.length === 0) {
      return null;
    }

    return (
      <>
        <div className='ml-5'>
          <h2>Recommendation on Location & Minimum Cost</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {lawyersData.map((lawyer) => (
            <div key={lawyer.advocate_id} className='mb-4 mr-5'>
              <LawyerCard {...lawyer} />
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <Navbar />
      <div className='main-new'>
        <div style={{ padding: "20px", overflow: "hidden" }}>
          <section className='bg-white dark:bg-gray-900 rounded-2xl'>
            <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
              <div className='mr-auto place-self-center lg:col-span-7'>
                <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
                  Get in touch with Reputated and Verified Lawyers
                </h1>
                {/* <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p> */}
                <a
                  href='#'
                  className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
                >
                  Get started
                  <svg
                    className='w-5 h-5 ml-2 -mr-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </a>
                {/* <a
                  href='#'
                  className='bg-[#eb427e] pl-8 pr-8 pt-3 pb-3 rounded-xl hover:bg-transparent hover:border border-white hover:text-black hover:no-underline'
                >
                  Get started
                </a> */}
              </div>
              <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
                <img
                  src='https://img.freepik.com/free-vector/graduated-lawyer-concept-illustration_114360-16442.jpg?w=740&t=st=1702674285~exp=1702674885~hmac=51fdd25f219f8728bfb9dcfbd858b24c761975091032f768a5052891e6f23182'
                  alt='mockup'
                />
              </div>
            </div>
          </section>
        </div>

        {/* <Input
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      /> */}
        <div className='mb-6'>
          <label className='block mb-2 text-4xl font-medium text-black dark:text-white ml-6 underline'>
            Connect to Advocate:
          </label>
          <div className='input' style={{ display: "flex" }}>
            <input
              type='text'
              id='large-input'
              className='block ml-6 w-[85%] mr-4 p-2 text-gray-900 rounded-2xl '
              placeholder='Ask any Query Related to issues you are Facing'
              onChange={handleChange}
            />
            <button
              onClick={() => getLawyersDataFromServer(searchInput)}
              className='bg-green-800 pl-3 flex pr-3 w-40 text-center items-center text-white pt-3 pb-3 rounded-xl hover:bg-green-700 hover:border border-black hover:text-black'
            >
              Find Lawyers
              <svg
                className='w-5 h-5 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div style={{ marginRight: "20px" }}>{showLawyerCards()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Lawyers;
