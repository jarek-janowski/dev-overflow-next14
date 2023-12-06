import React from "react";
import Link from "next/link";

type Props = {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
};

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex items-center justify-between">
      <div className="text-dark200_light900 background-light800_dark300 subtle-medium text-light400_light500 rounded-md px-4 py-2 uppercase shadow">
        {name}
      </div>
      {showCount ? (
        <p className="small-medium text-dark200_light900">{totalQuestions}</p>
      ) : null}
    </Link>
  );
};

export default RenderTag;
