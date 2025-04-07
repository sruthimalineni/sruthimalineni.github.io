import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    document.title = "Lucky's Portfolio";
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const sections = [
    {
      title: "Hi, I'm Lucky!",
      content: "A passionate software engineer who blends backend logic with frontend elegance. I love building clean, scalable web applications.",
    },
    {
      title: "What I Do",
      content: "Specialized in Java, Spring Boot, and Angular. Experienced with cloud services, microservices, and frontend magic with animations.",
    },
    {
      title: "Projects",
      content: "Check out my latest work on GitHub—from AI storytelling engines to full-stack dashboards with delightful user experiences.",
    },
    {
      title: "Resume",
      content: "Here's a snapshot of my experience, skills, and education. You can view it directly below!",
    },
    {
      title: "Let's Connect",
      content: "Always open to opportunities, collaborations, and coffee chats. You can reach me via email or social platforms below!",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
            <p className="text-lg leading-relaxed text-gray-600">{section.content}</p>

            {section.title === "Resume" && (
              <>
                <button
                  onClick={() => setShowResume(!showResume)}
                  className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
                >
                  {showResume ? "Hide Resume" : "View Resume"}
                </button>
                {showResume && (
                  <div className="mt-6">
                    <iframe
                      src="/resume.pdf"
                      title="Lucky's Resume"
                      className="w-full h-[800px] border rounded-lg shadow"
                    ></iframe>
                  </div>
                )}
              </>
            )}
          </motion.div>
        ))}

        <motion.div
          className="flex justify-center gap-6 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Card className="p-4 hover:shadow-xl">
              <CardContent>
                <Github className="w-6 h-6 text-gray-700" />
              </CardContent>
            </Card>
          </a>
          <a href="mailto:you@example.com">
            <Card className="p-4 hover:shadow-xl">
              <CardContent>
                <Mail className="w-6 h-6 text-gray-700" />
              </CardContent>
            </Card>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <Card className="p-4 hover:shadow-xl">
              <CardContent>
                <Linkedin className="w-6 h-6 text-gray-700" />
              </CardContent>
            </Card>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Card className="p-4 hover:shadow-xl">
              <CardContent>
                <FileText className="w-6 h-6 text-gray-700" />
              </CardContent>
            </Card>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
