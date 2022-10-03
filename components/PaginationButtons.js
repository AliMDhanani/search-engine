import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PaginationButtons = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div>
        {startIndex >= 10 && (
            <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                <div>
                    <HiChevronLeft  className="h-5"/>
                    <p>Previous</p>
                </div>
            </Link>
        )}
        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
            <div>
                <HiChevronRight className="h-5" />
                <p>Next</p>
            </div>
        </Link>
    </div>
  );
};

export default PaginationButtons;
