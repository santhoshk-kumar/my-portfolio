const projects = [
  {
    title: "Portfolio Website",
    description: `Designed and developed a fully responsive portfolio using React.js and Material UI, structured for scalability and component reusability.
                  Integrated Formspree API for contact form submissions with environment variable support to maintain security and separation of concerns.
                  Added Framer Motion to animate page transitions, section reveals, and splash screens, enhancing user engagement and overall UI experience.`,
    technologies: ["React", "Material UI", "JavaScript"]
  },
  {
    title: "Market Place Platform",
    description: `Implemented RESTful APIs for product catalog management, user authentication, and order processing using Node.js and Express.js.
                  Integrated MongoDB to store and manage product data, user profiles, and order history, ensuring data consistency and efficient retrieval.
                  Designed API endpoints for seamless communication between frontend and backend components.`,
    technologies: ["Node js", "Express.js", "MongoDB", "React Js "]
  },
   {
    title: "Insurance Document Analysis",
    description: `Built a web application to extract Insurance PDF documents using Python and Flask.
                  Stored the data in postgresql tables and documents in vector database chroma for efficient semantic search.
                  Integrated Langchain and OpenAI models to enable a chat interface for querying insurance related data.
                  Deployed the application for secure, scalable and interactive document retrieval and analysis.`,
    technologies: ["Node js", "Express.js", "MongoDB", "React Js "]
  }
];

export default projects;
