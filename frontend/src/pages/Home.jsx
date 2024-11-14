import React, {useEffect} from 'react';
// import homeImage from '../assets/mainTeamImage.jpg';
import homeImage from '../assets/finalhomebg.jpg'
import Footer from './Footer';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar/Navbar'
import { useAuth } from '../store/auth';
import AOS from 'aos';
import BenefitCard from '../components/BenefitCard';
import coachImg from '../assets/undraw_teaching_re_g7e3(1).svg'
import oppurnityImg from '../assets/undraw_junior_soccer_6sop(1).svg'
import supportImg from '../assets/undraw_fans_re_cri3(1).svg'
import facilityImg from '../assets/undraw_goal_-0-v5v(1).svg'
import p1 from "../assets/player1.jpg";
import leader1 from "../assets/l1.jpg";
import leader2 from "../assets/l2.jpg";
import leader3 from "../assets/l3.jpg";


const benefits = [
  {
    image: coachImg,
    title: 'Elite Coaching',
    description: 'Learn from the best! Our coaches are seasoned professionals dedicated to bringing out the champion in you.',
  },
  {
    image: facilityImg,
    title: 'State-of-the-Art Facilities',
    description: 'Train in top-notch facilities with the latest equipment and resources.',
  },
  {
    image: supportImg,
    title: 'Community and Support',
    description: 'Be part of a community that supports and uplifts each other, both on and off the field.',
  },
  {
    image: oppurnityImg,
    title: 'Oppurtunity',
    description: 'Get a chance to experience exciting tournaments alongside our dedicated and talented football team.',
  },
];

const Home = () => {

  const { isLoggedIn } = useAuth();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
    { /* Home Page */ }
    <div
      className="relative h-screen w-full bg-cover bg-center bg-slate-500"
      style={{ backgroundImage: `url(${homeImage})`}}
    >
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-55 z-0"></div>

      {/* Content on top of the gradient */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-7xl font-bold font-yatra shadow-white stroke-blue-700 stroke-2">Rising Sun <span className='text-red-200'>FA</span></h1>
        <p className="text-white py-4">
        Unlock your potential with top-tier training and expert coaching.<br/>Elevate your game and chase your football dreams with us.
        </p>
        {
          isLoggedIn?(
            <Link to="/join" className="rounded-full bg-yellow-50 text-black py-3 px-6 font-semibold flex items-center">
              Join Now <MdOutlineArrowOutward className="ml-2" />
            </Link>
          ) : (
            <Link to="/login" className="rounded-full bg-yellow-50 text-black py-3 px-6 font-semibold flex items-center">
              Join Now <MdOutlineArrowOutward className="ml-2" />
            </Link>
          )
        }
      </div>
      {/* Section 2 - Club Benefit Cards*/}
      <div className="bg-slate-50 font-pop text-black">
      <div className="w-full pl-8 pt-12 pb-20 md:w-[750px] md:pl-32 md:pt-24">
        <div>
          <p className="relative font-poppins text-2xl font-bold text-[#52b429] before:mr-6 before:inline-block before:h-12 before:w-2 before:bg-[#52b429] before:align-middle before:content-['']">
            WHY TO CHOOSE US?
          </p>
          <h2 className="pb-4 pt-8 text-lg sm:text-xl md:text-2xl font-sans">
            We are a team of passionate individuals who are dedicated to providing the best possible experience for our customers.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 px-6 pb-14 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10 md:px-16 shadow-lg shadow-white-500/50">
        {benefits.map((benefit, index) => (
          <BenefitCard
            data-aos="fade-out-up"
            key={index}
            image={benefit.image}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
    {/* Section 3 - Our Academy*/}
      <div className="flex flex-col lg:flex-row justify-center items-center py-10 bg-white">
  <div className="flex flex-col lg:flex-row w-11/12 bg-white shadow-md rounded-lg overflow-hidden">
    {/* Left Side Image and Stats */}
    <div className="relative lg:w-1/2 w-full">
      {/* Overlay Box for Professional Footballers */}
      <div className="absolute top-6 left-6 bg-blue-100 text-white text-center py-2 px-4 rounded-md z-10">
        <p className="text-xl font-bold">230+</p>
        <p className="text-sm">Professional Footballers</p>
      </div>

      {/* Player Image */}
      <div className='w-75 rounded-md '>  
      <img
        src={p1}
        alt="Player"
        className="w-full h-auto object-cover" // Ensures the image is responsive and doesn't overflow
      />
       </div>

      {/* Lives Impacted Box */}
      <div className="absolute bottom-6 left-6 bg-green-500 text-white text-center py-2 px-4 rounded-md z-10">
        <p className="text-xl font-bold">1200+</p>
        <p className="text-sm">Lives Impacted</p>
      </div>
    </div>

    {/* Right Side Content */}
    <div className="lg:w-1/2 w-full p-6 lg:p-10 flex flex-col justify-center bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl font-bold text-blue-700">Academy</h2>
      <p className="mt-4 text-gray-600 leading-relaxed">
      
The Rising Sun FA was informally started over 7 years ago in 2016 and was formally established as a 
NGO in 2021 with the objective to promote learning and development of life skills among 
underprivileged children by giving them access to organized sports. Originally started with 7 players, 
we now help more than 147 kids.
The academy was started by Vijay Gupta – a qualified and licensed (D License) coach based out of 
Mumbai, India. He has been coaching for the last 9 years and his vision is to give every child 
irrespective of prejudice or privilege a chance to grow and develop through sports.
Vijay was introduced to organized sports at the age of 9 through Magic Bus (an NGO) where he 
developed his passion for sports. Through that program among other things, Vijay learned about the 
importance of organized sports in promoting learning and development among children. So, after 
completing his school and college education he trained to be a coach. Over the years he has played and 
participated in many tournaments including those of Mumbai Football Association (MFA) and would 
like to give children similar opportunities.
      </p>
      <a
        href="#"
        className="mt-6 inline-block text-blue-500 hover:text-blue-700 font-medium"
      >
        Know More
      </a>
    </div>
  </div>
</div>

<div className="bg-white py-10 flex justify-center items-center h-screen">
  <div className="w-full max-w-7xl px-4">
    <div className="flex justify-center pb-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Leader's Message</h1>
    </div>

    {/* Scrollable container for leader cards */}
    <div className="overflow-x-auto flex space-x-8 pb-4" >
      
      {/* First Leader Card */}
      <div className="min-w-[300px] bg-white shadow-lg rounded-xl p-6 relative flex-shrink-0">
        <div className="flex flex-col items-center">
          <img
            src={leader1} // Replace with another image source
            alt="Leader"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-semibold">Leader Name 1</h2>
          <p className="text-gray-600 text-center mt-2">
            Short description of the leader’s message or background.
          </p>
        </div>
      </div>

      {/* Second Leader Card */}
      <div className="min-w-[300px] bg-white shadow-lg rounded-xl p-6 relative flex-shrink-0">
        <div className="flex flex-col items-center">
          <img
            src={leader2} // Replace with another image source
            alt="Leader"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-semibold">Leader Name 2</h2>
          <p className="text-gray-600 text-center mt-2">
            Short description of the leader’s message or background.
          </p>
        </div>
      </div>

      {/* Third Leader Card */}
      <div className="min-w-[300px] bg-white shadow-lg rounded-xl p-6 relative flex-shrink-0">
        <div className="flex flex-col items-center">
          <img
            src={leader3} // Replace with another image source
            alt="Leader"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-semibold">Leader Name 3</h2>
          <p className="text-gray-600 text-center mt-2">
            Short description of the leader’s message or background.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
 

<div className="bg-white py-10 flex flex-col items-center">
      {/* Gallery Heading */}
      <p className="underline-offset-2 font-poppins relative text-2xl mb-8 font-bold text-[#52b429] before:mr-6 before:inline-block before:h-12 before:w-2 before:bg-[#52b429] before:align-middle before:content-['']">
            GALLERY
          </p>

      {/* Gallery Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 max-w-7xl w-full px-4">
        
        {/* Training Section */}
        <Link to="/gallery" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/training.jpg" // Replace with actual image
            alt="Training"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">Training</span>
          </div>
        </Link>

        {/* Practice Section */}
        <Link to="/gallery" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/practics.jpg" // Replace with actual image
            alt="Practice"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">Practice</span>
          </div>
        </Link>

        {/* Teams Section */}
        <Link to="/gallery" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/teams.jpg" // Replace with actual image
            alt="Teams"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">Teams</span>
          </div>
        </Link>

        {/* League Section */}
        <Link to="/gallery" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/lauge.jpg" // Replace with actual image
            alt="League"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">League</span>
          </div>
        </Link>
      </div>

      {/* View All Link */}
      <div className="mt-6">
        <Link to="/gallery" className="text-blue-700 font-bold text-lg">
          View All
        </Link>
      </div>
    </div>
<Footer/>

    </div>
  </>
  );
}

export default Home;