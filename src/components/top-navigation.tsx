import React from 'react';
import { Link } from 'components/link';

import { Logo } from 'components/logo';

export function TopNavigation() {
  return (
    <nav className="sticky w-full z-10 top-0 bg-gray-100">
      <div className="max-w-6xl mx-auto border border-red-500">
        <div className="flex justify-between">
          <div>
            <Link path="/">
              <a className="text-gray-700 text-lg flex items-center">
                <Logo />
              </a>
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link path="o-nas">
              <a className="text-gray-700 text-lg flex items-center">o nas</a>
            </Link>

            <Link path="kontakt">
              <a className="text-gray-700 text-lg flex items-center">kontakt</a>
            </Link>

            <Link path="aktualnosci">
              <a className="text-gray-700 text-lg flex items-center">Aktualności</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
