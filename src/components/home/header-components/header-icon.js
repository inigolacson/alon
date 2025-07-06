import { iconInfo }  from "@/data/header-info"
import header from "@styles/modules/header.module.scss"

export function HeaderIcon({ variant = "white" }) {
    return (
        <section className={header.iconContainer}>
            {iconInfo.filter((info) => info.className === (variant === "white" ? "whtHdIcon" : "blkHdIcon"))
            .map((info, index) => {
                const Icon = info.icon;
                return (
                    <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alignCenter">
                    <Icon className={header[info.className]}/>
                    </a>
                )
            })}
        </section>
    )
}