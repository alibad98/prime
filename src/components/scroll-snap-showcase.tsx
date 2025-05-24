'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import heading1 from '@/images/headerbg-1.png';
import heading2 from '@/images/headerbg-2.png';
import heading3 from '@/images/headerbg-3.png';
import overlay1 from '@/images/overlay-1.png';
import overlay2 from '@/images/overlay-2.png';
import overlay3 from '@/images/overlay-3.png';

gsap.registerPlugin(Observer);

const backgrounds = [heading1, heading2, heading3];
const overlays = [overlay1, overlay2, overlay3];
const headings = [
  'خلّي مشروعــــــــــــــك يلمــــــــــع في \nالســـــوق الرقمــــــــــــــــــي!',
  'خلّي مشروعــــــــــــــك يلمــــــــــع في \nالســـــوق الرقمــــــــــــــــــي!',
  'خلّي مشروعــــــــــــــك يلمــــــــــع في \nالســـــوق الرقمــــــــــــــــــي!',
];

const ScrollSnapSection = ({ scrollToRef }: any) => {
  const sectionRefs = useRef<HTMLElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const overlayRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLHeadingElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<any>(null);

  // Use refs for persistent state
  const currentIndexRef = useRef(-1);
  const animatingRef = useRef(false);
  const isExitedRef = useRef(false);

  const wrap = gsap.utils.wrap(0, backgrounds.length);

  useEffect(() => {
    gsap.set(sectionRefs.current, { autoAlpha: 0 });
    gsap.set(imageRefs.current, { yPercent: 0 });
    gsap.set(overlayRefs.current, { yPercent: 0 });
    gsap.set(textRefs.current, { y: 0, opacity: 1 });

    function exitSection() {
      isExitedRef.current = true;
      document.body.style.overflowY = 'auto';

      // Kill the observer to prevent interference
      if (observerRef.current) {
        observerRef.current.kill();
        observerRef.current = null;
      }

      gsap.to(sectionRefs.current, {
        autoAlpha: 0,
        delay: 0.1,
        duration: 0.5,
        onComplete: () => {
          sectionRefs.current.forEach((el) => {
            if (el) {
              el.style.visibility = 'hidden';
              el.style.position = 'absolute';
            }
          });
        },
      });
    }

    function enterSection() {
      isExitedRef.current = false;
      document.body.style.overflowY = 'hidden';

      // Reset sections visibility and position
      sectionRefs.current.forEach((el) => {
        if (el) {
          el.style.visibility = 'visible';
          el.style.position = 'fixed';
        }
      });

      // Recreate observer
      createObserver();

      // Go to last section when re-entering
      gotoSection(backgrounds.length - 1, -1);
    }

    function gotoSection(index: number, direction: number) {
      if (animatingRef.current) return;
      animatingRef.current = true;
      index = wrap(index);

      const tl = gsap.timeline({
        defaults: { duration: 1.2, ease: 'power2.inOut' },
        onComplete: () => {
          animatingRef.current = false;

          // Check if we should exit after animation completes
          if (index === backgrounds.length - 1 && direction === 1) {
            exitSection();
            scrollToRef?.current?.scrollIntoView({ behavior: 'smooth' });
          }
        },
      });

      if (currentIndexRef.current >= 0) {
        gsap.set(sectionRefs.current[currentIndexRef.current], { zIndex: 1 });
        tl.to(
          imageRefs.current[currentIndexRef.current],
          {
            opacity: 0,
            duration: 0.8,
          },
          0
        );
        tl.to(
          overlayRefs.current[currentIndexRef.current],
          {
            yPercent: 100,
            duration: 1.0,
            ease: 'power2.inOut',
          },
          0
        );
        tl.to(
          textRefs.current[currentIndexRef.current],
          {
            y: direction === 1 ? -100 : 100,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          0
        );
      }

      gsap.set(sectionRefs.current[index], { autoAlpha: 1, zIndex: 1 });
      gsap.set(imageRefs.current[index], { opacity: 1 });

      tl.fromTo(
        imageRefs.current[index],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
        },
        0.2
      );
      tl.fromTo(
        overlayRefs.current[index],
        { yPercent: direction === 1 ? 100 : 100 },
        {
          yPercent: 0,
          duration: 1.0,
          ease: 'power2.inOut',
        },
        0.3
      );
      tl.fromTo(
        textRefs.current[index],
        {
          y: direction === 1 ? -100 : -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        0.6
      );

      currentIndexRef.current = index;
    }

    function createObserver() {
      observerRef.current = Observer.create({
        type: 'wheel,touch,pointer',
        wheelSpeed: -1,
        tolerance: 10,
        preventDefault: true,
        onDown: () => {
          if (!isExitedRef.current) {
            gotoSection(currentIndexRef.current - 1, -1);
          }
        },
        onUp: () => {
          if (!isExitedRef.current) {
            gotoSection(currentIndexRef.current + 1, 1);
          }
        },
      });
    }

    // Initialize
    document.body.style.overflow = 'hidden';
    createObserver();
    gotoSection(0, 1);

    // Setup intersection observer to detect when user scrolls back up
    let intersectionObserver: IntersectionObserver | null = null;

    if (containerRef.current) {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && isExitedRef.current) {
              // User scrolled back into the section
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
              enterSection();
            }
          });
        },
        { threshold: 0.1 }
      );
      intersectionObserver.observe(containerRef.current);
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.kill();
      }
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <div className="bg-primary">
      <div
        ref={containerRef}
        className="text-white uppercase  bg-primary h-screen overflow-hidden relative"
      >
        {backgrounds.map((bg, i) => (
          <section
            key={i}
            ref={(el) => {
              if (el) sectionRefs.current[i] = el;
            }}
            className="fixed top-0 left-0 w-full h-full"
            style={{ visibility: 'hidden' }}
          >
            <div
              ref={(el) => {
                if (el) imageRefs.current[i] = el;
              }}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${bg.src})` }}
            />
            <div
              ref={(el) => {
                if (el) overlayRefs.current[i] = el;
              }}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${overlays[i].src})` }}
            />
            <h2
              ref={(el) => {
                if (el) textRefs.current[i] = el;
              }}
              className="absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[clamp(1.5rem,5vw,5rem)] text-gray-200 font-extrabold xl:leading-32  leading-20"
            >
              {headings[i].split('\n').map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ScrollSnapSection;
