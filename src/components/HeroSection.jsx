import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f9fafb] dark:bg-gray-900 overflow-hidden hero-pattern">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Turn Unused Licenses Into{" "}
              <span className="text-primary">Cash</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              SoftSell helps businesses monetize their unused software licenses.
              Get top dollar for your surplus subscriptions with our simple,
              secure platform.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild>
                <a href="#contact">Sell My Licenses</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-it-works">Learn How It Works</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Software licensing management"
              className="rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-5 -left-5 bg-primary text-white px-6 py-3 rounded-lg shadow-lg hidden md:block"
            >
              <p className="font-semibold">Average return: 60-70%</p>
              <p className="text-sm text-primary-foreground/80">
                of original license value
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
