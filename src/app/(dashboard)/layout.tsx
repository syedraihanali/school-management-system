import Link from "next/link";
import Image from 'next/image';
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex">
          {/* LEFT */}
          <div className="overflow-auto w-[14%] xlg:w-[16%] lg:w-[16%] md:w-[8%]  p-4">
            <Link href='/' className="flex items-center lg:justify-start gap-2">
              <Image src='/logo.png' alt='logo' width={32} height={32} />
              <span className="hidden lg:block">Aisan School</span>
            </Link>
            <Menu/>
          </div>
          {/* RIGHT */}
          <div className="w-[86%] xlg:w-[84%] lg:w-[84%] md:w-[92%] bg-[#F7F8FA] overflow-scroll flex flex-col">
            <Navbar/>
            {children}
          </div>
        </div>
    );
  }
  