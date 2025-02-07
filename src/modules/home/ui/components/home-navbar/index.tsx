import Link from "next/link"
import Image from "next/image"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { SearchInput } from "./search-input"
import { AuthButton } from "@/modules/auth/ui/components/auth-button"

export const HomeNavBar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 right-0 h-16 flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu e Logo  */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="p-2 flex items-center gap-1">
              <Image src="/pupunhatubeLogo.svg" width={180} height={60} alt="PupunhaTube Logo" />
            </div>
          </Link>
        </div>

        {/* Searchbar  */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>

        {/* Auth Button  */}
        <div className="flex-shrink-0 flex items-centergap-4">
          <AuthButton />
        </div>

      </div>
    </nav>
  )
}