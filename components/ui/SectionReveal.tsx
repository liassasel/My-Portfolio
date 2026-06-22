'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type SectionRevealProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

export default function SectionReveal({
    children,
    delay = 0,
    className,
}: SectionRevealProps) {
    return (
        <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
