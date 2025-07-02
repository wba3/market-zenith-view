import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tables } from '@/integrations/supabase/types';

type Company = Tables<'companies'>;

interface CompanySelectorProps {
  companies: Company[];
  selectedCompany: Company | null;
  onCompanyChange: (company: Company) => void;
}

export function CompanySelector({ companies, selectedCompany, onCompanyChange }: CompanySelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between glass"
        >
          {selectedCompany ? (
            <div className="flex items-center gap-2">
              <span className="font-medium">{selectedCompany.ticker}</span>
              <span className="text-muted-foreground text-sm truncate">
                {selectedCompany.name}
              </span>
            </div>
          ) : (
            "Select company..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 glass">
        <Command>
          <CommandInput placeholder="Search companies..." />
          <CommandList>
            <CommandEmpty>No company found.</CommandEmpty>
            <CommandGroup>
              {companies.map((company) => (
                <CommandItem
                  key={company.id}
                  value={`${company.ticker} ${company.name}`}
                  onSelect={() => {
                    onCompanyChange(company);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCompany?.id === company.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{company.ticker}</span>
                      <span className="text-sm text-muted-foreground">
                        ${(company.market_cap / 1e12).toFixed(1)}T
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground truncate">
                      {company.name}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}