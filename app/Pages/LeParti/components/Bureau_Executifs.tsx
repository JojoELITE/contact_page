"use client"

import { Facebook, Twitter, Globe, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Thomas IBINGA MBOUGOU",
      title: "Président",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-7eOYX6upUKDVr89aisIpYlSEYtJXzG.jpeg",
      socials: {
        facebook: "#",
        twitter: "#",
        website: "#",
        linkedin: "#",
      },
    },
    {
      name: "Paul Nicolas NGUEMA",
      title: "Premier vice-président",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-nDginKmn184qHSE97JDVyBzGC5lKTp.jpeg",
      socials: {
        facebook: "#",
        twitter: "#",
        website: "#",
        linkedin: "#",
      },
    },
    {
      name: "Elza Ritchuelle BOUKANDOU",
      title: "Second vice-présidente",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-XU1eDGCDbau02cHQw3RMxIOMz105Qt.jpeg",
      socials: {
        facebook: "#",
        twitter: "#",
        website: "#",
        linkedin: "#",
      },
    },
    {
      name: "Anges Kévin NZIGOU",
      title: "ROLE",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-w5NhuXpItvrJCdKuADozTNfujjcOaj.jpeg",
      socials: {
        facebook: "#",
        twitter: "#",
        website: "#",
        linkedin: "#",
      },
    },
    {
      name: "Eric Reddy MOUSSAVOU TCHISON",
      title: "Secrétaire Général",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-f8BySBbbicXKxF8HqOmdlZG36yZpPm.jpeg",
      socials: {
        facebook: "#",
        twitter: "#",
        website: "#",
        linkedin: "#",
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-blue-600">L&apos;organigramme du parti</h2>
          <h3 className="text-4xl font-bold mt-2 mb-4">Nos Leaders</h3>
          <p className="text-muted-foreground">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
              <h4 className="font-semibold text-lg text-center">{leader.name}</h4>
              <p className="text-muted-foreground text-sm mb-3">{leader.title}</p>
              <div className="flex gap-4">
                <motion.div variants={socialIconVariants} whileHover="hover">
                  <Link href={leader.socials.facebook} className="text-muted-foreground hover:text-blue-600">
                    <Facebook className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div variants={socialIconVariants} whileHover="hover">
                  <Link href={leader.socials.twitter} className="text-muted-foreground hover:text-blue-600">
                    <Twitter className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div variants={socialIconVariants} whileHover="hover">
                  <Link href={leader.socials.website} className="text-muted-foreground hover:text-blue-600">
                    <Globe className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div variants={socialIconVariants} whileHover="hover">
                  <Link href={leader.socials.linkedin} className="text-muted-foreground hover:text-blue-600">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

