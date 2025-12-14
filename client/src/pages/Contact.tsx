import { Layout } from "@/components/layout";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-orange-50/30 pb-24 flex flex-col justify-center">
        <div className="container px-4 mx-auto max-w-5xl py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid md:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white"
          >
            {/* Left Info Side */}
            <div className="bg-secondary text-white p-12 flex flex-col justify-between relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
               <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
               
               <div className="relative z-10">
                 <h2 className="text-4xl font-serif font-bold mb-6">Let's Connect</h2>
                 <p className="text-white/80 mb-12 text-lg leading-relaxed">
                   I am always open to discussing research collaborations, speaking engagements, and educational initiatives.
                 </p>
                 
                 <div className="space-y-8">
                   <div className="flex items-start gap-4">
                     <div className="p-3 bg-white/10 rounded-lg">
                       <Mail className="w-6 h-6 text-accent" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg">Email</h3>
                       <p className="text-white/70">{personalInfo.email}</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="p-3 bg-white/10 rounded-lg">
                       <MapPin className="w-6 h-6 text-accent" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg">Location</h3>
                       <p className="text-white/70">Ahmedabad, Gujarat, India</p>
                       <p className="text-white/50 text-sm">Entrepreneurship Development Institute of India</p>
                     </div>
                   </div>

                   <div className="flex items-start gap-4">
                     <div className="p-3 bg-white/10 rounded-lg">
                       <Linkedin className="w-6 h-6 text-accent" />
                     </div>
                     <div>
                        <h3 className="font-semibold text-lg">Social</h3>
                        <a href={personalInfo.socials.linkedIn} target="_blank" className="text-white/70 hover:text-white underline decoration-accent/50 underline-offset-4">
                          Connect on LinkedIn
                        </a>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                 <p className="font-serif italic text-white/60">
                   "Vidya dadati vinayam" — Knowledge gives humility.
                 </p>
               </div>
            </div>

            {/* Right Form Side */}
            <div className="p-12 bg-white">
              <h3 className="text-2xl font-bold text-secondary mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <Input placeholder="Your Name" className="bg-gray-50 border-gray-200 h-12" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-gray-50 border-gray-200 h-12" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <Textarea placeholder="How can I help you?" className="min-h-[150px] bg-gray-50 border-gray-200 resize-none p-4" />
                </div>
                
                <Button className="w-full h-12 text-lg bg-secondary hover:bg-secondary/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
