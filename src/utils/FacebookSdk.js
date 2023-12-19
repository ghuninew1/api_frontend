export const FacebookSdk = () => {
    return new Promise((resolve) => {
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: import.meta.env.VITE_FACEBOOK_APP_ID,
                cookie: true,
                xfbml: true,
                version: "v18.0",
            });
            // Resolve the promise when the SDK is loaded
            resolve();
        };

        // Load the SDK
        ((d, s, id) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = `https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v18.0&appId=${
                import.meta.env.VITE_FACEBOOK_APP_ID
            }`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    });
};

// Usage
