import { Button } from "@/components/ui/button"
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { GraduationCap, UploadCloud } from 'lucide-react'
import { Web3 } from "@/components/Home/Web3"
import { Ipfs } from "@/components/Home/Ipfs"
import { Soulbound } from "@/components/Home/Soulbound"
import { OpenSource } from "@/components/Home/OpenSource"
import { DocsBtn } from "@/components/Home/DocsBtn"
import { GhBtn } from "@/components/Home/GhBtn"

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-6 flex flex-col space-y-6 mx-2 sm:mx-4 items-center">
      <div className="text-center mt-2">
        <h1 className="text-3xl sm:text-4xl md:text-xl font-bold mb-4 text-blue-300">Welcome to dAcademy!</h1>
        <h2 className="text-2xl sm:text-3xl md:text-base mb-2">Learn, Verify, Achieve: Protocol for a Decentralized Education</h2>
        <h2 className="text-2xl sm:text-3xl md:text-base mb-1">A decentralized knowledge network. Onboard forward.</h2>
      </div>

      <div className="items-center">
      <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:space-x-4">
        <Link to="/user">
          <Button variant="secondary" className="shadow-md border border-gray-500">
            <GraduationCap size={16} className="mr-2" />
            Start Learning
          </Button>
        </Link>
        <Link to="/upload">
          <Button variant="secondary" className="shadow-md border border-gray-500">
            <UploadCloud size={16} className="mr-2" />
            Upload a Playbook
          </Button>
        </Link>
      </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center gap-12 mt-12"> */}
        <div className="flex flex-wrap justify-center gap-4">
          <Web3/>
          <Ipfs/>
          <Soulbound/>
          <OpenSource/>
        </div>

        <div className="flex justify-center space-x-4">
          <DocsBtn/>
          <GhBtn/>
        </div>
      {/* </div> */}
    </div>
  );
}