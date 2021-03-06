import { useState, useEffect } from "react";
// Components
import { Search } from "../Search/Search";
import { CustomSelect } from "../CustomSelect/CustomSelect";
// Styles
import {Wrapper} from "./Controls.styles"

// Select Options
const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" }
];


export const Controls = ({onSearch}) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() =>{
    // console.log(region, 'region-controls');
    const regionValue = region?.value || '';
    onSearch(search, regionValue)
    
    // eslint-disable-next-line
  },[search, region])
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};
