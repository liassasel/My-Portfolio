'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../lib/LanguageContext';

const CONTACT_EMAIL = 'auseche2041@gmail.com';

export default function ContactForm() {
    const { t } = useLanguage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus('error');
            return;
        }

        setStatus('sending');

        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        );
        const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

        window.location.href = mailto;

        setTimeout(() => {
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
            setTimeout(() => setStatus('idle'), 5000);
        }, 600);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                        {t.contact.form.name}
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                        {t.contact.form.email}
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                    {t.contact.form.message}
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder={t.contact.form.placeholder}
                    className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
                />
            </div>

            <div className="flex flex-col items-center gap-3">
                <Button
                    type="submit"
                    disabled={status === 'sending'}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-60"
                >
                    <Send className="h-4 w-4 mr-2" />
                    {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
                </Button>

                {status === 'success' && (
                    <p className="flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400 text-center">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <span>{t.contact.form.success}</span>
                    </p>
                )}
                {status === 'error' && (
                    <p className="text-sm text-red-600 dark:text-red-400 text-center">
                        {t.contact.form.error}
                    </p>
                )}
            </div>
        </form>
    );
}
