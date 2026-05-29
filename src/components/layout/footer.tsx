export function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Shuai Shuai. All rights reserved.</p>
        <a href="mailto:hello@shuaishuai.dev" className="transition-colors hover:text-zinc-900">
          hello@shuaishuai.dev
        </a>
      </div>
    </footer>
  );
}
