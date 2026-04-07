export default function HeroSection({
    heading,
    text,
    align = "center",
    image,
    imageRation = "16/9",
}) {
    const textAlign = align;

    return (
        <section style={style.section}>
            <div style={{ ...styles.container, textAlign}}>
                <div style={styles.textWrap}>
                    <h1 style={styles.heading}>{heading}</h1>
                    <p style={styles.text}>{text}</p>
                </div>

                <div style={{ ...style.imageWrap, aspectRatio: imageRatio}}>
                    <img src={image} alt={heading} style={styles.image}/>
                </div>
            </div>
        </section>
    )
}

const styles = {
    section: {
        padding: "64px 24px",
        backgroundColor: "#ffffff",
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
    },
    textWrap: {
        maxWidth: "800px",
        margin: "0 auto 32px",
    },
    heading: {
        frontSize: "48px",
        lineHeight: 1.1,
        marginBottom: "16px",
        color: "#111111",
    },
    text: {
        frontSize: "18px",
        lineHeight: 1.7,
        color: "#555555",
        margin: 0,
    },
    imageWrap: {
        width: "100%",
        overflow: "hidden",
        borderRadius: "20px",
        backgroundColor: "#f2f2f2",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
    },
};