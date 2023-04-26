import { Button } from 'components/Main.styles';
export default function LoadMoreBtn({ loadMore }) {
  return (
    <div>
      <Button onClick={loadMore}>LOAD MORE</Button>
    </div>
  );
}
