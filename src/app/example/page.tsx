// src/app/example/page.tsx
export default function Page() {
  console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);

  return (
    <div>
      <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}
