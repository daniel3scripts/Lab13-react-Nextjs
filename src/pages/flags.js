import styles from "../styles/Home.module.css"


const Flags = ({ info, e }) => {
    return ( <
        div className = { styles.main2 } >
        <
        h1 > Flags DL < /h1> <
        div className = { styles.container2 } > {

            info.map((bande) => ( <
                div key = { bande.name } >

                <
                img height = { 200 }
                width = { 250 }
                src = { bande.flags.png }
                alt = { bande }
                / >  <
                h3 > { bande.name } < /h3>  <
                h4 > Capital: { bande.capital } < /h4>   <
                h4 > Continente: { bande.region } < /h4>  

                {
                    bande.currencies && bande.currencies.map((dato) => {
                        return ( <
                            h4 key = { bande.name } > Moneda: { dato.name } <
                            /h4> 

                        )
                    })
                }

                <
                /div >
            ))

        }

        <
        /div>

        <
        /div>
    );
};
export async function getServerSideProps() {
    try {
        const res = await fetch("https://restcountries.com/v2/all")

        const data = await res.json();
        return {
            props: {
                info: data,
            },
        }
    } catch (error) {
        e: error.message
            //console.log(error);

    }
}
export default Flags