import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/projects.module.css';
import { useRouter } from 'next/router';

export default function Projects() {
    const router = useRouter();

    const handleButtonClick = () => {
      router.push('cocoon')
    }

  return (
    <div>
      <h1>Projects</h1>

      <div>
        <Image
          src={'/images/cocoon-logo.png'}
          height={100}
          width={400}
          alt={'logo1'}
        />

        <h3>Cocoon</h3>
        <p>
          A career development app that uses the power of AI to scan people's
          resumes and analyze their skills to recommend courses and programs
          required for their desired job industry.
        </p>
        <button onClick={handleButtonClick}>Learn more</button>
      </div>

      <div>
        <Image
          src={'/images/cocoon-logo.png'}
          height={100}
          width={400}
          alt={'logo2'}
        />
        <h3>Swindle</h3>
        <p>
          A scam detector app that asks specific questions to determine if
          you're being scammed or not.
        </p>
        <button>Learn more</button>
      </div>

      <div>
        <Image
          src={'/images/cocoon-logo.png'}
          height={100}
          width={400}
          alt={'logo3'}
        />
        <h3>TinyPaws</h3>
        <p>
          A cat adoption website for a non-profit organization, dedicated to
          saving and taking care of feline friends and ensuring they find new
          homes.
        </p>
        <button>Learn more</button>
      </div>
    </div>
  );
}
