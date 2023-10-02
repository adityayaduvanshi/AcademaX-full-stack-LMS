'use client';

import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

const NexusConnectCard = () => {
  return (
    <Card className=" p-0 bg-[url('/bg-card-front.png')] bg-cover bg-center bg-no-repeat  ">
      <CardHeader className="pb-0">
        <h1 className=" text-lg font-semibold  mb-2">Try Our Chat App!</h1>
      </CardHeader>
      <CardContent className=" text-center ">
        <a href="https://nexusconnect.up.railway.app" target="_blank">
          <Button size="sm">Get Started</Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default NexusConnectCard;
