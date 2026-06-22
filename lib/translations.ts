import { StaticImageData } from 'next/image'

import { Language } from '../src/app/types'

import flutterLoginImage from '@/assets/images/flutter_login.png'
import translateAppImage from '@/assets/images/translate_web.png'
import coffeeShopImage from '@/assets/images/coffee_shop.png'

export interface Project {
    imageUrl: StaticImageData
    projectUrl: string
}

export const projectsData: Project[] = [
    {
    imageUrl: flutterLoginImage,
    projectUrl: "https://login-in-flutter-6ykidebym-dsasadsas-projects.vercel.app/"
    },
    {
    imageUrl: translateAppImage,
    projectUrl: "https://translate-app-wine-six.vercel.app/"
    },
    {
    imageUrl: coffeeShopImage,
    projectUrl: "https://coffee-shop-next-js-silk.vercel.app/"
    }
]

export interface ExperienceItem {
    role: string
    company: string
    period: string
    location: string
    bullets: string[]
}

export const experienceData: Record<Language, ExperienceItem[]> = {
    en: [
    {
        role: "Backend Developer",
        company: "Grupo ATIEMPO Telemedicine App Services Corp",
        period: "Jul 2025 — Present",
        location: "Miami, Florida, US · Remote",
        bullets: [
        "Designed, developed, and deployed a distributed microservices ecosystem under a secure Server-to-Server (S2S) architecture using NestJS and TypeScript, optimizing internal network traffic and decoupling critical services (video consultations, medical records, prescriptions) to support high concurrency.",
        "Co-created and adopted a strict internal backend framework standardizing data flow, configuration management, and error handling, significantly reducing technical debt through verifiable best practices.",
        "Engineered transactional modules for a multi-bank payment gateway, natively integrating Stripe, R4, and Sitef. Built robust webhook handling, automated background bank reconciliation, and asynchronous retry flows on network failures, ensuring zero transaction loss.",
        "Designed rigorous backend security policies through input sanitization layers and strict DTO validation. Protected endpoints against common vulnerabilities and encrypted sensitive data to comply with international confidentiality standards in health software.",
        "Built and optimized the persistence layer with MySQL and Prisma ORM. Created complex triggers and stored procedures at the database engine level to automate historical record consistency, data audits, and real-time reporting without penalizing server performance."
        ]
    },
    {
        role: "Web Developer",
        company: "Clinmedia Marketing Agency",
        period: "Jun 2025 — Oct 2025",
        location: "Spain · Remote",
        bullets: [
        "Built and customized WordPress themes and plugins to deliver responsive, brand-aligned marketing sites for multiple clients across healthcare and corporate sectors.",
        "Developed custom PHP modules and WordPress hooks to extend CMS functionality beyond out-of-the-box capabilities, including custom post types, advanced custom fields, and shortcodes.",
        "Optimized site performance through asset minification, lazy loading, image compression, and database query tuning, achieving measurable improvements in Core Web Vitals and Time to First Byte.",
        "Implemented on-page SEO best practices (semantic HTML, schema markup, meta structure, sitemap configuration) to improve organic search visibility for client sites.",
        "Managed hosting environments and deployment pipelines, including SSL configuration, DNS management, and automated backup routines."
        ]
    },
    {
        role: "Full Stack Developer",
        company: "Soluciones Tecnológicas Caura",
        period: "Jan 2025 — Jun 2025",
        location: "Caracas, Venezuela · Hybrid",
        bullets: [
        "Delivered end-to-end web applications for public-sector clients, including the internal management system for Fundación El Niño Simón and the ticketing platform Multas La Guaira.",
        "Built frontends with both Next.js (TypeScript) and Laravel (Blade + Livewire), styling with Tailwind CSS on the Next.js side and Chakra UI on data-heavy admin interfaces where component composition mattered more than utility-first CSS.",
        "Designed and consumed REST APIs from NestJS and Laravel backends, modeling relational schemas in MySQL and using Prisma ORM in TypeScript services to keep data access type-safe across environments.",
        "Built reusable backend modules with NestJS (controllers, services, DTOs, guards) and Laravel (Form Requests, Service classes, Policies) to keep validation, error handling, and authorization consistent across services.",
        "Containerized services with Docker (multi-stage Dockerfiles + docker-compose) and managed Git workflows with pull request reviews, keeping development, staging, and production environments consistent."
        ]
    },
    {
        role: "Web Developer",
        company: "Kukenan Tobacco Trading",
        period: "Feb 2024 — Apr 2024",
        location: "Caracas, Venezuela · Remote",
        bullets: [
        "Built reactive product and publication interfaces with Next.js and TypeScript, focusing on fast load times and smooth navigation across catalog and detail pages.",
        "Consumed and integrated REST APIs to render dynamic product data, implementing client-side caching, request deduplication, and error states to keep the UI resilient on slow networks.",
        "Optimized data-fetching patterns (SWR / React Query style strategies) to reduce redundant network calls and improve perceived performance on listing-heavy pages.",
        "Implemented responsive layouts and accessibility best practices (semantic HTML, ARIA attributes, keyboard navigation) so product pages rendered correctly on mobile, tablet, and desktop.",
        "Collaborated with the design team to translate Figma mockups into pixel-accurate, type-safe components, with reusable props and consistent styling tokens."
        ]
    }
    ],
    es: [
    {
        role: "Desarrollador Backend",
        company: "GRUPO ATIEMPO TELEMEDICINE APP SERVICES CORP",
        period: "jul. 2025 — Actualidad",
        location: "Miami, Florida, EE.UU. · En remoto",
        bullets: [
        "Diseño, desarrollo y despliegue de un ecosistema de microservicios distribuidos bajo una arquitectura Server-to-Server (S2S) altamente segura y eficiente, utilizando NestJS y TypeScript. Optimización del tráfico de red interna y desacoplamiento de servicios críticos (gestión de videoconsultas, historias clínicas y recetas) para soportar alta concurrencia.",
        "Co-creación y adopción de un marco de trabajo interno estricto para el desarrollo backend. Codificación de bases estructurales que normalizan el flujo de datos, la gestión de configuraciones y el manejo de errores, reduciendo significativamente la deuda técnica del proyecto mediante buenas prácticas comprobables.",
        "Ingeniería e implementación de módulos transaccionales para la pasarela de pagos multibanco de la aplicación, integrando de manera nativa procesadores como Stripe, R4 y Sitef. Desarrollo de sistemas robustos para el manejo de webhooks, conciliación bancaria automatizada en segundo plano y flujos asíncronos de reintentos ante fallas de red, asegurando cero pérdidas de transacciones.",
        "Diseño de políticas rigurosas de seguridad en el backend mediante la implementación de capas de sanitización de datos de entrada y validación estricta con DTOs avanzados. Protección de endpoints contra vulnerabilidades comunes y cifrado de información sensible para cumplir con los estándares internacionales de confidencialidad en software de salud.",
        "Construcción y optimización de la capa de persistencia de datos utilizando MySQL y Prisma ORM. Creación de triggers complejos y procedimientos almacenados a nivel de motor de base de datos para automatizar la consistencia de registros históricos, auditorías de datos y reportería en tiempo real sin penalizar el rendimiento del servidor."
        ]
    },
    {
        role: "Desarrollador Web",
        company: "Clinmedia Agencia de Marketing",
        period: "jun. 2025 — oct. 2025",
        location: "España · En remoto",
        bullets: [
        "Construcción y personalización de temas y plugins de WordPress para entregar sitios de marketing responsivos y alineados a la marca para múltiples clientes de los sectores salud y corporativo.",
        "Desarrollo de módulos PHP personalizados y hooks de WordPress para extender la funcionalidad del CMS más allá de las capacidades predeterminadas, incluyendo custom post types, campos personalizados avanzados y shortcodes.",
        "Optimización del rendimiento del sitio mediante minificación de assets, lazy loading, compresión de imágenes y tuning de consultas a la base de datos, logrando mejoras medibles en Core Web Vitals y Time to First Byte.",
        "Implementación de buenas prácticas de SEO on-page (HTML semántico, schema markup, estructura de metadatos, configuración de sitemaps) para mejorar la visibilidad orgánica de los sitios de los clientes.",
        "Gestión de entornos de hosting y pipelines de despliegue, incluyendo configuración SSL, administración de DNS y rutinas automatizadas de respaldo."
        ]
    },
    {
        role: "Desarrollador Full Stack",
        company: "Soluciones Tecnológicas Caura",
        period: "ene. 2025 — jun. 2025",
        location: "Caracas, Venezuela · Híbrido",
        bullets: [
        "Entrega de aplicaciones web de principio a fin para clientes del sector público, incluyendo el sistema interno de gestión de la Fundación El Niño Simón y la plataforma de sanciones Multas La Guaira.",
        "Construcción de frontends con Next.js (TypeScript) y Laravel (Blade + Livewire), estilando con Tailwind CSS del lado de Next.js y con Chakra UI en interfaces administrativas con datos densos donde la composición de componentes importaba más que el CSS utility-first.",
        "Diseño y consumo de APIs REST desde backends en NestJS y Laravel, modelando esquemas relacionales en MySQL y usando Prisma ORM en servicios TypeScript para mantener un acceso a datos type-safe entre entornos.",
        "Construcción de módulos backend reutilizables con NestJS (controladores, servicios, DTOs, guards) y Laravel (Form Requests, clases Service, Policies) para mantener validación, manejo de errores y autorización consistentes entre servicios.",
        "Contenerización de servicios con Docker (Dockerfiles multi-stage + docker-compose) y gestión de flujos en Git con revisión de pull requests, manteniendo la consistencia entre los entornos de desarrollo, staging y producción."
        ]
    },
    {
        role: "Desarrollador Web",
        company: "Kukenan Tobacco Trading",
        period: "feb. 2024 — abr. 2024",
        location: "Caracas, Venezuela · En remoto",
        bullets: [
        "Construcción de interfaces reactivas de productos y publicaciones con Next.js y TypeScript, enfocadas en tiempos de carga rápidos y navegación fluida entre el catálogo y las páginas de detalle.",
        "Consumo e integración de APIs REST para renderizar datos dinámicos de productos, implementando caching en el cliente, deduplicación de requests y estados de error para mantener la UI resiliente en redes lentas.",
        "Optimización de los patrones de fetch de datos (estrategias al estilo SWR / React Query) para reducir llamadas de red redundantes y mejorar el rendimiento percibido en páginas con muchos listados.",
        "Implementación de layouts responsivos y buenas prácticas de accesibilidad (HTML semántico, atributos ARIA, navegación por teclado) para que las páginas de producto se rendericen correctamente en móvil, tablet y escritorio.",
        "Colaboración con el equipo de diseño para traducir mockups de Figma en componentes pixel-perfect y type-safe, con props reutilizables y tokens de estilo consistentes."
        ]
    }
    ]
};

export const translations = {
    en: {
    hero: {
        title: "Angel Useche",
        subtitle: "Backend Developer | Building scalable APIs with TypeScript, NestJS & PHP",
        tagline: "Clean architecture. Resilient systems. Production-ready code.",
    },
    about: {
        title: "About Me",
        description: "Backend Developer specialized in building scalable APIs and solving complex architecture problems with TypeScript, NestJS, and PHP. Expert in relational modeling (MySQL, Prisma ORM), advanced trigger creation, and performance optimization. I integrate Docker and DevOps practices to ensure stable, high-availability deployments.",
        highlights: [
        "Microservices architecture & Server-to-Server communication",
        "Payment gateway integration (Stripe, R4, Sitef)",
        "Advanced database modeling & stored procedures",
        "Observability & centralized audit systems",
        ],
    },
    skills: {
        title: "Tech Stack",
        categories: [
        { name: "Languages", items: ["Python", "TypeScript", "Node.js", "PHP"] },
        { name: "Frameworks", items: ["NestJS", "Django", "Next.js", "React"] },
        { name: "DevOps & Infra", items: ["Docker", "Containerization", "Deployments", "CI/CD"] },
        { name: "Databases & Architecture", items: ["MySQL", "Prisma ORM", "RESTful APIs", "Microservices"] },
        ],
        description: "Backend-focused engineer with full-stack capabilities. Every tool I use is chosen for scalability, maintainability, and production reliability.",
    },
    experience: {
        title: "Experience",
    },
    projects: {
        title: "Featured Projects",
        items: [
        { title: "Flutter Login", description: "Cross-platform login interface with responsive design for desktop and mobile." },
        { title: "Translate App", description: "Multi-language translation application with a clean, intuitive interface." },
        { title: "Coffee Shop", description: "Modern coffee shop landing page built with Next.js and Tailwind CSS." },
        ],
        viewProject: "View Project",
    },
    contact: {
        title: "Let's Connect",
        subtitle: "Open to opportunities — reach out anytime.",
        form: {
        name: "Name",
        email: "Email",
        message: "Message",
        placeholder: "Tell me about your project or opportunity...",
        send: "Send Message",
        sending: "Sending...",
        success: "Thanks! Your message has been prepared. Your email client should open shortly.",
        error: "Please fill in all fields correctly.",
        }
    },
    footer: {
        copyright: "All rights reserved.",
    },
    },
    es: {
    hero: {
        title: "Angel Useche",
        subtitle: "Desarrollador Backend | Creando APIs escalables con TypeScript, NestJS y PHP",
        tagline: "Arquitectura limpia. Sistemas resilientes. Código listo para producción.",
    },
    about: {
        title: "Sobre Mí",
        description: "Desarrollador Backend especializado en construir APIs escalables y resolver problemas complejos de arquitectura con TypeScript, NestJS y PHP. Experto en modelado relacional (MySQL, Prisma ORM), creación de triggers avanzados y optimización de rendimiento. Integro Docker y prácticas DevOps para garantizar despliegues estables y de alta disponibilidad.",
        highlights: [
        "Arquitectura de microservicios y comunicación S2S",
        "Integración de pasarelas de pago (Stripe, R4, Sitef)",
        "Modelado avanzado de bases de datos y procedimientos almacenados",
        "Sistemas de observabilidad y auditoría centralizada",
        ],
    },
    skills: {
        title: "Stack Tecnológico",
        categories: [
        { name: "Lenguajes", items: ["Python", "TypeScript", "Node.js", "PHP"] },
        { name: "Frameworks", items: ["NestJS", "Django", "Next.js", "React"] },
        { name: "DevOps e Infra", items: ["Docker", "Contenerización", "Despliegues", "CI/CD"] },
        { name: "BBDD y Arquitectura", items: ["MySQL", "Prisma ORM", "APIs RESTful", "Microservicios"] },
        ],
        description: "Ingeniero orientado al backend con capacidades full-stack. Cada herramienta está elegida por su escalabilidad, mantenibilidad y confiabilidad en producción.",
    },
    experience: {
        title: "Experiencia",
    },
    projects: {
        title: "Proyectos Destacados",
        items: [
        { title: "Login con Flutter", description: "Interfaz de inicio de sesión multiplataforma con diseño responsivo." },
        { title: "Traductor", description: "Aplicación de traducción multi-idioma con interfaz limpia e intuitiva." },
        { title: "Coffee Shop", description: "Landing page moderna de cafetería construida con Next.js y Tailwind CSS." },
        ],
        viewProject: "Ver Proyecto",
    },
    contact: {
        title: "Conectemos",
        subtitle: "Abierto a oportunidades — contáctame cuando quieras.",
        form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        placeholder: "Cuéntame sobre tu proyecto u oportunidad...",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Gracias! Tu mensaje ha sido preparado. Tu cliente de correo se abrirá en breve.",
        error: "Por favor completa todos los campos correctamente.",
        }
    },
    footer: {
        copyright: "Todos los derechos reservados.",
    },
    },
}
