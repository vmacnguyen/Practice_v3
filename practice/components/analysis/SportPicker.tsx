import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Icon,
  ChevronDownIcon,
} from '@gluestack-ui/themed';
import { SPORTS_LIST } from '../../config/sports-config';

interface SportPickerProps {
  selectedSport: string;
  onSelect: (sportId: string) => void;
}

export default function SportPicker({ selectedSport, onSelect }: SportPickerProps) {
  return (
    <Select
      selectedValue={selectedSport}
      onValueChange={onSelect}
    >
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Select Sport" />
        <SelectIcon mr="$3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {SPORTS_LIST.map((sport) => (
            <SelectItem
              key={sport.id}
              label={sport.name}
              value={sport.id}
            />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
