"use client"

import Link from "next/link";
import {X} from "lucide-react";
// Since the form is server side component but the text input is client side component, so we need to use client component
// and that's why we created another file for the reset button
const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if(form) form.reset();
    }

    return (
        <button type="reset" onClick={reset}>
            <Link href="/" className="search-btn text-white">
                <X className="size-5" />
            </Link>
        </button>
    )
}
export default SearchFormReset