"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Instagram, Mail, Terminal, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SkillCardProps {
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description }) => {
  return (
    <div className="bg-[#112240] border-[#64ffda] rounded-lg p-4 flex flex-col h-full">
      <h3 className="text-lg font-semibold mb-2 text-[#64ffda]">{title === "C++" ? <Terminal className="mr-2" /> : title === "Assembly" ? <Cpu className="mr-2" /> : <Code className="mr-2" />} {title}</h3>
      <p className="text-sm text-[#8892b0] flex-grow">{description}</p>
    </div>
  );
};

export default function ScrollablePortfolio() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <motion.div 
        style={{ opacity, scale }}
        className="fixed inset-0 z-0"
      >
        <Image
          src="/bg.jpg?height=1080&width=1920"
          alt="Development environment"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]/90 backdrop-filter backdrop-blur-sm" />
      </motion.div>

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50">
          <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#12ceeb]">Puffy</h1>
            <div className="flex space-x-4">
              <a href="https://github.com/puffythedev" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="w-6 h-6 text-[#12ceeb] hover:text-[#7ddff8]" />
              </a>
              <a href="https://instagram.com/skyopg_real" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Instagram className="w-6 h-6 text-[#12ceeb] hover:text-[#7ddff8]" />
              </a>
              <a href="mailto:amine@webwisetech.org" aria-label="Email Contact">
                <Mail className="w-6 h-6 text-[#12ceeb] hover:text-[#7ddff8]" />
              </a>
            </div>
          </nav>
        </header>

        <main>
          <section className="h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#FFFFFF]">Backend Developer</h2>
              <p className="text-xl md:text-2xl mb-8 text-[#FCF1F1]">Scroll down to explore my world of hopes and dreams.</p>
              <Link href={"/#experience"}><Button className="bg-[#47ceeb] text-[#0f172a] hover:bg-[#7ddff8]">View Portfolio</Button></Link>
            </div>
          </section>

          <section className="min-h-screen bg-[#0a192f] py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">About Me</h2>
              <p className="text-lg mb-12 text-[#8892b0]">
                With over 5 years of experience in backend development, I specialize in creating awesome (but sometimes dumb), high-performance Apps and Systems using C++, JavaScript/TypeScript, and even getting as low-level as Assembly for the best optimizations. My passion is in solving problems nobody cares about and building crazy projects that i surely can&apos;t maintain alone (yet i do it, somehow).
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <SkillCard 
                  title="C++"
                  description="Expert in modern C++17, with a focus on high-performance app development and system-level programming."
                />
                <SkillCard 
                  title="JS & TS"
                  description="Proficient in building any kind of Node.js applications and APIs using multiple libraries!"
                />
                <SkillCard 
                  title="Assembly"
                  description="I use my experience in 16 bit x86 assembly for embedded systems programming."
                />
                
              </div>
            </div>

            <div className="py-8 container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">Featured Projects</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-[#112240] border-[#64ffda] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#64ffda]">Ecliptix</h3>
                  <p className="text-[#8892b0] mb-4">
                    Developed an awesome safely typed & fast programming language capable of doing (TODO: put stuff here).
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#64ffda]">C++, TypeScript</span>
                    <Link href={"https://ecliptix.Puffy.pro"}><Button className="bg-[#64ffda] text-[#0a192f] hover:bg-[#8892b0]">View Project</Button></Link>
                  </div>
                </div>
                <div className="bg-[#112240] border-[#64ffda] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#64ffda]">Webwise GameX</h3>
                  <p className="text-[#8892b0] mb-4">
                    an awesome, fault-intolerant game engine with simplicity in mind, allows you to create blazingly fast applicatios & games with lua, python or C++!
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#64ffda]">C++</span>
                    <Link href={"https://github.com/webwisetech/GameX"}><Button className="bg-[#64ffda] text-[#0a192f] hover:bg-[#8892b0]">View Project</Button></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-[#0a192f] py-8">
            <div className="container mx-auto px-4 text-center text-[#a5e9f9]">
              <p>&copy; 2025 Puffy & <Link className="text-[#12ceeb] hover:text-[#7ddff8]" href={"https://webwisetech.org"}>Webwise Technologies</Link>. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}