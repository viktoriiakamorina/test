(function(global) {
  // Function to load module dynamically
  function loadModule(url) {
      return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.type = 'module';
          script.async = true;
          script.onload = () => {
              console.log("Module loaded");
              resolve();
          };
          script.onerror = () => {
              reject(new Error(`Script load error for ${url}`));
          };
          script.src = url;
          document.head.appendChild(script);
      });
  }

  // Dynamically loading the ES module
  loadModule('https://sapocplkwebcomponents.blob.core.windows.net/static/plk-app-div-web-components.esm.js')
      .then(() => {
          // You can now use the imported module functions or components
          // If the module exports components or methods you'd like to use globally,
          // set them up here, for example:
          global.MyCustomElement = customElements.get('my-custom-element');
      })
      .catch(error => {
          console.error('Failed to load the module:', error);
      });

})(window);

console.log('will it work now??');
