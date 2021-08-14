export default function Description({ children }) {
  return (
    <section className="px-10 mt-10 flex flex-col items-center max-w-2xl">
      {children}
    </section>
  );
}

export function Paragraph({ children, className }) {
  return (
    <p className={`my-3 text-center sm:text-left ${className}`}>{children}</p>
  );
}
