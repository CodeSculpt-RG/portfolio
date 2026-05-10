import { motion } from "framer-motion";
import { ease } from "../../lib/animations";

export function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pr-3 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 0.12 + index * 0.07, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
