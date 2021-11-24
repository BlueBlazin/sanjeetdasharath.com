export default function Description({ children, className }) {
  return (
    <section
      className={`px-10 mt-10 flex flex-col items-center max-w-2xl ${className}`}
    >
      {children}
    </section>
  );
}

export function Paragraph({ children, className }) {
  return (
    <p
      className={`text-center my-3 w-full sm:w-full sm:text-left ${className}`}
    >
      {children}
    </p>
  );
}
