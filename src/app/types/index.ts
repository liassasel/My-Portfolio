export type Language = 'en' | 'es';

export type Translations = {
    [key in Language]: {
    hero: {
        title: string;
        subtitle: string;
    };
    about: {
        title: string;
        description: string;
    };
    skills: {
        title: string;
        items: string[];
        description: string;
    };
    projects: {
        title: string;
        items: Array<{ title: string; description: string }>;
        viewProject: string;
    };
    contact: {
        title: string;
    };
    footer: {
        copyright: string;
    };
    };
};