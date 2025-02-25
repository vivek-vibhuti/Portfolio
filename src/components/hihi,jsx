
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false); // State to track mouseover status
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // State to track mouse position

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    if (containerRef.current && !containerRef.current.hasChildNodes()) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Create dust particles
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 2000;
    const positions = new Float32Array(dustCount * 3);
    const velocities = new Float32Array(dustCount * 3);
    const originalPositions = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      originalPositions[i] = x;
      originalPositions[i + 1] = y;
      originalPositions[i + 2] = z;

      velocities[i] = 0;
      velocities[i + 1] = 0;
      velocities[i + 2] = 0;
    }

    dustGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Create glowing materials
    const dustMaterials = [
      new THREE.PointsMaterial({
        size: 0.05, // Increased for better visibility
        color: 0x4f46e5,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      new THREE.PointsMaterial({
        size: 0.04,
        color: 0xec4899,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      new THREE.PointsMaterial({
        size: 0.03,
        color: 0x8b5cf6,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    ];

    // Create multiple dust systems
    const dustSystems = dustMaterials.map((material) => {
      const particles = new THREE.Points(dustGeometry.clone(), material);
      scene.add(particles);
      return particles;
    });

    camera.position.z = 7; // Increased for better visibility

    // Mouse tracking
    const mouse = new THREE.Vector3();
    const mouseSpeed = new THREE.Vector3();
    const lastMousePosition = new THREE.Vector3();
    let isMouseMoving = false;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      mouseSpeed.x = x - lastMousePosition.x;
      mouseSpeed.y = y - lastMousePosition.y;

      lastMousePosition.x = x;
      lastMousePosition.y = y;

      mouse.set(x, y, 0);
      isMouseMoving = true;

      // Update mouse position state
      setMousePosition({ x: event.clientX, y: event.clientY });

      // Reset moving flag after a delay
      setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      frame += 0.002;

      dustSystems.forEach((system, systemIndex) => {
        const positions = system.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < positions.length; i += 3) {
          const particleVector = new THREE.Vector3(
            positions[i],
            positions[i + 1],
            

positions[i + 2]
          );

          // Calculate distance to mouse
          const distanceToMouse = particleVector.distanceTo(mouse);

          // Repulsion force
          if (distanceToMouse < 1) {
            const repulsionForce = 0.05 / (distanceToMouse * distanceToMouse);
            const direction = particleVector.sub(mouse).normalize();

            velocities[i] += direction.x * repulsionForce;
            velocities[i + 1] += direction.y * repulsionForce;

            // Add some randomness to z-axis movement
            velocities[i + 2] += (Math.random() - 0.5) * 0.01;
          }

          // Return to original position
          const originalX = originalPositions[i];
          const originalY = originalPositions[i + 1];
          const originalZ = originalPositions[i + 2];

          velocities[i] += (originalX - positions[i]) * 0.01;
          velocities[i + 1] += (originalY - positions[i + 1]) * 0.01;
          velocities[i + 2] += (originalZ - positions[i + 2]) * 0.01;

          // Apply velocity with damping
          positions[i] += velocities[i] * 0.9;
          positions[i + 1] += velocities[i + 1] * 0.9;
          positions[i + 2] += velocities[i + 2] * 0.9;

          // Apply damping to velocity
          velocities[i] *= 0.95;
          velocities[i + 1] *= 0.95;
          velocities[i + 2] *= 0.95;
        }

        // Rotate the particle system continuously
        const rotationSpeed = isMouseOver ? 0.005 : 0.001; // Increase speed on mouseenter
        system.rotation.x += rotationSpeed;
        system.rotation.y += rotationSpeed;
        system.rotation.z += rotationSpeed;

        // Gentle floating animation
        system.position.y = Math.sin(frame * 2 + systemIndex) * 0.02;

        system.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMouseOver, mousePosition]); // Re-run the effect when isMouseOver or mousePosition changes

  // Mouse enter and leave handlers
  const handleMouseEnter = () => setIsMouseOver(true);
  const handleMouseLeave = () => setIsMouseOver(false);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full opacity-100 z-[-1]"
      style={{ background: "black" }} // For visibility testing
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={(event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }}
    />
  );
};

export default Background;
