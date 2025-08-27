export default function Head() {
  return (
    <>
      <title>Ainsider AI Company - AI | Web | Automations For Business</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Ainsider Company - AI | Web | Automations For Business" />
      <link rel="icon" href="/images/favicon.ico" />
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ainsider AI Company - AI | Web | Automations For Business" />
      <meta property="og:description" content="Fully Tailored To The Needs Of Your Company Web & AI and Automation solutions that help businesses to grow." />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/logo/logo-white.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/logo/logo-white.png`} />
    </>
  );
}