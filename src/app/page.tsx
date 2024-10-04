import React from 'react';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SparklingGrid } from '@/components/sparkles';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
} from "@/components/timeline/timeline";
import * as m from '@/paraglide/messages';

const skills = [
  { name: 'Python', icon: 'Python' },
  { name: 'SQL', icon: 'Database' },
  { name: 'FastAPI', icon: 'Zap' },
  { name: 'Django', icon: 'Layout' },
  { name: 'Next.js', icon: 'Server' },
  { name: 'React', icon: 'Code' },
];

const timelineItems = [
  { date: '2020', title: 'Started learning programming', description: 'Began my journey into the world of coding' },
  { date: '2021', title: 'First project', description: 'Completed my first web application using React' },
  { date: '2022', title: 'Internship', description: 'Worked as a junior developer at a tech startup' },
  { date: '2023', title: 'Full-time developer', description: 'Joined a software company as a full-stack developer' },
];

const IconComponent = ({ name }: { name: string }) => {
  const Icon = Icons[name as keyof typeof Icons];
  return Icon ? <Icon className="size-8" /> : null;
};

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex-shrink-0">
          <Image src="/german.png" alt="Mamrenko German" width={250} height={250} className="rounded-full" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="mb-4 font-mono text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
            {m.nextjs_starter_template_headline()}
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-6">
            {m.nextjs_starter_template_description()}
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button asChild>
              <a href="#" target="_blank">
                {m.get_started()}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#" target="_blank">
                <Icons.github className="mr-2 size-4" /> {m.github()}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardHeader className="flex flex-row items-center gap-4">
                <IconComponent name={skill.icon} />
                <CardTitle>{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Experienced in {skill.name} development.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">My Timeline</h2>
        <Timeline>
          {timelineItems.map((item, index) => (
            <TimelineItem key={index}>
              {index < timelineItems.length - 1 && <TimelineConnector />}
              <TimelineHeader>
                <TimelineTime>{item.date}</TimelineTime>
                <TimelineIcon />
                <TimelineTitle>{item.title}</TimelineTitle>
              </TimelineHeader>
              <TimelineContent>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </section>
    </div>
  );
};

export default Home;