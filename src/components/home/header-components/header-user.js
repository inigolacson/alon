import { userInfo } from "@/data/header-info";
import header from "@styles/modules/header.module.scss"

export function UserHeader({ variant = "white" }) {
    return (
        <section className={header.userContainer}>
            {userInfo.filter((info) => info.className === ( variant === 'white' ? 'whtHdUser' : 'blkHdUser'))
            .map((info, index) => {
                const Icon = info.icon;
                return (
                    <a
                    key={index}
                    href='/webpages/login'
                    className="alignCenter">
                    <Icon className={header[info.className]}/>
                    <span className={header.userText}>Account</span>
                    </a>   
                )
            })}
        </section>
    )

}