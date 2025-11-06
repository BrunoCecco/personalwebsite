"use client";

import { BiLinkExternal } from "react-icons/bi";

import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const ExperienceCard = ({ experience, index, isLast }) => {
  return (
    <div className="relative flex gap-8">
      {/* Timeline line */}
      <div className="flex flex-col items-center mt-4">
        {/* Icon circle */}
        <div
          className="w-16 h-16 rounded-full relative flex items-center justify-center z-10 border-three overflow-hidden flex-shrink-0 p-2"
          style={{ background: experience.iconBg }}
        >
          <img
            src={
              typeof experience.icon === "string"
                ? experience.icon
                : experience.icon.src || experience.icon
            }
            alt={experience.company_name}
            className="w-[85%] h-[85%] object-contain"
          />
        </div>
        {/* Vertical line */}
        {!isLast && (
          <div className="w-0.5 h-full bg-white mt-4 min-h-[100px]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-16">
        <div className="bg-[#1d1836] rounded-lg p-6 relative">
          {/* Arrow pointing to timeline */}
          <div
            className="absolute left-0 top-6 -translate-x-full w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px]"
            style={{ borderRightColor: "#1d1836" }}
          />

          {/* Date */}
          <p className="text-white/70 text-sm mb-3">{experience.date}</p>

          {/* Title and company */}
          <div>
            <h3 className="text-white text-[24px] font-bold">
              {experience.title}
            </h3>
            <p className="text-white text-[16px] font-semibold flex items-center gap-2 mt-1">
              {experience.company_name}
              <a href={experience.link} rel="noreferrer" target="_blank">
                <BiLinkExternal />
              </a>
            </p>
          </div>

          {/* Points */}
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, pointIndex) => (
              <li
                key={`experience-point-${pointIndex}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </div>

      <div className="mt-20 flex flex-col w-full max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </>
  );
};

export default function ExperienceSection() {
  return (
    <SectionWrapper idName="work">
      <Experience />
    </SectionWrapper>
  );
}
