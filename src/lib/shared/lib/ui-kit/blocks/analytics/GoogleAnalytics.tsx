import Script from 'next/script';
export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-897F5ZD19K"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-897F5ZD19K');
        `}
      </Script>
    </>
  );
};
