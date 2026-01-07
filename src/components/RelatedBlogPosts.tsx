import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { getRelatedPosts, blogPosts } from "@/data/blogData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface RelatedBlogPostsProps {
  currentSlug: string;
  category: string;
}

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const RelatedBlogPosts = ({ currentSlug, category }: RelatedBlogPostsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Get and randomize posts
  let relatedPosts = getRelatedPosts(currentSlug, category, 6);
  
  if (relatedPosts.length < 3) {
    const otherPosts = blogPosts
      .filter(post => post.slug !== currentSlug && !relatedPosts.find(rp => rp.slug === post.slug))
      .slice(0, 6 - relatedPosts.length);
    relatedPosts = [...relatedPosts, ...otherPosts];
  }

  const [shuffledPosts] = useState(() => shuffleArray(relatedPosts));

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (shuffledPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-serif font-semibold">
          Related Articles
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="p-2 rounded-full border border-border hover:bg-accent transition-colors disabled:opacity-50"
            aria-label="Previous articles"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 rounded-full border border-border hover:bg-accent transition-colors disabled:opacity-50"
            aria-label="Next articles"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {shuffledPosts.map((post) => (
            <div key={post.slug} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]">
              <Link to={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-2">
                      {post.date} • {post.readTime}
                    </div>
                    <h3 className="text-lg font-semibold font-serif group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogPosts;
