// src/components/Upload/Chapters

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UploadChapters() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Book Chapters</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p>Insert Markdown Editor</p>
      </CardContent>
    </Card>
  );
}