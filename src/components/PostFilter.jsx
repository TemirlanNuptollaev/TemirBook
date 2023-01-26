import React from 'react';
import Myinput from './UI/input/Myinput';
import Myselect from './UI/select/Myselect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <Myinput 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Search..."
        />
        <Myselect 
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
            defaultValue="Filter"
            options = {[
              {value: "", name:"Default" },
              {value: "title", name:"Name" },
              {value: "body", name:"Description" },
            ]}
        />
      </div>
    );
}

export default PostFilter;
