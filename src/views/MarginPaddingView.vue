<template>
  <main class="min-h-screen lg:grid lg:grid-cols-2 lg:grid-rows-2">
    <!-- =================================== -->
    <!-- Message Card-1  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-neutral-950 p-16">
      <div class="flex w-64 flex-col rounded-md bg-gray-50 text-neutral-950 shadow-md">
        <span class="m-4 grid h-7 w-7 place-items-center rounded-full bg-emerald-400 text-white"
          ><i class="fa-solid fa-mug-hot"></i
        ></span>
        <p class="m-4 mt-0">Code fueled, syntax ruled!</p>
      </div>
    </section>

    <!-- =================================== -->
    <!-- Avatar Card-2  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-gray-50 p-16">
      <div class="flex max-w-xs items-center gap-3 rounded-md bg-emerald-400 p-4 text-neutral-950">
        <img
          class="size-12 rounded-full border-2 border-blue-300"
          src="https://i.postimg.cc/PJ2vsgBS/tedlasso.webp"
        />
        <div>
          <h2 class="font-semibold">Jason Sudeikis</h2>
          <h3 class="text-xs text-gray-50">Ted Lasso</h3>
        </div>
      </div>
    </section>

    <!-- =================================== -->
    <!-- Avatar Card-3  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-emerald-400 p-16">
      <div class="flex max-w-xs items-center rounded-lg bg-white p-5 text-neutral-950 shadow-lg">
        <img class="mr-4 h-12 w-12 rounded-full" src="https://i.postimg.cc/MGPqXNXb/roy.webp" />
        <div>
          <h2 class="font-semibold">Brett Goldstein</h2>
          <h3 class="text-xs text-indigo-500">July 17, 1980 · Roy</h3>
        </div>
        <span class="ml-6 mr-2 grid h-8 w-8 cursor-pointer place-items-center text-base"
          ><i class="fa-solid fa-ellipsis-vertical"></i
        ></span>
      </div>
    </section>

    <!-- =================================== -->
    <!-- Skills Card-4  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-blue-300 p-16">
      <div class="flex w-72 flex-col rounded-b-lg rounded-t-xl bg-gray-50 shadow-lg">
        <h2 class="relative rounded-t-xl bg-indigo-500 p-4 font-semibold text-gray-50">
          3 Must-have PHP Skills
          <button
            class="absolute bottom-0 right-4 -mb-6 h-12 w-12 cursor-pointer rounded-full bg-emerald-400 text-gray-50"
          >
            <span><i class="fa-solid fa-bars"></i></span>
          </button>
        </h2>

        <ul class="list-rocket my-4 pl-8">
          <li class="mb-2 pl-2">Understanding of OOP</li>
          <li class="mb-2 pl-2">Knowledge of PHP Frameworks</li>
          <li class="mb-2 pl-2">Familiarity with MySQL</li>
        </ul>
      </div>
    </section>

    <!-- =================================== -->
    <!-- Pill Case Navbar  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-indigo-500 p-16">
      <nav
        class="flex h-16 w-[26rem] items-center justify-between rounded-full bg-gray-50 px-2 text-neutral-950 shadow-lg"
      >
        <button class="flex h-16 w-16 items-center justify-center text-xl">
          <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="flex gap-4 font-semibold">
          <button
            class="border-r border-indigo-500 pr-4 transition-colors last:border-none hover:border-emerald-400 hover:text-emerald-400"
          >
            Dashboard
          </button>
          <button
            class="border-r border-indigo-500 pr-4 transition-colors last:border-none hover:border-emerald-400 hover:text-emerald-400"
          >
            Profile
          </button>
          <button
            class="border-r border-indigo-500 pr-4 transition-colors last:border-none hover:border-emerald-400 hover:text-emerald-400"
          >
            Messages
          </button>
        </nav>
      </nav>
    </section>

    <!-- =================================== -->
    <!-- Inline Search Input   -->
    <!-- =================================== -->

    <section class="grid min-h-screen place-items-center bg-neutral-950 p-16">
      <div class="relative">
        <input
          class="peer/changeIconColor h-16 w-56 rounded-md border-2 border-neutral-500 bg-neutral-950 pl-14 pr-4 text-gray-50 placeholder:text-neutral-500 focus:border-none focus:outline-none focus:ring focus:ring-emerald-400"
          placeholder="Search..."
        />
        <span
          class="absolute left-5 top-1/2 grid -translate-y-1/2 place-items-center text-xl text-neutral-500 transition-colors duration-300 peer-focus/changeIconColor:text-emerald-400"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </section>

    <!-- =================================== -->
    <!-- Avatar with Gradient Border  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-gray-50 p-16">
      <span class="flex rounded-full bg-gradient-to-t from-neutral-950 to-emerald-400 p-[0.075rem]">
        <img
          class="h-28 w-28 rounded-full border-2 border-gray-50"
          src="https://i.pravatar.cc/300"
        />
      </span>
    </section>

    <!-- =================================== -->
    <!-- Responsive Squares  -->
    <!-- =================================== -->
    <section class="grid min-h-screen place-items-center bg-emerald-400 p-16">
      <div class="flex w-full flex-wrap text-6xl">
        <div class="relative w-1/2 bg-neutral-950 pt-[50%]">
          <div class="absolute left-0 top-0 z-10 grid h-full w-full place-items-center p-4">😂</div>
        </div>

        <div class="relative w-1/2 bg-gray-50 pt-[50%]">
          <div class="absolute left-0 top-0 z-10 grid h-full w-full place-items-center p-4">👌</div>
        </div>

        <div class="relative w-1/2 bg-blue-300 pt-[50%]">
          <div class="absolute left-0 top-0 z-10 grid h-full w-full place-items-center p-4">😴</div>
        </div>

        <div class="relative w-1/2 bg-indigo-500 pt-[50%]">
          <div class="absolute left-0 top-0 z-10 grid h-full w-full place-items-center p-4">🙄</div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.list-rocket {
  list-style: '🚀';
}
</style>
