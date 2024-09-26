"use client";

import { supabase } from '@/components/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const SignupPage = () => {
  const router = useRouter();  // Next.js router for navigation
  const [loading, setLoading] = useState(false);

  // Handle OAuth sign-in for Google or GitHub
  const handleOAuthSignIn = async (provider: 'google' | 'github') => {
    setLoading(true); // Optional: To show a loading state

    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      console.error('Error during sign-in:', error.message);
    } else {
      // Redirect to /book after successful sign-in
      router.push('/book');
    }

    setLoading(false); // Reset loading state
  };

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Create your account
              </h3>
              <p className="mb-11 text-center text-base font-medium text-body-color">
                It’s totally free and super easy
              </p>

              {/* Google Sign-in Button */}
              <button
                onClick={() => handleOAuthSignIn('google')}
                className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
                disabled={loading}
              >
                <span className="mr-3">
                  {/* Google SVG */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    {/* SVG Paths */}
                  </svg>
                </span>
                {loading ? 'Signing in...' : 'Sign in with Google'}
              </button>

              {/* GitHub Sign-in Button */}
              <button
                onClick={() => handleOAuthSignIn('github')}
                className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
                disabled={loading}
              >
                <span className="mr-3">
                  {/* GitHub SVG */}
                  <svg width="22" height="22" viewBox="0 0 64 64" fill="currentColor">
                    {/* SVG Paths */}
                  </svg>
                </span>
                {loading ? 'Signing in...' : 'Sign in with GitHub'}
              </button>

              {/* Form for email sign-up */}
              <form>
                {/* Full name, email, password fields */}
              </form>

              <p className="text-center text-base font-medium text-body-color">
                Already using Smart Life?{' '}
                <Link href="/signin" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
