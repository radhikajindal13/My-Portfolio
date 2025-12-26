export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
