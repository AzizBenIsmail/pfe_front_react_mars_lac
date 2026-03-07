import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('data:image/jpeg;base64,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')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Slame
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    This is a simple example of a Landing Page you can build
                    using Notus React. It features multiple CSS components based
                    on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
 <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Check Notus React!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-1-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
