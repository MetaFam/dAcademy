import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"


export function ShelfBooks() {


  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Select Books</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center justify-center space-x-2">
          <Input placeholder="Search current playbooks" />
          <Button type="submit">Search</Button>
        </div>
        <div className="mt-4">
          ?How will we display search results and allow selection?
        </div>
        <div className="mt-4">
          And then add a table for showing selection and order?
        </div>
      </CardContent>
    </Card>
  )
}