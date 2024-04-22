import Link from 'next/link'
export default function Nav() {

  return (
    <>
      <nav className={`p-5 bg-svn-secondary text-white w-full flex items-center justify-between`}>
        <h1 className="text-2xl">Sovereign</h1>
        <div className="flex gap-8 text-lg">
          <Link href="/book">Book</Link>
          <Link href="/view">View</Link>
          <Link href="/add">Add</Link>
          <Link href="/docs">Docs</Link>
        </div>
      </nav>
    </>
  );
}
