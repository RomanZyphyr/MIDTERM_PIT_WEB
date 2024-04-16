
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.4d6e3011ed8e141c4b6a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.latest.en.9e34afdfca3b3ca8e82f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/361.latest.en.6cdbbdf251c67e8731e7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/706.latest.en.42ccf4e89391ecffca9a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.d13b236f4e3aab4c5354.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.latest.en.50a060a987311ab2c479.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.en.60c9eaec136b3caf1602.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.en.eef7c2019c4f6c3263f8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.latest.en.c23146172603a4291158.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.c56aa44cdf019f0d2265.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.latest.en.f33bec95ccc28d34a55e.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.5e52d9ec000e6dcd2cd6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.en.6e0fd6af0121f716b925.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.79230f796335551959ad.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0646/7426/7324/files/Logo_x320.png?v=1712348603"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  