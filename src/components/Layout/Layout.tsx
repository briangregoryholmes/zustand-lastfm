import { memo } from 'react';
import SearchField from '../SearchField/SearchField';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="p-10">
      <SearchField />
      <main>{children}</main>
    </div>
  );
}

export default memo(Layout);
