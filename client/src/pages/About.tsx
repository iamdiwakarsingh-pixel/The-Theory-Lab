import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { journey } from "@/lib/data";

export default function About() {
  return (
    <Layout>
      <div className="bg-orange-50/30 min-h-screen pb-24 font-serif">
        <section className="container px-4 mx-auto py-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                A Journey of Service, Scholarship & Purpose
              </h1>
            </div>

            {/* Section 1 */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My professional life began far from academia — in the disciplined and demanding environment of the Indian Air Force, where I served for over 20 years. Those two decades shaped my worldview in profound ways. Leading diverse teams, managing critical communication systems, and training young officers taught me the values of resilience, humility, precision, and service to a larger mission.
              </p>
              <p>
                Yet, as I progressed through my military career, I felt a growing calling toward understanding human behavior, organizational life, and the deeper forces that shape collective action. This curiosity guided me to pursue formal studies in Psychology, Human Resource Management, and later, a PhD in Management.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Transitioning from Command to Inquiry</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Leaving the Air Force was not merely a career shift — it was a personal transformation. I stepped into academia with a beginner’s mind, carrying forward the discipline of military life and merging it with the reflective stillness cultivated through years of meditation and self-inquiry.
                </p>
                <p>
                  During my doctoral work at Dr. B. R. Ambedkar University Delhi, I immersed myself in the field of social entrepreneurship. I realized that these organizations often operate with a wisdom that blends frugality, spiritual values, community orientation, and an unwavering commitment to human dignity. This inspired my dissertation: “Understanding Organizational Culture of Social Enterprises Using a Case Study Approach.”
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">A Scholar Rooted in Indian Ethos</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My research is strongly shaped by Indian philosophical ideas — especially the principle of lokasamgraha, the spirit of working for the welfare of all. I explore how indigenous values, frugal innovation, and spiritual practices infuse culture into mission-driven organizations, enabling them to sustain impact even under resource constraints.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Becoming an Educator & Researcher</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Today, as an Assistant Professor at the Entrepreneurship Development Institute of India (EDII), I teach courses on entrepreneurship, innovation, leadership, and positive psychology. In every classroom, I strive to cultivate curiosity, compassion, and the courage to create.
                </p>
                <p>
                  My journey continues through writing, research collaborations, mentoring young scholars, and engaging with social enterprises across India — from eye care systems to community-led initiatives in challenging geographies like Ladakh.
                </p>
              </div>
            </div>

            {/* Philosophy Box */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-orange-100 text-center space-y-6 my-12">
              <h2 className="text-3xl font-bold text-primary">A Personal Philosophy</h2>
              <div className="text-xl font-light italic text-secondary space-y-3">
                <p>Purpose is not discovered — it is practiced.</p>
                <p>Leadership is not authority — it is service.</p>
                <p>Innovation is not technology — it is empathy.</p>
              </div>
              <p className="text-lg text-muted-foreground pt-4 border-t border-orange-50">
                I see scholarship as both a spiritual and social responsibility — a way to illuminate how organizations can remain humane, ethical, and sustainable in a world hungry for meaning.
              </p>
            </div>

            {/* Timeline Section Restored */}
            <div className="pt-16 border-t border-orange-200">
               <h2 className="text-3xl font-bold text-secondary mb-12 text-center">My Journey</h2>
               <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                 From the disciplined skies of the Indian Air Force to the rigorous halls of academia, my path has been defined by a commitment to service, learning, and understanding the human spirit in organizations.
               </p>

               <div className="relative border-l-2 border-primary/20 pl-8 md:pl-12 space-y-12 max-w-3xl mx-auto">
                {journey.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="relative"
                    >
                      <div className="absolute -left-[42px] md:-left-[58px] top-0 bg-white p-2 rounded-full border border-orange-100 shadow-sm">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-50/50 hover:shadow-md transition-shadow">
                        <span className="text-sm font-semibold text-accent tracking-wider uppercase mb-1 block">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-secondary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
