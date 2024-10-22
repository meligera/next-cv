'use client';
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { motion, useAnimation, useInView } from 'framer-motion';
import * as m from '@/paraglide/messages';

type IconName = keyof typeof Icons;

type WorkExperience = {
  year: string;
  month: string;
  title: string;
  company: string;
  description: string;
  icon: IconName;
};

const workExperience: WorkExperience[] = [
  {
    year: '2024',
    month: 'September',
    title: 'Full-time Developer',
    company: 'Software Company',
    description: 'Joined a software company as a full-stack developer',
    icon: 'Code',
  },
  {
    year: '2024',
    month: 'August',
    title: 'Internship',
    company: 'Tech Startup',
    description: 'Worked as a junior developer at a tech startup',
    icon: 'Rocket',
  },
  {
    year: '2023',
    month: 'April',
    title: m.worktime_line_second_title(),
    company: m.worktime_line_second_org(),
    description: m.worktime_line_second_description(),
    icon: 'FileCode',
  },
  {
    year: '2021',
    month: 'September',
    title: m.worktime_line_first_title(),
    company: m.worktime_line_first_org(),
    description: m.worktime_line_first_description(),
    icon: 'GraduationCap',
  },
];

const IconComponent: React.FC<{ name: IconName }> = ({ name }) => {
  const Icon = Icons[name];
  return Icon ? <Icon className="w-8 h-8 flex-shrink-0" /> : null;
};

const TimelineCard: React.FC<{ experience: WorkExperience }> = ({ experience }) => (
  <Card className="h-full transition-shadow hover:shadow-lg">
    <CardHeader className="flex flex-row items-start space-x-4">
      <div className="pt-3">
        <IconComponent name={experience.icon} />
      </div>
      <div className="flex-grow">
        <CardTitle className="text-lg">{experience.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{experience.company}</p>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm">{experience.description}</p>
    </CardContent>
  </Card>
);

const AnimatedCard: React.FC<{ experience: WorkExperience; index: number }> = ({ experience, index }) => {
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { 
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  // Mobile version
  const MobileCard = () => (
    <div className="flex flex-col items-center">
      <div className="bg-primary text-primary-foreground rounded-full p-2 w-20 h-20 flex flex-col items-center justify-center text-xs font-bold mb-4">
        <span>{experience.month}</span>
        <span>{experience.year}</span>
      </div>
      <TimelineCard experience={experience} />
    </div>
  );

  // Desktop version
  const DesktopCard = () => (
    <div className="flex items-center relative">
      {/* Left card */}
      <div className={`flex-1 ${index % 2 === 0 ? 'pr-48' : 'opacity-0'}`}>
        {index % 2 === 0 && <TimelineCard experience={experience} />}
      </div>

      {/* Center dot with spacing */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <div className="bg-primary text-primary-foreground rounded-full p-2 w-20 h-20 flex flex-col items-center justify-center text-xs font-bold z-10">
          <span>{experience.month}</span>
          <span>{experience.year}</span>
        </div>
      </div>

      {/* Right card */}
      <div className={`flex-1 ${index % 2 === 1 ? 'pl-48' : 'opacity-0'}`}>
        {index % 2 === 1 && <TimelineCard experience={experience} />}
      </div>
    </div>
  );

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-24 last:mb-0"
    >
      <div className="md:hidden">
        <MobileCard />
      </div>
      <div className="hidden md:block">
        <DesktopCard />
      </div>
    </motion.div>
  );
};

export const WorkExperienceTimeline: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto relative px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">{m.worktime_line()}</h2>
      
      {/* Timeline line - desktop only */}
      <div className="hidden md:block absolute left-1/2 top-[4rem] bottom-0 transform -translate-x-px w-0.5 bg-gray-300" />
      
      <div>
        {workExperience.map((experience, index) => (
          <AnimatedCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceTimeline;