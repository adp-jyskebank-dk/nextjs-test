import Script from 'next/script'
import { useEffect } from 'react'

export const GtagScript: React.FunctionComponent = () => {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11185102926" strategy='afterInteractive' />
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', 'AW-11185102926');
                gtag('event', 'conversion', {
                    'send_to': 'AW-11185102926/_kmiCIK8p_0YEM7AvNUp',
                  });
                `}
            </Script>
        </>
    )
}