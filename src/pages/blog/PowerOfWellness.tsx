import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import wellnessHeroImg from "@/assets/wellness-lifestyle.jpg";
import lifestyleCheckupImg from "@/assets/lifestyle-checkup.jpg";

const PowerOfWellness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Image Section */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <img
          src={wellnessHeroImg}
          alt="Wellness and healthy lifestyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <div className="text-white">
              <p className="text-primary-foreground/80 mb-2 text-sm font-medium">May 7, 2025</p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                The Power of Wellness: Building a Healthier, Happier You
              </h1>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock className="h-4 w-4" />
                5 min read
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
            
            {/* Section: What Is Wellness? */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-foreground">
                What Is Wellness?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Wellness</strong> is more than the absence of disease. It is a balanced state of <strong>physical</strong>, <strong>mental</strong>, and <strong>emotional health</strong> that allows you to live with <strong>energy</strong>, <strong>purpose</strong>, and <strong>resilience</strong>. It involves how you <strong>eat</strong>, <strong>move</strong>, <strong>rest</strong>, <strong>think</strong>, and <strong>care for yourself</strong>. In modern healthcare, wellness focuses on <strong>prevention</strong> and <strong>optimization</strong> rather than waiting until something goes wrong.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At its core, wellness means taking an <strong>active role in your health</strong> and making <strong>daily choices</strong> that help your body and mind <strong>thrive</strong>.
              </p>
            </section>

            {/* Divider */}
            <hr className="my-10 border-border" />

            {/* Section: The Modern Approach to Wellness */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-foreground">
                The Modern Approach to Wellness
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, wellness has evolved into a <strong>lifestyle</strong>. People are no longer satisfied with simply treating symptoms. They want to understand how to <strong>prevent illness</strong>, <strong>improve longevity</strong>, and maintain <strong>youthfulness</strong> and <strong>energy</strong> as they age.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This modern approach includes:
              </p>
              
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <strong>Regular exercise</strong> and movement that strengthens the body and improves circulation
                </li>
                <li className="flex items-start gap-3">
                  <strong>Nutritious, whole foods</strong> that fuel the body and balance hormones
                </li>
                <li className="flex items-start gap-3">
                  <strong>Quality sleep</strong> that supports recovery and mental clarity
                </li>
                <li className="flex items-start gap-3">
                  <strong>Stress management</strong> through mindfulness, meditation, or relaxation techniques
                </li>
                <li className="flex items-start gap-3">
                  <strong>Preventive medical care</strong>, such as IV therapy, cellular rejuvenation, or vitamin optimization
                </li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed">
                When these elements come together, the body functions more efficiently, and you naturally feel more <strong>balanced</strong> and <strong>alive</strong>.
              </p>
            </section>

            {/* Divider */}
            <hr className="my-10 border-border" />

            {/* Section: Why Wellness Matters More Than Ever */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-foreground">
                Why Wellness Matters More Than Ever
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our daily lives are filled with <strong>stress</strong>, <strong>pollution</strong>, <strong>processed foods</strong>, and long hours of <strong>screen time</strong>. Over time, these habits can <strong>weaken the immune system</strong>, <strong>accelerate aging</strong>, and leave us feeling tired and unmotivated.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wellness helps reverse these effects by <strong>restoring balance</strong> and helping your body work the way it was designed to. By focusing on <strong>prevention</strong>, you can avoid many <strong>chronic conditions</strong> and maintain your <strong>quality of life</strong> for years to come.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some benefits of a consistent wellness lifestyle include:
              </p>
              
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong>Stronger immune function</strong></li>
                <li><strong>Better mood and emotional balance</strong></li>
                <li><strong>Improved focus and productivity</strong></li>
                <li><strong>Slower aging and better skin health</strong></li>
                <li><strong>Enhanced recovery and energy levels</strong></li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed">
                Wellness is not a quick fix but a <strong>long-term commitment</strong> to living better every day.
              </p>
            </section>

            {/* Image */}
            <div className="my-10 rounded-xl overflow-hidden shadow-lg">
              <img src={lifestyleCheckupImg} alt="Wellness lifestyle and checkup" className="w-full h-auto" />
            </div>

            {/* Divider */}
            <hr className="my-10 border-border" />

            {/* Section: Integrating Regenerative Medicine Into Wellness */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-foreground">
                Integrating Regenerative Medicine Into Wellness
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Regenerative medicine</strong> has become a key part of modern wellness because it supports the body's natural ability to <strong>repair</strong> and <strong>renew itself</strong>. Treatments such as <strong>cellular therapy</strong>, <strong>IV nutrition</strong>, and <strong>anti-aging programs</strong> can enhance how your body heals, improves energy, and maintains vitality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By combining <strong>lifestyle wellness</strong> with <strong>regenerative medicine</strong>, patients can experience deeper and longer-lasting benefits. It is not just about feeling better but truly transforming how your body functions at the <strong>cellular level</strong>.
              </p>
            </section>

            {/* Divider */}
            <hr className="my-10 border-border" />

            {/* Section: Wellness at Miracle Regenerative Center */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-foreground">
                Wellness at Miracle Regenerative Center
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At <strong>Miracle Regenerative Center</strong>, wellness is at the heart of everything we do. Our approach goes beyond traditional healthcare by focusing on <strong>prevention</strong>, <strong>balance</strong>, and <strong>long-term vitality</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer <strong>personalized programs</strong> designed to restore energy, boost immunity, and promote longevity. Whether through <strong>IV therapy</strong>, <strong>cellular rejuvenation</strong>, or <strong>advanced wellness protocols</strong>, our team helps you create a lifestyle that supports <strong>optimal health</strong> inside and out.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Miracle Regenerative Center</strong> is where modern science meets natural healing. We believe wellness is not just a goal but a <strong>lifelong journey</strong> toward living better, longer, and stronger.
              </p>
            </section>

            {/* CTA Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mt-12">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                Ready to Experience IV Therapy?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Schedule a consultation with our expert team to discover how customized IV therapy can help restore your energy and wellness.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                Schedule a Consultation
              </Link>
            </div>

            {/* Related Blog Posts */}
            <RelatedBlogPosts currentSlug="power-of-wellness" category="Wellness & Prevention" />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default PowerOfWellness;
