import styles from "./SearchFood.module.css";

function SearchFood({ handleChange }: { handleChange: () => void }) {
  return (
    <div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={"검색해보세요!"}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchFood;