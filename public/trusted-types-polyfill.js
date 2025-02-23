// trusted-types-polyfill.js
if (window.trustedTypes && window.trustedTypes.createPolicy) {
    try {
      window.trustedTypes.createPolicy('default', {
        createHTML: (input) => input
      });
      console.log("Trusted Types policy created");
    } catch (e) {
      console.error("Error creating Trusted Types policy:", e);
    }
  }
  