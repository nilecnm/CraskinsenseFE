import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface ICard {
  fullName: string;
  role: string;
  description: string;
  photo: string;
  center?: boolean;
}

function Card({ fullName, role, description, photo, center }: ICard) {
  return (
    <div
      className={`items-center bg-gray-50 border border-gray-300 rounded-lg shadow grid-cols-3 grid col-span-2 ${
        center && "lg:col-start-2"
      }`}
    >
      <a className="grid col-span-1">
        <img
          width={400}
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg block"
          // src={`/assets/${photo}.jpg`}
          src={photo}
          alt="Bonnie Avatar"
        />
      </a>
      <div className="p-5 grid col-span-2">
        <h3 className="text-lg font-bold tracking-tight text-gray-900">
          <a href="#">{fullName}</a>
        </h3>
        <span className="text-gray-500">{role}</span>
        <p className="mt-3 mb-4 font-light text-gray-500">{description}</p>
        <ul className="flex space-x-4 sm:mt-0">
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="isolate bg-white px-6 py-8 sm:py-16 ;g:px-8 -z-10">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-2 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    3 Easy Steps to Use
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    CRA SkinSense AI
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    An automated system for measureing the thickness of
                    epidermal skin tissue in immunohistopathological images
                    using Imaging Processing and Artificial Intelligence
                    Technology.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Step 1:
                      </dt>
                      <dd className="inline">
                        Upload Images. Now, let&apos;s upload an image. The
                        supported image formats are PNG, JPG and TIF. After
                        selecting your image, click the &apos;Damage Analyze
                        button to begin&apos;
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Step 2:
                      </dt>
                      <dd className="inline">
                        Wait for the CRA SkinSense AI to analyze the damage from
                        the uploaded image. By analyzing damage with AI, digital
                        transformation techniques are used to calculate the
                        thickness of the epidermis using a heatmap, and the
                        results can also be displayed in a graph.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                          <path
                            fill-rule="evenodd"
                            d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Step 3:
                      </dt>
                      <dd className="inline">
                        Review and Save Results. In this step, the web
                        application provides the number of evaluated points, the
                        maximum and minimum thickness values, and the average
                        thickness of the skin layer. Additionally, a graph
                        displaying the distribution of damage analysis is can
                        save these results for further analysis. Simply download
                        the data and results tables directly from our web
                        application
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <img
                src="/assets/method.png"
                alt="method"
                className="w-full sm:w-3/4 md:w-2/4 max-w-none ring-gray-400/10 mx-auto mt-0 sm:mt-16 text-center"
              />
            </div>
          </div>
        </div>
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                Our Team
              </h2>
              <p className="font-light g:mb-16 sm:text-xl text-gray-900">
                Explore the whole collection of open-source web components and
                elements built with the utility classNamees from Tailwind
              </p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-4 grid-cols-2">
              <Card
                center
                fullName="Anyamanee Chatsirisupachai"
                role="Assistant Professor"
                description="A PSCM researcher and inventor, specializes in biology, focusing on innovative solutions for skin damage prevention"
                photo="/assets/person1.png"
              />
              <Card
                fullName="Pittayaporn Musika"
                role="Data Scientist"
                description="Health data science who explores the application of machine learning in biomedical imaging"
                photo="/assets/person2.png"
              />
              <Card
                fullName="Pornpitchaphan Niemhom"
                role="Data Scientist"
                description="Health data science who explores the application of machine learning in biomedical imaging"
                photo="/assets/person3.png"
              />
              <Card
                fullName="Trirat Arromrit"
                role="Data Scientist"
                description="A skilled Data Scientist, specializes in leveraging data analytics and machine learning"
                photo="/assets/person4.png"
              />
              <Card
                fullName="Chanamet Akkarakittichok"
                role="Web Developer"
                description="Trainee web developer who committed to delivering efficient and user friendly solutions"
                photo="/assets/person5.png"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
