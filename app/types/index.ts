export type Language = 'en' | 'es';

export type Translations = {
    [key in Language]: {
    hero: {
        title: string;
        subtitle: string;
        tagline: string;
    };
    about: {
        title: string;
        description: string;
        highlights: string[];
    };
    skills: {
        title: string;
        categories: Array<{ name: string; items: string[] }>;
        description: string;
    };
    experience: {
        title: string;
    };
    projects: {
        title: string;
        items: Array<{ title: string; description: string }>;
        viewProject: string;
    };
    contact: {
        title: string;
        subtitle: string;
        form: {
        name: string;
        email: string;
        message: string;
        placeholder: string;
        send: string;
        sending: string;
        success: string;
        error: string;
        };
    };
    footer: {
        copyright: string;
    };
    };
};
