import css from './LoadMoreBtn.module.css';
interface LoadMoreBtnProps {
  onClick: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.loadMoreContainer}>
      <button onClick={onClick} className={css.loadMore}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
