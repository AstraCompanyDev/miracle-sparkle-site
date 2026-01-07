import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import { Link } from "react-router-dom";
import diseasePreventionImg from "@/assets/disease-prevention.jpg";
import wellnessPreventionImg from "@/assets/wellness-prevention.jpg";

const DiseasePreventionRegenerativeMedicine = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src={diseasePreventionImg}
            alt="Disease Prevention and Regenerative Medicine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-12">
          <div className="container mx-auto px-4">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
              Wellness & Prevention
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 max-w-4xl">
              Preventing Disease with Regenerative Medicine and Wellness
            </h1>
            <div className="flex items-center text-white/80 text-sm">
              <span>August 15, 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* The Importance of Disease Prevention */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                The Importance of Disease Prevention
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Preventing disease is the most effective way to maintain long-term health. Instead of waiting until symptoms appear, a proactive approach focuses on strengthening the body, enhancing immunity, and supporting natural healing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Modern healthcare increasingly emphasizes prevention because it reduces the risk of chronic conditions, improves quality of life, and promotes longevity. Wellness habits combined with regenerative medicine offer a powerful strategy to stay healthy and resilient.
              </p>
            </section>

            {/* How Regenerative Medicine Supports Prevention */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                How Regenerative Medicine Supports Prevention
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Regenerative medicine uses advanced therapies to help the body repair, restore, and maintain itself at a cellular level. These treatments go beyond symptom management and focus on the root causes of damage and aging.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some ways regenerative medicine supports disease prevention include:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-2 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Cellular repair and rejuvenation:</strong> Stem cells and exosomes encourage damaged cells to repair and regenerate, helping maintain organ and tissue health
                  </span>
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Immune system support:</strong> Nutrient therapies, IV infusions, and regenerative treatments can strengthen immunity, reducing the risk of infections and chronic inflammation
                  </span>
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Joint and musculoskeletal health:</strong> Regenerative treatments can prevent wear and tear from progressing into chronic pain or mobility issues
                  </span>
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Anti-aging and longevity benefits:</strong> By supporting healthy cell function, regenerative therapies help reduce the impact of aging and promote overall vitality
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                These therapies complement healthy lifestyle practices to provide a comprehensive preventive strategy.
              </p>
            </section>

            {/* Image Break */}
            <div className="my-10 rounded-xl overflow-hidden">
              <img
                src={wellnessPreventionImg}
                alt="Wellness and prevention lifestyle"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Wellness Practices That Enhance Prevention */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                Wellness Practices That Enhance Prevention
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A healthy lifestyle strengthens the benefits of regenerative medicine. Key wellness practices include:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-2 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Balanced nutrition</strong> with vitamins, minerals, and antioxidants that support cellular health
                  </span>
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Regular physical activity</strong> to maintain cardiovascular, joint, and lung health
                  </span>
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Quality sleep</strong> to allow the body to repair and rejuvenate naturally
                  </span>
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Stress management</strong> through mindfulness, meditation, or relaxation techniques
                  </span>
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Hydration and detoxification</strong> to support metabolic and immune function
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Integrating these habits creates a strong foundation for long-term disease prevention and overall well-being.
              </p>
            </section>

            {/* Why Prevention Matters More Than Ever */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                Why Prevention Matters More Than Ever
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Modern lifestyles often include poor diet, stress, pollution, and limited physical activity. Over time, these factors can increase the risk of chronic disease, inflammation, and premature aging.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By combining regenerative medicine with wellness practices, you can proactively reduce these risks. Preventive care not only keeps your body functioning optimally but also allows you to enjoy higher energy, better mobility, and improved mental clarity.
              </p>
            </section>

            {/* Conclusion */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                Preventive Care at Miracle Regenerative Center
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Miracle Regenerative Center, we focus on helping patients achieve proactive health through a combination of regenerative therapies and wellness programs. Our team designs personalized plans that target cellular repair, immune support, and overall vitality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether your goal is to prevent chronic illness, maintain joint health, or enhance longevity, Miracle Regenerative Center offers safe, effective, and science-based solutions. Our approach ensures that every patient can experience stronger health, reduced risk of disease, and a greater sense of well-being.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Prevention is the key to living longer and healthier. By integrating regenerative medicine with daily wellness habits, Miracle Regenerative Center helps you stay at your best today and for years to come.
              </p>
            </section>

            {/* CTA Section */}
            <div className="bg-primary/10 rounded-2xl p-8 text-center mb-12">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Ready to Start Your Wellness Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with our expert team to discover how regenerative medicine can help prevent disease and enhance your vitality.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>

            {/* Related Posts */}
            <RelatedBlogPosts currentSlug="disease-prevention-regenerative-medicine" category="Wellness & Prevention" />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DiseasePreventionRegenerativeMedicine;
