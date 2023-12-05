import React from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Project 1",
        description: "Description for Project 1.",
        imageUrl: "https://cdn3.kars.bio/assets/designs/15-pro.png",
        link: "https://kars.bio",
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description for Project 2.",
        imageUrl: "https://cdn3.kars.bio/assets/designs/cover.png",
        link: "https://karstest.pro",
    },
];

const Projects: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative overflow-hidden group m-4 rounded-md"
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-60 object-cover transition-transform transform group-hover:scale-110 group-hover:blur-md"
                            />
                        </a>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="text-white text-center">
                                <h3 className="text-lg font-bold">
                                    {project.title}
                                </h3>
                                <p className="text-sm">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
