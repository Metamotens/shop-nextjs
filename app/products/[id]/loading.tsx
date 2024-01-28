export default function Loading() {
  return (
    <section className="flex items-center justify-center mt-32">
      <article className="flex flex-row bg-white w-2/3 p-4 space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
        <div className="flex items-center justify-center w-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
          <svg
            className="w-[300px] h-[400px] text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          ></svg>
        </div>
        <div className="space-y-6 grid place-content-center w-full">
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
          <div className="h-12 bg-gray-200 rounded-lg dark:bg-gray-700 w-96 mb-4"></div>
          <div className="h-12 bg-gray-200 rounded-lg dark:bg-gray-700 w-96 mb-4"></div>
        </div>
      </article>
    </section>
  );
}
