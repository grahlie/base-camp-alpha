import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
    return (
        <main className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Base Camp Alpha
            </h1>

            <SignUp />
        </div>
    </main>
    );
  }
