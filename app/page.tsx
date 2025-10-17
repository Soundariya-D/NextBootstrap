import Navbar from '@/components/Navbar';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Equiteq is the Elite Global Investment Bank for the Technology Services & Consulting Sector.
          </h1>
          <p className="hero-subtitle">
            Our job is to highlight the company's strengths, the guide shareholders in making the best decisions to secure lasting value.
          </p>
        </div>
      </section>

      <section className="content-section bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </h2>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-5" style={{ minHeight: '300px' }}>
                <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                  Image placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <p className="section-label">TESTIMONIALS</p>
              <h3 className="section-title">Lorem ipsum dolor sit amet</h3>
            </div>
            <div className="col-lg-8">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2025 EQUITEQ. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">Elite Global Investment Bank</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
