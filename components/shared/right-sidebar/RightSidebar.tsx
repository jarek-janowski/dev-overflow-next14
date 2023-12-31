import Link from "next/link";
import Image from "next/image";
import React from "react";
import RenderTag from "../RenderTag";

const topQuestionsData = [
  {
    _id: "1",
    title:
      "Best practices for data fetching in a Next.js application with Server-Side-Rendering (SSR)?",
  },
  {
    _id: "2",
    title: "Is it only me or the font is bolder than necessary?",
  },
  {
    _id: "3",
    title: "Can I get the course for free?",
  },
  {
    _id: "4",
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: "5",
    title: "Async/Await Function Not Handling Errors Properly",
  },
];

const popularTagsData = [
  {
    _id: "1",
    name: "nextjs",
    totalQuestions: 23,
  },
  {
    _id: "2",
    name: "test",
    totalQuestions: 18,
  },
  {
    _id: "3",
    name: "react",
    totalQuestions: 16,
  },
  {
    _id: "4",
    name: "css",
    totalQuestions: 12,
  },
  {
    _id: "5",
    name: "next js",
    totalQuestions: 9,
  },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar light-border background-light900_dark200 sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex flex-col gap-[30px]">
          {topQuestionsData.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark200_light900">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTagsData.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
