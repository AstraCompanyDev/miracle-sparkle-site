import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/data/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");
  
  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-serif font-semibold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-foreground leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {post.readTime}
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
              {post.content.split('\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-3xl font-semibold mt-12 mb-6 text-foreground">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }
                if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                  return (
                    <h4 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                      {trimmed.replace(/\*\*/g, '')}
                    </h4>
                  );
                }
                if (trimmed.startsWith('- ')) {
                  return (
                    <li key={index} className="text-muted-foreground ml-6 mb-2">
                      {trimmed.replace('- ', '').replace(/\*\*/g, '')}
                    </li>
                  );
                }
                if (/^\d+\.\s/.test(trimmed)) {
                  return (
                    <li key={index} className="text-muted-foreground ml-6 mb-2 list-decimal">
                      {trimmed.replace(/^\d+\.\s/, '').replace(/\*\*/g, '')}
                    </li>
                  );
                }
                
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {trimmed}
                  </p>
                );
              })}
            </article>

            {/* CTA */}
            <div className="mt-12 p-8 bg-muted/50 rounded-2xl text-center">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Ready to Start Your Wellness Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with our experts to learn how regenerative medicine can help you.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                    <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                          <span>{relatedPost.date}</span>
                          <span>•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold font-serif group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
