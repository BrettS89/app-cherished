import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import View from './view';
import alert from '../../utilities/alert';
import api from '../../lib/api';

const Invite = () => {
  const { account_id } = useSelector(state => state.user.user);
  const [email, setEmail] = useState('');

  const sendInvitation = async () => {
    try {
      // validate email
      await api.service('security/invitation')
        .create({ email, account_id });

      alert('Invitation successfully sent');
      setEmail('');
    } catch(e) {
      alert(e.message);
    }
  }

  return (
    <View
      email={email}
      setEmail={setEmail}
      sendInvitation={sendInvitation}
    />
  );
};

export default Invite;
