'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import PaintStroke from "@/components/PaintStroke"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"
import { useParams } from 'next/navigation'

const blogPosts = [
  {
    title: "SAP S/4HANA Migration: Best Practices for Success",
    date: "March 15, 2024",
    category: "Technical",
    description: "A comprehensive guide to planning and executing a successful SAP S/4HANA migration, including key considerations, common challenges, and proven solutions.",
    readTime: "8 min read",
  },
  {
    title: "Turkish E-Invoice Integration with SAP: A Complete Guide",
    date: "March 10, 2024",
    category: "Integration",
    description: "Learn how to seamlessly integrate Turkish e-Invoice requirements with your SAP system, ensuring compliance with local regulations while maintaining efficiency.",
    readTime: "6 min read",
  },
  {
    title: "Maximizing ROI with SAP Asset Accounting",
    date: "March 5, 2024",
    category: "Finance",
    description: "Discover strategies to optimize your asset management processes using SAP Asset Accounting, with specific focus on Turkish accounting standards and practices.",
    readTime: "5 min read",
  },
  {
    title: "SAP Cloud Migration: What You Need to Know",
    date: "February 28, 2024",
    category: "Cloud",
    description: "An in-depth look at moving your SAP infrastructure to the cloud, covering benefits, challenges, and key considerations for a successful transition.",
    readTime: "7 min read",
  },
  {
    title: "Real Estate Management with SAP RE-FX",
    date: "February 20, 2024",
    category: "Real Estate",
    description: "Explore how SAP RE-FX can transform your real estate operations, with practical examples and implementation tips for the Turkish market.",
    readTime: "6 min read",
  },
  {
    title: "SAP Fiori: Enhancing User Experience",
    date: "February 15, 2024",
    category: "UX/UI",
    description: "A detailed look at how SAP Fiori is revolutionizing user experience in SAP applications, with tips for successful implementation and adoption.",
    readTime: "5 min read",
  }
];

export default function BlogPage() {
  const params = useParams();
  const locale = (params?.locale ?? 'en') as string;

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-[58rem] flex flex-col items-center space-y-4 text-center">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Latest Insights
        </h1>
        <span className="block max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Expert perspectives on 
          <PaintStroke variant="purple" className="mx-2">SAP solutions</PaintStroke> 
          and 
          <PaintStroke variant="cyan" className="mx-2">digital transformation</PaintStroke>
        </span>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.title} className="flex flex-col">
            <CardHeader>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">
                  <PaintStroke variant="yellow">{post.title}</PaintStroke>
                </CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {post.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <span className="block text-muted-foreground">
                {post.description}
              </span>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={`/${locale}/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  Read More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <span className="block text-muted-foreground mb-4">
          Want to stay updated? 
          <PaintStroke variant="cyan" className="mx-2">Subscribe to our newsletter!</PaintStroke>
        </span>
        <Button asChild>
          <Link href="/contact">Subscribe</Link>
        </Button>
      </div>
    </div>
  )
}
