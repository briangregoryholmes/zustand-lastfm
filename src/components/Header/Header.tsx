import React from 'react';

function Header({ name, listeners }: { name: string; listeners: string }) {
  return (
    <div className="flex-col justify-center items-center mx-auto w-1/2">
      <h1 className="text-6xl text-center">{name}</h1>
      <p className="text-center">{listeners} listeners</p>
    </div>
  );
}

export default Header;
