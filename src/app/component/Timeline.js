"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/Timeline.css";

const Timeline = () => {
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "500px top",
        scrub: 1.5,
        pin: true,
      },
    });

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      timeline.to(".test_scroll", {
        x: -2300,
      });
    } else {
      timeline.to(".test_scroll", {
        x: -2000,
      });
    }
    const cancelFunction = () => {
      timeline.kill();
    };

    return () => {
      cancelFunction();
    };
  }, []);

  return (
    <div className="scroll-section-outer">
      <div ref={triggerRef}>
        <div className="scroll-section-inner">
          <div className="scroll-section">
            <div className="container">
              <h1 className="service_head_ex">Experience</h1>
              <div className="test_scroll">
                <div className="container team-ache">
                  <svg
                    width="200%"
                    height="auto"
                    id="svg_id"
                    viewBox="0 0 2628 565"
                    fill="none"
                  >
                    <g id="Group91">
                      <g id="Group">
                        <g id="Group 89">
                          <g id="eo6">
                            <g
                              id="Rectangle 87"
                              filter="url(#filter0_d_263_137)"
                            >
                              <rect
                                x="1975"
                                y="348"
                                width="626"
                                height="182"
                                rx="9"
                                fill="white"
                              />
                              <text
                                x="2036"
                                y="400"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; March 2013 - March 2014
                              </text>
                              <text
                                x="2036"
                                y="440"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="#27b9ec"
                                fontWeight="bold"
                              >
                                &#8226; Compulsory Rotatory Internship
                              </text>
                              <text
                                x="2036"
                                y="480"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; KLE's Dr Prabhakar Kore Hospital,
                                Belgaum, Karnataka
                              </text>
                            </g>
                            <rect
                              id="Rectangle 90"
                              x="1975"
                              y="348"
                              width="40"
                              height="182"
                              fill="#27B9EC"
                            />
                            <path
                              id="Vector 9"
                              d="M2233 293V348"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </g>
                          <g id="eo5">
                            <g
                              id="Rectangle 87_2"
                              filter="url(#filter1_d_263_137)"
                            >
                              <rect
                                x="1635"
                                y="19"
                                width="626"
                                height="182"
                                rx="9"
                                fill="white"
                              />
                              <text
                                x="1696"
                                y="80"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; Aug 2015 - July 2018
                              </text>
                              <text
                                x="1696"
                                y="120"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="#27b9ec"
                                fontWeight="bold"
                              >
                                &#8226; Junior Resident (General medicine)
                              </text>
                              <text
                                x="1696"
                                y="160"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; St. Theresa Hospital, Hyderabad
                              </text>
                            </g>
                            <rect
                              id="Rectangle 90_2"
                              x="1635"
                              y="19"
                              width="40"
                              height="182"
                              fill="#27B9EC"
                            />
                            <path
                              id="Vector 10"
                              d="M1996 201L1996 293"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </g>
                          <g id="eo4">
                            <g
                              id="Rectangle 87_3"
                              filter="url(#filter2_d_263_137)"
                            >
                              <rect
                                x="1189"
                                y="348"
                                width="626"
                                height="182"
                                rx="9"
                                fill="white"
                              />
                              <text
                                x="1250"
                                y="400"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; Aug 2018 - July 2019
                              </text>
                              <text
                                x="1250"
                                y="440"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="#27b9ec"
                                fontWeight="bold"
                              >
                                &#8226; Consultant General (Internal Medicine)
                              </text>
                              <text
                                x="1250"
                                y="480"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; Lotus Cure Hospital, Secunderabad,
                                Telangana
                              </text>
                            </g>
                            <rect
                              id="Rectangle 90_3"
                              x="1189"
                              y="348"
                              width="40"
                              height="182"
                              fill="#27B9EC"
                            />
                            <path
                              id="Vector 8"
                              d="M1470 294L1470 348"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </g>
                          <g id="eo3">
                            <g
                              id="Rectangle 87_4"
                              filter="url(#filter3_d_263_137)"
                            >
                              <rect
                                x="849"
                                y="19"
                                width="626"
                                height="182"
                                rx="9"
                                fill="white"
                              />
                              <text
                                x="910"
                                y="80"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; Aug 2019 - July 2022
                              </text>
                              <text
                                x="910"
                                y="120"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="#27b9ec"
                                fontWeight="bold"
                              >
                                &#8226; Senior Resident (Neurology)
                              </text>
                              <text
                                x="910"
                                y="160"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; Nizam's Institute of Medical Sciences,
                                Hyderabad
                              </text>
                            </g>
                            <rect
                              id="Rectangle 90_4"
                              x="849"
                              y="19"
                              width="40"
                              height="182"
                              fill="#27B9EC"
                            />
                            <path
                              id="Vector 13"
                              d="M1164.5 201V292.5"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </g>
                          <g id="eo2">
                            <g
                              id="Rectangle 87_5"
                              filter="url(#filter4_d_263_137)"
                            >
                              <rect
                                x="339"
                                y="348"
                                width="626"
                                height="182"
                                rx="9"
                                fill="white"
                              />
                              <text
                                x="400"
                                y="400"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; Aug 2022 - Nov 2023
                              </text>
                              <text
                                x="400"
                                y="440"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="#27b9ec"
                                fontWeight="bold"
                              >
                                &#8226; Assistant Professor (Neurology)
                              </text>
                              <text
                                x="400"
                                y="480"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; Nizam's Institute of Medical Sciences
                                (NIMS), Hyderabad
                              </text>
                            </g>
                            <path
                              id="Vector 7"
                              d="M623 293V347.5"
                              stroke="black"
                              strokeWidth="2"
                            />
                            <rect
                              id="Rectangle 90_5"
                              x="339"
                              y="348"
                              width="40"
                              height="182"
                              fill="#27B9EC"
                            />
                          </g>

                          <g id="eo1">
                            <g
                              id="Rectangle 87_6"
                              filter="url(#filter5_d_263_137)"
                            >
                              <rect
                                x="27"
                                y="19"
                                width="626"
                                height="182"
                                rx="9"
                                fill="white"
                              />
                              <text
                                x="100"
                                y="80"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; 2023 - Present
                              </text>
                              <text
                                x="100"
                                y="120"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="#27b9ec"
                                fontWeight="bold"
                              >
                                &#8226; Consultant (Neurology)
                              </text>
                              <text
                                x="100"
                                y="160"
                                fontSize="20"
                                fontFamily="Arial"
                                fill="black"
                              >
                                &#8226; Arete Hospitals, Hyderabad
                              </text>
                            </g>
                            <path
                              id="line"
                              d="M254.5 293L253 201"
                              stroke="black"
                              strokeWidth="2"
                            />
                            <rect
                              id="Rectangle 90_6"
                              x="27"
                              y="19"
                              width="40"
                              height="182"
                              fill="#27B9EC"
                            />
                          </g>
                        </g>
                      </g>
                      <path
                        id="EXLINE"
                        d="M255 292.5L2235 294"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_263_137"
                        x="1948"
                        y="329"
                        width="680"
                        height="236"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="13.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_263_137"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_263_137"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_263_137"
                        x="1608"
                        y="0"
                        width="680"
                        height="236"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="13.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_263_137"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_263_137"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter2_d_263_137"
                        x="1162"
                        y="329"
                        width="680"
                        height="236"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="13.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_263_137"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_263_137"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter3_d_263_137"
                        x="822"
                        y="0"
                        width="680"
                        height="236"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="13.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_263_137"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_263_137"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter4_d_263_137"
                        x="312"
                        y="329"
                        width="680"
                        height="236"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="13.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_263_137"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_263_137"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter5_d_263_137"
                        x="0"
                        y="0"
                        width="680"
                        height="236"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="13.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_263_137"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_263_137"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
