function SectionLink({ section }) {
  return (
    <li className="flex items-center">
      <a
        href={`#${section.toLowerCase()}`}
        className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
      >
        {section}
      </a>
    </li>
  );
}

export default SectionLink