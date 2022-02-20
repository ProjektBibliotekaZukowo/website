import * as React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { BsClock } from 'react-icons/bs';

interface openingHoursButtonProps {
  onClick: () => void;
  tabIndex?: number;
  text?: string;
  children?: React.ReactNode;
}

export const OpeningHoursButton: React.FC<openingHoursButtonProps> = (props) => {
  const { onClick, tabIndex, text, children } = props;

  return (
    <Button
      onClick={onClick}
      tabIndex={tabIndex}
      leftIcon={<BsClock fontSize="22px" />}
      variant="openingHours"
    >
      <Text pt="1px">{text}</Text>
      {children}
    </Button>
  );
};
