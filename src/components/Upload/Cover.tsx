// src/components/Upload/Cover

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CoverUpload from '@/components/Upload/CoverUpload'

export function UploadCover() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Upload Cover</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CoverUpload/>
        {/* <form className="flex items-center justify-center space-x-4">
          <Button type="submit">Submit</Button>
        </form> */}
      </CardContent>
    </Card>
  );
}