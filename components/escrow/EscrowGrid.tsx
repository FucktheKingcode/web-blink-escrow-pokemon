"use client";
import React, { useEffect } from "react";
import EscrowCard from "./EscrowCard";
import SkeletonWapper from "../SkeletonWapper";
import useEscrowProgram from "@/hooks/useEscrowProgram";


const EscrowGrid: React.FC = () => {
  const { getEscrowAccounts } = useEscrowProgram();

  useEffect(() => {
    // Thêm lớp bounce-animation khi component được render
    const cards = document.querySelectorAll('.escrow-card');
    cards.forEach((card) => {
      card.classList.add('bounce-animation');
    });

    // Xóa lớp bounce-animation khi component bị unmount
    return () => {
      cards.forEach((card) => {
        card.classList.remove('bounce-animation');
      });
    };
  }, []);

  if (getEscrowAccounts.data?.length === 0) {
    return (
      <div className="text-center my-10">
        <h2 className="text-2xl font-semibold">No escrows found</h2>
      </div>
    );
  }

  return (
    <SkeletonWapper isLoading={getEscrowAccounts.isLoading}>
      <div className="grid grid-rows-1 md:grid-rows-3 my-10 gap-8">
        {getEscrowAccounts.data?.map((escrow) => (
          <EscrowCard key={escrow.publicKey.toString()} data={escrow}  />
        ))}
      </div>
    </SkeletonWapper>
  );
};

export default EscrowGrid;
