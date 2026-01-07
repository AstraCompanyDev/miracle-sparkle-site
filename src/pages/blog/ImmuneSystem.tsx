import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import immuneHeroImg from "@/assets/immune-health.jpg";
import immuneNutritionImg from "@/assets/immune-nutrition.jpg";

const ImmuneSystem = () => {
  return (
    <div className="min-h-screen bg-background">

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <img src={immuneHeroImg} alt="Immune System Health" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">

          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              Health & Prevention
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Strengthen Your Immune System: How to Stay Healthy and Prevent Illness
          </h1>

          <div className="flex items-center justify-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              October 3, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>

        </div>

      </section>


      {/* Article Content */}
      <article className="py-16 md:py-24">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="prose prose-lg max-w-none">

            {/* Understanding the Immune System */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Understanding the Immune System
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Your <strong>immune system</strong> is your body's built-in defense mechanism. It protects you from <strong>infections</strong>, <strong>viruses</strong>, and <strong>harmful bacteria</strong> that can cause illness. This complex network of cells, tissues, and organs works together every second to identify and eliminate potential threats before they make you sick.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When your immune system is strong, it acts like a shield, preventing illness and helping you recover quickly. However, when it is weakened by <strong>stress</strong>, <strong>poor sleep</strong>, or <strong>lack of nutrients</strong>, your body becomes more vulnerable to fatigue, inflammation, and infections.
              </p>

            </section>


            {/* What Weakens the Immune System */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Weakens the Immune System
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Many everyday factors can quietly weaken your immunity over time. Understanding these triggers can help you protect your health more effectively.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Common causes include:
              </p>

              <ul className="space-y-3 mb-6">

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Chronic stress</strong> which increases cortisol levels and reduces immune response
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Lack of sleep</strong> which limits your body's ability to repair and restore
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Poor nutrition</strong> or diets low in vitamins, minerals, and antioxidants
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Dehydration</strong> which slows down detoxification and cellular function
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Sedentary lifestyle</strong> which affects circulation and lymphatic drainage
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Environmental toxins</strong> such as pollution and chemicals
                  </span>
                </li>

              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Recognizing these factors allows you to take proactive steps toward strengthening your immune system naturally.
              </p>

            </section>


            {/* How to Strengthen Your Immunity */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                How to Strengthen Your Immunity Naturally
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                A strong immune system is built through consistent, healthy habits that support your body inside and out.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Here are key ways to enhance your immune strength:
              </p>

              <ul className="space-y-3 mb-6">

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Eat nutrient-rich foods</strong> such as fruits, vegetables, lean proteins, and healthy fats that provide essential vitamins and antioxidants
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Stay hydrated</strong> to help flush toxins and maintain optimal cellular function
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Exercise regularly</strong> to promote better blood circulation and reduce inflammation
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Prioritize sleep</strong> as your body performs critical immune repairs during deep rest
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Manage stress</strong> through mindfulness, meditation, or spending time outdoors
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Limit alcohol and smoking</strong> to reduce oxidative stress and inflammation
                  </span>
                </li>

              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Small, consistent choices create a strong foundation for long-term health and resilience.
              </p>

            </section>


            {/* Image Break */}
            <section className="mb-12">
              <img src={immuneNutritionImg} alt="Immune boosting nutrition" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </section>


            {/* Regenerative Medicine */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Role of Regenerative Medicine in Immune Health
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Regenerative medicine</strong> offers an advanced approach to supporting immune function. Treatments such as <strong>stem cell therapy</strong>, <strong>IV vitamin therapy</strong>, and <strong>antioxidant infusions</strong> can help restore balance, reduce inflammation, and improve recovery.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                For example:
              </p>

              <ul className="space-y-3 mb-6">

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>IV therapy</strong> delivers immune-boosting nutrients like vitamin C, zinc, and glutathione directly into the bloodstream for rapid absorption.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Stem cell therapy</strong> helps modulate immune response and repair tissue damage caused by chronic inflammation or illness.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Anti-aging and wellness programs</strong> focus on maintaining strong immunity through cellular rejuvenation and nutrient optimization.
                  </span>
                </li>

              </ul>

              <p className="text-muted-foreground leading-relaxed">
                These therapies complement healthy lifestyle habits by targeting the root causes of fatigue, immune imbalance, and inflammation.
              </p>

            </section>


            {/* Conclusion */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Immune Health at Miracle Regenerative Center
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                At <strong>Miracle Regenerative Center</strong>, we believe prevention is the most powerful form of medicine. Our immune support programs combine modern regenerative treatments with personalized wellness care to help your body stay strong and resilient all year round.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether you are recovering from illness, managing chronic fatigue, or simply want to enhance your natural defenses, our medical team creates tailored treatment plans designed to strengthen your immunity and restore balance.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Through science-based care, IV therapy, and regenerative medicine, Miracle Regenerative Center helps you achieve <strong>optimal wellness</strong> and <strong>long-term vitality</strong>. Because staying healthy is not just about fighting illness but empowering your body to thrive every day.
              </p>

            </section>


            {/* CTA Section */}
            <section className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center mb-12">

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Strengthen Your Immune System?
              </h3>

              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Schedule a consultation with our expert team to discover how customized IV therapy and regenerative medicine can help restore your health and wellness.
              </p>

              <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Schedule a Consultation
              </Link>
            </section>


            {/* Related Posts */}
            <RelatedBlogPosts currentSlug="immune-system" category="IV & Immune Therapy" />
          </div>

        </div>

      </article>


      <Footer />

    </div>
  );
};

export default ImmuneSystem;
