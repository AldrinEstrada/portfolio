import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/cocoon.module.css';
import { useRouter } from 'next/router';


export default function cocoon() {
    return(
        <div>

            <Image
                src={'/images/cocoon-logo.png'}
                height={100}
                width={400}
                alt={"logo"}
            />

            <h1>Cocoon</h1>
            <h2>Role: UX/UI Designer, Social Media Marketing Manager</h2>
            <h2>Overview</h2>
            <p>
                A career development app that uses the power of AI to scan people's
                resumes and analyze their skills to recommend courses and programs
                required for their desired job industry.
            </p>

            <h2>The Problem</h2>
            <p>
                While all other apps focus on providing opportunities for people that are currently already in that industry, what about the ones who are still trying to get there?
                Or what about the people who are stuck in their current job and got nowhere else to go? Or what about those who are in an industry that is bound to eventually cease to exist?
                Let's paint a picture for the oil and gas industry as an example. With electric vehicles on the rise, in the next 10-20 years, where would they go?
                
            </p>

            <Image
                src={'/images/cocoon-app1.png'}
                height={260}
                width={550}
                alt={"ss1"}
            />

            <Image
                src={'/images/cocoon-mobile.png'}
                height={260}
                width={260}
                alt={"ss2"}
            />


            <h2>Features</h2>

            <ul>
                <li>View career paths and the details for each job</li>
                <li>Upload resume for AI to scan your skills and your compatibility for your selected career path</li>
                <li>View recommended courses and steps to take to fill the gaps to get into your desired career path</li>
                <li>Take on a recommended course and keep track of your progress</li>
                
            </ul>

            <Image
                src={'/images/cocoon-app2.png'}
                height={260}
                width={550}
                alt={"ss2"}
            />

            <Image
                src={'/images/cocoon-app3.png'}
                height={260}
                width={550}
                alt={"ss3"}
            />

            <h2>Design Journey</h2>
            <h3>Figma</h3>

            <Image
                src={'/images/figma1.png'}
                height={260}
                width={550}
                alt={"ss4"}
            />

            <Image
                src={'/images/figma1.5.png'}
                height={260}
                width={110}
                alt={"ss5"}
            />
            


            <p>
                The project started off as an app called "FutureQuest", designed for highschool students that are unsure of what they want to do after graduating.
                The app would allow them to reach out to students from universities but mainly BCIT students at the start, so that they can ask questions about all sorts of courses and have an idea on what they could get into in universities.
                With consecutive weeks of revision and consultation, this idea was eventually shot down and we decided to pivot to what would become Cocoon.
            </p>

            <Image
                src={'/images/figma2.png'}
                height={260}
                width={550}
                alt={"ss6"}
            />

            <Image
                src={'/images/figma3.png'}
                height={260}
                width={300}
                alt={"ss7"}
            />

            <Image
                src={'/images/figma4.png'}
                height={260}
                width={550}
                alt={"ss8"}
            />

            <Image
                src={'/images/figma5.png'}
                height={260}
                width={450}
                alt={"ss9"}
            />

            <h2>Challenges</h2>
            <p>
                There has been a lot of difficulties in regards to designing the app. Especially at the beginning where our idea continuously had to be revised.
                As our ideas solidified and started to take form, the next challenge was how to differentiate Cocoon from all the competition. From icons, to components, to logos, and even colors, we had to thoroughly experiment for weeks.
                Along with with designing the app, there were internal struggles that made things a lot more difficult than it already was. Being in a split group with only having so little time a week to communicate with each other, it was a hurdle to stay connected and on the same page.

            </p>

            <h2>Lessons Learned</h2>
            <p>
                Being able to run a project as big as this with a somewhat small group was a tall order.
                Especially with everyone having their own agendas to take care of, as well as other projects and assignments from school made it difficult to manage and balance work.
                Despite all the shortcomings and the final product not shaping up to be how it was designed, it was still a blast and for the most part, got everythign working as it should.

            </p>




            <h3>Try it for yourself</h3>
            <button>Start Cocoon</button>



        </div>

    )
}