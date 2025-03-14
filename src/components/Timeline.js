import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
import react from "react";

const Timeline = () => {
    return(
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div class="timeline-middle">
            <span class="bg-blue-500/20 flex size-8 items-center justify-center rounded-full">
              <span class="icon-[tabler--school] text-blue-500 size-5"></span>
            </span>
          </div>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
            <div class="text-gray-500 text-sm font-normal">2018 – 2022</div>
          </div>
          <div class="timeline-end ms-4 mb-8">
            <div class="card bg-base-100 shadow-md">
              <div class="card-body">
                <h5 class="card-title text-lg">"Roman-Vodă" National College, Roman, Neamț County</h5>
                <p class="text-gray-700">Profile - Intensive Mathematics and Computer Science</p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      
        <li>
          <div class="timeline-middle">
            <span class="bg-blue-500/20 flex size-8 items-center justify-center rounded-full">
              <span class="icon-[tabler--school] text-blue-500 size-5"></span>
            </span>
          </div>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
            <div class="text-gray-500 text-sm font-normal">2022 – Present</div>
          </div>
          <div class="timeline-end ms-4 mb-8">
            <div class="card bg-base-100 shadow-md">
              <div class="card-body">
                <h5 class="card-title text-lg">Babeș-Bolyai University, Cluj-Napoca</h5>
                <p class="text-gray-700">Faculty of Mathematics and Informatics</p>
                <p class="text-gray-700">Specialization – Computer Science</p>
                <p class="text-gray-700">Year of Study – Second Year</p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      
        <li>
          <div class="timeline-middle">
            <span class="bg-green-500/20 flex size-8 items-center justify-center rounded-full">
              <span class="icon-[tabler--code] text-green-500 size-5"></span>
            </span>
          </div>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
            <div class="text-gray-500 text-sm font-normal">Skills</div>
          </div>
          <div class="timeline-end ms-4 mb-8">
            <div class="card bg-base-100 shadow-md">
              <div class="card-body">
                <h5 class="card-title text-lg">Technical Skills</h5>
                <p class="text-gray-700">
                  C, C#, C++, Python, Java, SQL, Maple, Unix, Prolog, Lisp, HTML, CSS, JavaScript
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      
        <li>
          <div class="timeline-middle">
            <span class="bg-purple-500/20 flex size-8 items-center justify-center rounded-full">
              <span class="icon-[tabler--video] text-purple-500 size-5"></span>
            </span>
          </div>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
            <div class="text-gray-500 text-sm font-normal">2021 – Present</div>
          </div>
          <div class="timeline-end ms-4 mb-8">
            <div class="card bg-base-100 shadow-md">
              <div class="card-body">
                <h5 class="card-title text-lg">Video Editor at Live Slow Production</h5>
                <p class="text-gray-700">
                  Developed skills in editing, color grading, adding special effects, and audio synchronization, ensuring that
                  each final video perfectly reflects the emotion and beauty of the moment.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      
        <li>
          <div class="timeline-middle">
            <span class="bg-purple-500/20 flex size-8 items-center justify-center rounded-full">
              <span class="icon-[tabler--paint] text-purple-500 size-5"></span>
            </span>
          </div>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
            <div class="text-gray-500 text-sm font-normal">5+ Years</div>
          </div>
          <div class="timeline-end ms-4 mb-8">
            <div class="card bg-base-100 shadow-md">
              <div class="card-body">
                <h5 class="card-title text-lg">Graphic Designer</h5>
                <p class="text-gray-700">
                  Worked on projects from simple Photoshop edits to complex compositions in Premiere Pro, Blender, and After
                  Effects. Specialize in creating engaging visuals, animations, and 3D models.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      
        <li>
          <div class="timeline-middle">
            <span class="bg-purple-500/20 flex size-8 items-center justify-center rounded-full">
              <span class="icon-[tabler--language] text-purple-500 size-5"></span>
            </span>
          </div>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
            <div class="text-gray-500 text-sm font-normal">Language Proficiency</div>
          </div>
          <div class="timeline-end ms-4 mb-8">
            <div class="card bg-base-100 shadow-md">
              <div class="card-body">
                <h5 class="card-title text-lg">English – B2 Level</h5>
                <p class="text-gray-700">
                  My language proficiency allows me to communicate effectively in English, both verbally and in writing.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      
        <li>
          <div class="timeline-middle">
            <span class="bg-purple-500/20 flex size-8 items-center justify-center rounded-full">
              <span class="icon-[tabler--heart] text-purple-500 size-5"></span>
            </span>
          </div>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
            <div class="text-gray-500 text-sm font-normal">2023 – 2024</div>
          </div>
          <div class="timeline-end ms-4 mb-8">
            <div class="card bg-base-100 shadow-md">
              <div class="card-body">
                <h5 class="card-title text-lg">Volunteer at Hermes</h5>
                <p class="text-gray-700">
                  Part of the Creative Thinking and Public Relations team, where I helped bring ideas to life and build
                  positive communication. This experience helped me handle new challenges and build strong connections in a
                  busy and changing environment.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      
        <li>
          <div class="timeline-middle">
            <span class="bg-purple-500/20 flex size-8 items-center justify-center rounded-full">
              <span class="icon-[tabler--code] text-purple-500 size-5"></span>
            </span>
          </div>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
            <div class="text-gray-500 text-sm font-normal">2023</div>
          </div>
          <div class="timeline-end ms-4 mb-8">
            <div class="card bg-base-100 shadow-md">
              <div class="card-body">
                <h5 class="card-title text-lg">Hermes Hackathon 2023 – Green Scripters</h5>
                <p class="text-gray-700">
                  Developed a revolutionary recycling platform where users get rewarded for their actions. Web app developed
                  using: Python, JavaScript, HTML, CSS, Flask, Pyzbar.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      
        <li>
          <div class="timeline-middle">
            <span class="bg-purple-500/20 flex size-8 items-center justify-center rounded-full">
              <span class="icon-[tabler--code] text-purple-500 size-5"></span>
            </span>
          </div>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
            <div class="text-gray-500 text-sm font-normal">2024</div>
          </div>
          <div class="timeline-end ms-4 mb-8">
            <div class="card bg-base-100 shadow-md">
              <div class="card-body">
                <h5 class="card-title text-lg">Hermes Hackathon 2024 – AllSafe</h5>
                <p class="text-gray-700">
                  Created a Chrome Extension to detect phishing emails/links and a site with an interactive 2D game. Developed
                  using: Python, JavaScript, HTML, CSS, React, Flask.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      
        <li>
          <div class="timeline-middle">
            <span class="bg-purple-500/20 flex size-8 items-center justify-center rounded-full">
              <span class="icon-[tabler--cash] text-purple-500 size-5"></span>
            </span>
          </div>
          <div class="timeline-start me-4 mt-8 max-md:pt-2">
            <div class="text-gray-500 text-sm font-normal">Aug 2024 – Oct 2024</div>
          </div>
          <div class="timeline-end ms-4 mb-8">
            <div class="card bg-base-100 shadow-md">
              <div class="card-body">
                <h5 class="card-title text-lg">Cashier at Kaufland</h5>
                <p class="text-gray-700">
                  Developed essential skills in effective customer communication and adapting to a work schedule.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    )
}

export default Timeline;