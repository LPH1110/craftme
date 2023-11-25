import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectCardProps = {
  project: {
    id: string;
    projectName: string;
    thumbnail: string;
    service: string;
    publishedDate: string;
    demoURL: string;
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const projectThumb = project.thumbnail;
  return (
    <div className="bg-white rounded-3xl transition-all hover:shadow-2xl hover:shadow-sea/80">
      <div
        className="bg-no-repeat bg-cover bg-center pt-[70%] rounded-t-3xl"
        style={{
          backgroundImage: `url(${projectThumb})`,
        }}
      ></div>
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 p-6 lg:gap-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-xl">{project.projectName}</h4>
          <p className="text-semi-gray text-sm">
            {project.service} . {project.publishedDate}
          </p>
        </div>
        <Link
          href={`/projects/${project.id}`}
          target="_blank"
          className="w-full lg:max-w-[10rem] py-3 px-10 text-center rounded-full bg-mountain text-white hover:shadow-lg transition-all"
        >
          See project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
