import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import UseScrollToTop from "./hooks/useScrollToTop";
import { ProductFilterProvider } from "./context/filterContext";

const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductSingle = lazy(() => import("./pages/ProductSingle.jsx"));

function App() {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <ProductFilterProvider>
            <ScrollToTop />
            <AppHeader />
            <Suspense fallback={""}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route
                  path="products/single-Product"
                  element={<ProductSingle />}
                />

                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </Suspense>
            <AppFooter />
          </ProductFilterProvider>
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
