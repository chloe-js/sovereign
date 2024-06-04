import Link from "next/link";
export default function Nav() {
  return (
      <nav
        className={`flex text-white top-0 py-3 flex-wrap justify-between bg-svn-secondary items-center px-20`}
      >
        <h1 className="text-3xl font-semibold">Sovereign</h1>
        <div className="flex gap-8 text-lg items-center">
          <Link href="/book" className="flex flex-col -space-y-2 nav-item">
            <span>Book </span>
            <span className="text-sm">interview</span>
          </Link>
          <span>|</span>
          <Link href="/view" className="flex flex-col -space-y-2 nav-item">
            <span>View</span>
            <span className="text-sm">interviews</span>
          </Link>
          <span>|</span>
          <Link href="/add" className="flex flex-col -space-y-2 nav-item" >
            <span>Add</span>
            <span className="text-sm">interviewer</span>
          </Link>
        </div>
      </nav>
  );
}
