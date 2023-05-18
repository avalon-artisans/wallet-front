import React from 'react';

/**
 * AuthContainerProps type
 */
type AuthContainerProps = {
  children: React.ReactNode
};

/**
 * AuthContainer component
 * @author Kenneth Sumang
 * @since  2023.05.17
 */
export default function AuthContainer({ children }: AuthContainerProps) {
  return (
    <div className="flex flex-row w-full h-full items-center">
      {children}
    </div>
  );
}