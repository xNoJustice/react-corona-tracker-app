import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className="flex justify-between top-0">
      <div className="w-72 bg-white border-b-8 mr-2 h-60 rounded border-indigo-500 dark:bg-gray-800 shadow text-center p-4">
        <div className="overflow-hidden">
          <div className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-300">
            Infected
          </div>
          <div className="leading-loose text-2xl font-bold text-gray-700 dark:text-gray-50 mb-4">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.75}
              separator=","
            />
          </div>
          <div className="font-bold text-md mb-2 text-gray-500 dark:text-gray-300">
            <span>{new Date(lastUpdate).toDateString()}</span>
          </div>
          <div className="px-4 mt-2 dark:text-gray-100">
            Number of active cases from COVID-19.
          </div>
        </div>
      </div>
      <div className="w-72 bg-white border-b-8 mr-2 h-60 rounded border-green-500 dark:bg-gray-800 shadow text-center p-4">
        <div className="overflow-hidden">
          <div className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-300">
            Recovered
          </div>
          <div className="leading-loose text-2xl font-bold text-gray-700 dark:text-gray-50 mb-4">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.75}
              separator=","
            />
          </div>
          <div className="font-bold text-md mb-2 text-gray-500 dark:text-gray-300">
            <span>{new Date(lastUpdate).toDateString()}</span>
          </div>
          <div className="px-4 mt-2 dark:text-gray-100">
            Number of recoveries from COVID-19.
          </div>
        </div>
      </div>
      <div className="w-72 bg-white border-b-8 h-60 rounded border-red-500 dark:bg-gray-800 shadow text-center p-4">
        <div className="overflow-hidden">
          <div className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-300">
            Deaths
          </div>
          <div className="leading-loose text-2xl font-bold text-gray-700 dark:text-gray-50 mb-4">
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.75}
              separator=","
            />
          </div>
          <div className="font-bold text-md mb-2 text-gray-500 dark:text-gray-300">
            <span>{new Date(lastUpdate).toDateString()}</span>
          </div>
          <div className="px-4 mt-2 dark:text-gray-100">
            Number of deaths caused by COVID-19.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
