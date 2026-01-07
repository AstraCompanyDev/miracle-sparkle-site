import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import longevityHeroImg from "@/assets/longevity-hero.jpg";
import longevityWellnessImg from "@/assets/longevity-wellness.jpg";

const Longevity = () => {
  return (
    <div className="min-h-screen bg-background">

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <img src={longevityHeroImg} alt="Longevity and Wellness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">

          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              Anti-Aging & Longevity
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Longevity: How Regenerative Medicine and Wellness Can Help You Live Better, Longer
          </h1>

          <div className="flex items-center justify-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              October 10, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

        </div>

      </section>


      {/* Article Content */}
      <article className="py-16 md:py-24">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="prose prose-lg max-w-none">

            {/* The Importance of Longevity */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Importance of Longevity
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Living longer is a goal for many, but <strong>true longevity</strong> is more than just adding years to your life. It is about maintaining <strong>health</strong>, <strong>energy</strong>, and <strong>function</strong> as you age. Modern medicine now emphasizes not only disease treatment but also preventative care and regenerative strategies to support long-term vitality.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Longevity is achieved when the body's systems — including <strong>cardiovascular</strong>, <strong>musculoskeletal</strong>, <strong>immune</strong>, and <strong>cellular health</strong> — work in harmony. By supporting these systems early and consistently, you can reduce the risk of chronic disease, maintain mobility, and improve overall well-being.
              </p>

            </section>


            {/* How Regenerative Medicine Supports Longevity */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                How Regenerative Medicine Supports Longevity
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Regenerative medicine</strong> uses therapies such as <strong>stem cells</strong>, <strong>exosomes</strong>, and <strong>IV treatments</strong> to repair, restore, and maintain cellular function. These approaches help the body naturally combat aging and recover from injury or stress.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Ways regenerative medicine promotes longevity include:
              </p>

              <ul className="space-y-3 mb-6">

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Cellular repair and rejuvenation:</strong> Stem cells and exosomes encourage damaged cells to regenerate, maintaining tissue and organ health over time
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Immune system support:</strong> Regenerative treatments can strengthen immunity, helping the body fight infections, inflammation, and age-related decline
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Joint and musculoskeletal health:</strong> Targeted therapies support cartilage, muscles, and connective tissue, reducing pain and maintaining mobility
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Metabolic and organ support:</strong> Regenerative therapies optimize organ function, promoting energy, endurance, and resilience
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Skin, hair, and tissue vitality:</strong> Treatments may improve skin elasticity, reduce fine lines, and enhance overall appearance, contributing to a youthful look and feel
                  </span>
                </li>

              </ul>

            </section>


            {/* Image Break */}
            <section className="mb-12">
              <img src={longevityWellnessImg} alt="Longevity wellness lifestyle" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </section>


            {/* Lifestyle Practices That Enhance Longevity */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Lifestyle Practices That Enhance Longevity
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Regenerative medicine is most effective when combined with consistent wellness habits. Key practices include:
              </p>

              <ul className="space-y-3 mb-6">

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Balanced nutrition</strong> with antioxidants, vitamins, and minerals to protect cells and support organ health
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Regular exercise</strong> to maintain cardiovascular, lung, and joint function
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Proper sleep</strong> to allow natural repair and hormone balance
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Stress reduction</strong> through mindfulness, meditation, or relaxation techniques
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Hydration and detoxification</strong> to maintain metabolic and immune health
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Avoiding harmful substances</strong> such as tobacco and excessive alcohol
                  </span>
                </li>

              </ul>

              <p className="text-muted-foreground leading-relaxed">
                These habits help maximize the effects of regenerative therapies and sustain long-term health.
              </p>

            </section>


            {/* Why Longevity Care Matters Now */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Longevity Care Matters Now
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Aging naturally affects every system in the body. Without proactive care, risks such as <strong>chronic inflammation</strong>, <strong>cardiovascular decline</strong>, and <strong>degenerative conditions</strong> can accumulate.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                By focusing on longevity through both regenerative medicine and healthy lifestyle choices, you can actively slow the aging process. The goal is to add <strong>quality years</strong>, not just quantity, improving energy, mobility, and mental clarity at every stage of life.
              </p>

            </section>


            {/* Conclusion */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Longevity Programs at Miracle Regenerative Center
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                At <strong>Miracle Regenerative Center</strong>, we combine cutting-edge regenerative therapies with wellness programs designed to support long-term health and vitality. Our personalized plans include:
              </p>

              <ul className="space-y-3 mb-6">

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Stem cell and exosome therapies</strong> for cellular repair
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>IV infusions</strong> to optimize nutrition and immunity
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Wellness guidance</strong> for exercise, diet, and lifestyle
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Anti-aging and longevity strategies</strong> tailored to each patient
                  </span>
                </li>

              </ul>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Our goal is to help patients live longer, healthier, and more vibrant lives. By integrating regenerative medicine with proactive wellness, Miracle Regenerative Center provides a holistic approach to longevity that is safe, effective, and science-based.
              </p>

              <p className="text-muted-foreground leading-relaxed font-medium bg-muted/30 p-4 rounded-lg">
                <strong>Key Takeaway:</strong> Longevity is about living better, not just longer. By supporting cellular health, reducing inflammation, maintaining mobility, and practicing consistent wellness habits, you can enjoy a life of vitality and well-being.
              </p>

            </section>


            {/* CTA Section */}
            <section className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center mb-12">

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Longevity Journey?
              </h3>

              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Schedule a consultation with our expert team to discover how regenerative medicine can help you live better, longer.
              </p>

              <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Schedule a Consultation
              </Link>
            </section>


            {/* Related Posts */}
            <RelatedBlogPosts currentSlug="longevity" category="Anti-Aging & Longevity" />
          </div>

        </div>

      </article>


      <Footer />

    </div>
  );
};

export default Longevity;
