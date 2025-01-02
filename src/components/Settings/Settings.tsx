// src/components/SettingsD.tsx
import * as React from "react";
import { useAtom } from 'jotai';
import { isGridVisibleAtom } from '@/atoms/isGridVisibleAtom'
import { useMediaQuery } from "@/hooks/useMediaQuery"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Settings, ToggleRight, ToggleLeft } from "lucide-react"

export function SettingsD() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [isGridVisible, setIsGridVisible] = useAtom(isGridVisibleAtom)

  const toggleGridVisibility = () => {
    setIsGridVisible(prev => !prev);

  };

  const trigger = (
    <Button variant="outline" size="icon" className="h-4 w-4 mr-2" onClick={() => setOpen(true)}>
      <Settings className="h-4 w-4" />
    </Button>
  );

  return (
    <>
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
              <DialogDescription>
                Change your settings here.
              </DialogDescription>
            </DialogHeader>
            <div className="grid items-start gap-4">
              <div className="flex items-center justify-between">
                <label htmlFor="grid-toggle" className="text-sm font-medium">
                  Animated Grid Background
                </label>
                <button
                  id="grid-toggle"
                  onClick={toggleGridVisibility}
                  className="flex items-center p-1 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isGridVisible ? (
                    <ToggleRight className="h-4 w-4 text-gray-800" />
                  ) : (
                    <ToggleLeft className="h-4 w-4 text-gray-800" />
                  )}
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>{trigger}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Settings</DrawerTitle>
              <DrawerDescription>
                Change your settings here.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid items-start gap-4 px-4">
              <div className="flex items-center justify-between">
                <label htmlFor="grid-toggle" className="text-sm font-medium">
                  Animated Grid Background
                </label>
                <button
                  id="grid-toggle"
                  onClick={toggleGridVisibility}
                  className="flex items-center p-1 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isGridVisible ? (
                    <ToggleRight className="h-4 w-4 text-gray-800" />
                  ) : (
                    <ToggleLeft className="h-4 w-4 text-gray-800" />
                  )}
                </button>
              </div>
            </div>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}