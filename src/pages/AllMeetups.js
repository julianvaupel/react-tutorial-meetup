import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

/*
const DUMMY_DATA = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://www.myswitzerland.com/-/media/dam/resources/places/f/l/flims%20laax%20falera/images%20all%20season/47721_32001800.jpeg",
    address: "Via dil Casti 17, 7017 Flims",
    description: "bla bla bla bla",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://www.myswitzerland.com/-/media/dam/resources/places/f/l/flims%20laax%20falera/images%20all%20season/47721_32001800.jpeg",
    address: "Via dil Casti 17, 7017 Flims",
    description: "bla bla bla bla",
  },
];
*/

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-tutorial-meetup-app-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
