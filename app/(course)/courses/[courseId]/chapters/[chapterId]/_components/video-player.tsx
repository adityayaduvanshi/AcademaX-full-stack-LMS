'use client';

import axios from 'axios';
import MuxPlayer from '@mux/mux-player-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Loader2, Lock } from 'lucide-react';
import { useConfettiStore } from '@/hooks/use-confetti-store';

interface VideoPlayerProps {
  playbackId: string;
  courseId: string;
  chapterId: string;
  nextChapterId?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
}

const VideoPlayer = ({
  playbackId,
  completeOnEnd,
  chapterId,
  courseId,
  nextChapterId,
  isLocked,
  title,
}: VideoPlayerProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
  const confetti = useConfettiStore();

  const onEnd = async () => {
    try {
      if (completeOnEnd) {
        await axios.put(
          `/api/courses/${courseId}/chapters/${chapterId}/progress`,
          {
            isCompleted: true,
          }
        );

        if (!nextChapterId) {
          confetti.onOpen();
        }

        toast({ title: 'Progress updated' });
        router.refresh();

        if (nextChapterId) {
          router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
        }
      }
    } catch {
      toast({ title: 'Something went wrong', variant: 'destructive' });
    }
  };
  return (
    <div className=" relative aspect-video ">
      {!isReady && !isLocked && (
        <div className=" absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className=" h-8 w-8 animate-spin  text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className=" absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
          <Lock className=" h-8 w-8" />
          <p className=" text-sm">This chapter is locked</p>
        </div>
      )}
      {!isLocked && (
        <MuxPlayer
          title={title}
          className={cn(!isReady && 'hidden')}
          onCanPlay={() => setIsReady(true)}
          onEnded={onEnd}
          autoPlay
          playbackId={playbackId}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
