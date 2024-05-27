import React, { useEffect } from "react";

interface Window {
   adsbygoogle: { push: (params?: any) => void }[];
}

const AdComponent: React.FC = () => {
  useEffect(() => {
    const loadAds = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsbygoogle error:", e);
      }
    };

    loadAds(); // Load ads on initial render

    const adInterval = setInterval(() => {
      const adElements = document.getElementsByClassName("adsbygoogle");
      for (let i = 0; i < adElements.length; i++) {
        adElements[i].innerHTML = ""; // Clear current ad content
      }
      loadAds(); // Reload ads
    }, 60000); // Refresh ads every 60 seconds

    return () => {
      clearInterval(adInterval); // Clean up interval on component unmount
    };
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5832817025080991"
        data-ad-slot="your-ad-slot"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
};

export default AdComponent;
