export const fireCallConversion = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17927466366/Wv64CJvL6PkbEP7aveRC'
      });
    }
  };