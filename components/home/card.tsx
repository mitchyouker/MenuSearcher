import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Card({ content }: { content: ReactNode }) {
  return (
    <div
      className={`relative col-span-1 h-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md`}
    >
      <div className="flex h-fit items-center justify-center p-10">
        {content}
      </div>
    </div>
  );
}
