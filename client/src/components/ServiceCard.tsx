import { Card } from "@/components/ui/card";
import type { ElementType } from "react";

interface ServiceCardProps {
  icon: ElementType;
  title: string;
  items: string[];
}

export default function ServiceCard({ icon: Icon, title, items }: ServiceCardProps) {
  return (
    <Card className="p-8 h-full hover-elevate transition-all duration-300">
      <div className="flex flex-col space-y-4">
        <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary mt-1">•</span>
              <span className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
