import header from "@/styles/modules/header.module.scss"
import { HeaderIcon } from "@/components/home/header-components/header-icon";
import { UserHeader } from "@/components/home/header-components/header-user";

export function Header({ variant = "black" }) {
    return (
            <header className={header.blackHeader}>
              <div className={header.container}>
                <HeaderIcon variant={variant}/>
                <UserHeader variant={variant}/>
              </div>
          </header>
    )
}