import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Presentation } from "lucide-react";

export default function Projects() {
  return (
    <Layout>
      <div className="bg-background min-h-screen pb-24 font-serif">
        <section className="container px-4 mx-auto py-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Header */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
                Projects & Research Engagements
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategic initiatives and consulting projects focused on entrepreneurship ecosystem development and social impact.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full bg-white border-orange-100 hover:shadow-lg transition-all group">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none w-fit mt-3">
                        {project.role}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Impact Section */}
            <div className="bg-secondary text-white p-12 rounded-3xl relative overflow-hidden mt-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-accent mb-6">Impact & Vision</h2>
                <p className="text-xl font-light leading-relaxed text-white/90">
                  These projects reflect my commitment to building sustainable entrepreneurship ecosystems, nurturing social enterprises, and fostering leadership that balances impact with innovation. Each engagement is grounded in a belief that meaningful change emerges through collaboration, strategic thinking, and deep understanding of local contexts.
                </p>
              </div>
            </div>

          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
