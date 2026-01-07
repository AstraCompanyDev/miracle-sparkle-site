import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import nadHeroImg from "@/assets/nad-hero.jpg";
import nadCellularImg from "@/assets/nad-cellular.jpg";

const NADPlus = () => {
  const post = {
    title: "What Is NAD+ and How It Works",
    date: "November 5, 2025",
    readTime: "8 min read",
    image: nadHeroImg,
    excerpt: "Learn what NAD+ is, why it is essential for energy and cellular health, and how it supports wellness and recovery at Miracle Regenerative Center."
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-white/80 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-semibold mb-6">
                What Is NAD+
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>NAD+</strong> (Nicotinamide Adenine Dinucleotide) is a vital molecule present in every cell of the body. It plays a central role in converting nutrients from food into <strong>energy</strong> that cells can use. NAD+ is also essential for maintaining <strong>DNA integrity</strong>, supporting healthy <strong>cell function</strong>, and regulating <strong>metabolism</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As we age, <strong>NAD+ levels naturally decline</strong>, which can lead to <strong>fatigue</strong>, slower recovery, reduced cellular function, and age-related decline. Supporting NAD+ levels can help restore energy, enhance overall health, and improve <strong>vitality</strong>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-semibold mb-6">
                How NAD+ Works in the Body
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NAD+ acts as a <strong>coenzyme</strong>, working with enzymes called <strong>sirtuins</strong> that regulate key processes in the body. Some of the ways NAD+ supports health include:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Energy production:</strong>
                     NAD+ helps mitochondria convert food into ATP, the energy currency of cells, giving your body the fuel it needs for daily activities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Cellular repair and DNA maintenance:</strong>
                     NAD+ assists in repairing damaged DNA, protecting cells from stress, and supporting overall cellular health
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Metabolism regulation:</strong>
                     NAD+ helps control the activity of enzymes involved in metabolism, supporting healthy energy balance and weight management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Anti-aging and longevity:</strong>
                     By supporting healthy cell function and DNA repair, NAD+ contributes to slowing age-related decline and maintaining vitality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong>Recovery and wellness support:</strong>
                     NAD+ can enhance recovery from physical activity, reduce cellular stress, and support overall resilience
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-semibold mb-6">
                NAD+ Therapy and Its Benefits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>NAD+ therapy</strong> usually involves <strong>intravenous administration</strong>, allowing the molecule to enter the bloodstream directly for maximum absorption. Oral supplementation is another option, though IV therapy tends to be more effective for targeted results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At <strong>Miracle Regenerative Center</strong>, NAD+ therapy is tailored to individual health goals. Treatments are designed to:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Boost energy naturally</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Support mental clarity and cognitive function</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Enhance recovery from injuries or exercise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Promote cellular health and longevity</span>
                </li>
              </ul>

              <div className="my-8 rounded-xl overflow-hidden">
                <img src={nadCellularImg} alt="NAD+ cellular energy" className="w-full h-auto" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Patients often notice improvements in energy, focus, and overall wellness after NAD+ therapy, making it a key component of modern <strong>regenerative medicine</strong> and <strong>longevity programs</strong>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-semibold mb-6">
                Why NAD+ Is Important
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NAD+ is essential for <strong>optimal health</strong> because it affects nearly every cellular process. Maintaining adequate NAD+ levels helps the body repair itself, stay energized, and function efficiently. It is a cornerstone of <strong>proactive health strategies</strong> for anyone looking to improve vitality, recover faster, or slow down the effects of aging.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-semibold mb-6">
                NAD+ Therapy at Miracle Regenerative Center
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At <strong>Miracle Regenerative Center</strong>, we integrate NAD+ therapy into our comprehensive <strong>wellness and regenerative medicine programs</strong>. Each plan is personalized to meet individual goals, whether it is enhancing energy, supporting cellular repair, or promoting longevity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By combining NAD+ therapy with <strong>lifestyle guidance</strong>, <strong>nutrition</strong>, and other regenerative treatments, Miracle Regenerative Center helps patients restore vitality, maintain health, and support long-term well-being.
              </p>
            </section>

            {/* Key Takeaway */}
            <section className="bg-accent/30 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-serif font-semibold mb-4">Key Takeaway</h3>
              <p className="text-muted-foreground leading-relaxed">
                NAD+ is more than just an energy booster. It is a critical molecule for <strong>cellular repair</strong>, <strong>metabolism</strong>, and <strong>longevity</strong>. NAD+ therapy at Miracle Regenerative Center supports energy, wellness, and recovery, helping your body function at its best and maintain vitality naturally.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-primary/10 rounded-xl p-8 text-center mb-12">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Ready to Restore Your Energy and Vitality?
              </h3>
              <p className="text-muted-foreground mb-6">
                Discover how NAD+ therapy at Miracle Regenerative Center can help you feel more energized, recover faster, and support long-term wellness.
              </p>
              <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                Schedule Your Consultation
              </a>
            </section>
          </div>

          <RelatedBlogPosts currentSlug="nad-plus" category="anti-aging" />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NADPlus;
