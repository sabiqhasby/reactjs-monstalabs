import "./search-box.styles.css";
import {ChangeEventHandler} from 'react'


type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>

}



const SearchBox = ({onChangeHandler, className}: SearchBoxProps)  => {
  return (
    <input
      type="search"
      className={className}
      placeholder="search monsters"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
