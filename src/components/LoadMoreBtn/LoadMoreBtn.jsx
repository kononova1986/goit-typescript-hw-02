import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.loadMoreContainer}>
      <button onClick={onClick} className={css.loadMore}>
        Load more
      </button>
    </div>
  );
}
