import React, { FC, useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { ChevronDownIcon, GlobeIcon } from "@/icons";
import { languages, Locale } from "@/lib/languages";

const LanguageChanger: FC = () => {
  const [locale, setLocale] = useState<Locale>(languages[0].locale);

  const selectedLanguage = useMemo(
    () => languages.find((language) => locale === language.locale)!.label,
    [locale]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          radius="full"
          startContent={<GlobeIcon />}
          endContent={<ChevronDownIcon />}
        >
          {selectedLanguage}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Select language"
        selectedKeys={new Set([locale])}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(keys) => setLocale(keys.currentKey as Locale)}
      >
        {languages.map((language) => (
          <DropdownItem key={language.locale} value={language.locale}>
            {language.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageChanger;
