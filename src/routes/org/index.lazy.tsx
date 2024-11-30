import { Button } from '@/components/ui/button'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { UploadCloud } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Network } from 'lucide-react'
import { Soulbound } from '@/components/Home/Soulbound'
import Top from '@/components/Top'

export const Route = createLazyFileRoute('/org/')({
  component: () => {
    return (
      <div id="top" className="p-6 flex flex-col items-center space-y-6">
        <div className="max-w-3xl w-full space-y-4 text-center">
          <h1 className="text-3xl font-bold">Start Your Organization's Bookshelf</h1>
          <p className="text-lg text-gray-600">
            Get started by uploading your first playbook to organize your workflows and procedures.
          </p>
        </div>

        <Card className="w-full max-w-3xl bg-black/30 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-white text-lg">What is a Playbook?</CardTitle>
            <CardDescription className="text-gray-400">
              A playbook is a step-by-step guide that you can share with others to help them learn and understand specific processes, tasks, or qualifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-400">
            <p className="text-white mb-2">Playbooks can be used for:</p>
            <ul className="list-disc list-inside text-gray-400 text-left">
              <li>Onboarding new members</li>
              <li>Tutorials</li>
              <li>Specific event qualifications</li>
              <li>Prerequisites for member-only access</li>
              <li>Bounty requirements</li>
              <li>... and much more, be creative!</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="w-full max-w-3xl bg-black/30 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-white text-lg">Playbook Structure</CardTitle>
            <CardDescription className="text-gray-400">
              Playbooks are structured into chapters:
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-400">
            <ul className="list-disc list-inside text-gray-400 text-left">
              <li>Allowing you to break down complex processes into manageable sections.</li>
              <li>Users can submit proofs of completion for each chapter, ensuring they have understood the information provided and/or completed the required tasks.</li>
              <li>Once all required chapters are completed, users can mint a Soulbound NFT on the Optimism network.</li>
              <li>
                This NFT serves as a verifiable credential demonstrating the user's proficiency and completion of the playbook. Learn more about{' '}
                <a href="/#org/#soulbound" className="text-blue-400 underline">
                  Soulbound NFTs
                </a>.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="w-full max-w-3xl bg-black/30 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-white text-lg">Why Use Playbooks?</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400">
            <ul className="list-disc list-inside text-gray-400 text-left">
              <li>Standardize processes and procedures</li>
              <li>Support onboarding and training</li>
              <li>Enable knowledge sharing and collaboration</li>
              <li>Ensure consistency and efficiency</li>
              <li>Store playbooks on IPFS for decentralized storage</li>
              <li>Receive on-chain verification via Soulbound NFTs upon completion</li>
              <li>Submit proofs of completion for review by organization admins</li>
              <li>Token-gate access to other resources using on-chain verification</li>
            </ul>
          </CardContent>
        </Card>

        <div className="w-full max-w-3xl flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <Soulbound id="soulbound" />

          <Card className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-md bg-black/30 shadow-lg rounded-lg">
            <CardHeader className="flex flex-col items-center space-y-2">
              <Avatar className="bg-white/10 rounded-full p-2">
                <Network size={24} className="text-blue-400" />
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-xl font-bold">Playbooks on IPFS</CardTitle>
                <CardDescription className="text-gray-400">
                  Learn how your playbooks are stored on IPFS.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-gray-400 text-center">
              <p>Your playbooks are stored on IPFS (InterPlanetary File System), a decentralized storage network.</p>
              <p className="text-green-500">#DecentralizedStorage</p>
            </CardContent>
          </Card>
        </div>

        <Card className="w-full max-w-3xl bg-black/30 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-white">Upload Your First Playbook</CardTitle>
            <CardDescription className="text-gray-400">
              Click the button below to upload your first playbook.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-2">
            <Link to="/upload">
              <Button variant="secondary" className="shadow-md border border-gray-500">
                <UploadCloud size={16} className="mr-2" />
                Upload a Playbook
              </Button>
            </Link>
          </CardContent>
        </Card>
          <Top />
      </div>
    )
  }
})