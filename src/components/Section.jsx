export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-24 font-avenir"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      <div className="max-w-3xl text-justify text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
        {children}
      </div>
    </section>
  );
}
