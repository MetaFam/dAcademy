// src/components/Upload/Cover

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function UploadCover() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Upload Cover</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <form className="flex items-center justify-center space-x-4">
          <Input id="picture" type="file" />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}