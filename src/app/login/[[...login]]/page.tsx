import { SignIn } from '@clerk/nextjs'
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Base Camp Alpha
            </h1>
            <SignIn />

            <p className="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
            </p>
        </div>
    </main>
  );
}
