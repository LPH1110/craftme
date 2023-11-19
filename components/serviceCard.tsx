import React, { ReactElement } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactElement;
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <article className="w-full space-y-3 p-6 rounded-lg border border-card-border">
      <div className="inline-block p-4 bg-light-gray rounded-full">{icon}</div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-semi-gray">{description}</p>
    </article>
  );
};

export default ServiceCard;
