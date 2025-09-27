// ضع هذا الكود في ملف منفصل باسم removeTooltips.js في src folder

// removeTooltips.js
export const removeAllTooltips = () => {
  // إزالة كل حاجة ممكن تسبب tooltip
  const removeAttributes = (selector, attributes) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      attributes.forEach(attr => {
        if (el.hasAttribute(attr)) {
          el.removeAttribute(attr);
        }
      });
    });
  };

  // قائمة بكل الـ attributes اللي ممكن تسبب tooltips
  const tooltipAttributes = [
    'title',
    'data-title',
    'data-bs-title',
    'data-toggle',
    'data-bs-toggle',
    'data-placement',
    'data-bs-placement',
    'aria-label',
    'aria-describedby',
    'data-original-title'
  ];

  // إزالة الـ attributes من كل العناصر
  removeAttributes('*', tooltipAttributes);

  // إزالة fill من SVG بس لو مش محتاجاه
  removeAttributes('svg', ['fill']);
  removeAttributes('path', ['fill']);

  // إخفاء أي tooltips موجودة
  const hideTooltips = () => {
    const tooltipSelectors = [
      '.tooltip',
      '.popover',
      '[class*="tooltip"]',
      '[class*="popover"]',
      '.bs-tooltip-top',
      '.bs-tooltip-bottom',
      '.bs-tooltip-left',
      '.bs-tooltip-right',
      '.bs-tooltip-auto',
      '[id*="tooltip"]',
      '[role="tooltip"]'
    ];

    tooltipSelectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          el.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });
      } catch (e) {
        // ignore errors
      }
    });
  };

  hideTooltips();

  // تعطيل Bootstrap tooltips API
  if (typeof window !== 'undefined') {
    // تعطيل jQuery tooltips لو موجود
    if (window.$ && window.$.fn && window.$.fn.tooltip) {
      try {
        window.$('[data-toggle="tooltip"]').tooltip('dispose');
        window.$('[data-bs-toggle="tooltip"]').tooltip('dispose');
      } catch (e) {
        // ignore
      }
    }

    // تعطيل Bootstrap 5 tooltips
    if (window.bootstrap && window.bootstrap.Tooltip) {
      try {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(tooltipTriggerEl => {
          const tooltip = window.bootstrap.Tooltip.getInstance(tooltipTriggerEl);
          if (tooltip) {
            tooltip.dispose();
          }
        });
      } catch (e) {
        // ignore
      }
    }
  }
};

// دالة لتشغيل الحل بشكل متكرر
export const startTooltipRemoval = () => {
  // تشغيل فوري
  removeAllTooltips();
  
  // تشغيل بعد delay
  setTimeout(removeAllTooltips, 100);
  setTimeout(removeAllTooltips, 500);
  setTimeout(removeAllTooltips, 1000);

  // Observer للـ DOM changes
  const observer = new MutationObserver(() => {
    removeAllTooltips();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });

  // تشغيل كل ثانية عشان نتأكد
  const interval = setInterval(removeAllTooltips, 1000);

  // cleanup function
  return () => {
    observer.disconnect();
    clearInterval(interval);
  };
};