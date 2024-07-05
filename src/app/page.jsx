import Image from "next/image";
import Logo from './assets/logo.png'

export default function Home() {
  return (
    <main className="bg-blue-100 bg-opacity-50 min-h-screen">
      <div class="container mx-auto md:max-w-4xl lg:max-w-6xl">
        <div class="flex min-h-screen justify-center items-center">
          <div class="grid grid-cols-1 md:grid-cols-2 bg-blue-500 md:max-h-[700px] rounded-xl shadow-lg">

            {/* <!-- First Section --> */}
            <div class="relative hidden md:block">
              <div class="absolute top-0 right-0">
                <svg width="116" height="122" viewBox="0 0 116 122" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-6 motion-safe:animate-pulse">
                  <path d="M92.3474 104.44H34.4855C32.8948 104.44 31.9006 102.65 32.6959 101.258L61.5275 51.151L90.359 1.0439C91.1543 -0.347967 93.1428 -0.347967 93.9382 1.0439L122.77 51.151L151.601 101.258C152.397 102.65 151.402 104.44 149.812 104.44H92.3474Z" fill="white" fill-opacity="0.2" />
                  <path d="M60.9314 120.744H3.06951C1.47881 120.744 0.484566 118.955 1.27992 117.563L30.1114 67.4558L58.943 17.3486C59.7383 15.9567 61.7267 15.9567 62.522 17.3486L91.3536 67.4558L120.185 117.563C120.98 118.955 119.986 120.744 118.396 120.744H60.9314Z" stroke="white" stroke-opacity="0.6" stroke-width="1.4268" stroke-miterlimit="10" />
                </svg>
              </div>
              <div class=" mt-[240px] ">
                <svg width="374" height="388" viewBox="0 0 374 388" fill="none" xmlns="http://www.w3.org/2000/svg" class="motion-safe:animate-pulse">
                  <path d="M-184.696 233.271L40.4612 2.35102C43.3274 -0.588554 48.1014 -0.585506 51.2821 2.35793L276.144 233.565C279.007 236.508 279.004 241.41 276.137 244.677L50.98 475.597C48.1138 478.536 43.3398 478.533 40.1591 475.59L-184.703 244.383C-187.566 241.113 -187.562 236.21 -184.696 233.271Z" fill="white" fill-opacity="0.2" />
                  <path d="M90.0118 235.408L227.59 94.3084C229.501 92.3487 232.365 92.3505 234.274 94.3126L371.354 235.587C373.262 237.55 373.26 240.491 371.349 242.451L233.771 383.55C231.86 385.51 228.996 385.508 227.087 383.546L89.6892 242.271C88.0992 240.309 88.101 237.368 90.0118 235.408Z" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-miterlimit="10" />
                </svg>
              </div>
            </div>

            {/* <!-- Second Section --> */}
            <div class="rounded-xl shadow-lg lg:px-20 md:px-12 md:max-h-[700px] md:pb-24 px-12 py-1.5 bg-white">
              <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center mt-24 pb-12 lg:pb-0 md:pb-0 ">
                  <div class="mb-5">
                    <Image src={Logo} alt="Logo" class="w-16 h-16 motion-safe:animate-bounce" />
                  </div>
                  <div class="font-sans font-inter mt-0 md:mt-2">
                    <h5 class=" font-bold text-wrap md:text-lg text-lg lg:text-xl md:text-nowrap text-gray-600">Human Resource Information System</h5>
                  </div>
                  <div class="font-sans font-inter mt-4">
                    <p class="text-xs text-wrap md:text-xs lg:text-sm text-gray-600">Enter your email and password to access your account</p>
                  </div>
                  <form class="w-full" method="post" action="">
                    <div class="mb-4 lg:mt-8 md:mt-8 mt-5">
                      <div class="fonts-sans font-inter">
                        <label for="Email Address" class=" text-gray-600 md:font-bold lg:font-bold lg:text-lg md:text-md text-sm font-bold flex flex-col">Email Address</label>
                        <input type="text" placeholder="Enter Email Address" name="Email Address" class="w-full border-b bg-white border-gray-300 text-sm lg:text-lg md:text-md focus:outline-none focus:border-gray-300" required />
                      </div>
                    </div>
                    <div class="mb-4 md:mt-8 lg:mt-8 mt-0">
                      <div class="fonts-sans font-inter">
                        <label for="password" class="text-gray-600 md:font-bold lg:font-bold lg:text-lg md:text-md text-sm font-bold lg:mt-5 flex flex-col">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" class="w-full border-b bg-white border-gray-300 text-sm lg:text-lg md:text-md focus:outline-none focus:border-gray-300" required />
                      </div>
                    </div>
                    <div class="font-sans font-inter text-right mb-6">
                      <div class="text-sky-600 hover:text-blue-800 text-xs md:text-sm">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>
                    <div class="font-sans font-inter font-semibold">
                      <button type="submit" class="bg-sky-800 text-white text-xs lg:text-sm md:text-md md:text-nowrap py-[8px] w-full text-nowrap rounded-lg hover:scale-95 ease-in cursor-pointer duration-200">Log in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
