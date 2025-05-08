import { Button } from "@/components/ui/button";
import {
  HeadphonesIcon,
  LockIcon,
  PercentIcon,
  ShieldCheckIcon
} from "@/lib/icons";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SoftSell</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've built the most trusted platform for software license reselling, with features designed for businesses of all sizes.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Benefit 1 */}
          <motion.div 
            className="bg-background rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            variants={itemVariants}
          >
            <div className="text-primary mb-4">
              <PercentIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Market Rates</h3>
            <p className="text-muted-foreground">
              Our extensive buyer network ensures you get up to 70% of the original license value, significantly higher than competitors.
            </p>
          </motion.div>
          
          {/* Benefit 2 */}
          <motion.div 
            className="bg-background rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            variants={itemVariants}
          >
            <div className="text-primary mb-4">
              <ShieldCheckIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Compliance Guaranteed</h3>
            <p className="text-muted-foreground">
              Our legal team ensures all transactions comply with licensing terms and regulations, eliminating legal risks.
            </p>
          </motion.div>
          
          {/* Benefit 3 */}
          <motion.div 
            className="bg-background rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            variants={itemVariants}
          >
            <div className="text-primary mb-4">
              <HeadphonesIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
            <p className="text-muted-foreground">
              Each client is assigned a personal account manager to guide you through the entire selling process.
            </p>
          </motion.div>
          
          {/* Benefit 4 */}
          <motion.div 
            className="bg-background rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            variants={itemVariants}
          >
            <div className="text-primary mb-4">
              <LockIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-muted-foreground">
              Bank-level encryption and security protocols protect your sensitive license information and transaction details.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <a href="#contact">Start Selling Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
