import { Button } from "@/components/ui/button";
import { DoubleQuotesIcon } from "@/lib/icons";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from businesses that have successfully monetized their unused software licenses with SoftSell.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Testimonial 1 */}
          <motion.div
            className="bg-muted rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg relative"
            variants={itemVariants}
          >
            <div className="absolute -top-5 -left-5 text-primary">
              <DoubleQuotesIcon className="h-10 w-10 opacity-50" />
            </div>
            <div className="pl-6">
              <p className="text-lg text-foreground mb-6 italic">
                "SoftSell helped our company recover over $50,000 from unused Adobe and Microsoft licenses after our recent downsizing. The process was seamless, and the team was incredibly professional throughout."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-muted-foreground text-sm">CTO, Nexus Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="bg-muted rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg relative"
            variants={itemVariants}
          >
            <div className="absolute -top-5 -left-5 text-primary">
              <DoubleQuotesIcon className="h-10 w-10 opacity-50" />
            </div>
            <div className="pl-6">
              <p className="text-lg text-foreground mb-6 italic">
                "I was skeptical at first, but SoftSell delivered beyond our expectations. We received nearly 70% of the value for our surplus Salesforce licenses, and the payment was processed within 48 hours. Impressive service!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                  alt="Michael Chen"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-muted-foreground text-sm">CFO, Global Solutions Inc.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 bg-primary/5 rounded-xl p-8 shadow-md"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Ready to get value from your unused licenses?
              </h3>
              <p className="text-muted-foreground">
                Join hundreds of satisfied clients who've turned dormant software assets into cash.
              </p>
            </div>
            <Button size="lg" asChild>
              <a href="#contact">Get Started Now</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
