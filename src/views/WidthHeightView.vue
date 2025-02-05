<template>
  <main class="min-h-screen lg:grid lg:grid-cols-2 lg:grid-rows-2">
    <!-- =================================== -->
    <!-- Height Input & Button  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-emerald-900 p-16">
      <div class="flex gap-4">
        <!-- Input: Designation [h-12] & min-w-[12rem] -->
        <input
          class="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-hidden focus:ring-3 focus:ring-emerald-600"
          type="text"
          placeholder="Designation"
        />
        <!-- Button: Submit [h-12] -->
        <button
          class="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-hidden focus:ring-3 focus:ring-emerald-600"
        >
          Submit
        </button>
      </div>
    </section>

    <!-- =================================== -->
    <!-- Min-height Alert  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-emerald-200 p-16">
      <div class="flex gap-4">
        <!-- Alert Red Card {min-h-[1.75rem]} -->
        <div class="flex min-h-[9rem] w-48 flex-col rounded-md bg-rose-500 px-4 py-6 text-rose-50">
          <span
            class="mb-4 grid h-7 max-h-[1.75rem] min-h-[1.75rem] w-7 min-w-[1.75rem] max-w-[1.75rem] place-items-center rounded-full bg-rose-600/90"
          >
            <i class="fa-solid fa-xmark"></i>
          </span>
          <p>We encountered an issue. Please try again later.</p>
        </div>

        <!-- Alert Green Card {min-h-[1.75rem]} -->
        <div
          class="flex min-h-[9rem] w-48 flex-col rounded-md bg-emerald-500 px-4 py-6 text-emerald-50"
        >
          <span
            class="mb-4 grid h-7 max-h-[1.75rem] min-h-[1.75rem] w-7 min-w-[1.75rem] max-w-[1.75rem] place-items-center rounded-full bg-emerald-600/90"
          >
            <i class="fa-solid fa-check"></i>
          </span>
          <p>Congratulations! Your application has been successfully updated.</p>
        </div>
      </div>
    </section>

    <!-- =================================== -->
    <!-- Max Height: Expand/collapse {peer-checked/showLabel:max-h-52}  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-emerald-800 p-16">
      <label>
        <input class="peer/showLabel absolute scale-0" type="checkbox" />
        <span
          class="block max-h-14 max-w-xs overflow-hidden rounded-lg bg-emerald-100 px-4 py-0 text-cyan-800 shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52"
        >
          <h3 class="flex h-14 cursor-pointer items-center font-bold">Expand & Collapse Me</h3>
          <p class="mb-2">
            You've crafted a sleek collapsible panel using Tailwind CSS without the need for
            JavaScript. Impressive! 😎
          </p>
        </span>
      </label>
    </section>

    <!-- =================================== -->
    <!-- Width: Login {w-72}  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-emerald-500 p-16">
      <div class="w-72 rounded-md bg-emerald-300 p-4 pt-0 shadow-lg">
        <header class="flex h-16 items-center justify-between font-bold text-emerald-950">
          <span>Login</span>
          <i class="fa-solid fa-xmark"></i>
        </header>
        <form class="grid gap-3">
          <!-- Username Input -->
          <input
            class="h-10 rounded-xs bg-emerald-100/50 px-2 text-emerald-950 placeholder:text-emerald-600/80 focus:outline-hidden focus:ring-3 focus:ring-emerald-400"
            type="text"
            placeholder="Enter your username"
          />
          <!-- Password Input -->
          <input
            class="h-10 rounded-xs bg-emerald-100/50 px-2 text-emerald-950 placeholder:text-emerald-600/80 focus:outline-hidden focus:ring-3 focus:ring-emerald-400"
            type="password"
            placeholder="Enter your password"
          />
          <!-- Sign In Button -->
          <button
            class="flex h-10 items-center justify-between rounded-xs bg-emerald-700 px-2 text-emerald-100 transition-colors duration-300 hover:bg-emerald-800 focus:outline-hidden focus:ring-3 focus:ring-emerald-400"
            type="button"
          >
            <span>Sign In</span>
            <span><i class="fa-solid fa-angle-right"></i></span>
          </button>
        </form>
      </div>
    </section>

    <!-- =================================== -->
    <!-- Max-width: Address {max-w-xs}  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-emerald-300 p-16">
      <div
        class="flex max-w-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg"
      >
        <div class="min-w-0">
          <h2 class="overflow-hidden text-ellipsis whitespace-nowrap">
            742 Evergreen Terrace, Springfield Country
          </h2>
        </div>
      </div>
    </section>

    <!-- =================================== -->
    <!-- Width-min-max: Table { w-40 min-w-[10rem] max-w-[10rem] } -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-emerald-900 p-16">
      <div class="rounded-lg bg-emerald-50 p-4 leading-normal text-emerald-800">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="w-40 min-w-[10rem] max-w-[10rem] leading-normal text-emerald-500">
                Creators
              </th>
              <th class="w-40 min-w-[10rem] max-w-[10rem] leading-normal text-emerald-500">
                Frameworks
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="h-12 align-middle">Adam Wathan</td>
              <td class="h-12 align-middle">Tailwind CSS</td>
              <td class="h-12 align-middle">
                <i class="fa-solid fa-toggle-on text-2xl"></i>
              </td>
            </tr>
            <tr>
              <td>Taylor Otwell</td>
              <td>Laravel</td>
              <td>
                <i class="fa-solid fa-toggle-on text-2xl"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>
