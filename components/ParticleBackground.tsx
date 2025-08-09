'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Particles from './Particles';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        particlesRef.current.forEach((particle) => {
            gsap.set(particle, {
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                opacity: Math.random(),
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
            });

            gsap.to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 10 + 10,
                opacity: 0,
                repeat: -1,
                ease: 'none',
                // yoyo: true,
            });
        });
    }, []);

    return (
        <div className="fixed inset-0 z-[-1]">
            {/* {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        particlesRef.current.push(el!);
                    }}
                    className="absolute rounded-full bg-white"
                />
            ))} */}

            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={500}
                particleSpread={10}
                speed={0.2}
                particleBaseSize={50}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>
    );
};

export default ParticleBackground;
