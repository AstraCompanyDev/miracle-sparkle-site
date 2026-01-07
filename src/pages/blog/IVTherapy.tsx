import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import ivTherapyImg from "@/assets/iv-therapy-session.jpg";
import lifestyleIVImg from "@/assets/lifestyle-iv.jpg";

const IVTherapy = () => {
  return (
    <div className="min-h-screen bg-background">

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <img src={ivTherapyImg} alt="IV Therapy Session" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">

          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              IV & Immune Therapy
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            IV Therapy: Why It's More Than Just Hydration
          </h1>

          <div className="flex items-center justify-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              June 15, 2025
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

            {/* Section: What Is IV Therapy? */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Is IV Therapy?
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                <strong>IV therapy</strong>, short for intravenous therapy, delivers <strong>vitamins</strong>, <strong>minerals</strong>, and <strong>nutrients</strong> directly into your bloodstream. Unlike oral supplements that must pass through the digestive system, IV therapy allows your body to absorb nutrients immediately and at a much higher concentration. This makes it one of the fastest and most effective ways to restore hydration and support overall wellness.
              </p>

            </section>


            {/* Divider */}
            <hr className="border-border my-8" />


            {/* Section: How IV Therapy Supports the Body */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                How IV Therapy Supports the Body
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                While hydration is the foundation, IV therapy does much more than simply replenish fluids. Each infusion is carefully formulated to target specific wellness goals, from boosting energy and immunity to improving skin health and recovery.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Some key benefits include:
              </p>

              <div className="space-y-6">

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Enhanced Energy and Focus</h3>
                  <p className="text-muted-foreground">
                    <strong>B vitamins</strong> and <strong>amino acids</strong> can help fight fatigue and improve mental clarity.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Immune System Support</h3>
                  <p className="text-muted-foreground">
                    <strong>Vitamin C</strong> and <strong>zinc</strong> strengthen your body's natural defenses, helping you stay healthy year-round.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Detoxification and Recovery</h3>
                  <p className="text-muted-foreground">
                    Antioxidants like <strong>glutathione</strong> assist the body in removing toxins and repairing cellular damage.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Skin and Beauty Benefits</h3>
                  <p className="text-muted-foreground">
                    Nutrient-rich IV drips can promote <strong>collagen production</strong> and give the skin a healthy, glowing appearance.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Post-Workout or Travel Recovery</h3>
                  <p className="text-muted-foreground">
                    IV therapy helps replenish <strong>electrolytes</strong> and speed up muscle recovery, reducing exhaustion.
                  </p>
                </div>

              </div>

            </section>


            {/* Image Break */}
            <section className="mb-12">
              <img src={lifestyleIVImg} alt="IV Therapy lifestyle" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </section>


            {/* Divider */}
            <hr className="border-border my-8" />


            {/* Section: Why It's Gaining Popularity */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why It's Gaining Popularity
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Modern lifestyles often lead to <strong>stress</strong>, <strong>poor nutrition</strong>, and <strong>lack of sleep</strong>, all of which can deplete essential nutrients. IV therapy offers a quick and efficient way to rebalance the body, making it popular among professionals, athletes, and those seeking a proactive approach to health and wellness.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Many people notice immediate effects such as <strong>increased energy</strong>, <strong>improved mood</strong>, and <strong>mental clarity</strong>. Benefits that can last for several days after treatment.
              </p>

            </section>


            {/* Divider */}
            <hr className="border-border my-8" />


            {/* Section: Customized IV Therapy at Miracle Regenerative Center */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Customized IV Therapy at Miracle Regenerative Center
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                At <strong>Miracle Regenerative Center</strong>, each IV therapy is customized to fit your unique needs. Our medical professionals design personalized formulations that may include vitamins, minerals, antioxidants, and amino acids to restore balance and vitality from within.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking to <strong>boost immunity</strong>, <strong>recover from fatigue</strong>, or simply refresh your body and mind, Miracle Regenerative Center offers a safe, effective, and medically guided experience to help you feel your best.
              </p>

            </section>


            {/* CTA Section */}
            <section className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center mb-12">

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Experience IV Therapy?
              </h3>

              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Schedule a consultation with our expert team to discover how customized IV therapy can help restore your energy and wellness.
              </p>

              <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Schedule a Consultation
              </Link>
            </section>


            {/* Related Blog Posts */}
            <RelatedBlogPosts currentSlug="iv-therapy" category="IV & Immune Therapy" />

          </div>

        </div>

      </article>


      <Footer />

    </div>
  );
};

export default IVTherapy;
