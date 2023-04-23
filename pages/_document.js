import { DefaultSeo, NextSeo } from "next-seo";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        ></Script>
        <Script id="google-analytics-script" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
        </Script>
        <DefaultSeo
          title="Rizz check"
          description="A chat-based game where your goal is to befriend AI Celebs,and ask them for a Date💕."
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://rizzcheck.vercel.app/",
            site_name: "Guess The Prompt",
          }}
          twitter={{
            handle: "@ktarchived",
            cardType: "summary_large_image",
          }}
        />

        <NextSeo
          title="Rizz check"
          description="A chat-based game where your goal is to befriend AI Celebs,and ask them for a Date💕."
          openGraph={{
            title: "Rizz check",
            description:
              "A chat-based game where your goal is to befriend AI Celebs,and ask them for a Date💕.",
            url: "https://rizzcheck.vercel.app/",
            images: [
              {
                url: images,
                alt: "Rizz check",
              },
            ],
          }}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rizzcheck,vercel.app/" />
        <meta property="og:image" content={images} />
        <meta property="og:image:alt" content="check your Rizz" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
