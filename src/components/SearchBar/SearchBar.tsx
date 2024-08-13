import { IoSearchOutline } from 'react-icons/io5';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { FormEvent } from 'react';

const notify = () =>
  toast.error('Fill in the fields', {
    duration: 2000,
    position: 'top-right',
    style: { width: '200px' },
  });
interface SearchBarProps {
  onSearch: (data: string) => Promise<void>;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const imgSearch = (form.elements.namedItem('img') as HTMLInputElement)
      .value;

    if (imgSearch.trim() === '') {
      return notify();
    }
    onSearch(imgSearch);
    form.reset();
  };

  return (
    <header>
      <form className={css.formSearch} onSubmit={handleSubmit}>
        <input
          className={css.formInput}
          type="text"
          name="img"
          placeholder="Search images and photos"
        />

        <button
          onClick={() => {
            notify;
          }}
          className={css.buttonSearch}
          type="submit"
        >
          <IoSearchOutline size={25} className={css.icon} />
        </button>
        <Toaster />
      </form>
    </header>
  );
};
export default SearchBar;
