import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import antiAgingImg from "@/assets/anti-aging.jpg";
import antiAgingVitalityImg from "@/assets/anti-aging-vitality.jpg";

const AntiAgingLongevity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Image Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img 
          src={antiAgingImg} 
          alt="Anti-Aging and Longevity" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-3">September 28, 2025</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-4 leading-tight">
                Anti-Aging and Longevity: The Modern Science of Staying Young
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto py-6">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="space-y-12">
              
              {/* Section: What is anti-aging and longevity science? */}
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-semibold text-foreground">
                  What is anti-aging and longevity science?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Anti-aging and longevity science focuses on understanding the biological processes that cause aging and finding ways to slow or reverse them. It combines research from genetics, cellular biology, regenerative medicine, nutrition, and lifestyle to help people maintain health, energy, and vitality as they age. The goal is not just to live longer but to live healthier and feel younger for longer.
                </p>
              </div>

              {/* Divider */}
              <hr className="border-muted" />

              {/* Section: Why is this field gaining attention? */}
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-semibold text-foreground">
                  Why is this field gaining attention?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  People are increasingly interested in proactive wellness rather than waiting for illness to appear. With advances in science, researchers now understand how aging is linked to cellular damage, inflammation, and declining regenerative capacity. Modern anti-aging strategies aim to protect cells, enhance repair mechanisms, and optimize bodily functions. Stem cells, exosomes, and regenerative medicine have brought a new dimension to longevity, helping individuals support recovery, maintain organ function, and slow the effects of aging.
                </p>
              </div>

              {/* Divider */}
              <hr className="border-muted" />

              {/* Section: How can anti-aging treatments help you? */}
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-semibold text-foreground">
                  How can anti-aging treatments help you?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Anti-aging and longevity treatments can provide benefits such as:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Cellular repair and regeneration
                    </h3>
                    <p className="text-muted-foreground">
                      Stem cell therapy and exosome treatments can help rejuvenate tissues, improve organ function, and support overall vitality
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Immune system support
                    </h3>
                    <p className="text-muted-foreground">
                      Regenerative therapies and tailored wellness programs can enhance immunity, reducing the risk of age-related diseases
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Metabolism and energy optimization
                    </h3>
                    <p className="text-muted-foreground">
                      IV therapies, nutrition guidance, and regenerative treatments help maintain energy, improve recovery, and support healthy metabolism
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Skin and appearance
                    </h3>
                    <p className="text-muted-foreground">
                      Advanced treatments promote collagen production, improve skin elasticity, and reduce visible signs of aging
                    </p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  These treatments can be personalized to individual needs, combining medical therapies with lifestyle strategies for maximum impact.
                </p>
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <img 
                  src={antiAgingVitalityImg} 
                  alt="Anti-aging vitality and wellness" 
                  className="w-full h-auto"
                />
              </div>

              {/* Divider */}
              <hr className="border-muted" />

              {/* Section: Why Miracle Regenerative Center */}
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-semibold text-foreground">
                  Why Miracle Regenerative Center
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Miracle Regenerative Center, we integrate the latest scientific advancements with personalized care to help patients achieve longevity and youthful vitality. Our programs combine regenerative medicine, stem cell therapies, wellness planning, and lifestyle guidance to support your body's natural repair mechanisms. Patients often report increased energy, improved well-being, and noticeable improvements in recovery and overall health.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach is holistic and proactive, aiming not just for longer life but for better quality of life. By focusing on cellular health, immune function, and tissue regeneration, Miracle Regenerative Center helps you take control of aging and maintain vitality for years to come.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-primary/5 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                  Ready to Experience Anti-Aging Therapy?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation with our expert team to discover how personalized anti-aging treatments can help you maintain youthful vitality.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>

              {/* Related Blog Posts */}
              <RelatedBlogPosts currentSlug="anti-aging-longevity" category="Anti-Aging & Longevity" />
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AntiAgingLongevity;
