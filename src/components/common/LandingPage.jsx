import React from "react";
import PageLayout from "../../pages/Layout/PageLayout";

const LandingPage = () => {
  return (
    <PageLayout>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1>LandingPage</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <button className="rounded-lg bg-orange-500 px-6 py-3 text-white">
          Get Started
        </button>
      </div>
    </PageLayout>
  );
};

export default LandingPage;