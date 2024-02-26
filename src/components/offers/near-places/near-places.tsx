import PlaceCard from '../../place-card/place-card';
import { CARDS_MOCK } from '../../../const/cards-mock';

function NearPlaces(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {CARDS_MOCK.slice(0, 3).map((item) =>
          (<PlaceCard location='cities' key={`${item.id}`} {...item} />))}
      </div>
    </section>
  );
}


export default NearPlaces;
