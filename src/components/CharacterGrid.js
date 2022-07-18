import CharItems from "./CharItems";

const CharacterGrid = ({ isLoading, items }) => {
    return ( 
        <div>
            {isLoading ? <h2>Loading...</h2> : 
            <section className="cards">
                {items.map(item => <CharItems key={item.char_id} item={item} />)}
            </section>}
        </div>
     );
}
 
export default CharacterGrid;