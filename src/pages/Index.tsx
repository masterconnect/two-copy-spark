import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0 bg-spark-radial" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-spark-gradient animate-pulse-glow" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Premium label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-8"
        >
          Premium Domain For Sale
        </motion.p>

        {/* Domain name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 animate-float"
        >
          <span className="text-spark-gold spark-text-glow">Spark</span>
          <span className="text-foreground">.com</span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="spark-underline h-px w-32 md:w-48 mx-auto my-12"
        />

        {/* Contact email */}
        <motion.a
          href="mailto:amiller@atmholdings.com"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="inline-block text-muted-foreground hover:text-spark-gold transition-colors duration-300 text-sm md:text-base tracking-wide"
        >
          amiller@atmholdings.com
        </motion.a>
      </div>
    </div>
  );
};

export default Index;
