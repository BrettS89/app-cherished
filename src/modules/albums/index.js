import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import { GET_PHOTOS, JOIN_FAMILY } from '../../redux/actions';
import api from '../../lib/api';

const Albums = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const albums = useSelector(state => state.content.albums);
  SplashScreen.hideAsync();

  const [invite, setInvite] = useState({});
  const [inviteModal, setInviteModal] = useState(false);

  useEffect(() => {
    getInvitations();
  }, []);

  const getInvitations = async () => {
    try {
      let { data: invitation } = await api.service('security/invitation')
        .find({ email: user.email });

        invitation = invitation.find(i => i.active);

        if (invitation) {
        setInvite(invitation);
        setInviteModal(true);
      }
    } catch(e) {
      console.log(e)
    }
  };

  const acceptInvitation = status => {
    dispatch({ type: JOIN_FAMILY, payload: { _id: invite._id, status } });
    setInviteModal(false);
  };

  const selectAlbum = album => {
    navigation.navigate('Photos')
    dispatch({ type: GET_PHOTOS, payload: album });
  };

  return (
    <View
      acceptInvitation={acceptInvitation}
      albums={albums}
      invite={invite}
      inviteModal={inviteModal}
      selectAlbum={selectAlbum}
    />
  );
};

export default Albums;
