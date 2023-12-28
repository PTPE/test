export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>Nav</nav>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
