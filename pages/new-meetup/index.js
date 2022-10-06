// our-domain.com/new-meetup
import axios from 'axios';
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    // const response = await fetch('/api/new-meetup', {
    //   method: 'POST',
    //   body: JSON.stringify(enteredMeetupData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    const response = await axios.post('/api/new-meetup', enteredMeetupData);

    console.log(response.data);

    router.push('/');
  }

  return  (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;