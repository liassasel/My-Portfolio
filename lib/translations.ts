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
        description: "Hi, my name is Angel, and I'm a web | mobile developer passionate about creating innovative and functional solutions. I have experience with both front-end and back-end technologies, allowing me to build robust, scalable, and user-focused web and mobile applications. I enjoy tackling new challenges and collaborating on projects that drive digital growth. I'm always eager to learn and refine my skills, combining creativity and efficiency to deliver high-impact results.",
    },
    skills: {
        title: "My Skills",
        items: ["JavaScript", "TypeScript", "Dart", "Flutter", "React", "Next.js", "Node.js", "Python", "Django", "Git", "Laravel", "PHP"],
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
        description: "Hola, me llamo Angel y soy un desarrollador web | mobile apasionado por crear soluciones innovadoras y funcionales. Tengo experiencia en tecnologías tanto de front-end como de back-end, lo que me permite construir aplicaciones web y móviles robustas, escalables y centradas en la experiencia del usuario. Me encanta enfrentar nuevos retos y colaborar en proyectos que impulsen el crecimiento digital. Siempre estoy en busca de aprender y perfeccionar mis habilidades, combinando creatividad y eficiencia para ofrecer resultados de alto impacto.",
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