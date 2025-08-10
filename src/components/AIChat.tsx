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
    
    // Education responses
    if (message.includes("education") || message.includes("degree") || message.includes("university")) {
      return "Ankita is currently pursuing a B.Tech in Computer Science at NIIT University (2022-2026) in Neemrana, Rajasthan. She has a strong CGPA of 9.36 and has studied relevant modules including Machine Learning, Deep Learning, Statistics, Data Mining, Database Systems, Big Data Analytics, and Agentic AI.";
    }
    
    // Skills responses
    if (message.includes("skills") || message.includes("programming") || message.includes("languages")) {
      return "Ankita has strong technical skills in:\n• Programming: Python, SQL, R\n• Technologies: Git, Docker, Jenkins, Asana, ClickUp, Jupyter Notebook\n• Databases: MySQL, MongoDB, OracleDB\n• Data Analysis: Pandas, NumPy, Matplotlib, Seaborn, PowerBI\n• Machine Learning: Scikit-learn, TensorFlow, Deep Learning, Time Series Analysis";
    }
    
    // Experience responses
    if (message.includes("experience") || message.includes("work") || message.includes("job")) {
      return "Ankita currently works as Head of CoEET & Teaching Assistant at NIIT University (Jan 2023 - May 2025). She has 2.5 years of experience in educational technology research and project management, working with 20+ course faculty and industry collaborations. She manages 40+ student projects using data analytics and process optimization technologies.";
    }
    
    // Projects responses
    if (message.includes("projects") || message.includes("portfolio")) {
      return "Ankita has worked on several impressive projects:\n• Financial Market Risk Prediction System using ARIMA and GARCH algorithms\n• AI Code Review Assistant with FastAPI and OpenAI GPT-4\n• Comprehensive ML Portfolio with 11 case studies achieving 84.6% accuracy\n• Multi-Agent Traffic Management System using reinforcement learning\nAll projects demonstrate strong technical skills and real-world impact.";
    }
    
    // Machine Learning specific
    if (message.includes("machine learning") || message.includes("ml") || message.includes("ai")) {
      return "Ankita has extensive machine learning experience including regression analysis, classification algorithms, time series forecasting (ARIMA), clustering analysis, deep learning with CNNs, and cross-validation methodologies. She's worked with frameworks like TensorFlow, Scikit-learn, and has experience with OpenAI GPT-4 and Hugging Face transformers.";
    }
    
    // Achievements
    if (message.includes("achievements") || message.includes("accomplishments") || message.includes("awards")) {
      return "Ankita has co-authored a research paper accepted at the International Conference on Engineering Trends in Education Systems & Sustainability (ICETESS 2025) and served as Orange House Captain and Vice-Captain at NIIT University during Jan 2024 – Dec 2025.";
    }
    
    // Contact information
    if (message.includes("contact") || message.includes("email") || message.includes("phone")) {
      return "You can reach Ankita at:\n• Email: ankita.kapoor22@st.niituniversity.in\n• Phone: +91 6230582003\n• LinkedIn: Available in her profile\n• GitHub: github.com/AnkitaKapoor980\n• Location: Neemrana, Rajasthan";
    }
    
    // Why hire responses
    if (message.includes("why hire") || message.includes("why choose") || message.includes("strengths")) {
      return "Ankita brings a unique combination of:\n• Strong academic performance (9.36 CGPA)\n• 2.5 years of hands-on experience in data analytics\n• Leadership experience managing teams and projects\n• Proven track record with 15+ completed projects\n• Research publication experience\n• Industry-academia collaboration experience\n• Full-stack development capabilities\n• Strong foundation in both theoretical concepts and practical applications";
    }
    
    // Default response
    return "I'd be happy to help you learn more about Ankita! You can ask me about her education, skills, projects, experience, achievements, or contact information. Is there something specific you'd like to know?";
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
    }, 1500);
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