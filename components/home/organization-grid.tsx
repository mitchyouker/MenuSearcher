export default function OrganizationGrid() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
        Organization
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="organization"
            className="mb-2 block text-lg font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="organization"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            autoComplete="none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="logo"
            className="mb-2 block text-lg font-medium text-gray-900 dark:text-white"
          >
            Logo URL
          </label>
          <input
            type="url"
            id="logo"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            autoComplete="none"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="website"
          className="mb-2 block text-lg font-medium text-gray-900 dark:text-white"
        >
          Website URL
        </label>
        <input
          type="url"
          id="website"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          autoComplete="none"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-lg font-medium text-gray-900 dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          autoComplete="none"
          required
        />
      </div>
      <div>
        <label
          htmlFor="category"
          className="mb-2 block text-lg font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <input
          type="url"
          id="category"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Italian"
          autoComplete="none"
          required
        />
      </div>
    </div>
  );
}
