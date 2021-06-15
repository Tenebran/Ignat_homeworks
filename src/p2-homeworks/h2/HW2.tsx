import React, { useState } from 'react';
import Affairs from './Affairs';
import './Affairs.scss';

// types
export type AffairPriorityType = 'high' | 'low' | 'middle';
export type AffairType = {
  _id: number;
  name: string;
  priority: string;
};
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
  { _id: 1, name: 'React', priority: 'high' },
  { _id: 2, name: 'anime', priority: 'low' },
  { _id: 3, name: 'games', priority: 'low' },
  { _id: 4, name: 'work', priority: 'high' },
  { _id: 5, name: 'html & css', priority: 'middle' },
];

// pure helper functions
export const filterAffairs = (
  affairs: Array<AffairType>,
  filter: FilterType
): Array<AffairType> => {
  if (filter === 'all') {
    let newFilter = affairs;
    return newFilter;
  } else if (filter === 'high') {
    let newFilter = affairs.filter(prio => prio.priority === 'high');
    return newFilter;
  } else if (filter === 'low') {
    let newFilter = affairs.filter(prio => prio.priority === 'low');
    return newFilter;
  } else if (filter === 'middle') {
    let newFilter = affairs.filter(prio => prio.priority === 'middle');
    return newFilter;
  } else {
    return affairs;
  }
};
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
  let deleteFilter = affairs.filter(list => list._id !== _id);
  return deleteFilter;
};

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

  return (
    <div className="todo">
      <hr />
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
