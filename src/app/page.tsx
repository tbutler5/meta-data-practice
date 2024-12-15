import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Metadata Practice Tasks</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/tasks/task1">
            <p className="text-blue-500 hover:underline">Task 1: Customer Invoice Display</p>
          </Link>
        </li>
        <li>
          <Link href="/tasks/task2">
            <p className="text-blue-500 hover:underline">Task 2: Usage Data Table</p>
          </Link>
        </li>
        <li>
          <Link href="/tasks/task3">
            <p className="text-blue-500 hover:underline">Task 3: Billing Plans Display</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}