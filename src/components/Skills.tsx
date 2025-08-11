import { Card, CardContent } from "@/components/ui/card";
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiJenkins,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiC,
  SiOpenjdk
} from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { MdSecurity } from "react-icons/md";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function Skills() {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: SiPython, color: "text-[#3776ab]" },
        { name: "JavaScript", icon: SiJavascript, color: "text-[#f7df1e]" },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: SiHtml5, color: "text-[#e34f26]" },
        { name: "CSS", icon: SiCss3, color: "text-[#1572b6]" },
        { name: "React", icon: SiReact, color: "text-[#61dafb]" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Express.js", icon: SiExpress, color: "text-[#000000] dark:text-[#ffffff]" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
        { name: "MySQL", icon: SiMysql, color: "text-[#4479a1]" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: SiGit, color: "text-[#f05032]" },
        { name: "GitHub", icon: SiGithub, color: "text-[#181717] dark:text-[#ffffff]" },
        { name: "Docker", icon: SiDocker, color: "text-[#2496ed]" },
        { name: "Jenkins", icon: SiJenkins, color: "text-[#d33833]" },
      ]
    },
    {
      title: "Design & Security",
      skills: [
        { name: "Figma", icon: SiFigma, color: "text-[#f24e1e]" },
        { name: "Cisco Packet Tracer", icon: VscTerminalBash, color: "text-[#1ba0d7]" },
        { name: "VirtualBox", icon: MdSecurity, color: "text-[#183a61]" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="hero-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className={`skill-card border-border/50 transition-all duration-700 hover:scale-105 ${
                isVisible 
                  ? 'animate-scale-in opacity-100' 
                  : 'opacity-0 scale-95'
              } stagger-${(categoryIndex % 6) + 1}`}
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                    >
                      <skill.icon className={`h-8 w-8 mb-2 ${skill.color} group-hover:scale-125 group-hover:animate-glow transition-all duration-300`} />
                      <span className="text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div className={`mt-12 text-center transition-all duration-700 delay-1000 ${
          isVisible ? 'animate-slide-in-bottom opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="glass-card max-w-2xl mx-auto hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Always Learning</h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the cutting edge of development and cybersecurity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}