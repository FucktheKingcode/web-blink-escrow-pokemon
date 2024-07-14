"use client"
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import Link from "next/link";
import styles from './Home.module.css';
import 'nes.css/css/nes.min.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const pokeball = document.querySelector('.nes-pokeball') as HTMLElement;
    const pokemons = document.querySelectorAll('.nes-bulbasaur, .nes-charmander, .nes-squirtle, .nes-kirby') as NodeListOf<HTMLElement>;

    let index = 0;

    const throwPokeball = () => {
      pokeball.classList.add('throw-pokeball');

      setTimeout(() => {
        const currentPokemon = pokemons[index];

        const pokemonRect = currentPokemon.getBoundingClientRect();
        pokeball.style.top = `${pokemonRect.top}px`;
        pokeball.style.left = `${pokemonRect.left}px`;

        currentPokemon.style.display = 'none';

        index = (index + 1) % pokemons.length;

        setTimeout(() => {
          pokeball.classList.remove('throw-pokeball');
          pokeball.style.top = '50%';
          pokeball.style.left = '50%';
          currentPokemon.style.display = 'block';
        }, 1000); 
      }, 500); 
    };

    const intervalId = setInterval(throwPokeball, 3000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []); 

  return (
    
    <div className="nes-container is-dark with-title bg-gradient-to-r from-black-500 to-lack-200 min-h-screen">
      <div className="flex flex-row gap-4 relative">
        <i className="nes-ash"></i>
        <i className="nes-pokeball"></i>
        <i className="nes-bulbasaur"></i>
        <i className="nes-charmander"></i>
        <i className="nes-squirtle"></i>
        <i className="nes-kirby"></i>

        <div className="mt-0 flex flex-col gap-4 relative">
          <div className="fixed top-0 right-0 m-8">
            <div className="nes-btn-group">
              <Button
                className="nes-btn is-warning text-xl px-4 py-7 bg-orange-500 border-none relative z-10"
                variant={"outline"}
                asChild
              >
                <Link href={"/explorer"}>
                  Get started
                  <Flame className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:px-10">
        <div className="w-full px-4 pt-12 md:px-4 lg:px-8 xl:px-10 2xl:px-0">
          <div className="flex flex-col items-center justify-center">
            <h1 className={`${styles.pixelate} inline-block text-center text-5xl font-medium tracking-tighter text-white lg:text-7xl`}>
              How is Escrow's Blink?
            </h1>
            <div className={`${styles.textEffectContainer}`}>
              <div className={`${styles.textEffect}`}>
                <div>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    Scope of Work
                  </h1>
                </div>
                <div>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    Using the Anchor Escrow contract, assume a maker has just created an order. Create a Blink that allows a taker to get the order from the maker.
                  </h1>
                </div>
                <div>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    1. Requirements:
                  </h1>
                </div>
                <div>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    • Blink UI: Develop an intuitive and visually appealing interface for the Blink.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    • Contract Integration: Ensure seamless connectivity between the escrow contract and the Blink.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    • Testing: The application should be ready for deployment and testing on Cloudflare or Vercel.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    2. Deliverables:
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    1 GitHub Repository: Submit the complete source code.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    2 Video Demonstration: Provide a Loom or YouTube video (20-30 seconds) demonstrating the Blink.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    3. Rewards:
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    1st Place: $100 USDC
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    2nd Place: $50 USDC
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    3rd Place: $50 USDC
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    4. Submission Requirements:
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    A link to the GitHub repository.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    A short Loom or YouTube video demonstrating the Blink.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    A comprehensive README file in the repo.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    5. Judging Criteria:
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                  Functionality: How effectively the Blink integrates with the escrow contract.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    Design: Creativity and usability of the Blink.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    Integration: Quality of the connection between the contract and the Blink.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    Documentation: Clarity and thoroughness of the README file.
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    Need to present in person at HCM Buidl Station
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    Sign up for HCM Buidl Station here: <a href="https://lu.ma/sol-buidlstationhcm" target="_blank" rel="noreferrer">https://lu.ma/sol-buidlstationhcm</a>
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                  For more information, please refer to this bounty: <a href="https://earn.superteam.fun/listings/hackathon/escrow-ui-blink-st-talent-olympics/" target="_blank" rel="noreferrer">https://earn.superteam.fun/listings/hackathon/escrow-ui-blink-st-talent-olympics/</a>
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    Terms
                  </h1>
                </div>
                <div className={`${styles.scrollText}`}>
                  <h1 className={`${styles.pixelate} inline-block text-center text-4xl font-medium tracking-tighter text-white lg:text-7xl`}>
                    Participation in this bounty is entirely voluntary. Bounties are a way to learn and dabble in opportunities to build in web3. These are neither full-time jobs nor project-based engagements. Please be advised that the sponsors will not have time for individualized feedback due to the number of entries we receive.
                  </h1>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
