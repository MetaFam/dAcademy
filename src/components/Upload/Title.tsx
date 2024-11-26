// src/components/Upload/Title
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export function UploadTitle() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Book Title</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
          <Input type="title" placeholder="Book Title" />
          <Button type="submit">Save</Button>
        </div>
      </CardContent>
    </Card>
  );
}