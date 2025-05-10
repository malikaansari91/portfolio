"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-100/80 dark:bg-gray-900/60 border-gray-300 dark:border-gray-800 p-6">
          <h3 className="text-xl font-bold mb-6 text-black dark:text-white">Get In Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
              <a
                href="mailto:malikaansari91@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                malikaansari91@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
              <a
                href="tel:+919619575311"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                +91 9619575311
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">Mumbai, India</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
              <a
                href="https://linkedin.com/in/malika-ansari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                linkedin.com/in/malika-ansari
              </a>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
              <a
                href="https://github.com/malikaansari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                github.com/malikaansari
              </a>
            </div>
          </div>
        </Card>

        <Card className="bg-gray-100/80 dark:bg-gray-900/60 border-gray-300 dark:border-gray-800 p-6">
          <h3 className="text-xl font-bold mb-6 text-black dark:text-white">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 min-h-[120px]"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
