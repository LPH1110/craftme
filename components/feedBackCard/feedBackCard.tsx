import Image from "next/image";
import React from "react";

type FeedBackCardProps = {
  feedBack: {
    id: string;
    customerName: string;
    customerTitle: string;
    avatarURL: string;
    content: string;
  };
};

const FeedBackCard = ({ feedBack }: FeedBackCardProps) => {
  return (
    <div className="space-y-4 p-2">
      <div>
        <p className="text-semi-gray">"{feedBack.content}"</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="rounded-full">
          <Image
            className="rounded-full"
            width={50}
            height={50}
            src={feedBack.avatarURL}
            alt={feedBack.customerName}
          />
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold">{feedBack.customerName}</h4>
          <p className="text-sm text-semi-gray">{feedBack.customerTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
