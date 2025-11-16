import React, { ComponentPropsWithoutRef, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> { 
  className?: string; 
  reverse?: boolean; 
  pauseOnHover?: boolean; 
  children: React.ReactNode; 
  vertical?: boolean; 
  repeat?: number; 
  autoFill?: boolean;
  ariaLabel?: string; 
  ariaLive?: 'off' | 'polite' | 'assertive'; 
  ariaRole?: string; 
} 

export function Marquee({ 
  className, 
  reverse = false, 
  pauseOnHover = false, 
  children, 
  vertical = false, 
  repeat = 4, 
  ariaLabel, 
  ariaLive = 'off', 
  ariaRole = 'marquee', 
  ...props 
}: MarqueeProps) { 
  const marqueeRef = useRef<HTMLDivElement>(null); 

  return ( 
    <div 
      {...props} 
      ref={marqueeRef} 
      data-slot="marquee" 
      className={cn( 
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]', 
        { 
          'flex-row': !vertical, 
          'flex-col': vertical, 
        }, 
        className, 
      )} 
      aria-label={ariaLabel} 
      aria-live={ariaLive} 
      role={ariaRole} 
      tabIndex={0} 
    > 
      {React.useMemo( 
        () => ( 
          <> 
            {Array.from({ length: repeat }, (_, i) => ( 
              <div 
                key={i} 
                className={cn( 
                  !vertical ? 'flex-row [gap:var(--gap)]' : 'flex-col [gap:var(--gap)]', 
                  'flex shrink-0 justify-around', 
                  !vertical && 'animate-marquee flex-row', 
                  vertical && 'animate-marquee-vertical flex-col', 
                  pauseOnHover && 'group-hover:[animation-play-state:paused]', 
                  reverse && '[animation-direction:reverse]', 
                )} 
              > 
                {children} 
              </div> 
            ))} 
          </> 
        ), 
        [repeat, children, vertical, pauseOnHover, reverse], 
      )} 
    </div> 
  ); 
}

interface TestimonialCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
  country: string;
}

function TestimonialCard({ img, name, username, body, country }: TestimonialCardProps) {
  return (
    <Card className="w-64 bg-white/10 backdrop-blur-sm border-white/20">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white flex items-center gap-1">
              {name} <span className="text-xs text-white/70">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-white/60">{username}</p>
          </div>
        </div>
        <blockquote className="text-sm text-white/90 leading-relaxed">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

interface Testimonials3DProps {
  testimonials: TestimonialCardProps[];
  className?: string;
}

export function Testimonials3D({ testimonials, className }: Testimonials3DProps) {
  return (
    <div className={cn("relative flex h-[600px] w-full items-center justify-center overflow-hidden [perspective:300px]", className)}>
      <div
        className="flex flex-row items-center gap-4 w-full max-w-7xl"
        style={{
          transform: 'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
        }}
      >
        {/* Coluna 1 - Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={4} className="[--duration:35s]">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.username} {...testimonial} />
          ))}
        </Marquee>
        
        {/* Coluna 2 - Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:35s]">
          {testimonials.slice(3, 6).map((testimonial) => (
            <TestimonialCard key={testimonial.username} {...testimonial} />
          ))}
        </Marquee>
        
        {/* Coluna 3 - Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={4} className="[--duration:35s]">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.username} {...testimonial} />
          ))}
        </Marquee>
        
        {/* Coluna 4 - Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:35s]">
          {testimonials.slice(3, 6).map((testimonial) => (
            <TestimonialCard key={testimonial.username} {...testimonial} />
          ))}
        </Marquee>

        
      </div>
    </div>
  );
}