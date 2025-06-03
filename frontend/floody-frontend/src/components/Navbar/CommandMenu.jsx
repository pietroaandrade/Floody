import { Command, CommandGroup, CommandItem } from 'cmdk'
import { useEffect, useState } from 'react'
import { FiMap, FiCloud, FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export const CommandMenu = ({ open, setOpen }) => {
  const [value, setValue] = useState("")
  const navigate = useNavigate()

  
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [setOpen])

  
  const handleSelect = (path) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <Command.Dialog 
      open={open} 
      onOpenChange={setOpen} 
      label="Global Command Menu"
      className='fixed inset-0 bg-stone-950/50'
      onClick={() => setOpen(false)}
    >
      <div 
        className='bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12'
        onClick={(e) => e.stopPropagation()}
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder='What do you need?'
          className='relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none'
        />
        <Command.List className='p-3'>
          <Command.Empty>
            No results found for{" "}
            <span className='text-violet-500'>
              "{value}"
            </span>
          </Command.Empty>

          <CommandGroup heading="Essentials" className='text-sm
          mb-3 text-stone-400'>
            <CommandItem 
              className='flex cursor-pointer
            transition-colors p-2 text-sm text-stone-950
            hover:bg-stone-200 rounded items-center gap-2'
              onSelect={() => handleSelect('/dashboard')}
            >
                <FiMap />
                Map View
            </CommandItem>
            <CommandItem 
              className='flex cursor-pointer
            transition-colors p-2 text-sm text-stone-950
            hover:bg-stone-200 rounded items-center gap-2'
              onSelect={() => handleSelect('/weather')}
            >
                <FiCloud />
                Weather
            </CommandItem>
          </CommandGroup>
          <CommandItem 
              className='flex cursor-pointer
            transition-colors p-2 text-sm text-stone-50 
            hover:bg-stone-700 bg-stone-950 rounded items-center gap-2'
              onSelect={() => handleSelect('/')}
            >
                <FiLogOut />
                Log Out
          </CommandItem>

        </Command.List>
      </div>
    </Command.Dialog>
  )
}