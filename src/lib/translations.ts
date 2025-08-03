import { StaticImageData } from 'next/image'

// Image import
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

export const translations = {
    en: {
    hero: {
        title: "liassasel Developer",
        subtitle: "Full Stack Web Developer | Creating unique digital experiences",
    },
    about: {
        title: "About Me",
        description: "Hello, my name is Angel. I'm a full stack developer who specializes in building complete web solutions. My main focus is the Node stack, which I use to handle both the frontend and the backend. I work with frameworks like NestJS and Django, and I also use Laravel when projects require it. A key component of my work is using Docker for container management, and I have knowledge in implementing microservices, working with technologies like RabbitMQ and Grafana to ensure application efficiency and scalability.",
    },
    skills: {
        title: "My Skills",
        items: ["JavaScript", "TypeScript", "Docker", "NestJS", "React", "Next.js", "Node.js", "Python", "Django", "Git", "Laravel", "PHP"],
        description: "As a dedicated web developer, I'm passionate about staying at the forefront of technological advancements. I'm constantly seeking out new opportunities to learn and grow, whether it's through online courses, workshops, or hands-on projects. By keeping my skills sharp and up-to-date with the latest trends in web development, I'm able to deliver innovative and effective solutions for my clients.",
    },
    projects: {
        title: "Featured Projects",
        items: [
        { title: "Flutter Login", description: "Responsive login interface for desktop and mobile." },
        { title: "Translate App", description: "Translation application." },
        { title: "Coffee Shop", description: "A next.js design of a coffee shop." },
        ],
        viewProject: "View Project",
    },
    contact: {
        title: "Contact Me",
    },
    footer: {
        copyright: "All rights reserved.",
    },
    },
    es: {
    hero: {
        title: "liassasel Desarrollador",
        subtitle: "Desarrollador Web Full Stack | Creando experiencias digitales únicas",
    },
    about: {
        title: "Sobre Mí",
        description: "Hola, me llamo Angel. Soy un desarrollador full stack que se especializa en la construcción de soluciones web completas. Mi enfoque principal es el stack de Node, con el que abordo tanto el frontend como el backend. Trabajo con frameworks como NestJS y Django, y también utilizo Laravel cuando los proyectos lo requieren. Un componente clave de mi trabajo es el uso de Docker para la gestión de contenedores, y tengo conocimiento en la implementación de microservicios, trabajando con tecnologías como RabbitMQ y Grafana para asegurar la eficiencia y la escalabilidad de las aplicaciones.",
    },
    skills: {
        title: "Mis Habilidades",
        items: ["JavaScript", "TypeScript", "Dart", "Flutter", "React", "Next.js", "Node.js", "Python", "Django", "Git", "Laravel", "PHP"],
        description: "Como desarrollador web dedicado, me apasiona estar a la vanguardia de los avances tecnológicos. Busco constantemente nuevas oportunidades para aprender y crecer, ya sea a través de cursos en línea, talleres o proyectos prácticos. Al mantener mis habilidades actualizadas con las últimas tendencias en desarrollo web, puedo ofrecer soluciones innovadoras y efectivas para mis clientes.",
    },
    projects: {
        title: "Proyectos Destacados",
        items: [
        { title: "Login con Flutter", description: "Interfaz de inicio de sesión responsiva para escritorio y móvil." },
        { title: "Traductor", description: "Aplicación de traducción." },
        { title: "Dashboard de Análisis", description: "Un diseño con next.js de una cafetería" },
        ],
        viewProject: "Ver Proyecto",
    },
    contact: {
        title: "Contáctame",
    },
    footer: {
        copyright: "Todos los derechos reservados.",
    },
    },
}