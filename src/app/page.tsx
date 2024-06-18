import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:flex min-h-screen bg-yellow-400 items-center justify-between p-24 gap-20">
      <div className="md:w-[50%] flex flex-col justify-center items-center">
        <div className="w-[100%] flex justify-center items-center gap-5">
          <div className="w-[254px]">
            <Image
              src="/yellow-mtn.svg"
              className="w-full"
              width={100}
              height={100}
              alt="Mtn logo"
            />
          </div>
          <div className="w-[3px] bg-black py-5"></div>
          <div className="w-[154px]">
            <Image
              src="/blue-momo.svg"
              className="w-full"
              width={100}
              height={100}
              alt="Mtn logo"
            />
          </div>
        </div>
        <div>
          <p className="text-black text-base font-bold">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a
          </p>
        </div>
      </div>
      <div className="md:w-[50%] flex flex-col items-center bg-white py-10 mt-5 md:mt-0">
        <h1 className="text-2xl font-bold text-black">
          Log in 
        </h1>
        <div className="grid gap-6 md:w-[80%] mt-10">
          <form>
            <div className="grid gap-2">
              <div className="grid gap-1 px-14 md:px-0">
                <Input
                  className={cn({
                    "focus-visible:ring-red-500 py-7": true,
                  })}
                  placeholder="Username"
                />
              </div>
              <div className="grid gap-1 mt-9 px-14 md:px-0">
                <Input
                  className={cn({
                    "focus-visible:ring-red-500 py-7": true,
                  })}
                  placeholder="Password"
                />
              </div>
                <Button className="bg-yellow-400 rounded-2xl py-5 mt-10"><span className="text-black font-bold">Log in</span></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
