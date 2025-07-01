import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Scripts from "../components/Scripts";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Storica Stays - Heritage Hostel and Rooftop Restaurant",
  description: "Experience the charm of heritage at Storica Stays, your ideal hostel and rooftop restaurant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Hostel,Restaurant,Room,Hotel" name="keywords" />
        <meta content="Experience the charm of heritage at Storica Stays, your ideal hostel and rooftop restaurant." name="description" />

        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
    
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
    
        {/* Icon Font Stylesheet */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
    
        {/* Libraries Stylesheet */}
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link
          href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />
    
        {/* Customized Bootstrap Stylesheet */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
    
        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Scripts />
       {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGTML35F"
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
         {/* End Google Tag Manager (noscript) */}

        {/* Header Start */}
        <div className="container-fluid bg-dark px-0">
          <div className="row gx-0">
            <div className="col-lg-3 bg-dark d-none d-lg-block">
              <Link
                href="/"
                className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
              >
                <h2 className="m-0 text-primary">Storica Stays</h2>
              </Link>
            </div>
            <div className="col-lg-9">
              <div className="row gx-0 bg-white d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                  <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                    <i className="fa fa-envelope text-primary me-2"></i>
                    <p className="mb-0">info@storicastays.com</p>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center py-2">
                    <i className="fa fa-phone-alt text-primary me-2"></i>
                    <p className="mb-0">
                      <a href="tel:+91 6378365775">+91 6378365775</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                  <div className="d-inline-flex align-items-center py-2">
                    <a
                      className="me-3"
                      href="https://www.instagram.com/storicastays"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/916378365775" title="WhatsApp">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
              <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                <Link href="/" className="navbar-brand d-block d-lg-none">
                  <h1 className="m-0 text-primary text-uppercase">Storica Stays</h1>
                </Link>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav mr-auto py-0">
                    <Link href="/" className="nav-item nav-link">Home</Link>
                    <Link href="/about" className="nav-item nav-link">About</Link>
                    <Link href="/#Rooms" className="nav-item nav-link">Rooms</Link>
                    <Link href="/#Contact" className="nav-item nav-link">Contact</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Header End */}

        {children}

        {/* Footer Start */}
        <div
          className="container-fluid bg-dark text-light footer wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container pb-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-4">
                <div className="bg-primary rounded p-4">
                  <Link href="/"><h1 className="text-white text-uppercase mb-3">Storica Stays</h1></Link>
                  <p className="text-white mb-0">
                    Experience the heritage and hospitality of Jodhpur at Storica Stays.
                    Your gateway to the Blue City&apos;s rich culture and history.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h6
                  className="section-title text-start text-primary text-uppercase mb-4"
                >
                  Contact
                </h6>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3"></i>Toorji Ka Jhalra,
                  Jodhpur, Rajasthan
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3"></i>
                  <a href="tel:+91 6378365775">+91 6378365775</a>
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3"></i>info@storicastays.com
                </p>
                <div className="d-flex pt-2 gap-2">
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://www.instagram.com/storicastays"
                  ><i className="fab fa-instagram"></i></a>
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://wa.me/916378365775"
                  ><i className="fab fa-whatsapp"></i></a>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="row gy-5 g-4">
                  <div className="col-md-6">
                    <h6
                      className="section-title text-start text-primary text-uppercase mb-4"
                    >
                      Company
                    </h6>
                    <Link className="btn btn-link" href="/about">About Us</Link>
                    <Link className="btn btn-link" href="/#Contact">Contact Us</Link>
                  </div>
                  <div className="col-md-6">
                    <h6
                      className="section-title text-start text-primary text-uppercase mb-4"
                    >
                      Services
                    </h6>
                    <a className="btn btn-link" href="">Food & Restaurant</a>
                    <a className="btn btn-link" href="">Event & Party</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy; <a className="border-bottom" href="#">Storica Stays</a>, All
                  Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                  Designed by <a className="border-bottom" href="#">Storica Team</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}

        {/* Floating Action Buttons */}
        <div className="fixed-bottom d-flex justify-content-end m-3">
          <div className="d-flex flex-column gap-2">
            <a
              href="https://wa.me/916378365775"
              target="_blank"
              className="btn btn-success btn-lg rounded-circle"
              title="Chat on WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="tel:+916378365775"
              className="btn btn-primary btn-lg rounded-circle"
              title="Call Us"
            >
              <i className="fa fa-phone-alt"></i>
            </a>
          </div>
        </div>

        {/* Back to Top */}
        {/* <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
         */}
      </body>
    </html>
  );
}
