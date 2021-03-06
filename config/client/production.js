// App config the for production environment.
// Do not require this directly. Use ./src/config instead.
export default {
    app: {
        title: 'YAMACITY',
        locale: {
            available: ['en', 'jp'],
            default: 'en'
        },
        email: 'support@yamacity.com'
    },
    api: {
        atlas: {
            baseUrl: 'http://yamacity.com/api/v1'
        }
    },
    googleAnalytics: {
        enabled: true,
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID, // LIVE Property
        options: {
            debug: false
        }
    },
    facebookPixel: {
        enabled: true,
        id: process.env.FACEBOOK_PIXEL_ID
    },
    crisp: {
        enabled: true,
        websiteID: process.env.CRISP_WEBSITE_ID // TODO: This is still hardcoded in the vendor file
    },
    mailChimp: {
        signupFormPostURL: process.env.MAILCHIMP_SIGNUP_FORM_POST_URL
    },
    switchPayments: {
        enabled: false,
        environment: 'https://api.switchpayments.com/v2/',
        publicKey: process.env.SWITCH_PUBLIC_KEY
    },
    stripePayments: {
        publicKey: process.env.STRIPE_TEST_PUBLIC_KEY
    }
};
