import React from 'react';
import ActionTodo from './ActionTodo';
import RemainingTodos from './RemainingTodos';
import FilterByStatus from './FilterByStatus';
import FilterByColor from './FilterByColor';

const Footer = ({ colors, setFilter }) => {
  return (
    <div className="flex justify-around">
      <ActionTodo />

      <RemainingTodos />

      <FilterByStatus setFilter={setFilter} />

      <FilterByColor colors={colors} />
    </div>
  );
};

export default Footer;
