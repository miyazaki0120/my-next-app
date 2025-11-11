// src/app/posts/[id]/page.tsx
import styles from './Post.module.css';

type Props = {
  params: {
    id: string;
  };
};

// 動的にメタデータを設定
export async function generateMetadata({ params }: Props) {
  const id = params.id;
  return {
    title: `Post: ${id} | My Next App`,
    description: `投稿 ID「${id}」に関するページです。`,
  };
}

export default function PostPage({ params }: Props) {
  const { id } = params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className={styles.title}>記事ページ</h1>
      <p className={styles.info}>
        この記事のIDは「<span className="font-bold text-orange-400">{id}</span>」です。
      </p>
    </main>
  );
}
