import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { getRelatedPosts, blogPosts } from "@/data/blogData";

interface RelatedBlogPostsProps {
  currentSlug: string;
  category: string;
}

const RelatedBlogPosts = ({ currentSlug, category }: RelatedBlogPostsProps) => {
  let relatedPosts = getRelatedPosts(currentSlug, category, 3);
  
  // If not enough posts in the same category, fill with other posts
  if (relatedPosts.length < 3) {
    const otherPosts = blogPosts
      .filter(post => post.slug !== currentSlug && !relatedPosts.find(rp => rp.slug === post.slug))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts = [...relatedPosts, ...otherPosts];
  }

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t">
      <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
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
        ))}
      </div>
    </section>
  );
};

export default RelatedBlogPosts;
