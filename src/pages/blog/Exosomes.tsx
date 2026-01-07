import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import exosomesImg from "@/assets/exosomes.jpg";
import labCellsImg from "@/assets/blog-lab-cells.jpg";

const Exosomes = () => {
  return (
    <div className="min-h-screen bg-background">

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <img src={exosomesImg} alt="Exosomes Therapy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>


        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">

          <div className="flex items-center justify-center gap-2 mb-6">

            <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              Regenerative Therapy
            </span>

          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            What Are Exosomes and How They Work
          </h1>

          <div className="flex items-center justify-center gap-6 text-white/80">

            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              September 18, 2025
            </span>

            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              5 min read
            </span>

          </div>

        </div>

      </section>


      {/* Blog Content */}
      <article className="py-16 md:py-24">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="prose prose-lg max-w-none">

            {/* Section: What Are Exosomes */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Are Exosomes?
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Exosomes</strong> are tiny particles naturally released by cells to communicate with one another. They carry <strong>proteins</strong>, <strong>genetic material</strong>, and <strong>signaling molecules</strong> that help cells coordinate repair, growth, and immune responses.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Think of exosomes as the body's internal messaging system. They deliver instructions to damaged or aging cells, helping the body repair itself and maintain optimal function.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Unlike stem cells, which can develop into new cells, exosomes work by sending chemical signals that encourage surrounding cells to heal, regenerate, or reduce inflammation. This makes them a key part of modern <strong>regenerative medicine</strong>.
              </p>

            </section>


            {/* Section: How Exosomes Work */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                How Exosomes Work
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Exosomes support the body's natural healing processes in several ways:
              </p>


              <div className="space-y-6">

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cellular communication</h3>
                  <p className="text-muted-foreground">
                    They carry important signals that direct cells on how to repair and regenerate tissue
                  </p>
                </div>


                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Tissue repair and regeneration</h3>
                  <p className="text-muted-foreground">
                    Exosomes can stimulate the growth of new cells and support recovery in damaged tissues
                  </p>
                </div>


                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Inflammation reduction</h3>
                  <p className="text-muted-foreground">
                    By modulating immune responses, exosomes help reduce inflammation in tissues and joints
                  </p>
                </div>


                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Anti-aging and wellness support</h3>
                  <p className="text-muted-foreground">
                    Exosomes contribute to healthier cell function, which can improve skin, joints, and overall vitality
                  </p>
                </div>

              </div>


              <p className="text-muted-foreground leading-relaxed mt-6">
                These tiny vesicles work at a microscopic level, but their effects can be significant, especially when combined with regenerative therapies such as <strong>stem cells</strong> or <strong>IV therapy</strong>.
              </p>

            </section>


            {/* Image Break */}
            <section className="mb-12">
              <img src={labCellsImg} alt="Exosomes under microscope" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
            </section>


            {/* Section: Why Exosome Therapy Is Gaining Attention */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Exosome Therapy Is Gaining Attention
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Exosome therapy</strong> is becoming increasingly popular because it provides a <strong>non-invasive</strong> and <strong>natural approach</strong> to enhancing cellular health. Unlike treatments that only manage symptoms, exosomes help the body repair itself from within.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                They are being explored for multiple applications including:
              </p>


              <ul className="space-y-3 mb-6">

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Recovery</strong> from injuries and surgeries
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Joint and cartilage</strong> support
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Anti-aging</strong> and skin rejuvenation
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Chronic inflammation</strong> management
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Overall <strong>wellness and longevity</strong>
                  </span>
                </li>

              </ul>


              <p className="text-muted-foreground leading-relaxed">
                By harnessing the body's natural communication system, exosome therapy offers a safe and effective way to support healing at the cellular level.
              </p>

            </section>


            {/* Section: Exosome Therapy at Miracle Regenerative Center */}
            <section className="mb-12">

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Exosome Therapy at Miracle Regenerative Center
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                At <strong>Miracle Regenerative Center</strong>, we combine exosome therapy with advanced regenerative medicine protocols to support your body's natural repair and wellness. Each treatment is carefully designed to meet your specific health goals.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Patients often notice improvements in <strong>energy</strong>, <strong>recovery</strong>, and <strong>overall well-being</strong>. Our team ensures that all therapies are administered safely, effectively, and tailored to each individual's needs.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Exosome therapy at Miracle Regenerative Center is more than a treatment. It is a way to help your body communicate, repair, and maintain vitality naturally.
              </p>

            </section>


            {/* CTA Section */}
            <section className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center mb-12">

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Learn More About Exosome Therapy?
              </h3>

              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Schedule a consultation with our expert team to discover how exosome therapy can support your health and wellness goals.
              </p>

              <Link to="/contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Schedule Consultation
              </Link>
            </section>


            {/* Related Posts */}
            <RelatedBlogPosts currentSlug="exosomes" category="Regenerative Therapy" />
          </div>

        </div>

      </article>


      <Footer />

    </div>
  );
};

export default Exosomes;
