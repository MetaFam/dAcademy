// src/components/UserProfile/Attended

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WorkshopsAttended() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Workshops Attended</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p>From Org</p>
        <p>Date Attended</p>
        <p>Topic Reference</p>
      </CardContent>
    </Card>
  );
}