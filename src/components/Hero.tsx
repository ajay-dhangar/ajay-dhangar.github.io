import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const particlesRef = useRef<THREE.Points>();
  const waveRef = useRef<THREE.Mesh>();

  useEffect(() => {
    if (!canvasRef.current) return;

    // Enhanced Three.js setup with better lighting and effects
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Enhanced particle system with multiple layers
    const createParticleLayer = (count: number, size: number, color: THREE.Color, range: number) => {
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const scales = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * range;
        positions[i3 + 1] = (Math.random() - 0.5) * range;
        positions[i3 + 2] = (Math.random() - 0.5) * range;

        colors[i3] = color.r + Math.random() * 0.3;
        colors[i3 + 1] = color.g + Math.random() * 0.3;
        colors[i3 + 2] = color.b + Math.random() * 0.3;

        scales[i] = Math.random() * 0.5 + 0.5;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

      const material = new THREE.PointsMaterial({
        size: size,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });

      return new THREE.Points(geometry, material);
    };

    // Create multiple particle layers for depth
    const particles1 = createParticleLayer(3000, 0.15, new THREE.Color(0.2, 0.6, 1.0), 30);
    const particles2 = createParticleLayer(2000, 0.1, new THREE.Color(0.8, 0.4, 1.0), 25);
    const particles3 = createParticleLayer(1500, 0.05, new THREE.Color(0.4, 1.0, 0.8), 20);

    scene.add(particles1, particles2, particles3);
    particlesRef.current = particles1;

    // Create animated wave geometry
    const waveGeometry = new THREE.PlaneGeometry(40, 40, 100, 100);
    const waveMaterial = new THREE.MeshPhongMaterial({
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.1,
      wireframe: true,
      side: THREE.DoubleSide
    });

    const wave = new THREE.Mesh(waveGeometry, waveMaterial);
    wave.rotation.x = -Math.PI / 2;
    wave.position.y = -10;
    scene.add(wave);
    waveRef.current = wave;

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x4f46e5, 2, 50);
    pointLight1.position.set(-20, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7c3aed, 2, 50);
    pointLight2.position.set(20, 10, -10);
    scene.add(pointLight2);

    camera.position.z = 15;

    // Enhanced mouse interaction with 3D movement
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      targetRotation.x = mouse.y * 0.1;
      targetRotation.y = mouse.x * 0.1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Enhanced animation loop with wave animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Smooth camera rotation following mouse
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
      
      camera.position.x = Math.sin(currentRotation.y) * 15;
      camera.position.y = Math.sin(currentRotation.x) * 5;
      camera.lookAt(0, 0, 0);

      // Animate particle layers with different speeds
      if (particles1) {
        particles1.rotation.x += 0.001;
        particles1.rotation.y += 0.002;
      }
      if (particles2) {
        particles2.rotation.x -= 0.0015;
        particles2.rotation.y += 0.0025;
      }
      if (particles3) {
        particles3.rotation.x += 0.0008;
        particles3.rotation.y -= 0.001;
      }

      // Animate wave with sine waves
      if (wave && waveGeometry.attributes.position) {
        const positions = waveGeometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          positions[i + 2] = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time) * 2;
        }
        waveGeometry.attributes.position.needsUpdate = true;
        wave.rotation.z += 0.005;
      }

      // Animate lights
      pointLight1.position.x = Math.sin(time * 0.5) * 20;
      pointLight1.position.z = Math.cos(time * 0.5) * 20;
      pointLight2.position.x = Math.cos(time * 0.7) * 20;
      pointLight2.position.z = Math.sin(time * 0.7) * 20;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Enhanced GSAP animations with 3D transforms
    gsap.fromTo('.hero-content', 
      { opacity: 0, y: 100, rotationX: -30, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0, 
        scale: 1, 
        duration: 2, 
        delay: 1,
        ease: "back.out(1.7)"
      }
    );

    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, x: -100, rotationY: -45 },
      { 
        opacity: 1, 
        x: 0, 
        rotationY: 0, 
        duration: 1.5, 
        delay: 1.5,
        ease: "power3.out"
      }
    );

    gsap.fromTo('.hero-description', 
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1.2, 
        delay: 2,
        ease: "power2.out"
      }
    );

    gsap.fromTo('.hero-cta', 
      { opacity: 0, scale: 0, rotation: 180 },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0, 
        duration: 1, 
        delay: 2.5,
        ease: "elastic.out(1, 0.5)"
      }
    );

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

 return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Enhanced gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 dark:to-black/40" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-500/5 to-purple-500/10" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="hero-content">
          <div className="relative mb-8">
            <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent leading-tight">
              Ajay Dhangar
            </h1>
            <div className="absolute -top-4 -right-4 animate-pulse">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          
          <div className="hero-subtitle relative">
            <p className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 mb-6 tracking-wide">
              Full-Stack Developer &
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tech Enthusiast
              </span>
            </p>
          </div>
          
          <p className="hero-description text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            Crafting seamless web experiences with a blend of creativity and technical expertise.            
          </p>
          
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-500 hover:scale-110 hover:shadow-2xl transform-gpu"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </button>
            
            <button className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:border-blue-500 hover:text-blue-500 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <span className="group-hover:animate-pulse">Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;