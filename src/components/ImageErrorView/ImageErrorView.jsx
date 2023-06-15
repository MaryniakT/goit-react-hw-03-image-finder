import errorImage from 'error.jpg';

export function ImageErrorView({ message }) {
  return (
    <div>
      <img src={errorImage} width="500" alt="sadcat" />
      <p> {message}</p>
    </div>
  );
}