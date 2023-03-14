import React from "react";

const Details = ({ data }) => {
  return (
    <div className="ml-2 ">
      <h1>Details</h1>
      <h3>Total registration : {data?.length}</h3>
      <div class="relative overflow-x-auto">
        <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              {/* <th scope="col" class="px-6 py-3">
                Event
              </th> */}
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                leader
              </th>
              <th scope="col" class="px-6 py-3">
                player1
              </th>
              <th scope="col" class="px-6 py-3">
                player2
              </th>
              <th scope="col" class="px-6 py-3">
                player3
              </th>
              <th scope="col" class="px-6 py-3">
                player4
              </th>
              <th scope="col" class="px-6 py-3">
                player5
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0
              ? data.map((val) => (
                  <>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                      >
                        {val?.username}
                      </th>
                      <td class="px-6 py-4 dark:text-black">{val?.category}</td>
                      <td className="px-6 py-4 dark:text-black">{val?.leader}</td>
                      <td class="px-6 py-4 dark:text-black">{val?.player1}</td>
                      <td class="px-6 py-4 dark:text-black">{val?.player2}</td>
                      <td class="px-6 py-4 dark:text-black">{val?.player3}</td>
                      <td class="px-6 py-4 dark:text-black">{val?.player4}</td>
                      <td class="px-6 py-4 dark:text-black">{val?.player5}</td>
                    </tr>
                  </>
                ))
              : "No data entried"}
            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                {data[0]?.username}
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
