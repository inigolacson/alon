import hero from "@styles/modules/hero-section.module.scss";

export function Hero() {
    return (
        <section className={hero.container}>
            <div className={hero.bgImage}>
            <div className={hero.overlay}></div>
            <p className={hero.title}>Hi</p>
            </div>
        </section>
    )
}