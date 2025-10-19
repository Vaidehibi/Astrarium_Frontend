import type { FC } from "react";

import { Button } from "@workspace/ui/components/button";
import { FileText } from "lucide-react";
import Link from "next/link";

import { Github, Zap } from "lucide-react";

import { APP_CONFIG } from "@/config/app";

export type CtaSectionProps = {};

export const CtaSection: FC<CtaSectionProps> = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get started with VeloKit and ship your next project faster than ever
          before.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            <Link href="/login">Get Started Now</Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            <FileText className="h-4 w-4 mr-2" />
            Read Documentation
          </Button>

          <Button variant="outline" size="lg" className="text-lg px-8">
            <Github className="h-4 w-4 mr-2" />
            <Link href={APP_CONFIG.GITHUB_REPO_URL} target="_blank">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
