import { Layout } from "@/components/layout";
import { journey, qualifications, personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <Layout>
      <div className="bg-orange-50/30 min-h-screen pb-24">
        {/* Header */}
        <section className="py-20 container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">My Journey</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the disciplined skies of the Indian Air Force to the rigorous halls of academia, 
              my path has been defined by a commitment to service, learning, and understanding the human spirit in organizations.
            </p>
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="container px-4 mx-auto max-w-4xl">
          <div className="relative border-l-2 border-primary/20 pl-8 md:pl-12 space-y-12">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] md:-left-[58px] top-0 bg-white p-2 rounded-full border border-orange-100 shadow-sm">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-50/50 hover:shadow-md transition-shadow">
                    <span className="text-sm font-semibold text-accent tracking-wider uppercase mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Academic Qualifications */}
        <section className="container px-4 mx-auto mt-24">
          <h2 className="text-3xl font-serif font-bold text-center text-secondary mb-12">Academic Qualifications</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-orange-100 hover:border-primary/20 transition-colors bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-primary">{qual.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-secondary mb-1">{qual.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3">{qual.year}</p>
                    {qual.details && (
                      <p className="text-sm italic text-foreground/80 border-l-2 border-accent pl-3">
                        {qual.details}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* IAF Section */}
        <section className="mt-24 py-20 bg-secondary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="text-accent border-accent mb-6 px-4 py-1">1998 – 2018</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Indian Air Force Journey</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                Two decades of service instilled a deep understanding of leadership, ethics, and operational excellence. 
                My roles spanned HR operations, cybersecurity, and training, managing teams in high-pressure environments.
              </p>
              <blockquote className="text-xl font-serif italic text-accent border-l-4 border-accent pl-6 text-left max-w-2xl mx-auto bg-white/5 p-6 rounded-r-lg">
                "{personalInfo.iafQuote}"
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
