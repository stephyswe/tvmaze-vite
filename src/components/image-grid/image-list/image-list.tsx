import './image-list.css';

type ImageListProps = {
  children: React.ReactNode;
};

const ImageList = ({ children }: ImageListProps) => (
  <div className="row small-up-2 medium-up-3 large-up-5">{children}</div>
);

export default ImageList;
