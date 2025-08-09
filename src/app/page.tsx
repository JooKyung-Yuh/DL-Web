'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { usePaperStore } from "@/stores"

export default function Home() {
  const { papers, isLoading, setPapers, setLoading } = usePaperStore();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          DL Web - Deep Learning Paper Reader
        </p>
      </div>

      <div className="relative flex flex-col place-items-center space-y-8">
        <h1 className="text-6xl font-bold text-center">
          Welcome to{' '}
          <span className="text-blue-600">DL Web</span>
        </h1>
        
        <div className="flex space-x-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-6">
        <Card className="group transition-colors hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              PDF Viewer{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                →
              </span>
            </CardTitle>
            <CardDescription>
              Advanced PDF viewing with dual-pane support for research papers.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="group transition-colors hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              Paper Management{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                →
              </span>
            </CardTitle>
            <CardDescription>
              Organize and track your reading progress across multiple papers.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="group transition-colors hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              Learning Paths{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                →
              </span>
            </CardTitle>
            <CardDescription>
              Curated learning sequences for systematic paper study.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="group transition-colors hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              Reference Links{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                →
              </span>
            </CardTitle>
            <CardDescription>
              Smart reference detection and navigation between papers.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </main>
  )
}
