import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Code, Database, Shield, Book, Github, GraduationCap, UploadCloud } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OptimismLogo from "@/assets/Optimism.svg";
import OPLogo from "@/assets/OP.svg";
import Logo from '@/assets/logo.svg?raw';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-6 flex flex-col space-y-6 mx-2 sm:mx-4">
      <div className="text-center mt-2">
        <h1 className="text-3xl sm:text-4xl md:text-2xl font-bold mb-4 text-blue-300">Welcome to dAcademy!</h1>
        <h2 className="text-2xl sm:text-3xl md:text-lg mb-2">Learn, Verify, Achieve: Protocol for a Decentralized Education</h2>
        <h2 className="text-2xl sm:text-3xl md:text-lg mb-2">A decentralized knowledge network. Onboard forward.</h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-y-4 sm:space-x-4">
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

      <div className="flex flex-col items-center justify-center gap-12 mt-12">
        <div className="flex flex-wrap justify-center gap-4">
          <Card className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
            <CardHeader className="flex flex-col items-center space-y-2">
              <Avatar className="bg-white/10 rounded-full p-2">
                <Code size={24} className="text-blue-400" />
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-xl font-bold">Web3 Technology</CardTitle>
                <CardDescription className="text-gray-300">Built on Optimism for decentralized learning.</CardDescription>
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <img src={OptimismLogo} alt="Optimism" width={72} height={72} className="mt-4 cursor-pointer" />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={OPLogo}
                        className="w-full h-full object-fit"
                      />
                      <AvatarFallback className="w-full h-full">OP</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Optimism</h4>
                      <p className="text-sm">
                        Optimism is a layer 2 scaling solution for Ethereum.
                      </p>
                      <p className="text-sm">
                        It enables decentralized learning by providing a more efficient and cost-effective blockchain.
                      </p>
                      <a href="https://docs.dacade.my/stack/optimism/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mb-1">
                        Start Building on Optimism
                      </a>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardHeader>
            <CardContent className="text-gray-400 text-center">
              <p>Learn and engage with web3 technologies on the Optimism network.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
            <CardHeader className="flex flex-col items-center space-y-2">
              <Avatar className="bg-white/10 rounded-full p-2">
                <Database size={24} className="text-green-400" />
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-xl font-bold">IPFS</CardTitle>
                <CardDescription className="text-gray-300">Store and share knowledge securely.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-gray-400 text-center">
              <p>Utilize IPFS for decentralized storage of learning materials.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
            <CardHeader className="flex flex-col items-center space-y-2">
              <Avatar className="bg-white/10 rounded-full p-2">
                <Shield size={24} className="text-red-400" />
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-xl font-bold">Soulbound NFTs</CardTitle>
                <CardDescription className="text-gray-300">Verify your skills with blockchain.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-gray-400 text-center">
              <p>Earn and showcase verifiable credentials using soulbound NFTs.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 shadow-lg rounded-lg text-white w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md">
            <CardHeader className="flex flex-col items-center space-y-2">
              <Avatar className="bg-white/10 rounded-full p-2">
                <Book size={24} className="text-yellow-400" />
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-xl font-bold">Open-Source</CardTitle>
                <CardDescription className="text-gray-300">Supporting decentralized education for all.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-gray-400 text-center">
              <p>Our project is open-source and a collective library.  We also offer white-label solutions to help you set up your own decentralized academy.</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="https://docs.dacade.my/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center space-x-2 shadow-md border border-gray-300">
                  <Book size={16} />
                  <span>Docs</span>
                </Button>
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(Logo)}`}
                    className="w-full h-full object-fit"
                  />
                  <AvatarFallback className="w-full h-full">MF</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">dAcademy Docs</h4>
                  <p className="text-sm">
                    Learn how dAcademy is made and how to use it.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="https://github.com/MetaFam/dAcademy" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center space-x-2 shadow-md border border-gray-300">
                  <Github size={16} />
                  <span>GitHub</span>
                </Button>
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(Logo)}`}
                    className="w-full h-full object-fit"
                  />
                  <AvatarFallback className="w-full h-full">MF</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">dAcademy</h4>
                  <p className="text-sm">
                    Check out our code on GitHub.
                  </p>
                  <p className="text-sm">
                    See a bug 🐛? Want a feature?
                  </p>
                  <p className="text-sm">
                    Add an issue.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}