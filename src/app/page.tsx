import React from 'react';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WorkExperienceTimeline } from '@/components/work-timeline';
import TestimonialSlider from '@/components/testimonial-slider';
import * as m from '@/paraglide/messages';
import { RocketIcon, InfoIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const IconComponent = ({ name }: { name: string }) => {
  const Icon = Icons[name as keyof typeof Icons];
  return Icon ? <Icon className="size-6 md:size-8" /> : null;
};

const Home = () => {
  const skills = [
    { name: 'Python', icon: 'Python', description: m.skill_python_description(), tooltip: m.skill_python_tooltip() },
    { name: 'SQL', icon: 'Database', description: m.skill_sql_description(), tooltip: 'Postgres, MariaDB, SQLite, Oracle. NoSQL: MongoDB, Redis' },
    { name: 'FastAPI', icon: 'FastAPI', description: m.skill_fastapi_description(), tooltip: 'Celery, REST API, async tasks' },
    { name: 'Django', icon: 'Django', description: m.skill_django_description(), tooltip: 'Django 2.2+' },
    { name: 'NextJS', icon: 'NextJS', description: m.skill_nextjs_description(), tooltip: 'NextJS 14+' },
    { name: 'React', icon: 'React', description: m.skill_react_description(), tooltip: 'React 18+' },
  ];

  // Sample testimonials data - replace with your actual testimonials
  const testimonials = [
    {
      quote: "German is an exceptional developer who consistently delivers high-quality solutions. His attention to detail and problem-solving skills are outstanding.",
      name: "Alex Johnson",
      role: "Tech Lead",
      imgSrc: "/testimonials/alex.jpg"
    },
    {
      quote: "Working with German was a great experience. His expertise in Python and React helped us deliver our project ahead of schedule.",
      name: "Sarah Chen",
      role: "Project Manager",
      imgSrc: "/testimonials/sarah.jpg"
    },
    {
      quote: "German's deep knowledge of FastAPI and database optimization helped us scale our application efficiently.",
      name: "Xi Jinping",
      role: "Supreme leader",
      imgSrc: "/testimonials/xi.jpg"
    },
    {
      quote: "Our company productivity skyrocketed after working with German. His knowledge of Python and Django helped us build a scalable and reliable product.",
      name: "Barak Obama",
      role: "President of the United States",
      imgSrc: "/testimonials/barak.jpg"
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Light and Dark Theme Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black 
        [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] 
        dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      </div>

      <div className="container mx-auto px-2 sm:px-4">
        <section className="min-h-screen flex flex-col justify-center items-center">
          {/* Hero Section */}
          <div className="py-10 md:py-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <div className="flex-shrink-0">
              <Image src="/german.png" alt="Mamrenko German" width={200} height={200} className="rounded-full" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="mb-2 md:mb-4 font-mono text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tighter">
                {m.nextjs_starter_template_headline()}
              </h1>
              <p className="text-muted-foreground max-w-2xl mb-4 md:mb-6 text-sm md:text-base">
                {m.nextjs_starter_template_description()}
              </p>
              <div className="flex gap-2 md:gap-4 justify-center md:justify-start">
                <Button variant="ringHover" asChild className="text-sm md:text-base">
                  <a href="about">
                    {m.get_started()}
                  </a>
                </Button>
                <Button variant="outline" asChild className="text-sm md:text-base">
                  <a href="https://github.com/meligera" target="_blank">
                    <Icons.github className="mr-2 size-3 md:size-4" /> {m.github()}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <Card key={skill.name} className="relative">
                  <div className="absolute top-4 right-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <InfoIcon className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                  <CardHeader className="flex flex-row items-center gap-4 p-6">
                    <IconComponent name={skill.icon} />
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-2 px-6 pb-6">
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-20">
          <WorkExperienceTimeline />
        </section>

        {/* Testimonials Section */}
        <section className="py-10 md:py-20">
          <h2 className="text-3xl font-bold text-center mb-10">What People Say</h2>
          <TestimonialSlider testimonials={testimonials} />
        </section>
      </div>
    </div>
  );
};

export default Home;