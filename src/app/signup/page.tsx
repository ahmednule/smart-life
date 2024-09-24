"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
//import { supabase } from '../../config/supabaseClient';


const SignupPage = () => {
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

              {/* Supabase Auth Component */}
              <div className="mb-6">
                <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                  theme="dark"
                  providers={['google', 'github']}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
