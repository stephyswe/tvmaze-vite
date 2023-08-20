/* eslint-disable react/no-danger */
import './description.css';

type DescriptionProps = {
  summary: string;
};

function replaceParagraphsWithBreaks(text: string) {
  return text
    .replace(/<\/p><p>/g, '<br/><br/>')
    .replace(/^<p>/, '')
    .replace(/<\/p>$/, '');
}

const Description = ({ summary }: DescriptionProps) => (
  <div className="description-text" dangerouslySetInnerHTML={{ __html: replaceParagraphsWithBreaks(summary) }} />
);

export default Description;
