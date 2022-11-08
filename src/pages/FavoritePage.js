import { useContext } from "react";
import Layout from "../components/layout/Layout";
import FavoriteContext from "../store/favorite-context";
import MeetupItem from "../components/MeetupItem";

function FavoritePage() {
  const FavoriteCtx = useContext(FavoriteContext);
  const meetups = FavoriteCtx.favorites;

  return (
    <Layout>
      <section className="px-4">
        <div className="py-5">Home {">"} Favorite Meetup</div>

        <div className="w-full">
          {FavoriteCtx.totalFavorites === 0 && (
            <div className="w-full h-96 flex justify-center items-center">
              <p className="text-xl font-semibold text-pink">
                There are no fvorite meetup yet.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {meetups.map((meetup) => (
              <MeetupItem
                key={meetup.id}
                id={meetup.id}
                title={meetup.title}
                imageUrl={meetup.image}
                date={meetup.date}
                address={meetup.address}
                description={meetup.description.substring(0, 120)}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default FavoritePage;
