import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../constans/";

function Experience() {
  return (
    <section className="h-screen w-full">
      <VerticalTimeline>
        {experience.map((points, index) => (
          <VerticalTimelineElement
            date={points.date}
            iconStyle={{ background: points.iconBg }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={points.icon}
                  alt={points.title}
                  className="w-[90%] h-[90%] object-contain"
                />
              </div>
            }
            contentArrowStyle={{
              borderRight: "7px solid #112448",
            }}
            contentStyle={{
              background: "#08142F",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              color: "#fff",
            }}
            key={index}
          >
            <div className="h-full w-full flex-col flex justify-center items-center gap-6">
              <div className="flex justify-center items-center flex-col">
                <h3 className="text-white text-3xl font-bold">
                  {points.title}
                </h3>
                <ul className="list-disc">
                  {points.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className=" w-[60%] h-[60%] flex justify-center items-center ">
                <img
                  className=" object-cover "
                  src={points.preview}
                  alt={points.title}
                />
              </div>
              <a
                className={`bg-secondary py-2 px-2 rounded-md text-xl font-bold animate-pulse hover:animate-none transition-all duration-150`}
                href={points.link}
              >
                Visitar sitio
              </a>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
