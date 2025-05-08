import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const suggestedQuestions = [
  "How does the license valuation work?",
  "Which software licenses do you accept?",
  "How long does the process take?"
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm your SoftSell assistant. How can I help you with your software license reselling today?",
      isUser: false
    }
  ]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    addMessage(input, true);
    setInput("");
    setShowSuggestions(false);
    simulateResponse(input);
  };

  const handleSuggestionClick = (question) => {
    addMessage(question, true);
    setShowSuggestions(false);
    simulateResponse(question);
  };

  const addMessage = (text, isUser) => {
    setMessages((prev) => [...prev, { text, isUser }]);
  };

  const simulateResponse = (userMessage) => {
    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase();

      let response = "";
      if (
        lowerMessage.includes("valuation") ||
        lowerMessage.includes("price") ||
        lowerMessage.includes("worth")
      ) {
        response =
          "Our valuation process uses market data and demand analysis to determine the best price for your licenses. We typically offer 60-70% of the original purchase price depending on the software type and remaining subscription period.";
      } else if (
        lowerMessage.includes("accept") ||
        lowerMessage.includes("software") ||
        lowerMessage.includes("license")
      ) {
        response =
          "We accept licenses from most major software vendors including Microsoft, Adobe, Autodesk, Oracle, SAP, Salesforce, VMware, and many others. Enterprise and specialized software packages typically have the highest value.";
      } else if (
        lowerMessage.includes("time") ||
        lowerMessage.includes("long") ||
        lowerMessage.includes("process")
      ) {
        response =
          "The entire process typically takes 3-5 business days. You'll receive a valuation within 24 hours of submission, and payment is processed within 2-3 business days after you accept our offer.";
      } else {
        response =
          "Thank you for your question. One of our license specialists will follow up with you shortly. If you need immediate assistance, please call us at +1 (888) 555-0123.";
      }

      addMessage(response, false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg"
        onClick={handleToggle}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-background rounded-lg shadow-xl border overflow-hidden"
          >
            <div className="p-4 bg-primary text-primary-foreground">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">SoftSell Assistant</h3>
                <span className="text-xs bg-green-400 text-primary-800 rounded-full px-2 py-1">
                  Online
                </span>
              </div>
            </div>

            <div className="p-4 h-80 overflow-y-auto">
              <div className="flex flex-col space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex items-start ${
                      msg.isUser ? "justify-end" : ""
                    }`}
                  >
                    {!msg.isUser && (
                      <div className="flex-shrink-0 mr-3">
                        <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4" />
                        </div>
                      </div>
                    )}
                    <div
                      className={`${
                        msg.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      } rounded-lg p-3 max-w-[75%]`}
                    >
                      <p>{msg.text}</p>
                    </div>
                    {msg.isUser && (
                      <div className="flex-shrink-0 ml-3">
                        <div className="bg-gray-200 dark:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {showSuggestions && (
                  <div className="flex flex-col space-y-2">
                    <p className="text-center text-muted-foreground text-xs mb-2">
                      Try asking...
                    </p>
                    {suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="text-left justify-start h-auto py-2 bg-muted/50 hover:bg-muted"
                        onClick={() => handleSuggestionClick(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t">
              <form onSubmit={handleSend} className="flex items-center">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow rounded-r-none"
                />
                <Button type="submit" className="rounded-l-none">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
