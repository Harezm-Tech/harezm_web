'use client';

import { Button } from "@/components/ui/button";
import PaintStroke from "@/components/PaintStroke";
import { Users, Award, Clock, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About Harezm Tech
        </h1>
        <span className="block text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We are a team of passionate technologists dedicated to delivering 
          <PaintStroke variant="purple" className="mx-2">innovative solutions</PaintStroke> 
          that drive business transformation.
        </span>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        <div className="text-center">
          <Users className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">
            <PaintStroke variant="yellow">50+</PaintStroke>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Team Members</p>
        </div>
        <div className="text-center">
          <Award className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">
            <PaintStroke variant="purple">100+</PaintStroke>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
        </div>
        <div className="text-center">
          <Clock className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">
            <PaintStroke variant="cyan">10+</PaintStroke>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
        </div>
        <div className="text-center">
          <Globe className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">
            <PaintStroke variant="yellow">20+</PaintStroke>
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Countries Served</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Mission
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <span className="block text-xl text-gray-600 dark:text-gray-300 mb-8">
            To empower businesses with cutting-edge technology solutions that drive growth, 
            efficiency, and innovation in the digital age.
          </span>
          <Button size="lg" className="mt-4">
            Join Our Team
          </Button>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">
              <PaintStroke variant="yellow">Innovation</PaintStroke>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Constantly pushing boundaries and embracing new technologies
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">
              <PaintStroke variant="purple">Excellence</PaintStroke>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Delivering the highest quality in everything we do
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">
              <PaintStroke variant="cyan">Collaboration</PaintStroke>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Working together to achieve exceptional results
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
