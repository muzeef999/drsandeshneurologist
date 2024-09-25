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
        pinType: "fixed",
      },
    });

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      timeline.to(".test_scroll", {
        x: -1500,
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
                <svg id="svg_id" viewBox="0 0 3628 565" fill="none">
 <rect x="2275" y="19" width="626" height="182" rx="9" fill="#f2f2f2" />
  <rect x="1975" y="348" width="626" height="182" rx="9" fill="#f2f2f2" />
  <rect x="1635" y="19" width="626" height="182" rx="9" fill="#f2f2f2" />
  <rect x="1189" y="348" width="626" height="182" rx="9" fill="#f2f2f2" />
  <rect x="849" y="19" width="626" height="182" rx="9" fill="#f2f2f2" />
  <rect x="339" y="348" width="626" height="182" rx="9" fill="#f2f2f2" />
  <rect x="27" y="19" width="626" height="182" rx="9" fill="#f2f2f2" />

  <text x="2336" y="80" font-size="20" font-family="Arial" fill="black">
    • March 2013 - March 2014
  </text>
  <text x="2036" y="400" font-size="20" font-family="Arial" fill="black">
    • Aug 2015 - July 2018
  </text>
  <text x="1696" y="80" font-size="20" font-family="Arial" fill="black">
    • Aug 2018 - July 2019
  </text>
  <text x="1250" y="400" font-size="20" font-family="Arial" fill="black">
    • Aug 2019 - July 2022
  </text>
  <text x="910" y="80" font-size="20" font-family="Arial" fill="black">
    • Aug 2022 - Nov 2023
  </text>
  <text x="400" y="400" font-size="20" font-family="Arial" fill="black">
    • Nov 2023 - Aug 2024
  </text>
<text x="100" y="80" font-size="20" font-family="Arial" fill="black">
    • Sep 2024 - present
  </text>
  
  <text x="2336" y="120" font-size="20" font-family="Arial" fill="#27b9ec" font-weight="bold">
    • Compulsory Rotatory Internship
  </text>
  <text x="2036" y="440" font-size="20" font-family="Arial" fill="#27b9ec" font-weight="bold">
    • Junior Resident (General medicine)
  </text>
  <text x="1696" y="120" font-size="20" font-family="Arial" fill="#27b9ec" font-weight="bold">
    • Consultant General (Internal Medicine)
  </text>
  <text x="1250" y="440" font-size="20" font-family="Arial" fill="#27b9ec" font-weight="bold">
    • Senior Resident (Neurology)
  </text>
  <text x="910" y="120" font-size="20" font-family="Arial" fill="#27b9ec" font-weight="bold">
    • Assistant Professor (Neurology)
  </text>
  <text x="400" y="440" font-size="20" font-family="Arial" fill="#27b9ec" font-weight="bold">
    • Consultant (Neurology)
  </text>
  <text x="100" y="120" font-size="20" font-family="Arial" fill="#27b9ec" font-weight="bold">
    • Consultant (Neurology)
  </text>

  <text x="2336" y="160" font-size="20" font-family="Arial" fill="black">
    • KLE's Dr Prabhakar Kore Hospital, Belgaum, Karnataka
  </text>
  <text x="2036" y="480" font-size="20" font-family="Arial" fill="black">
    • St. Theresa Hospital, Hyderabad
  </text>
  <text x="1696" y="160" font-size="20" font-family="Arial" fill="black">
    • Lotus Cure Hospital, Secunderabad, Telangana
  </text>
  <text x="1250" y="480" font-size="20" font-family="Arial" fill="black">
    • Nizam's Institute of Medical Sciences, Hyderabad
  </text>
  <text x="910" y="160" font-size="20" font-family="Arial" fill="black">
    • Nizam’s Institute of Medical Sciences (NIMS), Hyderabad
  </text>
  <text x="400" y="480" font-size="20" font-family="Arial" fill="black">
    • Arete Hospitals, Hyderabad
  </text>
  <text x="100" y="160" font-size="20" font-family="Arial" fill="black">
    • Care Hospitals, Banjara Hills
  </text>


  <rect x="1975" y="348" width="40" height="182" fill="#27B9EC" />
  <path id="Vector9" d="M2233 293V348" stroke="black" stroke-width="2" />
  <rect x="1975" y="348" width="40" height="182" fill="#27B9EC" />
  <path id="Vector9" d="M2233 293V348" stroke="black" stroke-width="2" />
  <rect x="1635" y="19" width="40" height="182" fill="#27B9EC" />
  <path id="Vector10" d="M1996 201L1996 293" stroke="black" stroke-width="2" />
  <rect x="1189" y="348" width="40" height="182" fill="#27B9EC" />
  <path id="Vector8" d="M1470 294L1470 348" stroke="black" stroke-width="2" />
  <rect x="849" y="19" width="40" height="182" fill="#27B9EC" />
  <path id="Vector13" d="M1164.5 201V292.5" stroke="black" stroke-width="2" />
  <rect x="339" y="348" width="40" height="182" fill="#27B9EC" />
  <path id="Vector7" d="M623 293V347.5" stroke="black" stroke-width="2" />
  <rect x="27" y="19" width="40" height="182" fill="#27B9EC" />
  <path id="line" d="M254.5 293L253 201" stroke="black" stroke-width="2" />
  <path id="EXLINE" d="M255 292.5L2235 294" stroke="black" stroke-width="2" />
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