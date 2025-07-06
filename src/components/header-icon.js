import  { iconInfo }  from "@/data/icons"
import header from "@styles/modules/header.module.scss"

export function HeaderIcon({ variant = "white" }) {
    return(
        <section>
            {iconInfo.filter((info) => info.className === (variant === "white" ? "whtHdIcon" : "blkHdIcon"))
            .map((info, index) => {
                const Icon = info.icon;
                return(
                    <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Icon className={header[info.className]}/>
                    </a>
                )
            })}
        </section>
    )
}