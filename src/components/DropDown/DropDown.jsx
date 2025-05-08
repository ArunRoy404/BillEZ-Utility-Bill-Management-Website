import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export default function DropDown({ bills, handleLoadTypes }) {
    const [selected, setSelected] = useState('Select all')
    const [types, setTypes] = useState([])

    useEffect(() => {
        const uniqueTypes = ['Select all']

        bills.forEach(bill => {
            if (!uniqueTypes.includes(bill.billType)) {
                uniqueTypes.push(bill.billType)
            }
            setTypes(uniqueTypes)
        });
    }, [bills])

    useEffect(()=>{
        handleLoadTypes(selected)
    },[selected])


    return (
        <div className="mx-auto w-52 ">
            <Listbox value={selected} onChange={setSelected} __demoMode>
                <ListboxButton
                    className={clsx(
                        'relative block w-full rounded-lg bg-gray-900 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
                        'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                    )}
                >
                    {selected}
                    <ChevronDownIcon
                        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-gray-800"
                        aria-hidden="true"
                    />
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom"
                    transition
                    className={clsx(
                        'w-(--button-width) rounded-xl border border-white/5 bg-gray-800 p-1 [--anchor-gap:--spacing(1)] focus:outline-none',
                        'transition duration-100 ease-in data-leave:data-closed:opacity-0'
                    )}
                >
                    {types.map((type) => (

                        <ListboxOption
                            key={type}
                            value={type}
                            className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
                        >
                            <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
                            <div className="text-sm/6 text-white">{type}</div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    )
}
