import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import lungHealthImg from "@/assets/lung-health.jpg";
import breathingExerciseImg from "@/assets/breathing-exercise.jpg";

const LungHealth = () => {
  return (
    <div className="min-h-screen bg-background">

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <img src={lungHealthImg} alt="Lung health and respiratory wellness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

          <div className="flex flex-col items-center gap-6">

            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium backdrop-blur-sm border border-primary/30">
              Wellness & Prevention
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Breathe Easier Naturally: How to Support Lung Health and Recovery
            </h1>

            <div className="flex items-center gap-6 text-white/80 text-sm">

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                July 23, 2025
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                5 min read
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Blog Content */}
      <article className="py-16 md:py-24">

        <div className="container mx-auto px-4">

          <div className="max-w-3xl mx-auto prose prose-lg prose-gray dark:prose-invert">

            {/* Section: Understanding Lung Health */}
            <section className="mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Understanding Lung Health
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                The <strong>lungs</strong> work tirelessly every moment, taking in <strong>oxygen</strong>, releasing <strong>carbon dioxide</strong>, and fueling every cell in your body. <strong>Environmental toxins</strong>, <strong>aging</strong>, <strong>illness</strong>, and <strong>lifestyle habits</strong> can weaken your respiratory system over time. Maintaining strong, flexible <strong>lung tissue</strong> is essential for <strong>energy</strong>, <strong>immunity</strong>, and long-term health.
              </p>

            </section>

            {/* Section: How Regenerative Medicine May Help */}
            <section className="mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                How Regenerative Medicine May Help
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Emerging studies show that <strong>regenerative therapies</strong> can support <strong>lung tissue repair</strong> by encouraging the body's natural healing processes. These treatments can:
              </p>

              <ul className="space-y-3 text-muted-foreground mb-6">

                <li className="flex items-start gap-3">
                  •
                  <span>
                    <strong>Reduce inflammation</strong> within the respiratory system
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  •
                  <span>
                    Support the <strong>regeneration of lung cells</strong> and tissue
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  •
                  <span>
                    Improve <strong>oxygen efficiency</strong> and <strong>breathing performance</strong>
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  •
                  <span>
                    Enhance overall <strong>vitality</strong> and <strong>energy levels</strong>
                  </span>
                </li>

              </ul>

              <p className="text-muted-foreground leading-relaxed">
                At <strong>Miracle Regenerative Center</strong>, our wellness programs are designed to restore balance and support recovery for anyone experiencing lung-related issues or wanting to strengthen their respiratory health.
              </p>

            </section>

            {/* Image Break */}
            <div className="my-12 rounded-2xl overflow-hidden shadow-xl">
              <img src={breathingExerciseImg} alt="Person practicing breathing exercises" className="w-full h-auto object-cover" />
            </div>

            {/* Section: Lifestyle Habits */}
            <section className="mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Lifestyle Habits That Support Better Breathing
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Daily habits play a big role in protecting your lungs. Consider:
              </p>

              <ul className="space-y-3 text-muted-foreground">

                <li className="flex items-start gap-3">
                  •
                  <span>
                    Practicing <strong>deep breathing</strong> to expand lung capacity and improve oxygen exchange
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  •
                  <span>
                    Staying active with <strong>regular exercise</strong> to keep lungs strong and elastic
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  •
                  <span>
                    Avoiding exposure to <strong>pollutants</strong>, <strong>smoke</strong>, and <strong>allergens</strong> whenever possible
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  •
                  <span>
                    Eating <strong>antioxidant-rich foods</strong> to reduce inflammation and oxidative stress
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  •
                  <span>
                    Staying <strong>hydrated</strong> to keep airways clear and mucus thin
                  </span>
                </li>

              </ul>

            </section>

            {/* Section: When to Consider Consultation */}
            <section className="mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                When to Consider a Consultation
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                <strong>Frequent coughing</strong>, <strong>shortness of breath</strong>, or <strong>reduced stamina</strong> may indicate your respiratory system needs extra support. Our medical team can assess your condition and recommend personalized <strong>regenerative</strong> or <strong>wellness options</strong> to help you breathe easier and improve overall lung health.
              </p>

            </section>

            {/* Section: Key Takeaway */}
            <section className="mb-12">

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Key Takeaway
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                <strong>Breathing is essential to life.</strong> Taking care of your lungs is one of the best investments you can make for your long-term health. With a combination of <strong>regenerative therapies</strong>, <strong>mindful living</strong>, and <strong>preventive care</strong>, better breathing and stronger lungs are within reach.
              </p>

            </section>

            {/* CTA Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mt-16">

              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Improve Your Lung Health?
              </h3>

              <p className="text-muted-foreground mb-6">
                Schedule a consultation with our expert team to discover how regenerative medicine can support your respiratory wellness.
              </p>

              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Schedule Consultation
              </Link>
            </div>

            {/* Related Posts */}
            <RelatedBlogPosts currentSlug="lung-health" category="Wellness & Prevention" />
          </div>

        </div>

      </article>

      <Footer />

    </div>
  );
};

export default LungHealth;
