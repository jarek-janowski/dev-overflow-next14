import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        className="mt-11 flex justify-between gap-5
      max-sm:flex-col sm:items-center"
      >
        <LocalSearch
          route="/"
          iconPosition="left"
          imageSrc="/assets/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </div>
    </>
  );
}
