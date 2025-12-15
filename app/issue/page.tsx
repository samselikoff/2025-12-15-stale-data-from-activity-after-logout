import { cookies } from 'next/headers';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <p>Sample issue content.</p>

      <Suspense>
        {cookies().then((c) => (
          <>
            {c.get('name')?.value ? (
              <form className="mt-8" action="">
                <p>Add your reply:</p>
                <div className="mt-2">
                  <textarea
                    className="border px-2 py-1"
                    placeholder="Reply..."
                  />
                </div>
              </form>
            ) : (
              <p className="italic mt-4 text-gray-500">Sign in to reply.</p>
            )}
          </>
        ))}
      </Suspense>
    </div>
  );
}
