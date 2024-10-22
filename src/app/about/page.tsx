'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Mail, Twitter, User, Code, Briefcase, GraduationCap } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import * as m from '@/paraglide/messages';


interface Skill {
  name: string;
  level: number;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function AboutPage() {
  const skills: Skill[] = [
    { name: "Python", level: 95 },
    { name: "Django", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 85 },
    { name: "Bash", level: 85 },
    { name: "TailwindCSS", level: 75 }
  ];

  const experiences: Experience[] = [
    {
        title: "Lead enginieer",
        company: "Digital operator Sirius",
        period: "June 2024 - Present",
        description: "Built scalable applications using Next.js and Node.js."
    },
    {
      title: "Backend developer",
      company: "Appdvlprs",
      period: "February 2024 - Present",
      description: "Django webapp development and maintining legacy code"
    },
    {
      title: "IT Security Specialist (Junior)",
      company: "Digital operator Sirius",
      period: "April 2023 - June 2024",
      description: "Security awareness, Kaspersky security and vulnerability management."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl font-bold">{m.about_main_title()}</h1>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Hello! I'm a passionate developer focused on creating exceptional digital experiences. 
            With a background in both frontend and backend development, I bring a comprehensive 
            approach to solving complex technical challenges.
          </p>
          
          <p className="text-lg text-muted-foreground">
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or writing about software development on my blog.
          </p>
        </div>

        <motion.div 
          className="flex gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a href="https://github.com/meligera" target="_blank" rel="noopener noreferrer" 
             className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://t.me/pgsq1" target="_blank" rel="noopener noreferrer"
             className="hover:text-primary transition-colors">
            <FaTelegramPlane className="h-6 w-6" />
          </a>
          <a href="mailto:meligera@ya.ru"
             className="hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </motion.div>

      <Tabs defaultValue="skills" className="mb-12">
        <TabsList className="mb-6">
          <TabsTrigger value="skills">{m.about_skills_tab()}</TabsTrigger>
          <TabsTrigger value="experience">{m.about_experience_tab()}</TabsTrigger>
          <TabsTrigger value="education">{m.about_education_tab()}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="skills">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-4"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="experience">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6"
          >
            {experiences.map((exp) => (
              <motion.div key={exp.title} variants={item}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="education">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-5 w-5" />
                    <h3 className="text-xl font-semibold">Computer technician</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">Sirius University of Science and Technology</p>
                  <p className="text-sm text-muted-foreground">2021 - 2024</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>

      <section>
        <div className="flex items-center gap-4 mb-6">
          <Code className="h-8 w-8" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {[
            {
              title: "Project Alpha",
              description: "A modern web application built with Next.js and TypeScript, featuring real-time data synchronization and responsive design.",
              tags: ["Next.js", "TypeScript", "TailwindCSS"]
            },
            {
              title: "Project Beta",
              description: "An open-source library for handling complex state management in React applications with built-in TypeScript support.",
              tags: ["React", "TypeScript", "Open Source"]
            }
          ].map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}