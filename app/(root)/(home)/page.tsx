import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    tags: [{ _id: "1", name: "next.js" }],
    author: { _id: "1", name: "John Conerry Testowy", avatar: "" },
    createdAt: new Date("2022-09-01T12:00:00.000Z"),
    upvotes: 64,
    answers: [],
    views: 3700000,
  },
  {
    _id: "@",
    title: "Is it only me or the font is bolder than necessary?",
    tags: [
      { _id: "2", name: "nextjs" },
      { _id: "3", name: "test" },
      { _id: "4", name: "react" },
    ],
    author: { _id: "2", name: "Zack | Typescript ninja", avatar: "" },
    createdAt: new Date("2023-10-01T12:00:00.000Z"),
    upvotes: 1,
    answers: [],
    views: 3200,
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4  text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div
        className="mt-11 flex flex-wrap justify-between
      gap-5 max-sm:flex-col sm:items-center"
      >
        <LocalSearch
          route="/"
          iconPosition="left"
          imageSrc="/assets/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
          placeholder="Select a Filter"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description=" Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. Our query could be the next big thing others learn from. Get
            involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
