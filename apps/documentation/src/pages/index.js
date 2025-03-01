import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// organize-imports-ignore
import React from 'react';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <img
                    className={styles.logo}
                    src={siteConfig.themeConfig.navbar.logo.src}
                    alt={siteConfig.themeConfig.navbar.logo.alt}
                />
                <em className={styles.quote}>
                    <small>"What happened to Angular 3.0? Well, it became Angular Three" - Mike Hartington</small>
                </em>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/getting-started/introduction">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title} description={siteConfig.tagline}>
            <HomepageHeader />
        </Layout>
    );
}
