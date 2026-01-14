import { Router as WouterRouter, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import OurProcess from "@/pages/OurProcess";
import TaxRegime from "@/pages/TaxRegime";
import Legislation from "@/pages/Legislation";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/ScrollToTop";
import { useHashLocation } from "wouter/use-hash-location";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/services" component={Services} />
      <Route path="/process" component={OurProcess} />
      <Route path="/tax-regime" component={TaxRegime} />
      <Route path="/legislation" component={Legislation} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      {/* catch-all */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          {/* router should wrap everything that needs routing */}
          <WouterRouter hook={useHashLocation}>
            <Navigation />
            <main className="flex-1">
              <Routes />
              <ScrollToTop />
            </main>
            <Footer />
          </WouterRouter>
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
