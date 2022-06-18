import styles from "../styles/Home.module.css"
const Pokemon = ({ datos, e }) => {
    return ( <
        div className = { styles.main } >
        <
        h1 > Pokemon DL < /h1>   <
        div className = { styles.container } >

        {
            datos.map((pokemon, index) => ( <
                div key = { pokemon.name } >
                <

                img width = { 250 }
                height = { 300 }
                src = { `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1}.svg` }
                alt = { pokemon.name }
                / > <
                h4 > { pokemon.name } < /h4>

                <
                /div>
            ))

        }

        <
        /div> < /
        div >
    );
};
export async function getServerSideProps() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await response.json();
        //console.log(data.results);
        return {
            props: {
                datos: data.results,
            },
        }

    } catch (error) {
        e: error.message
            //console.log(error);
    }
}
export default Pokemon