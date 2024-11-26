// src/components/Upload/Permissions

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UploadPermissions() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Owner Permissions</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p>Owner Permissions</p>
      </CardContent>
    </Card>
  );
}