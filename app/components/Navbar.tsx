import {Github} from "lucide-react";
import ShareComp from "./Share";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full items-center justify-end flex p-6 gap-x-3">
      <Link href={'https://github.com/Divsolanki'}><Button size={'icon'} variant={'outline'}><Github/></Button></Link>
      <ShareComp website='https://thala-for-a-reason-solanki.vercel.app'/>
    </div>
  );
};

export default Navbar;
 