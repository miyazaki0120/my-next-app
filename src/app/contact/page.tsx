// src/app/contact/page.tsx
import Image from 'next/image'; // ← Image を追加
import styles from './Contact.module.css';

export const metadata = {
  title: 'Contact | My Next App',
  description: 'お問い合わせはこちらからどうぞ。',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className={styles.heading}>お問い合わせ</h1>

      {/* 画像を追加 */}
      <Image
        src="/images/profile.jpg"   // public/images/profile.jpg に画像を配置しておく
        alt="プロフィール画像"
        width={400}
        height={300}
        priority
      />

      <p className={styles.text}>
        ご質問やご相談はこちらのフォームからお願いします。
      </p>
    </main>
  );
}

