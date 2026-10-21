import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  /** Heading level for the title (use "h1" when it's the page's main heading). */
  as?: "h1" | "h2";
}

export default function SectionHeader({ title, subtitle, align = "center", className = "", as = "h2" }: SectionHeaderProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const Heading = as === "h1" ? motion.h1 : motion.h2;

  return (
    <div className={`flex flex-col gap-4 ${alignment[align]} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label-luxury"
        >
          {subtitle}
        </motion.span>
      )}

      <Heading
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight"
      >
        {title}
      </Heading>

      {/* Elegant ornament */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.18 }}
        className="ornament mt-1"
      >
        <span className="text-primary/50 text-[10px]">◆</span>
      </motion.div>
    </div>
  );
}
