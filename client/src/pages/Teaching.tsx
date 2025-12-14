import { Layout } from "@/components/layout";
import { teaching, academicServices, awards } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Mic, Star } from "lucide-react";

export default function Teaching() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pb-24">
        <section className="py-20 container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">Teaching & Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedication to student growth, executive development, and academic community building.
            </p>
          </motion.div>
        </section>

        <div className="container px-4 mx-auto grid gap-16">
          {/* Courses */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-secondary mb-10 border-b pb-4 border-border">
              Courses Taught
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-orange-50/50 border-orange-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary font-serif">
                    <Star className="w-5 h-5 fill-current" /> Entrepreneurship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {teaching.entrepreneurship.map((course, i) => (
                      <li key={i} className="text-sm text-secondary/80 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-50/50 border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary font-serif">
                    <Users className="w-5 h-5" /> OB & HRM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {teaching.obHrm.map((course, i) => (
                      <li key={i} className="text-sm text-secondary/80 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-50/50 border-gray-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-700 font-serif">
                    <Mic className="w-5 h-5" /> Executive Ed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {teaching.executive.map((course, i) => (
                      <li key={i} className="text-sm text-secondary/80 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Awards */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-secondary mb-10 border-b pb-4 border-border">
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6" /> Academic Honors
                </h3>
                <div className="space-y-4">
                  {awards.academic.map((award, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary flex items-start gap-3"
                    >
                      <p className="text-secondary font-medium">{award}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6" /> Military Distinctions
                </h3>
                <div className="space-y-4">
                  {awards.military.map((award, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-secondary flex items-start gap-3"
                    >
                      <p className="text-secondary font-medium">{award}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Service */}
          <section>
             <h2 className="text-3xl font-serif font-bold text-secondary mb-10 border-b pb-4 border-border">
              Academic Service
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
               <ul className="grid md:grid-cols-2 gap-6">
                 {academicServices.map((service, i) => (
                   <li key={i} className="flex items-start gap-3 text-muted-foreground">
                     <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                     {service}
                   </li>
                 ))}
               </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
