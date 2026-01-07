import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import consultationImg from "@/assets/stem-cell-consultation.jpg";
import stemCellRecoveryImg from "@/assets/stem-cell-recovery.jpg";

const StemCellTreatment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Image Section */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <img
          src={consultationImg}
          alt="Stem cell treatment consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <div className="text-white">
              <p className="text-primary-foreground/80 mb-2 text-sm font-medium">August 12, 2025</p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                What Is Stem Cell Treatment?
              </h1>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock className="h-4 w-4" />
                Estimated reading time: ~5 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="bg-background border-b">
        <div className="container mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            
            {/* Section: Understanding Stem Cells */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-foreground">
                Understanding Stem Cells: The Body's Natural Repair System
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Stem cells</strong> are often called the body's "<strong>master cells</strong>." Unlike regular cells that have one specific role, stem cells can become many different types of cells such as <strong>muscle</strong>, <strong>cartilage</strong>, <strong>nerve</strong>, or <strong>skin</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This unique ability allows your body to <strong>repair</strong> and <strong>regenerate</strong> itself. When an area is damaged or weakened, stem cells can step in to <strong>replace those cells</strong>, <strong>restore function</strong>, and <strong>promote healing</strong> from within.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                They have two remarkable features:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <strong>Self-renewal:</strong> They can make more of themselves.
                </li>
                <li className="flex items-start gap-3">
                  <strong>Differentiation:</strong> They can transform into the specific cells your body needs.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Because of these traits, stem cells play a <strong>vital role</strong> in maintaining healthy tissues and repairing damage caused by <strong>aging</strong>, <strong>injury</strong>, or <strong>disease</strong>.
              </p>
            </section>

            {/* Divider */}
            <hr className="my-10 border-border" />

            {/* Section: Why Stem Cell Therapy Is Becoming Popular */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-foreground">
                Why Stem Cell Therapy Is Becoming Popular
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Stem cell therapy</strong> is part of the growing field of <strong>regenerative medicine</strong>, which focuses on <strong>healing</strong> rather than masking symptoms.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                People today are looking for treatments that go beyond pain relief or short-term fixes. They want <strong>long-term wellness</strong>, <strong>mobility</strong>, and <strong>vitality</strong>. That is where stem cell therapy comes in.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some key reasons for its growing popularity include:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  It works with your body's <strong>natural healing system</strong>.
                </li>
                <li className="flex items-start gap-3">
                  It is <strong>minimally invasive</strong> and typically well-tolerated.
                </li>
                <li className="flex items-start gap-3">
                  It offers potential benefits for both <strong>recovery</strong> and <strong>prevention</strong>.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                From <strong>professional athletes</strong> to individuals seeking to slow aging or manage chronic discomfort, stem cell therapy is becoming a trusted option for those who want to invest in their <strong>long-term health</strong>.
              </p>
            </section>

            {/* Divider */}
            <hr className="my-10 border-border" />

            {/* Section: Conditions Stem Cell Therapy May Help With */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-foreground">
                Conditions Stem Cell Therapy May Help With
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Stem cell therapy</strong> is versatile and can support many health goals and conditions, including:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Joint pain and injuries</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Helps <strong>regenerate damaged cartilage</strong>, <strong>improve mobility</strong>, and <strong>reduce inflammation</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Degenerative conditions</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Supports tissues affected by <strong>osteoarthritis</strong>, <strong>tendon damage</strong>, or certain <strong>neurological conditions</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Wellness and longevity</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Promotes overall <strong>cellular health</strong>, helping to maintain <strong>vitality</strong> and slow visible signs of <strong>aging</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Chronic pain and inflammation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Targets underlying <strong>cellular damage</strong> to relieve discomfort and support <strong>recovery</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Post-surgery or injury recovery</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Accelerates healing</strong> and <strong>tissue repair</strong> for faster, smoother recovery.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6">
                Each treatment is tailored to the individual, whether through <strong>localized injections</strong> or <strong>intravenous therapy</strong>, ensuring a personalized and holistic approach to healing.
              </p>
            </section>

            {/* Image */}
            <div className="my-10 rounded-xl overflow-hidden shadow-lg">
              <img src={stemCellRecoveryImg} alt="Stem cell therapy recovery" className="w-full h-auto" />
            </div>

            {/* Divider */}
            <hr className="my-10 border-border" />

            {/* Section: How Stem Cell Therapy Works */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-foreground">
                How Stem Cell Therapy Works
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Stem cell therapy</strong> introduces <strong>healthy, functional cells</strong> into specific areas of the body that need repair or rejuvenation. Once administered, these cells can:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <strong>Replace damaged or aging cells</strong>
                </li>
                <li className="flex items-start gap-3">
                  <strong>Reduce inflammation</strong>
                </li>
                <li className="flex items-start gap-3">
                  <strong>Stimulate new tissue growth</strong>
                </li>
                <li className="flex items-start gap-3">
                  <strong>Support the body's natural healing processes</strong>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Instead of simply managing symptoms, stem cell therapy helps <strong>restore balance and function</strong> at a cellular level. This makes it one of the most forward-thinking treatments in modern <strong>regenerative medicine</strong>.
              </p>
            </section>

            {/* Divider */}
            <hr className="my-10 border-border" />

            {/* Section: Our Approach at Miracle Regenerative Center */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-foreground">
                Our Approach at Miracle Regenerative Center
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At <strong>Miracle Regenerative Center</strong>, we believe true healing begins from within. Our goal is to help you regain <strong>vitality</strong>, <strong>movement</strong>, and <strong>confidence</strong> in your body's natural strength.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We combine <strong>advanced regenerative techniques</strong> with <strong>personalized medical care</strong>. Each treatment plan is designed by our experienced doctors based on your condition, lifestyle, and long-term goals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether you are looking to <strong>recover from injury</strong>, <strong>manage chronic pain</strong>, or enhance <strong>longevity and wellness</strong>, our team is here to guide you every step of the way.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Patients often share how they feel <strong>renewed</strong>, with more energy, less discomfort, and an improved <strong>quality of life</strong>. For us, that is what <strong>regenerative medicine</strong> is all about.
              </p>
            </section>

            {/* Divider */}
            <hr className="my-10 border-border" />

            {/* CTA Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mt-12">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                Start Your Journey Toward Healing and Longevity
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong>Stem cell therapy</strong> is not just a treatment. It is an opportunity to <strong>restore</strong>, <strong>renew</strong>, and <strong>thrive</strong>.
              </p>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you are ready to take the next step toward better health, contact <strong>Miracle Regenerative Center</strong> to learn more about our personalized regenerative programs and how we can help you unlock your body's full healing potential.
              </p>
              <div className="text-muted-foreground mb-6 space-y-2">
                <p>📞 Phone: +66 81-734-2027</p>
                <p>🌐 WhatsApp: +66 81-734-2027</p>
                <p>📍 Location: Bangkok, Thailand</p>
              </div>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                Schedule a Consultation
              </Link>
            </div>

            {/* Related Blog Posts */}
            <RelatedBlogPosts currentSlug="stem-cell-treatment" category="Regenerative Medicine" />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default StemCellTreatment;
