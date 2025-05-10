import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Blog() {
  const blogPosts = [
    {
      title: "React Portals — Teleporting the react way",
      excerpt:
        "Learn how to use React Portals to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",
      date: "April 15, 2023",
      readTime: "5 min read",
      link: "#",
    },
    {
      title: "Optimizing React Performance",
      excerpt:
        "Discover techniques to improve your React application's performance through memoization, code splitting, and more.",
      date: "March 10, 2023",
      readTime: "7 min read",
      link: "#",
    },
    {
      title: "Building Accessible UIs with React",
      excerpt: "A comprehensive guide to creating accessible user interfaces in React applications.",
      date: "February 22, 2023",
      readTime: "8 min read",
      link: "#",
    },
  ]

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="bg-gray-100/80 dark:bg-gray-900/60 border-gray-300 dark:border-gray-800 p-6 hover:border-blue-500 transition-colors"
          >
            <div className="mb-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {post.date} • {post.readTime}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 h-24 overflow-hidden">{post.excerpt}</p>
            <Link href={post.link}>
              <Button
                variant="link"
                className="p-0 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
