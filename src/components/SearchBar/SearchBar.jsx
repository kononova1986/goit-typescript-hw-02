import { IoSearchOutline } from 'react-icons/io5';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

const notify = () =>
  toast.error('Fill in the fields', {
    duration: 2000,
    position: 'top-right',
    style: { width: '200px' },
  });

export default function SearchBar({ onSearch }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const imgSerche = form.elements.img.value;
    if (form.elements.img.value.trim() === '') {
      return notify();
    }
    onSearch(imgSerche);
    form.reset();
  };

  return (
    <header>
      <form className={css.formSearch} onSubmit={handleSubmit}>
        <input
          className={css.formInput}
          type="text"
          name="img"
          // autocomplete="off"
          // autofocus
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
}
