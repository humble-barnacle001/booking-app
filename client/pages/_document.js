import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href='https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css'
                        rel='stylesheet'
                    />
                    <script
                        defer
                        src='https://use.fontawesome.com/releases/v5.15.2/js/all.js'
                        integrity='sha384-vuFJ2JiSdUpXLKGK+tDteQZBqNlMwAjhZ3TvPaDfN9QmbPb7Q8qUpbSNapQev3YF'
                        crossOrigin='anonymous'
                    ></script>
                </Head>
                <body data-set-preferred-mode-onload='true'>
                    <Main />
                    <script
                        src='https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js'
                        async
                    />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
