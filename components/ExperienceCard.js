export const ExperienceCard = ({ title, company, range, list = [] }) => {
  return (
    <div className="mt-10">
      <h2 className="mb-1">
        <span>{title}</span>
        <span className="company text-teal-400">
          &nbsp;@&nbsp;
          <a
            href="https://www.upstatement.com/"
            className="inline-link "
            rel="noopener noreferrer"
            target="_blank"
          >
            {company}
          </a>
        </span>
      </h2>
      <p className="range opacity-70 text-sm">{range}</p>
      <div className="mt-4">
        {list.map((item, i) => {
          return (
            <div
              key={i}
              className="flex pl-4 opacity-70 text-sm before:content-['▹'] before:abolute  before:left-0 before:text-teal-400 mb-2"
            >
              <span className="pl-5">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
