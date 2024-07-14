"use client";
import { BN, ProgramAccount } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ellipsify } from "@/lib/utils";
import {
  CircleUser,
  Coins,
  Ellipsis,
  RedoDot,
  RefreshCcw,
  UndoDot,
} from "lucide-react";
import { Separator } from "../ui/separator";
import ExplorerLink from "../ExplorerLink";
import { Avatar, AvatarFallback } from "../ui/avatar";
import DisplayTokenAmount from "../DisplayTokenAmount";
import TakeEscrowButton from "./TakeEscrowButton";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import RefundEscrowButton from "./RefundEscrowButton";
import { useWallet } from "@solana/wallet-adapter-react";
import useEscrowProgram from "@/hooks/useEscrowProgram";
import "./EscrowGrid.css"; // Đảm bảo tên file CSS phù hợp

type Props = {
  data: ProgramAccount<{
    seed: BN;
    maker: PublicKey;
    mintA: PublicKey;
    mintB: PublicKey;
    receive: BN;
    bump: number;
  }>;
};

const EscrowCard: React.FC<Props> = ({ data }) => {
  const { publicKey } = useWallet();
  const { getMintInfo } = useEscrowProgram();
  const [mintBInfo, setMintBInfo] = React.useState<any>(null);

  useEffect(() => {
    getMintInfo(data.account.mintB).then((info) => {
      setMintBInfo(info);
    });
  }, [data.account.mintB, getMintInfo]); // Include dependencies here

  const [randomPokemon, setRandomPokemon] = useState<string>('nes-bulbasaur');

  useEffect(() => {
    // Array of possible Pokemon classes
    const pokemons = document.querySelectorAll('.nes-bulbasaur, .nes-charmander, .nes-squirtle, .nes-kirby') as NodeListOf<HTMLElement>;

    // Function to select a random Pokemon class
    const getRandomPokemon = () => {
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      const pokemonClass = pokemons[randomIndex].classList[1]; // Assuming classList[1] is the Pokemon class
      return pokemonClass || 'nes-bulbasaur'; // Fallback to 'nes-bulbasaur' if no valid class found
    };

    // Set initial random Pokemon
    setRandomPokemon(getRandomPokemon());

    // Interval to change Pokemon every 5 seconds
    const intervalId = setInterval(() => {
      setRandomPokemon(getRandomPokemon());
    }, 5000); // Change Pokemon every 5 seconds

    // Clear interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Card className="group cursor-pointer escrow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <RefreshCcw className="text-primary/70 group-hover:animate-spin" />
              Escrow
            </div>
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 mb-4">
                <i className={`nes-ash ${randomPokemon}`}></i>
              </div>
            </div>
          </div>

          {publicKey && data.account.maker.equals(publicKey) ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size={"icon"} variant={"ghost"} className="h-6 w-6 p-0">
                  <span className="sr-only">Open menu</span>
                  <Ellipsis />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Author&apos;s action</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <RefundEscrowButton escrow={data.publicKey} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </CardTitle>
        <CardDescription className="space-y-2">
          <span className="block">
            Seed:
            <span className="text-primary/70 ml-2">
              {ellipsify(data.account.seed.toString())}
            </span>
          </span>
          <span className="block">
            Pda:
            <ExplorerLink type="address" value={data.publicKey.toString()}>
              <span className="text-primary/70 text-sm ml-2">
                {ellipsify(data.publicKey.toString(), 8)}
              </span>
            </ExplorerLink>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Separator />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CircleUser className="w-4 h-4" />
            Maker:{" "}
          </div>
          <ExplorerLink type="address" value={data.account.maker.toString()}>
            <Avatar className="group-hover:animate-bounce">
              <AvatarFallback>
                {ellipsify(data.account.maker.toString(), 1)}
              </AvatarFallback>
            </Avatar>
          </ExplorerLink>
        </div>
        <h2 className="font-semibold">Exchange</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <RedoDot className="w-4 h-4" />
            From Token (A):{" "}
          </div>
          <ExplorerLink type="address" value={data.account.mintA.toString()}>
            <span className="text-primary/70 text-sm">
              {ellipsify(data.account.mintA.toString(), 8)}
            </span>
          </ExplorerLink>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <UndoDot className="w-4 h-4" />
            To Token (B):{" "}
          </div>
          <ExplorerLink type="address" value={data.account.mintB.toString()}>
            <span className="text-primary/70 text-sm">
              {ellipsify(data.account.mintB.toString(), 8)}
            </span>
          </ExplorerLink>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4" />
            Maker will receive:{" "}
          </div>

          <div className="text-primary/70 text-sm flex items-center gap-2">
            <DisplayTokenAmount
              amount={data.account.receive.toString()}
              decimals={mintBInfo?.decimals}
            />

            <span className="font-bold text-yellow-500">B token</span>
          </div>
        </div>
        <Separator />
        <TakeEscrowButton
          receive={data.account.receive}
          escrow={data.publicKey}
          tokenAmint={data.account.mintA}
        />
      </CardContent>
    </Card>
  );
};

export default EscrowCard;
