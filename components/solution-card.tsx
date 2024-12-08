'use client';

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SolutionItem {
  title: string;
  description: string;
}

interface SolutionCardProps {
  title: string;
  description: string;
  items: SolutionItem[];
  index: number;
}

export function SolutionCard({ title, description, items, index }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="col-span-full lg:col-span-2"
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item, idx) => (
              <Card key={idx} className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
