// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaMapMarkerAlt, FaTrophy, FaLightbulb, FaHandshake } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import history from "../assets/history.png"; 

const History = () => {
  return (
    <div className="font-pop bg-slate-200 text-black min-h-screen p-6">
      <header className="py-4">
      {/* <Link to="/" className="flex items-center text-cyan-400 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link> */}
      <img src={history} alt="Academy Team" className="w-full h-64.5 object-cover" />
      <h1 className="text-4xl font-bold mt-4">History</h1>
      </header>
      <main>
        <section className="py-6">
          <h2 className="text-2xl font-semibold">Our Journey</h2>
          <p className="mt-4">
            Founded in 2010, Rising Sun Football Academy began with a vision to create a nurturing environment for young football enthusiasts. Over the years, we have grown into a leading football academy, known for our top-tier training programs and successful teams.
          </p>
          <p className="mt-4">
            Our commitment to excellence and the development of our players has led to numerous achievements and a growing community of dedicated athletes. From local tournaments to national championships, our academy has been a beacon of football talent and sportsmanship.
          </p>
        </section>
        <section className="py-6">
          <h2 className="text-2xl font-semibold">Milestones</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(203 213 225)", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(203 213 225)" }}
              date="2010"
              iconStyle={{ background: "cyan", color: "#000" }}
              icon={<FaMapMarkerAlt />}
            >
              <h3 className="vertical-timeline-element-title">Academy Founded</h3>
              <p>Rising Sun Football Academy was established.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(203 213 225)", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(203 213 225)" }}
              date="2012"
              iconStyle={{ background: "cyan", color: "#000" }}
              icon={<FaTrophy />}
            >
              <h3 className="vertical-timeline-element-title">
                First Major Championship Win
              </h3>
              <p>Our academy secured its first major championship victory.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(203 213 225)", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(203 213 225)" }}
              date="2015"
              iconStyle={{ background: "cyan", color: "#000" }}
              icon={<FaLightbulb />}
            >
              <h3 className="vertical-timeline-element-title">
                Expansion to Multiple Locations
              </h3>
              <p>We expanded our academy to multiple locations.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(203 213 225)", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(203 213 225)" }}
              date="2018"
              iconStyle={{ background: "cyan", color: "#000" }}
              icon={<FaHandshake />}
            >
              <h3 className="vertical-timeline-element-title">
                Partnership with International Coaches
              </h3>
              <p>We partnered with international coaches to enhance training.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(203 213 225)", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(203 213 225)" }}
              date="2020"
              iconStyle={{ background: "cyan", color: "#000" }}
              icon={<FaLightbulb />}
            >
              <h3 className="vertical-timeline-element-title">
                Launch of Advanced Training Programs
              </h3>
              <p>Our academy launched advanced training programs.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
      </main>
    </div>
  );
};

export default History;