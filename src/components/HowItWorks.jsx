import { motion } from "framer-motion";
import { UploadCloud, LineChart, CreditCard, Shield, ShieldCheck, Timer } from "lucide-react";

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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our streamlined process makes selling your unused software licenses simple, secure, and profitable.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Step 1 */}
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg relative overflow-hidden group"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-bl-xl font-bold">1</div>
            <div className="text-blue-600 mb-6">
              <UploadCloud className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Upload License Details</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Submit your unused license information through our secure portal. We handle all major software vendors.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
              <p className="text-sm flex items-center text-gray-500 dark:text-gray-400">
                <ShieldCheck className="h-4 w-4 mr-2 text-green-500" />
                Secure, encrypted submission
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg relative overflow-hidden group"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-bl-xl font-bold">2</div>
            <div className="text-blue-600 mb-6">
              <LineChart className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Get Valuation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive a competitive market valuation within 24 hours. Our algorithm ensures the best possible price for your licenses.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
              <p className="text-sm flex items-center text-gray-500 dark:text-gray-400">
                <Timer className="h-4 w-4 mr-2 text-green-500" />
                Fast 24-hour response time
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg relative overflow-hidden group"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-bl-xl font-bold">3</div>
            <div className="text-blue-600 mb-6">
              <CreditCard className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Get Paid</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Accept our offer and receive payment within 3 business days. Choose from multiple payment methods.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
              <p className="text-sm flex items-center text-gray-500 dark:text-gray-400">
                <Shield className="h-4 w-4 mr-2 text-green-500" />
                Secure payment processing
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
