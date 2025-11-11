// src/app/about/page.tsx

import styles from './About.module.css';

export const metadata = {
  title: 'About | My Next App',
  description: '私たちの会社やサービスについての情報ページです。',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className={styles.heading}>私たちについて</h1>
      <p className={styles.description}>
        このページは、会社やサービスの紹介をするためのページです。
      </p>
       <p className={styles.description}>
        この文章は自動デプロイテスト用です。
      </p>
    </main>
  );
}
