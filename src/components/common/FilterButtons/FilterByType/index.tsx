import React from 'react';
import CustomSelect from '../../CustomSelect';

export default function FilterByType({setSearchType}: { setSearchType: (x:string) => void }) {
  return (
    <CustomSelect setType={setSearchType} showAll={true} label="Select Type" />
  )
}