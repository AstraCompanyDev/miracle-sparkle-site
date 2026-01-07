import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LiveChat from "./components/LiveChat";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Treatments from "./pages/Treatments";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AntiAgingLongevity from "./pages/blog/AntiAgingLongevity";
import DiseasePreventionRegenerativeMedicine from "./pages/blog/DiseasePreventionRegenerativeMedicine";
import Exosomes from "./pages/blog/Exosomes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/anti-aging-longevity" element={<AntiAgingLongevity />} />
          <Route path="/blog/disease-prevention-regenerative-medicine" element={<DiseasePreventionRegenerativeMedicine />} />
          <Route path="/blog/exosomes" element={<Exosomes />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <LiveChat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
