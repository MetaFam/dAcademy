// src/components/UserProfile/SubmissionDetails

import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

type Submission = {
  id: string;
  timestamp: number;
  questChain: {
    name: string;
  };
  questStatus: {
    status: string;
  };
  quest: {
    name: string;
  }
}

export function SubmissionDetails({ submission, onClose }: { submission: Submission; onClose: () => void }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Submission Details</DialogTitle>
            <DialogDescription>
              Details of your submissions
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>Date: {new Date(submission.timestamp * 1000).toLocaleDateString()}</p>
            <p>Book: {submission.questChain.name}</p>
            <p>Chapter: {submission.quest.name}</p>
            <p>Status: {submission.questStatus.status}</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={true} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Submission Details</DrawerTitle>
          <DrawerDescription>
            Details of your submissions
          </DrawerDescription>
        </DrawerHeader>
        <div>
          <p>Date: {new Date(submission.timestamp * 1000).toLocaleDateString()}</p>
          <p>Book: {submission.questChain.name}</p>
          <p>Chapter: {submission.quest.name}</p>
          <p>Status: {submission.questStatus.status}</p>
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <button
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              onClick={onClose}
            >
              Close
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}