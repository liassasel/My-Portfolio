'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/584122041596';

export default function WhatsAppFloat() {
    return (
        <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe57] transition-colors"
        >
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
            <MessageCircle className="h-7 w-7 relative z-10" fill="white" strokeWidth={0} />
        </motion.a>
    );
}
