import Script from 'next/script';

export default function Scripts() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-NGTML35F");
        `}
      </Script>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SF75KLRV8E"
        strategy="afterInteractive"
      />
      <Script id="gtag-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-SF75KLRV8E");
        `}
      </Script>

      {/* jQuery - Load first as other scripts depend on it */}
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        strategy="afterInteractive"
      />

      {/* Bootstrap JavaScript */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
      />

      {/* Animation and UI Libraries - Deferred */}
      <Script
        src="lib/wow/wow.min.js"
        strategy="lazyOnload"
      />
      
      <Script
        src="lib/easing/easing.min.js"
        strategy="lazyOnload"
      />
      
      <Script
        src="lib/waypoints/waypoints.min.js"
        strategy="lazyOnload"
      />
      
      <Script
        src="lib/counterup/counterup.min.js"
        strategy="lazyOnload"
      />
      
      <Script
        src="lib/owlcarousel/owl.carousel.min.js"
        strategy="lazyOnload"
      />

      {/* Date/Time Libraries - Load in sequence */}
      <Script
        src="lib/tempusdominus/js/moment.min.js"
        strategy="afterInteractive"
      />
      
      <Script
        src="lib/tempusdominus/js/moment-timezone.min.js"
        strategy="afterInteractive"
      />
      
      <Script
        src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"
        strategy="lazyOnload"
      />

      {/* Template JavaScript - Load last to ensure all dependencies are loaded */}
      <Script
        src="js/main.js"
        strategy="lazyOnload"
      />

      {/* Custom initialization script */}
      <Script id="custom-init" strategy="lazyOnload">
        {`
          // Initialize components after all scripts are loaded
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize video modal if present
            var videoModal = document.getElementById('videoModal');
            if (videoModal) {
              videoModal.addEventListener('show.bs.modal', function (event) {
                var button = event.relatedTarget;
                var src = button.getAttribute('data-src');
                var iframe = videoModal.querySelector('#video');
                if (iframe && src) {
                  iframe.setAttribute('src', src);
                }
              });
              
              videoModal.addEventListener('hide.bs.modal', function (event) {
                var iframe = videoModal.querySelector('#video');
                if (iframe) {
                  iframe.setAttribute('src', '');
                }
              });
            }
            
            // Initialize any other custom functionality here
            console.log('All scripts initialized successfully');
          });
        `}
      </Script>
    </>
  );
}
