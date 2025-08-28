import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Bot, User, X, Minimize2 } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Ankita's AI assistant. I can answer questions about her experience, skills, projects, and qualifications. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // More intelligent response matching with better context
    const educationKeywords = ["education", "degree", "university", "study", "studies", "academic", "cgpa", "gpa", "qualification"];
    const skillsKeywords = ["skills", "programming", "languages", "technology", "tools", "python", "sql", "ml", "machine learning"];
    const experienceKeywords = ["experience", "work", "job", "position", "role", "employment", "career"];
    const projectsKeywords = ["projects", "portfolio", "work samples", "github", "code", "development"];
    const contactKeywords = ["contact", "email", "phone", "reach", "connect", "hire", "opportunity"];
    const achievementKeywords = ["achievements", "accomplishments", "awards", "recognition", "publications", "research"];
    const personalityKeywords = ["personality", "about", "who are you", "tell me about", "describe yourself"];

    // Check for education-related queries
    if (educationKeywords.some(keyword => message.includes(keyword))) {
      return `Ankita is pursuing her B.Tech in Computer Science at NIIT University (2022-2026) with an impressive CGPA of 9.36. Her coursework includes advanced modules like Machine Learning, Deep Learning, Statistics, Data Mining, Database Systems, Big Data Analytics, and Agentic AI. She also completed her XII from Parmarth International School with 85% and X with 92%.`;
    }
    
    // Check for skills-related queries
    if (skillsKeywords.some(keyword => message.includes(keyword))) {
      return `Ankita has comprehensive technical expertise across multiple domains:
      
Programming: Python, SQL, R, JavaScript
Data Analysis: Pandas, NumPy, Matplotlib, Seaborn, PowerBI, Excel
Machine Learning: Scikit-learn, TensorFlow, Deep Learning, OpenAI GPT-4, LangChain
Tools & Technologies: Git, Docker, Jenkins, Jupyter Notebook, MySQL, MongoDB

She's particularly strong in data science, machine learning, and AI development.`;
    }
    
    // Check for experience-related queries
    if (experienceKeywords.some(keyword => message.includes(keyword))) {
      return `Ankita currently serves as Head of CoEET & Teaching Assistant at NIIT University (Jan 2023 - May 2025). In this role, she manages 40+ student projects per semester, conducts research analysis on 150+ EdTech project ideas, and coordinates industry-academia collaborations. She has 2.5 years of experience working with 20+ course faculty and has built strong partnerships with data-focused companies like PerspectAI.`;
    }
    
    // Check for project-related queries
    if (projectsKeywords.some(keyword => message.includes(keyword))) {
      return `Ankita has developed several impactful projects:

• Financial Market Risk Prediction System using ARIMA and GARCH algorithms
• AI Code Review Assistant (Full-stack with FastAPI, supports multiple languages)
• Comprehensive ML Portfolio with 11 case studies achieving 84.6% accuracy
• Multi-Agent Traffic Management System using DQN and A3C with 97.4% efficiency

All projects demonstrate strong technical implementation and real-world applicability. You can view them on her GitHub.`;
    }
    
    // Check for contact/hiring queries
    if (contactKeywords.some(keyword => message.includes(keyword))) {
      return `You can reach Ankita at:
📧 Email: ankita.kapoor22@st.niituniversity.in
📱 Phone: +91 6230582003
📍 Location: Neemrana, Rajasthan
💼 LinkedIn: Available in her profile
🔗 GitHub: github.com/AnkitaKapoor980

She's currently open to opportunities and typically responds within 24 hours. Her expected graduation is May 2026.`;
    }
    
    // Check for achievement queries
    if (achievementKeywords.some(keyword => message.includes(keyword))) {
      return `Ankita has notable achievements including:
      
• Co-authored research paper accepted at International Conference on Engineering Trends in Education Systems & Sustainability (ICETESS 2025)
• Served as Orange House Captain and Vice-Captain at NIIT University (Jan 2024 – Dec 2025)
• Successfully managed 40+ projects with data-driven process optimization
• Built strong industry-academia partnerships
• Maintained excellent academic performance with 9.36 CGPA`;
    }
    
    // Check for personality/about queries
    if (personalityKeywords.some(keyword => message.includes(keyword))) {
      return `Ankita is passionate about creating digital solutions that balance technical expertise with creative problem-solving. She specializes in building modern, user-focused applications and has a strong eye for design and usability. What defines her is the ability to connect ideas, adapt quickly, and maintain a growth mindset. She values collaboration, clear communication, and brings positive energy to teams. Her goal is to create work that's not only functional but meaningful.`;
    }
    
    // Handle specific technical questions
    if (message.includes("python") || message.includes("programming language")) {
      return "Ankita is highly proficient in Python for data science, machine learning, and web development. She also works with SQL for database management, R for statistical analysis, and JavaScript for web development.";
    }
    
    if (message.includes("machine learning") || message.includes("ai") || message.includes("artificial intelligence")) {
      return "Ankita has extensive experience in machine learning including regression, classification, time series analysis (ARIMA), deep learning with CNNs, reinforcement learning (DQN, A3C), and modern AI technologies like OpenAI GPT-4 and LangChain. She's worked on projects achieving up to 97.4% efficiency.";
    }
    
    // Handle why hire questions with more context
    if (message.includes("why hire") || message.includes("why choose") || message.includes("what makes") || message.includes("strengths")) {
      return `Here's why Ankita would be a great addition to your team:

🎓 Strong academic foundation (9.36 CGPA) with relevant coursework
💼 2.5 years of hands-on experience in data analytics and project management  
👥 Proven leadership with experience managing 40+ projects and teams
🔬 Research experience with published work and industry collaborations
💻 Full-stack capabilities from data analysis to web development
🚀 15+ completed projects demonstrating practical application of skills
🤝 Strong communication and collaboration skills
📈 Track record of improving outcomes through data-driven solutions

She brings both technical depth and the soft skills needed for successful project delivery.`;
    }
    
    // Default response with suggestions
    return `I'm here to help you learn more about Ankita! I can provide detailed information about:

• Her education and academic achievements
• Technical skills and programming expertise  
• Professional experience and leadership roles
• Project portfolio and accomplishments
• Research publications and achievements
• Contact information and availability
• Why she'd be a great fit for your team

What specific aspect would you like to know more about?`;
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-16 h-16 chatbot-container shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] max-h-[80vh]"
          >
            <Card className="w-full h-full flex flex-col chatbot-container backdrop-blur-lg border border-white/20 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">AI Assistant</h3>
                    <p className="text-xs text-white/70">Ask about Ankita's qualifications</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <Minimize2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? "bg-white/20 text-white"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.isBot && (
                          <Bot className="h-4 w-4 mt-0.5 text-white" />
                        )}
                        {!message.isBot && (
                          <User className="h-4 w-4 mt-0.5 text-gray-600" />
                        )}
                        <div className="text-sm whitespace-pre-line">
                          {message.text}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/20 text-white p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Ankita's experience..."
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button
                    onClick={handleSend}
                    size="icon"
                    className="bg-white/20 hover:bg-white/30 text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;