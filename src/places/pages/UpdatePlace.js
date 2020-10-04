import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card/Card';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';

const DUMMY = [
  {
    id: 'p1',
    title: 'Zaltopolsky 5',
    description: 'My appartment',
    imageUrl:
      'https://lh3.googleusercontent.com/Ex7GOEAQDhfEHNzA9MUD6KaSULhG7fzKsXFzSsV4-C7I7sHE60_SZ0MXQu2Hn8oVfO46REQFW2APN9SHfigUrKSAnuh14IcdiI8rnGTQxlPOArYls4zCmmRZ_vUommfrGyXOXHWgs8FgsblyuIsbiA7iMxkezPdqvaPakeJ-1_mwW4wlnY73pODUDbA-FpY82-lXEcK7WumdHEcYarXxz170nUcjxK5_xyjxWNxihKwjz-FpKNs_K-VL80kppCOJpvvxWtxQkn3NRoETQhuYh6k0ydO5DgCyooy1H8M05cALLEShz5oldX1r6DejIvaUyhy6Um81X3UM9kZeerAR8QFdFcpWzcdWwLypH-kP0NQ8FxU3XGYs8B6peZrFtmepNvfIh1WuqjKHm33fgaXTH5ARaY1WPM-NNyEAXEmwEJ40_vAm-uX5A-2n6fzhkWAhTiBZ_2G8OpN8ckovesgClKtFZl2wKACbUN7hZg6QyEhg2z-ilDee1W2L-NWWJqYC7_caKR9Ifz1bWwRGGAt7E4ipfzEljJ4Sv0HxRrEEPkMbZDjcsYYN2S3nqOtJkWxod9uZIB7Y_vs4qu4eIK1XygPzdw3UY6Jsbhx_L-MROnBib7BMed9dfaXELsloRrPL8YX68E21o-r0QNG1qTTRrXC6n1UsUnOv9AQ1NgT0RPcGKZD_gHfXBia5mpwKgg=w361-h203-no?authuser=0',
    address: 'Zaltopolsky 5, TLV',
    location: {
      lat: 32.0880024,
      lng: 34.7731101,
    },
    creatorId: 'u1',
  },
  {
    id: 'p2',
    title: 'Zaltopolsky 5',
    description: 'My appartment',
    imageUrl:
      'https://lh3.googleusercontent.com/Ex7GOEAQDhfEHNzA9MUD6KaSULhG7fzKsXFzSsV4-C7I7sHE60_SZ0MXQu2Hn8oVfO46REQFW2APN9SHfigUrKSAnuh14IcdiI8rnGTQxlPOArYls4zCmmRZ_vUommfrGyXOXHWgs8FgsblyuIsbiA7iMxkezPdqvaPakeJ-1_mwW4wlnY73pODUDbA-FpY82-lXEcK7WumdHEcYarXxz170nUcjxK5_xyjxWNxihKwjz-FpKNs_K-VL80kppCOJpvvxWtxQkn3NRoETQhuYh6k0ydO5DgCyooy1H8M05cALLEShz5oldX1r6DejIvaUyhy6Um81X3UM9kZeerAR8QFdFcpWzcdWwLypH-kP0NQ8FxU3XGYs8B6peZrFtmepNvfIh1WuqjKHm33fgaXTH5ARaY1WPM-NNyEAXEmwEJ40_vAm-uX5A-2n6fzhkWAhTiBZ_2G8OpN8ckovesgClKtFZl2wKACbUN7hZg6QyEhg2z-ilDee1W2L-NWWJqYC7_caKR9Ifz1bWwRGGAt7E4ipfzEljJ4Sv0HxRrEEPkMbZDjcsYYN2S3nqOtJkWxod9uZIB7Y_vs4qu4eIK1XygPzdw3UY6Jsbhx_L-MROnBib7BMed9dfaXELsloRrPL8YX68E21o-r0QNG1qTTRrXC6n1UsUnOv9AQ1NgT0RPcGKZD_gHfXBia5mpwKgg=w361-h203-no?authuser=0',
    address: 'Zaltopolsky 5, TLV',
    location: {
      lat: 32.0880024,
      lng: 34.7731101,
    },
    creatorId: 'u2',
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const [isLoading, setIsLoading] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: '', isValid: false },
      description: { value: '', isValid: false },
    },
    false
  );
  const identifiedPlace = DUMMY.find((p) => p.id === placeId);
  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: { value: identifiedPlace.title, isValid: true },
          description: { value: identifiedPlace.description, isValid: true },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);
  const placeUpdateEventHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  if (!identifiedPlace)
    return (
      <div className='center'>
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  if (isLoading)
    return (
      <div className='center'>
        <h2>Loading...</h2>
      </div>
    );
  return (
    <form className='place-form' onSubmit={placeUpdateEventHandler}>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please Enter valid input!'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
        title={true}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please Enter valid input!'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
        title={true}
      />

      <Button type='submit' disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
