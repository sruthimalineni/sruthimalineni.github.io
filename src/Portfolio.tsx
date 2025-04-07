import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    document.title = "Lucky's Pastel Portfolio";
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
      content: "A creative engineer passionate about pastel aesthetics, building things that are both beautiful and functional.",
    },
    {
      title: "Skills & Strengths",
      content: "Java, Spring Boot, Angular, React, and cloud infrastructure. I bring color and clarity to every codebase.",
    },
    {
      title: "Projects",
      content: "Pastel-themed dashboards, animated storybooks, and personal tools – all open-sourced on GitHub.",
    },
    {
      title: "Resume",
      content: "Take a look at my experience and education. The resume viewer is below!",
    },
    {
      title: "Let's Connect",
      content: "I'm always happy to chat – whether it's tech, design, or a good cafe recommendation!",
    },
  ];

  return (
    <div className="min-h-screen bg-pastel-pink text-gray-800 px-4 py-10 font-sans">
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
            <p className="text-lg leading-relaxed text-gray-700">{section.content}</p>

            {section.title === "Resume" && (
              <>
                <button
                  onClick={() => setShowResume(!showResume)}
                  className="inline-block mt-4 px-6 py-3 bg-pastel-blue text-white rounded-xl shadow hover:bg-pastel-lavender transition"
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
