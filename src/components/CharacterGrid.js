import CharItems from "./CharItems";
import Spinner from "./Spinner";

const CharacterGrid = ({ isLoading, items }) => {
    return ( 
        <div>
            {isLoading ? <Spinner /> : 
            <section className="cards">
                {items.map(item => <CharItems key={item.char_id} item={item} />)}
            </section>}
        </div>
     );
}
 
export default CharacterGrid;