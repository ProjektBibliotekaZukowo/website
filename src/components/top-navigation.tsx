import React from 'react';
import { Link } from 'components/link';

import { Logo } from 'components/logo';

export function TopNavigation() {
  return (
    <nav className="sticky mx-auto z-10 top-0 bg-gray-100 w-full">
      <div className="mx-auto">
        <div className="flex justify-between">
          <div>
            <Link path="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link path="o-nas">
              <a className="text-lg flex items-center link">o nas</a>
            </Link>

            <Link path="kontakt">
              <a className="text-lg flex items-center link">kontakt</a>
            </Link>

            <Link path="aktualnosci">
              <a className="text-lg flex items-center link">Aktualności</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
