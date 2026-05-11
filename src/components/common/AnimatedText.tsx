import { motion } from "framer-motion";
import { ease } from "../../lib/animations";

export function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pr-3 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.06 + index * 0.035, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
