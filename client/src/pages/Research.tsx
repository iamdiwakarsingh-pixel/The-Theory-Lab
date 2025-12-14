import { Layout } from "@/components/layout";
import { researchInterests, publications, projects } from "@/lib/data";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Book, Presentation } from "lucide-react";

export default function Research() {
  return (
    <Layout>
      <div className="bg-background min-h-screen pb-24">
        {/* Header */}
        <section className="py-20 container px-4 mx-auto text-center bg-gradient-spiritual">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">Research & Scholarship</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring the intersections of spirituality, indigenous wisdom, and modern organizational management.
            </p>
          </motion.div>
        </section>

        {/* Interests */}
        <section className="container px-4 mx-auto -mt-8 relative z-10 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {researchInterests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-border flex flex-col items-center text-center hover:shadow-md transition-shadow h-full justify-center gap-3"
                >
                  <Icon className="w-8 h-8 text-primary/80" />
                  <span className="text-sm font-medium text-secondary">{interest.title}</span>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="container px-4 mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main Content: Publications */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-secondary mb-8 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" /> Publications
            </h2>
            
            <Tabs defaultValue="journals" className="w-full">
              <TabsList className="w-full justify-start mb-8 bg-muted/30 p-1 rounded-full h-12">
                <TabsTrigger value="journals" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Journals</TabsTrigger>
                <TabsTrigger value="proceedings" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Proceedings</TabsTrigger>
                <TabsTrigger value="chapters" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Book Chapters</TabsTrigger>
              </TabsList>
              
              <TabsContent value="journals" className="space-y-4">
                {publications.journalArticles.map((pub, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 bg-white rounded-lg border border-border shadow-sm hover:border-primary/30 transition-colors"
                  >
                    <div className="flex gap-4">
                      <span className="text-primary font-serif font-bold text-xl opacity-50">{i + 1}.</span>
                      <p className="text-foreground/90 leading-relaxed">{pub}</p>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>
              
              <TabsContent value="proceedings" className="space-y-4">
                {publications.proceedings.map((pub, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg border border-border shadow-sm">
                    <p className="text-foreground/90 leading-relaxed">{pub}</p>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="chapters" className="space-y-4">
                {publications.bookChapters.map((pub, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg border border-border shadow-sm">
                    <p className="text-foreground/90 leading-relaxed flex items-center gap-2">
                      <Book className="w-4 h-4 text-accent" /> {pub}
                    </p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar: Projects */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-secondary mb-8 flex items-center gap-2">
              <Presentation className="w-6 h-6 text-primary" /> Projects
            </h2>
            
            <div className="space-y-6">
              {projects.map((project, i) => (
                <Card key={i} className="bg-white border-orange-100 hover:shadow-md transition-all group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-serif text-secondary group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      <Badge variant="secondary" className="bg-orange-50 text-orange-700 hover:bg-orange-100 border-none">
                        {project.role}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
