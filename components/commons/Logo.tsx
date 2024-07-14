import { HandCoins } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo({ isMobile }: { isMobile?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <i className="nes-ash"></i>
    </Link>
  );
}

export default Logo;
